import React, { useState } from 'react';
import './addLittleQuiz.scss';
import SaveIcon from '@mui/icons-material/Save';
import { Button, IconButton, Tooltip } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import UploadFile from '../upload/uploadFile';
import TemplateFile from '../templateFile/templateFile';
import ExcelUpload from '../excelUpload/excelUpload';

const AddLittleQuiz = (props) => {
    const { littleQuiz } = props;

    const [quizData, setQuizData] = useState(littleQuiz);
    // Function to add a new quiz question
    const addQuestion = () => {
        const newQuestion = {
            id: quizData.length + 1,
            number: quizData.length + 1,
            question: '',
            option2: '',
            option3: '',
            option4: '',
            option5: '',
            answer: '',
        };
        setQuizData([...quizData, newQuestion]);
    };

    // Function to delete a quiz question by index
    const deleteQuestion = (questionIndex) => {
        const updatedQuizData = [...quizData];
        updatedQuizData.splice(questionIndex, 1);
        setQuizData(updatedQuizData);
    };

    // Function to handle changes in question or option fields
    const handleFieldChange = (questionIndex, fieldName, value) => {
        const updatedQuizData = [...quizData];
        updatedQuizData[questionIndex][fieldName] = value;
        setQuizData(updatedQuizData);
    };

    return (
        <form method="post">
            <div className="add_little_quiz">
                <div className="add_chapter_material">
                    <div className="button_upload">
                        <TemplateFile />
                        <ExcelUpload />
                    </div>
                </div>
                <div className="add_basic_quiz">
                    {quizData.map((question, questionIndex) => (
                        <div key={questionIndex} className="quiz_items">
                            <div className="title_items">
                                <div className="box_course_cl2">
                                    <h5>Question</h5>
                                    <div className="question_material">
                                        <textarea
                                            className="content_chapter"
                                            name={`question_${questionIndex}`}
                                            cols="40"
                                            rows="2"
                                            placeholder={`Type Question ${question.number} ...`}
                                            value={question.question}
                                            onChange={(e) =>
                                                handleFieldChange(
                                                    questionIndex,
                                                    'question',
                                                    e.target.value
                                                )
                                            }
                                        ></textarea>
                                        <Tooltip title="Delete Question">
                                            <IconButton
                                                color="error"
                                                aria-label="delete question"
                                                onClick={() => deleteQuestion(questionIndex)}
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </Tooltip>
                                    </div>
                                </div>
                                <div className="option_material">
                                    <h5>Options</h5>
                                    <div className="box_course_cl2">
                                        {[2, 3, 4, 5].map((optionNumber) => (
                                            <div key={optionNumber} className="items_material">
                                                <div className="items_delete_material">
                                                    <textarea
                                                        className="content_chapter"
                                                        name={`option_${questionIndex}_${optionNumber}`}
                                                        cols="28"
                                                        rows="1"
                                                        placeholder={`Type Option ${optionNumber} ...`}
                                                        value={question[`option${optionNumber}`]}
                                                        onChange={(e) =>
                                                            handleFieldChange(
                                                                questionIndex,
                                                                `option${optionNumber}`,
                                                                e.target.value
                                                            )
                                                        }
                                                    ></textarea>

                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="add_chapter_material">
                        <div className="button_add">
                            <Tooltip title="Add Question">
                                <IconButton
                                    color="primary"
                                    aria-label="add question"
                                    onClick={addQuestion}
                                >
                                    <AddBoxIcon />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </div>
                <div className="add_chapter_material">
                    <div className="button_save">
                        <Button
                            variant="contained"
                            onClick={props.onSaveClick}
                            endIcon={<SaveIcon />}
                        >
                            Save
                        </Button>
                    </div>
                </div>

            </div>
        </form>
    );
};

export default AddLittleQuiz;
