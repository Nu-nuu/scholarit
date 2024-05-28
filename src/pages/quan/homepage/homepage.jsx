import React, { useEffect, useState } from "react";
import "./homepage.css";
import SearchIcon from "@mui/icons-material/Search";
import Math from "../../../assets/scholaritPics/math.jpg";
import { Grid } from "@mui/material";
import Carousel from "react-elastic-carousel";
import Teacher from "../../../assets/scholaritPics/teacher.png";
import { useNavigate } from "react-router-dom";
import {
    getCoursesBySearchThunk,
    getCoursesThunk,
    getEnrollCoursesThunk,
    getMostViewedCourseThunk,
} from "../../../store/apiThunk/courseThunk";
import { useDispatch, useSelector } from "react-redux";
import {
    coursesSelector,
    coursesBySearchSelector,
    mostViewedCoursesSelector,
    enrollCoursesSelector,
} from "../../../store/sellectors";

export default function Homepage() {
    const dispatch = useDispatch();
    const allCourses = useSelector(coursesSelector);
    const enrollCourses = useSelector(enrollCoursesSelector);
    const coursesBySearch = useSelector(coursesBySearchSelector);
    const mostViewedCourses = useSelector(mostViewedCoursesSelector);
    const [check, setCheck] = useState(false);
    const sortedCourses = (allCourses.items || [])
        .slice()
        .sort((a, b) => b.id - a.id);
    const newestCourses =
        sortedCourses?.slice(0, 10)?.map((course) => course) ?? [];
    const [searchString, setSearchString] = useState("");

    useEffect(() => {
        dispatch(getMostViewedCourseThunk());
    }, []);

    useEffect(() => {
        dispatch(getEnrollCoursesThunk());
    }, []);

    useEffect(() => {
        dispatch(getCoursesThunk({
            pageNo:1,
            pageSize:100
        }));
    }, []);

    useEffect(() => {
        dispatch(getCoursesBySearchThunk("a"));
    }, []);

    const handleSearch = () => {
        dispatch(getCoursesBySearchThunk(searchString));
    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            handleSearch();
        }
    };

    const handleInputChange = (event) => {
        setSearchString(event.target.value);
    };

    // console.log(newestCourses);
    // console.log(mostViewedCourses);
    // console.log(allCourses);
    // console.log(coursesBySearch);
    // console.log(enrollCourses);

    const navigate = useNavigate();

    return (
        <div className="homepage">
            <div className="homepage_top_box">
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <div className="homepage_top_left">
                            <div className="homepage_top_left_text">
                                <p className="homepage_top_header">
                                    AN INTERESTING MATHEMATICAL FACT
                                </p>
                                <p className="homepage_top_info">
                                    Goldbach's Conjecture
                                </p>
                                <p className="homepage_top_desc">
                                    Goldbach's Conjecture is an unsolved problem
                                    in number theory, proposed by the German
                                    mathematician Christian Goldbach in a letter
                                    to Euler in 1742. The conjecture states that
                                    every even integer greater than 2 can be
                                    expressed as the sum of two prime numbers.
                                    For example:
                                    <li>4 can be expressed as 2 + 2 </li>
                                    <li>
                                        6 can be expressed as 3 + 3 or 5 + 1{" "}
                                    </li>
                                    <li>
                                        8 can be expressed as 3 + 5 or 7 + 1
                                    </li>
                                </p>
                            </div>
                            <div className="homepage_search_box">
                                <div onClick={handleSearch}>
                                    <SearchIcon />
                                </div>
                                <input
                                    className="homepage_search_text"
                                    placeholder="Search Course"
                                    onKeyDown={handleKeyDown}
                                    value={searchString}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="flex">
                            <img src={Math} className="homepage_top_img" />
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="homepage_mid_header_box">
                <p className="homepage_mid_header"> Our Courses </p>
            </div>
            <div className="bg">
                {coursesBySearch?.items?.length !== 0 ? (
                    <Carousel itemsToShow={2}>
                        {coursesBySearch?.items?.map((c, index) => (
                            <div
                                className="newCourse_bg"
                                key={index}
                                onClick={() =>
                                    navigate(`/course-detail?id=${c.id}`)
                                }
                            >
                                <div>
                                    <img src={Math} className="newCourse_img" />
                                </div>
                                <div className="newCourse_text_box">
                                    <p className="newCourse_header">{c.name}</p>
                                    <p className="newCourse_desc">
                                        {c.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                ) : (
                    <p style={{ color: "white", fontSize: "30px" }}>Empty..</p>
                )}
            </div>
            <div className="homepage_mid_header_box">
                <p className="homepage_mid_header">What's New For Today</p>
            </div>
            <div>
                <Carousel itemsToShow={2}>
                    {newestCourses?.map((c, index) => (
                        <div
                            className="newCourse"
                            key={index}
                            onClick={() =>
                                navigate(`/course-detail?id=${c.id}`)
                            }
                        >
                            <div>
                                <img src={Math} className="newCourse_img" />
                            </div>
                            <div className="newCourse_text_box">
                                <p className="newCourse_header">{c.name}</p>
                                <p className="newCourse_desc">
                                    {c.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="homepage_mid_header_box">
                <p className="homepage_mid_header">Exploring More Courses</p>
            </div>
            <div className="homepage_mid_box">
                <p className="homepage_mid_text">MOST POPULAR COURSES</p>
                <div className="course_box">
                    <Carousel itemsToShow={3}>
                        {mostViewedCourses?.items?.map((c, index) => (
                            <div
                                className="course"
                                key={index}
                                onClick={() =>
                                    navigate(`/course-detail?id=${c.id}`)
                                }
                            >
                                <div>
                                    <img
                                        src={Teacher}
                                        style={{ float: "right" }}
                                    />
                                </div>
                                <p
                                    style={{
                                        fontWeight: "550",
                                        fontSize: "16px",
                                        lineHeight: "120%",
                                        margin: "0",
                                        marginTop: "25px",
                                        marginBottom: "25px",
                                    }}
                                >
                                    {c.name}
                                </p>
                                <p
                                    style={{
                                        paddingBottom: "20px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                    DIFFICULTY:
                                    <span className="course_green"></span>
                                    <span className="course_yellow"></span>
                                    <span className="course_red"></span>
                                </p>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            {enrollCourses?.length !== 0 ? (
                <div className="homepage_mid_box">
                    <p className="homepage_mid_text">ENROLLED COURSES</p>
                    <div className="course_box">
                        <Carousel itemsToShow={3}>
                            {enrollCourses?.items?.map((c) => (
                                <div
                                    className="course"
                                    key={c.name}
                                    onClick={() =>
                                        navigate(`/course-detail?id=${c.id}`)
                                    }
                                >
                                    <div>
                                        <img
                                            src={Teacher}
                                            style={{ float: "right" }}
                                        />
                                    </div>
                                    <p
                                        style={{
                                            fontWeight: "550",
                                            fontSize: "20px",
                                            lineHeight: "120%",
                                            margin: "0",
                                            marginTop: "25px",
                                            marginBottom: "25px",
                                        }}
                                    >
                                        {c.name}
                                    </p>
                                    {/* <p>{c.description}</p> */}
                                    <p
                                        style={{
                                            paddingBottom: "20px",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                        }}
                                    >
                                        DIFFICULTY:
                                        <span className="course_green"></span>
                                        <span className="course_yellow"></span>
                                        <span className="course_red"></span>
                                    </p>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}
