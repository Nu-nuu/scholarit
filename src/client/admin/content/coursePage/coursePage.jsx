import React, { useState, useEffect } from 'react';
import './coursePage.scss'
import CourseSingle from '../../components/courseSingle/courseSingle'
import ListChapter from '../../components/listChapter/listChapter'
import ChapterSingle from '../../components/chapterSingle/chapterSingle';
import AddChapter from '../../components/addChapter/addChapter';
import EditCourse from '../../components/editCourse/editCourse';
import EditChapter from '../../components/editChapter/editChapter';
import Swal from "sweetalert2";

import { useSelector, useDispatch } from 'react-redux';
import { getCategoryThunk } from '../../../../store/apiThunk/categoryThunk';
import { courseDetailSelector, categorySelector } from '../../../../store/sellectors';
import { getCourseByIdThunk, updateCourseThunk } from '../../../../store/apiThunk/courseThunk';
import { getChaptersInCourseByAdminThunk, deleteChapterThunk, createChapterThunk, updateChapterThunk } from '../../../../store/apiThunk/chapterThunk';


import { useParams } from 'react-router-dom';
import ChapterBarChartBox from '../../components/customChart/customChart';
import Resource from '../resource/resource';
import QuizBank from '../quizBank/quizBank';
import QuizBankPage from '../quizBankPage/quizBankPage';



