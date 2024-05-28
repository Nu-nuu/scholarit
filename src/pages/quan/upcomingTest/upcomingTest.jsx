import {
    FormControl,
    Grid,
    MenuItem,
    Select,
    Breadcrumbs,
} from "@mui/material";
import "./upcomingTest.css";
import React from "react";
import { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import Bell from "../../../assets/scholaritPics/bell.png";
import { useNavigate } from "react-router-dom";
import { getQuizInChapterThunk } from "../../../store/apiThunk/quizThunk";
import { getChaptersInCourseByUserThunk } from "../../../store/apiThunk/chapterThunk";
import { getEnrollCoursesThunk } from "../../../store/apiThunk/courseThunk";
import { getAllQuizAttemptThunk } from "../../../store/apiThunk/quizAttemptThunk";
import {
    quizInChapterSelector,
    chaptersInCourseByUserSelector,
    enrollCoursesSelector,
    allQuizAttemptSelector,
} from "../../../store/sellectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function UpcomingTest() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const enrollCourse = useSelector(enrollCoursesSelector);
    const ChapterInCourse = useSelector(chaptersInCourseByUserSelector);
    const quizInChapter = useSelector(quizInChapterSelector);
    const allQuizAttempt = useSelector(allQuizAttemptSelector);

    const [course, setCourse] = useState(0);
    const [chapter, setChapter] = useState(0);

    useEffect(() => {
        dispatch(getEnrollCoursesThunk());
    }, []);

    useEffect(() => {
        dispatch(getAllQuizAttemptThunk());
    }, []);

    useEffect(() => {
        if (enrollCourse?.items?.length > 0) {
            setCourse(enrollCourse?.items[0]?.id);
        }
    }, [enrollCourse]);

    useEffect(() => {
        if (ChapterInCourse?.length > 0) {
            setChapter(ChapterInCourse[0]?.id);
        }
    }, [ChapterInCourse]);

    useEffect(() => {
        dispatch(getChaptersInCourseByUserThunk(course));
    }, [course]);

    useEffect(() => {
        dispatch(getQuizInChapterThunk(chapter));
    }, [chapter]);

    const handleChapterChange = (event) => {
        setChapter(event.target.value);
    };
    const handleCourseChange = (event) => {
        setCourse(event.target.value);
    };

    const breadcrumbs = [
        <Link to="/" className="upcomingTest_breadcrumb" key={1}>
            Home
        </Link>,
        <Link to="/mycourse" className="upcomingTest_breadcrumb" key={2}>
            My Courses
        </Link>,
        <Link to="." className="upcomingTest_breadcrumb" key={3}>
            Exams
        </Link>,
    ];

    const examResult = [
        {
            name: "Progress test",
            time: "3 months ago",
            status: "passed",
        },
        {
            name: "Final Exam",
            time: "6 months ago",
            status: "failed",
        },
        {
            name: "Midterm Exam",
            time: "9 months ago",
            status: "not passed",
        },
        {
            name: "Quiz 1",
            time: "1 year ago",
            status: "passed",
        },
        {
            name: "Assignment 2",
            time: "1 year and 3 months ago",
            status: "failed",
        },
        {
            name: "Practice Exam",
            time: "1 year and 6 months ago",
            status: "not passed",
        },
    ];

    return (
        <div className="upcomingTest">
            <div className="upcomingTest_top_box">
                {/* <Breadcrumbs
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                    style={{ marginBottom: "30px" }}
                >
                    {breadcrumbs}
                </Breadcrumbs> */}
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <p className="upcomingTest_top_header">
                            <span className="upcomingTest_top_header_border"></span>
                            TEST INFORMATIONS
                        </p>
                        <div className="upcomingTest_top_informations">
                            <ul className="upcomingTest_top_info_list">
                                <li className="upcomingTest_top_info">
                                    Scoring and grading criteria.
                                </li>
                                <li className="upcomingTest_top_info">
                                    Consequences of academic dishonesty (e.g.,
                                    cheating, plagiarism).
                                </li>
                                <li className="upcomingTest_top_info">
                                    Break and restroom policies during the exam.
                                </li>
                                <li className="upcomingTest_top_info">
                                    Electronic device usage rules (e.g., turning
                                    off cell phones, tablets, or smartwatches).
                                </li>
                                <li className="upcomingTest_top_info">
                                    Guidelines for addressing technical issues
                                    during an online exam.
                                </li>
                                <li className="upcomingTest_top_info">
                                    Exam review and re-evaluation procedures (if
                                    applicable).
                                </li>
                                <li className="upcomingTest_top_info">
                                    Important dates related to exam results and
                                    feedback.
                                </li>
                                <li className="upcomingTest_top_info">
                                    Special accommodations and procedures for
                                    students with disabilities.
                                </li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={7}>
                        <p className="upcomingTest_top_header">
                            <span className="upcomingTest_top_header_border"></span>
                            RULES BEFORE EXAMS
                        </p>
                        <div className="upcomingTest_top_rules">
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <ul className="upcomingTest_top_list">
                                        <li className="upcomingTest_top_info">
                                            Must be aline in a quiet, well-lit
                                            room
                                        </li>
                                        <li className="upcomingTest_top_info">
                                            No outside materials including
                                            mobile devices, notes, or textbooks
                                        </li>
                                        <li className="upcomingTest_top_info">
                                            No copying or memorizing responses
                                            from other sources
                                        </li>
                                        <li className="upcomingTest_top_info">
                                            Do not use another person's name or
                                            ID information to take the test
                                        </li>
                                    </ul>
                                </Grid>
                                <Grid item xs={6}>
                                    <ul className="upcomingTest_top_list">
                                        <li className="upcomingTest_top_info">
                                            No writing utensils or paper
                                        </li>
                                        <li className="upcomingTest_top_info">
                                            No headphones or earphones
                                        </li>
                                        <li className="upcomingTest_top_info">
                                            Type on only one keyboard and use
                                            only one mouse
                                        </li>
                                        <li className="upcomingTest_top_info">
                                            Disconnect a second monitor and
                                            close any software that enables
                                            screen scharing or remote access
                                        </li>
                                    </ul>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="upcomingTest_mid_box">
                <div className="flex-between">
                    <div className="flex-left wh100">
                        <p className="upcomingTest_mid_header">
                            <span className="upcomingTest_top_header_border"></span>
                            UPCOMING EXAM
                        </p>
                        {quizInChapter.length !== 0 ? (
                            <>
                                <FormControl
                                    fullWidth
                                    className="upcomingTest_mid_menu"
                                >
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={course}
                                        label="Course"
                                        onChange={handleCourseChange}
                                    >
                                        {enrollCourse?.items?.map(
                                            (c, index) => (
                                                <MenuItem
                                                    key={index}
                                                    value={c.id}
                                                >
                                                    {c.name}
                                                </MenuItem>
                                            )
                                        )}
                                    </Select>
                                </FormControl>
                                <FormControl
                                    fullWidth
                                    className="upcomingTest_mid_menu"
                                >
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={chapter}
                                        label="Chapter"
                                        onChange={handleChapterChange}
                                    >
                                        {ChapterInCourse?.map((c, index) => (
                                            <MenuItem key={index} value={c.id}>
                                                {c.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
                {quizInChapter.length !== 0 ? (
                    <div className="upcomingTest_mid_test_box">
                        {quizInChapter?.items?.map((exam, index) => (
                            <div
                                key={index}
                                className="upcomingTest_mid_test flex-between"
                                onClick={() =>
                                    navigate(`/testPage?id=${exam.id}`)
                                }
                            >
                                <div className="flex-column">
                                    <p
                                        style={{
                                            fontWeight: 600,
                                            fontSize: "18px",
                                        }}
                                    >
                                        {exam.name}
                                    </p>
                                    <div
                                        className="flex-left"
                                        style={{ gap: "15px", color: "red" }}
                                    >
                                        <p style={{ fontWeight: "bold" }}>
                                            Duration: {exam.duration} minute
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <img src={Bell} />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p style={{ fontSize: "24px", marginTop: "40px" }}>
                        Empty..
                    </p>
                )}
            </div>
            <div className="upcomingTest_mid_box">
                <div className="flex-between">
                    <div className="flex-left wh100">
                        <p className="upcomingTest_mid_header">
                            <span className="upcomingTest_top_header_border"></span>
                            EXAM RESULTS
                        </p>
                    </div>
                    {/* <button className="upcomingTest_mid_btn">View all</button> */}
                </div>
                <div
                    className="upcomingTest_mid_test_box"
                    style={{ maxHeight: "310px" }}
                >
                    {allQuizAttempt?.items?.length > 0 ? (
                        <>
                            {allQuizAttempt?.items?.map((result, index) => (
                                <div
                                    key={index}
                                    className="upcomingTest_mid_test flex-between"
                                    style={{ padding: "30px" }}
                                >
                                    <div
                                        className="flex-left"
                                        style={{ gap: "30px" }}
                                    >
                                        <p
                                            style={{
                                                fontWeight: 600,
                                                fontSize: "18px",
                                                minWidth: "170px",
                                            }}
                                        >
                                            Test with Id: {result.quizId}
                                        </p>
                                        <p style={{ color: "red" }}>
                                            Time: {result.lastAttempt}
                                        </p>
                                    </div>
                                    <div
                                        className="flex-left"
                                        style={{
                                            gap: "20px",
                                            minWidth: "160px",
                                        }}
                                    >
                                        <div
                                            className={`status_${result.status}`}
                                        ></div>
                                        <p
                                            style={{
                                                fontWeight: "bold",
                                                textTransform: "capitalize",
                                            }}
                                        >
                                            Score: {result.score}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <p style={{ fontSize: "24px", marginTop: "40px" }}>Empty..</p>
                    )}
                </div>
            </div>
        </div>
    );
}
