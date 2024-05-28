import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getQuizInChapterThunk, updateQuizThunk, deleteQuizThunk, createQuizThunk } from '../../../../store/apiThunk/quizThunk';
import { quizInChapterSelector } from '../../../../store/sellectors';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import Pagination from '@mui/material/Pagination';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import './quizBank.scss';
import TemplateQuiz from '../../components/templateFile/templateQuiz';
import Swal from "sweetalert2";
import ExcelUploadQuiz from '../../components/excelUpload/excelUploadQuiz';

const QuizBank = (props) => {
  const chapterId = props.chapterId;
  const dispatch = useDispatch();
  const quizData = useSelector(quizInChapterSelector);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [updatedQuiz, setUpdatedQuiz] = useState({});
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(100);
  const [uploadClick, setUploadClick] = useState(false);

  useEffect(() => {
    dispatch(getQuizInChapterThunk(chapterId, { pageNo, pageSize }));
  }, [dispatch, chapterId, pageNo, pageSize, uploadClick]);

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setPageNo(1);
  };

  const handlePageChange = (event, newPage) => {
    setPageNo(newPage);
  };

  const handleEditQuiz = (quizId) => {
    setIsEditing(true);
    setEditIndex(quizId);
    // Initialize updatedQuiz with the current quiz data
    const quizToEdit = quizData.items.find((quiz) => quiz.id === quizId);
    setUpdatedQuiz(quizToEdit);
  };

  const handleUpdateQuiz = (quizId) => {
    dispatch(updateQuizThunk(updatedQuiz))
      .then(() => {
        Swal.fire({
          title: 'Success',
          text: 'Quiz updated successfully!',
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
          text: 'Quiz update failed. Please try again.',
          icon: 'error',
        });
        console.error('Quiz update error:', error);
      });
  };

  const handleDeleteQuiz = (quizId) => {
    const quizToDelete = quizData.items.find((quiz) => quiz.id === quizId);

    Swal.fire({
      title: 'Delete Quiz',
      text: 'Are you sure you want to delete this quiz?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteQuizThunk(quizId))
          .then(() => {
            Swal.fire({
              title: 'Success',
              text: 'Quiz deleted successfully!',
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
              text: 'Quiz deletion failed. Please try again.',
              icon: 'error',
            });
            console.error('Quiz deletion error:', error);
          });
      }
    });
  };

  const handleExcelDataUpload = (data) => {
    dispatch(createQuizThunk(data))
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
  console.log(quizData);

  return (
    <div className="quiz_bank">
      <div className="info">
        <div className='quiz_upload'>
          <TemplateQuiz />
          <ExcelUploadQuiz onExcelDataUpload={handleExcelDataUpload} />
        </div>
        <table className="quiz_table">
          <thead>
            <tr className='quiz_body'>
              <th>ID</th>
              <th>Name</th>
              <th>Time</th>
              <th>Score</th>
              <th>Quantity</th>
              <th>ChapterID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {quizData && quizData.items && quizData.items.map((quiz) => (
              <tr key={quiz.id}>
                <td>{quiz.id}</td>
                <td>
                  {isEditing && editIndex === quiz.id ? (
                    <input
                      type="text"
                      value={updatedQuiz ? updatedQuiz.name : quiz.name}
                      onChange={(e) => setUpdatedQuiz({ ...updatedQuiz, name: e.target.value })}
                      style={{ width: '150px', padding: '5px', fontSize: '14px' }}
                    />
                  ) : (
                    quiz.name
                  )}
                </td>
                <td>
                  {isEditing && editIndex === quiz.id ? (
                    <input
                      type="text"
                      value={updatedQuiz ? updatedQuiz.duration : quiz.duration}
                      onChange={(e) => setUpdatedQuiz({ ...updatedQuiz, duration: e.target.value })}
                      style={{ width: '50px', padding: '5px', fontSize: '14px' }}

                    />
                  ) : (
                    quiz.duration
                  )}
                </td>
                <td>
                  {isEditing && editIndex === quiz.id ? (
                    <input
                      type="text"
                      value={updatedQuiz ? updatedQuiz.maxScore : quiz.maxScore}
                      onChange={(e) => setUpdatedQuiz({ ...updatedQuiz, maxScore: e.target.value })}
                      style={{ width: '50px', padding: '5px', fontSize: '14px' }}

                    />
                  ) : (
                    quiz.maxScore
                  )}
                </td>
                <td>
                  {isEditing && editIndex === quiz.id ? (
                    <input
                      type="text"
                      value={updatedQuiz ? updatedQuiz.numberOfQuestion : quiz.numberOfQuestion}
                      onChange={(e) => setUpdatedQuiz({ ...updatedQuiz, numberOfQuestion: e.target.value })}
                      style={{ width: '50px', padding: '5px', fontSize: '14px' }}

                    />
                  ) : (
                    quiz.numberOfQuestion
                  )}
                </td>
                <td>{quiz.chapterId}</td>
                <td>
                  {isEditing && editIndex === quiz.id ? (
                    <button onClick={() => handleUpdateQuiz(quiz.id)}>Save</button>
                  ) : (
                    <div className="quiz_material">
                      <IconButton color='secondary'>
                        <HelpCenterIcon onClick={() => props.onQuestionClick(quiz.id)} />
                      </IconButton>
                      <IconButton color='warning' onClick={() => handleEditQuiz(quiz.id)}>
                        <EditNoteIcon />
                      </IconButton>
                      <IconButton color='error' onClick={() => handleDeleteQuiz(quiz.id)}>
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        className='quiz_pagination'
        count={Math.ceil(quizData.totalItems / pageSize)}
        color="primary"
        page={pageNo}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default QuizBank;