const CoursePage = () => {
    const { id } = useParams();
    const [activity, setActivity] = useState('activity_latest');
    const [selectedChapterId, setSelectedChapterId] = useState(null);
    const [selectedQuizId, setSelectedQuizId] = useState(null);

    const [uploadClick, setUploadClick] = useState(false);
    const [course, setCourse] = useState('course_activity');
    const singleCourse = useSelector(courseDetailSelector);
    const [chapter, setChapter] = useState([]);
    const categoryList = useSelector(categorySelector);
    const [showQuizBankPage, setShowQuizBankPage] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategoryThunk());
        dispatch(getCourseByIdThunk(id));
        dispatch(getChaptersInCourseByAdminThunk(id))
            .then((response) => {
                setChapter(response.payload);
            });

    }, [id, dispatch, uploadClick]);

    //chapter
    const [newChapterData, setNewChapterData] = useState({
        name: '',
        content: '',
        order: 0,
        duration: 0,
        intro: '',
        description: '',
        summary: '',
        // {
        //     "name": "string",
        //     "description": "string",
        //     "content": "string",
        //     "duration": 0,
        //     "order": 0,
        //     "courseId": 0,
        //     "intro": "string",
        //     "summary": "string"
        // }
    });
    const handleAddChapterClick = () => {
        setActivity('activity_chapter');
    };
    const handleSaveCreateChapter = () => {
        if (!newChapterData.name || newChapterData.number <= 0) {
            return;
        }
        dispatch(
            createChapterThunk({
                courseId: id,
                ...newChapterData,
            })
        )
            .then(() => {
                Swal.fire({
                    title: 'Success',
                    text: 'Create successful!',
                    icon: 'success',
                    showConfirmButton: false,
                    showCancelButton: false,
                    timer: 1000,
                });
                setUploadClick(true);
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error',
                    text: 'Create failed. Please try again.',
                    icon: 'error',
                });
                console.error('Create error:', error);
            });
        setNewChapterData({
            name: '',
            content: '',
            order: 0,
            duration: 0,
            intro: '',
            description: '',
            summary: '',
        });
        setActivity('activity_latest');
    };
    const handleSaveEditChapter = (updatedChapterData, selectedChapterId) => {

        if (selectedChapterId) {
            updatedChapterData.id = selectedChapterId;
            dispatch(updateChapterThunk(updatedChapterData))
                .then(() => {
                    Swal.fire({
                        title: 'Success',
                        text: 'Update successful!',
                        icon: 'success',
                        showConfirmButton: false,
                        showCancelButton: false,
                        timer: 1000,
                    });
                    setUploadClick(true);
                })
                .catch((error) => {
                    Swal.fire({
                        title: 'Error',
                        text: 'Update failed. Please try again.',
                        icon: 'error',
                    });
                    console.error('Update error:', error);
                });

            setActivity('activity_latest');
        }
    };
    const handleEditChapterClick = () => {
        setActivity('chapter_edit_activity');
    };
    const handleDeleteChapterClick = (chapterId) => {
        Swal.fire({
            title: 'Delete Chapter',
            text: 'Are you sure you want to delete this chapter?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel',
        }).then((result) => {
            if (result.isConfirmed) {
                // Dispatch an action to delete the chapter by chapterId
                dispatch(deleteChapterThunk(chapterId))
                    .then(() => {
                        Swal.fire({
                            title: 'Success',
                            text: 'Delete successful!',
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
                            text: 'Delete failed. Please try again.',
                            icon: 'error',
                        });
                        console.error('Delete error:', error);
                    });
            }
        });
    };

    const handleChapterClick = (chapterId) => {
        setSelectedChapterId(chapterId);
    };
    const handleChapterSingleClick = () => {
        setActivity('activity_single_chapter');
    };
    //course
    const handleSaveEditCourse = (updatedCourseData) => {
        dispatch(updateCourseThunk(updatedCourseData))
            .then(() => {
                Swal.fire({
                    title: 'Success',
                    text: 'Update successful!',
                    icon: 'success',
                    showConfirmButton: false,
                    showCancelButton: false,
                    timer: 1000,
                });
                setUploadClick(true);
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error',
                    text: 'Update failed. Please try again.',
                    icon: 'error',
                });
                console.error('Update error:', error);
            });
        setCourse('course_activity');
    };
    const handleEditCourseClick = () => {
        setCourse('course_edit_activity');
    };
    //resource  
    const handleResourceClick = () => {
        setActivity('activity_resource');
    };

    //quiz
    const handleQuestionClick = (quizId) => {
        setSelectedQuizId(quizId);
        setShowQuizBankPage(true);
    };
    const handleBackToCoursePage = () => {
        setShowQuizBankPage(false);
    };
    const handleQuizBankClick = () => {
        setActivity('activity_quiz');
    };
    setTimeout(() => {
        setUploadClick(false);
    }, 10);
    return (
        <div>
            <div>
                <h1>Course</h1>
                <div className="course_page">
                    <div className='flex_container'>
                        <div className='primary_page'>
                            <div className="course_activity">
                                {course === 'course_activity' && (
                                    <CourseSingle
                                        id={singleCourse.id}
                                        name={singleCourse.name}
                                        duration={singleCourse.duration}
                                        description={singleCourse.description}
                                        author={singleCourse.author}
                                        createdAt={singleCourse.dateCreated}
                                        price={singleCourse.price}
                                        discount={singleCourse.discount}
                                        category={singleCourse.categoryId}
                                        onEditCourseClick={handleEditCourseClick}
                                    />
                                )}
                                {course === 'course_edit_activity' && (
                                    <EditCourse
                                        onSaveClickCourse={(updatedCourseData) => handleSaveEditCourse(updatedCourseData)}
                                        category={categoryList}
                                        singleCourse={singleCourse}
                                    />
                                )}
                            </div>
                            <ListChapter
                                numberOfChapter={singleCourse.numberOfChapter}
                                chapter={chapter}
                                onAddChapterClick={handleAddChapterClick}
                                onChapterSingleClick={handleChapterSingleClick}
                                onChapterClick={handleChapterClick}
                                onEditChapterClick={handleEditChapterClick}
                                onDeleteChapterClick={() => handleDeleteChapterClick(selectedChapterId)}
                                onQuizBankClick={handleQuizBankClick}
                                onResourceClick={handleResourceClick}
                            />
                        </div>
                        <div className='activity_page'>
                            {activity === 'activity_latest' && (
                                <div className='activity_latest'>
                                    <ChapterBarChartBox chapter={chapter} />
                                </div>
                            )}
                            {activity === 'activity_chapter' && (
                                <div className='activity_chapter'>
                                    <h2>Add Chapter</h2>
                                    <AddChapter
                                        onSaveClick={handleSaveCreateChapter}
                                        chapterData={newChapterData}
                                        onChapterDataChange={(field, value) =>
                                            setNewChapterData({ ...newChapterData, [field]: value })
                                        }
                                    />
                                </div>
                            )}
                            {activity === 'activity_resource' && (
                                <div className='activity_resource'>
                                    <h2>Resource</h2>
                                    <Resource
                                        chapterId={selectedChapterId}
                                    />
                                </div>
                            )}
                            {activity === 'activity_quiz' && (
                                <div className='activity_resource'>
                                    <h2>Quiz Bank</h2>
                                    <QuizBank
                                        chapterId={selectedChapterId}
                                        onQuestionClick={handleQuestionClick}
                                    />
                                </div>
                            )}

                            {activity === 'activity_single_chapter' && (
                                <div className='activity_resource'>
                                    <h2>View Chapter</h2>
                                    <ChapterSingle
                                        chapter={chapter.find(chap => chap.id === selectedChapterId)}
                                    />
                                </div>
                            )}
                            {activity === 'chapter_edit_activity' && (
                                <div className='activity_resource'>
                                    <h2>Edit Chapter</h2>
                                    <EditChapter
                                        chapter={chapter.find(chap => chap.id === selectedChapterId)}
                                        courseId={singleCourse.id}
                                        onSaveClick={(updatedChapterData) => handleSaveEditChapter(updatedChapterData, selectedChapterId)}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {showQuizBankPage && (
                <div className='activity_resource'>
                    <QuizBankPage
                        chapterId={selectedChapterId}
                        quizId={selectedQuizId}
                    />
                    <button onClick={handleBackToCoursePage}>Back</button>
                </div>
            )}
        </div>
    )
}

export default CoursePage