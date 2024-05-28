import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from "./pages/error404/error404";
import Home from "./pages/home/home";

import Signup from "./pages/quan/signup/signup";

import Dashboard from "./client/admin/content/dashboard/dashBoard";
import User from "./client/admin/content/user/user";
import Course from "./client/admin/content/course/course";
import HomepageAdmin from "./client/admin/home/homepageAdmin";
import UserPage from "./client/admin/content/userPage/userPage";
import AdminProfile from "./client/admin/content/adminProfile/adminProfile";
import CoursePage from "./client/admin/content/coursePage/coursePage";

import UserProfile from "./pages/quan/userProfile/userProfile";
import Homepage from "./pages/quan/homepage/homepage";
import UpcomingTest from "./pages/quan/upcomingTest/upcomingTest";
import OrderCourse from "./client/admin/content/orderCourse/orderCourse";
import ChapterPage from "./pages/khanh/chapterpage/chapterPage";
import TestPage from "./pages/khanh/testpage/testPage";

import MyCourse from "./pages/scholarit-Page/myCourse/myCourse"
import Courses from "./pages/scholarit-Page/courses/Courses"
import MyTest from "./pages/scholarit-Page/myTest/Test"
import FinishedLandingPage from "./pages/scholarit-Page/landing-Page/finishedLandingPage/finishedLandingPage"
import CourseDetail from "./pages/quan/courseDetail/courseDetail";
import LoginUser from "./pages/quan/loginUser/loginUser";
import UserInfoSignup from "./pages/quan/userInfoSignup/userInfoSignup";
import ForgotPassword from "./pages/quan/forgotPassword/forgotPassword";
import ResetPassword from "./pages/quan/resetPassword/resetPassword";
import ResetSuccessful from "./pages/quan/resetSuccessful/resetSuccessful";
import LoginAdmin from "./client/admin/login/loginAdmin";
import Category from "./client/admin/content/category/category";
import Resource from "./client/admin/content/resource/resource";
const router = createBrowserRouter([
    {
        path: "/finishedlandingpage",
        element: <FinishedLandingPage />,
    },
    {
        path: "/mytest",
        element: <MyTest />,
    },
    {
        path: "/login",
        element: <LoginUser />,
    },
    {
        path: "/userInfoSignup",
        element: <UserInfoSignup />,
    },
    {
        path: "/forgotPassword",
        element: <ForgotPassword />,
    },
    {
        path: "/resetPassword",
        element: <ResetPassword />,
    },
    {
        path: "/resetSuccessful",
        element: <ResetSuccessful />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/error404",
        element: <Error404 />,
    },
    //landing page

    //components
    {
        path: "/",
        element: <Home />,
        errorElement: <Error404 />,

        children: [
            {
                path: "/",
                element: <Homepage />
            },
            {
                path: "/userProfile",
                element: <UserProfile />
            },
            {
                path: "/course-detail",
                element: <CourseDetail />
            },
            {
                path: "/upcomingTest",
                element: <UpcomingTest />
            },
            {
                path: "/chapterPage",
                element: <ChapterPage />
            },
            {
                path: "/testPage",
                element: <TestPage />
            },
            {
                path: "/mycourse",
                element: <MyCourse />,
            },
            {
                path: "/courses",
                element: <Courses />,
            },
            // {
            //     path: "/mytest",
            //     element: <MyTest />,
            // },
        ],
    },


    //===========================================================
    //client-admin
    {
        path: "/login-admin",
        element: <LoginAdmin />,
    },
    {
        path: "/admin",
        element: <HomepageAdmin />,
        errorElement: <Error404 />,

        children: [
            {
                path: "/admin",
                element: <Dashboard />,
            },
            {
                path: "/admin/user",
                element: <User />,
            },
            {
                path: "/admin/course",
                element: <Course />,
            },
            {
                path: "/admin/category",
                element: <Category />,
            },
            {
                path: "/admin/order-course",
                element: <OrderCourse />,
            },
            {
                path: "/admin/course-page/:id",
                element: <CoursePage />,
            },
            {
                path: "/admin/user-page/:id",
                element: <UserPage />,
            },
            {
                path: "/admin/admin-profile/:id",
                element: <AdminProfile />,
            },
        ],
    },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
