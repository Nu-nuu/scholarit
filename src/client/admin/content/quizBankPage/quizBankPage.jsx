import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import './quizBankPage.scss';
import { getQuestionsInChapterByAdminThunk, updateQuestionThunk, deleteQuestionThunk, createQuestionThunk } from '../../../../store/apiThunk/questionThunk'
import { questionsInChapterByAdminSelector } from '../../../../store/sellectors'
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import { getQuizByIdThunk } from '../../../../store/apiThunk/quizThunk';
import { quizDetailSelector } from '../../../../store/sellectors';
import CircularProgress from '@mui/material/CircularProgress';
import TemplateQuestion from '../../components/templateFile/templateQuestion';
import Swal from "sweetalert2";
import ExcelUploadQuestion from '../../components/excelUpload/excelUploadQuestion';

const QuizBankPage = (props) => {
  const chapterId = props.chapterId;
  const quizId = props.quizId;
  const dispatch = useDispatch();
  const questionsList = useSelector(questionsInChapterByAdminSelector);
  const quizDetail = useSelector(quizDetailSelector);

  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(100);
  const [loading, setLoading] = useState(true);
  const [uploadClick, setUploadClick] = useState(false);

  // State variables to capture updated question data
  const [updatedText, setUpdatedText] = useState('');
  const [updatedType, setUpdatedType] = useState('');
  const [updatedDifficulty, setUpdatedDifficulty] = useState('');
  const [updatedOption1, setUpdatedOption1] = useState('');
  const [updatedOption2, setUpdatedOption2] = useState('');
  const [updatedOption3, setUpdatedOption3] = useState('');
  const [updatedOption4, setUpdatedOption4] = useState('');
  const [updatedOption5, setUpdatedOption5] = useState('');
  const [updatedAnswer, setUpdatedAnswer] = useState('');

  useEffect(() => {
    setLoading(true);
    dispatch(getQuestionsInChapterByAdminThunk(chapterId, { pageNo, pageSize }))
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch, chapterId, pageNo, pageSize, uploadClick]);

  useEffect(() => {
    dispatch(getQuizByIdThunk(quizId))
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch, quizId]);

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setPageNo(1);
  };

  const handlePageChange = (event, newPage) => {
    setPageNo(newPage);
    dispatch(setCurrentPage(newPage));
  };

  const handleEditQuestion = (index) => {
    setIsEditing(true);
    setEditIndex(index);

    // Initialize the input fields with the current question data
    const question = questionsList.items[index];
    setUpdatedText(question.text);
    setUpdatedType(question.type);
    setUpdatedDifficulty(question.difficult);
    setUpdatedOption1(question.option1);
    setUpdatedOption2(question.option2);
    setUpdatedOption3(question.option3);
    setUpdatedOption4(question.option4);
    setUpdatedOption5(question.option5);
    setUpdatedAnswer(question.answer);
  };

  const handleUpdateQuestion = (updatedQuestion) => {
    dispatch(updateQuestionThunk(updatedQuestion))
      .then(() => {
        Swal.fire({
          title: 'Success',
          text: 'Question updated successfully!',
          icon: 'success',
          showConfirmButton: false,
          showCancelButton: false,
          timer: 2000,
        });
        setIsEditing(false);
        setEditIndex(null);
        setUploadClick(true);
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error',
          text: 'Question update failed. Please try again.',
          icon: 'error',
        });
        console.error('Question update error:', error);
      });
  };

  const handleDeleteQuestion = (index) => {
    const questionToDelete = questionsList.items[index];
    Swal.fire({
      title: 'Delete Question',
      text: 'Are you sure you want to delete this question?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteQuestionThunk(questionToDelete.id))
          .then(() => {
            Swal.fire({
              title: 'Deleted',
              text: 'Question deleted successfully!',
              icon: 'success',
              showConfirmButton: false,
              showCancelButton: false,
              timer: 2000,
            });
            setUploadClick(true);
          })
          .catch((error) => {
            Swal.fire({
              title: 'Error',
              text: 'Question deletion failed. Please try again.',
              icon: 'error',
            });
            console.error('Question deletion error:', error);
          });
      }
    });
  };

  const handleExcelDataUpload = (data) => {
  console.log(data);

    dispatch(createQuestionThunk(data))
      .then(() => {
        Swal.fire({
          title: 'Success',
          text: 'Upload successful!',
          icon: 'success',
          showConfirmButton: false,
          showCancelButton: false,
          timer: 2000,
        });
        setUploadClick(true);
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error',
          text: 'Upload failed. Please try again.',
          icon: 'error',
        });
        console.error('Upload error:', error);
      });
  };

  setTimeout(() => {
    setUploadClick(false);
  }, 10);
  return (
    <div>
      <h1>Questions</h1>
      {loading ? (
        <CircularProgress size={50} />
      ) : (
        <div className="quiz_bank_page">
          <div className="quiz_header">
            <h3>Name: {quizDetail.name}</h3>
            <div className="quiz_material">
              <TemplateQuestion />
              <ExcelUploadQuestion onExcelDataUpload={handleExcelDataUpload} />
            </div>
          </div>

          <div className="quiz_body">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Question</th>
                  <th>Type</th>
                  <th>Difficulty</th>
                  <th>Option 1</th>
                  <th>Option 2</th>
                  <th>Option 3</th>
                  <th>Option 4</th>
                  <th>Option 5</th>
                  <th>Answer</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {questionsList && questionsList.items && questionsList.items.map((question, index) => (
                  <tr key={question.id}>
                    <td>{index + 1}</td>
                    <td>
                      {isEditing && editIndex === index ? (
                        <input
                          type="text"
                          name="text"
                          value={updatedText}
                          onChange={(e) => setUpdatedText(e.target.value)}
                        />
                      ) : (
                        question.text
                      )}
                    </td>
                    <td>
                      {isEditing && editIndex === index ? (
                        <input
                          type="text"
                          name="type"
                          value={updatedType}
                          onChange={(e) => setUpdatedType(e.target.value)}
                        />
                      ) : (
                        question.type
                      )}
                    </td>
                    <td>
                      {isEditing && editIndex === index ? (
                        <input
                          type="text"
                          name="difficulty"
                          value={updatedDifficulty}
                          onChange={(e) => setUpdatedDifficulty(e.target.value)}
                        />
                      ) : (
                        question.difficult
                      )}
                    </td>
                    <td>
                      {isEditing && editIndex === index ? (
                        <input
                          type="text"
                          name="option1"
                          value={updatedOption1}
                          onChange={(e) => setUpdatedOption1(e.target.value)}
                        />
                      ) : (
                        question.option1
                      )}
                    </td>
                    <td>
                      {isEditing && editIndex === index ? (
                        <input
                          type="text"
                          name="option2"
                          value={updatedOption2}
                          onChange={(e) => setUpdatedOption2(e.target.value)}
                        />
                      ) : (
                        question.option2
                      )}
                    </td>
                    <td>
                      {isEditing && editIndex === index ? (
                        <input
                          type="text"
                          name="option3"
                          value={updatedOption3}
                          onChange={(e) => setUpdatedOption3(e.target.value)}
                        />
                      ) : (
                        question.option3
                      )}
                    </td>
                    <td>
                      {isEditing && editIndex === index ? (
                        <input
                          type="text"
                          name="option4"
                          value={updatedOption4}
                          onChange={(e) => setUpdatedOption4(e.target.value)}
                        />
                      ) : (
                        question.option4
                      )}
                    </td>
                    <td>
                      {isEditing && editIndex === index ? (
                        <input
                          type="text"
                          name="option5"
                          value={updatedOption5}
                          onChange={(e) => setUpdatedOption5(e.target.value)}
                        />
                      ) : (
                        question.option5
                      )}
                    </td>
                    <td>
                      {isEditing && editIndex === index ? (
                        <input
                          type="text"
                          name="answer"
                          value={updatedAnswer}
                          onChange={(e) => setUpdatedAnswer(e.target.value)}
                        />
                      ) : (
                        question.answer
                      )}
                    </td>
                    <td>
                      {isEditing && editIndex === index ? (
                        <button onClick={() => handleUpdateQuestion({
                          id: question.id,
                          text: updatedText,
                          type: updatedType,
                          difficult: updatedDifficulty,
                          option1: updatedOption1,
                          option2: updatedOption2,
                          option3: updatedOption3,
                          option4: updatedOption4,
                          option5: updatedOption5,
                          answer: updatedAnswer,
                          chapterId: question.chapterId,
                        })}>
                          Save
                        </button>
                      ) : (
                        <div className="quiz_material">
                          <IconButton color='warning' onClick={() => handleEditQuestion(index)}>
                            <EditNoteIcon />
                          </IconButton>
                          <IconButton color='error' onClick={() => handleDeleteQuestion(index)}>
                            <DeleteIcon />
                          </IconButton>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              className='question_pagination'
              count={Math.ceil(questionsList.totalItems / pageSize)}
              color="primary"
              page={pageNo}
              onChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizBankPage;
