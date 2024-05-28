export const userInfoSelector = (state) => state.userInfo.entities;
export const userInfoByAdminSelector = (state) => state.userInfoByAdmin.entities;
export const userListSelector = (state) => state.userList.entities;

export const categorySelector = (state) => state.category.entities;
export const categoryDetailSelector = (state) => state.categoryDetail.entities;

export const chapterDetailSelector = (state) => state.chapterDetail.entities;
export const chapterProcessingSelector = (state) => state.chapterProcessing.entities;
export const chaptersInCourseByAdminSelector = (state) => state.chaptersInCourseByAdmin.entities;
export const chaptersInCourseByUserSelector = (state) => state.chaptersInCourseByUser.entities;

export const coursesSelector = (state) => state.courses.entities;
export const courseDetailSelector = (state) => state.courseDetail.entities;
export const coursesByCategorySelector = (state) => state.coursesByCategory.entities;
export const coursesBySearchSelector = (state) => state.coursesBySearch.entities;
export const finishedCoursesSelector = (state) => state.finishedCourses.entities;
export const relatedCoursesSelector = (state) => state.relatedCourses.entities;
export const mostViewedCoursesSelector = (state) => state.mostViewedCourses.entities;
export const enrollCoursesSelector = (state) => state.enrollCourses.entities;

export const orderByAdminSelector = (state) => state.orderByAdmin.entities;
export const orderByUserSelector = (state) => state.orderByUser.entities;
export const orderDetailSelector = (state) => state.orderDetail.entities;

export const checkingRandomQuestionsInChapterSelector = (state) => state.checkingRandomQuestionsInChapter.entities;
export const questionDetailSelector = (state) => state.questionDetail.entities;
export const questionsInChapterSelector = (state) => state.questionsInChapter.entities;
export const questionsInChapterByAdminSelector = (state) => state.questionsInChapterByAdmin.entities;
export const randomQuestionsInChapterSelector = (state) => state.randomQuestionsInChapter.entities;

export const quizDetailSelector = (state) => state.quizDetail.entities;
export const quizInChapterSelector = (state) => state.quizInChapter.entities;

export const quizAttemptSelector = (state) => state.quizAttempt.entities;
export const quizAttemptByQuizSelector = (state) => state.quizAttemptByQuiz.entities;
export const allQuizAttemptSelector = (state) => state.allQuizAttempt.entities;

export const resourceDetailSelector = (state) => state.resourceDetail.entities;
export const resourceInChapterSelector = (state) => state.resourceInChapter.entities;
