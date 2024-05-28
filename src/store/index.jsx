import { configureStore } from "@reduxjs/toolkit";

import { userInfoSlice } from "./features/user.slice/userInfo.slice";
import { userInfoByAdminSlice } from "./features/user.slice/userInfoByAdmin.slice";
import { userListSlice } from "./features/user.slice/userList.slice";

import { categorySlice } from "./features/category.slice/category.slice";
import { categoryDetailSlice } from "./features/category.slice/categoryDetail.slice";

import { chapterDetailSlice } from "./features/chapter.slice/chapterDetail.slice";
import { chapterProcessingSlice } from "./features/chapter.slice/chapterProcessing.slice";
import { chaptersInCourseByAdminSlice } from "./features/chapter.slice/chaptersInCourseByAdmin.slice";
import { chaptersInCourseByUserSlice } from "./features/chapter.slice/chaptersInCourseByUser.slice";

import { courseDetailSlice } from "./features/course.slice/courseDetail.slice";
import { coursesSlice } from "./features/course.slice/courses.slice";
import { coursesByCategorySlice } from "./features/course.slice/coursesByCategory.slice";
import { coursesBySearchSlice } from "./features/course.slice/coursesBySearch.slice";
import { finishedCoursesSlice } from "./features/course.slice/finishedCourses.slice";
import { relatedCoursesSlice } from "./features/course.slice/relatedCourses.slice";
import { mostViewedCoursesSlice } from "./features/course.slice/mostViewedCourses.slice";
import { enrollCoursesSlice } from "./features/course.slice/enrollCourses.slice";

import { orderByAdminSlice } from "./features/order.slice/orderByAdmin.slice";
import { orderByUserSlice } from "./features/order.slice/orderByUser.slice";
import { orderDetailSlice } from "./features/order.slice/orderDetail.slice";

import { checkingRandomQuestionsInChapterSlice } from "./features/question.slice/checkingRandomQuestionsInChapter.slice";
import { questionDetailSlice } from "./features/question.slice/questionDetail.slice";
import { questionsInChapterSlice } from "./features/question.slice/questionsInChapter.slice";
import { questionsInChapterByAdminSlice } from "./features/question.slice/questionsInChapterByAdmin.slice";
import { randomQuestionsInChapterSlice } from "./features/question.slice/randomQuestionsInChapter.slice";

import { quizDetailSlice } from "./features/quiz.slice/quizDetail.slice";
import { quizInChapterSlice } from "./features/quiz.slice/quizInChapter.slice";

import { quizAttemptSlice } from "./features/quizAttempt.slice/quizAttempt.slice";
import { quizAttemptByQuizSlice } from "./features/quizAttempt.slice/quizAttemptByQuiz.slice";
import { allQuizAttemptSlice } from "./features/quizAttempt.slice/allQuizAttempt.slice";

import { resourceDetailSlice } from "./features/resource.slice/resourceDetail.slice";
import { resourceInChapterSlice } from "./features/resource.slice/resourceInChapter.slice";

export const store = configureStore({
    reducer: {
        userInfo: userInfoSlice.reducer,
        userList: userListSlice.reducer,
        userInfoByAdmin: userInfoByAdminSlice.reducer,

        category: categorySlice.reducer,
        categoryDetail: categoryDetailSlice.reducer,

        chapterDetail: chapterDetailSlice.reducer,
        chapterProcessing: chapterProcessingSlice.reducer,
        chaptersInCourseByAdmin: chaptersInCourseByAdminSlice.reducer,
        chaptersInCourseByUser: chaptersInCourseByUserSlice.reducer,

        courses: coursesSlice.reducer,
        courseDetail: courseDetailSlice.reducer,
        coursesByCategory: coursesByCategorySlice.reducer,
        coursesBySearch: coursesBySearchSlice.reducer,
        finishedCourses: finishedCoursesSlice.reducer,
        relatedCourses: relatedCoursesSlice.reducer,
        mostViewedCourses: mostViewedCoursesSlice.reducer,
        enrollCourses: enrollCoursesSlice.reducer,

        orderByAdmin: orderByAdminSlice.reducer,
        orderByUser: orderByUserSlice.reducer,
        orderDetail: orderDetailSlice.reducer,

        checkingRandomQuestionsInChapter:
            checkingRandomQuestionsInChapterSlice.reducer,
        questionDetail: questionDetailSlice.reducer,
        questionsInChapter: questionsInChapterSlice.reducer,
        questionsInChapterByAdmin: questionsInChapterByAdminSlice.reducer,
        randomQuestionsInChapter: randomQuestionsInChapterSlice.reducer,

        quizDetail: quizDetailSlice.reducer,
        quizInChapter: quizInChapterSlice.reducer,

        quizAttempt: quizAttemptSlice.reducer,
        quizAttemptByQuiz: quizAttemptByQuizSlice.reducer,
        allQuizAttempt:allQuizAttemptSlice.reducer,

        resourceDetail: resourceDetailSlice.reducer,
        resourceInChapter: resourceInChapterSlice.reducer,
    },
});
