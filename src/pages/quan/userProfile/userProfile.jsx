import React, { useState } from "react";
import "./userProfile.css";
import { Grid } from "@mui/material";
import Avt1 from "../../../assets/scholaritPics/avatar/1.jpg";
import Avt2 from "../../../assets/scholaritPics/avatar/2.jpg";
import Avt3 from "../../../assets/scholaritPics/avatar/3.jpg";
import Avt4 from "../../../assets/scholaritPics/avatar/4.jpg";
import Avt5 from "../../../assets/scholaritPics/avatar/5.jpg";
import Avt6 from "../../../assets/scholaritPics/avatar/6.jpg";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Clock from "../../../assets/scholaritPics/clock.png";
import ArchiveTick from "../../../assets/scholaritPics/archive-tick.png";
import Book from "../../../assets/scholaritPics/book.png";
import Medal from "../../../assets/scholaritPics/medal-star.png";
import DoneIcon from "@mui/icons-material/Done";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Carousel from "react-elastic-carousel";
import Teacher from "../../../assets/scholaritPics/teacher.png";
import EditIcon from "@mui/icons-material/Edit";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
    userInfoSelector,
    finishedCoursesSelector,
    chapterProcessingSelector,
    enrollCoursesSelector,
    relatedCoursesSelector
} from "../../../store/sellectors";
import {
    getUserInfoThunk,
    updateUserThunk,
} from "../../../store/apiThunk/userThunk";
import {
    getFinishedCourseThunk,
    getEnrollCoursesThunk,
    getRelatedCoursesThunk,
} from "../../../store/apiThunk/courseThunk";
import { getChapterProcessingThunk } from "../../../store/apiThunk/chapterThunk";
import { useEffect } from "react";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import RunCircleOutlinedIcon from "@mui/icons-material/RunCircleOutlined";
import MovingOutlinedIcon from "@mui/icons-material/MovingOutlined";
import Modal from "@mui/material/Modal";
import Swal from "sweetalert2";

const avtArray = [Avt1, Avt2, Avt3, Avt4, Avt5, Avt6];

export default function UserProfile() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const user = useSelector(userInfoSelector);
    const enrollCourses = useSelector(enrollCoursesSelector);
    const finishedCourses = useSelector(finishedCoursesSelector);
    const processingChapters = useSelector(chapterProcessingSelector);
    const relatedCourses = useSelector(relatedCoursesSelector);

    useEffect(() => {
        dispatch(getUserInfoThunk());
    }, []);
    useEffect(() => {
        dispatch(getEnrollCoursesThunk());
    }, []);
    useEffect(() => {
        dispatch(getRelatedCoursesThunk());
    }, []);
    useEffect(() => {
        dispatch(getFinishedCourseThunk());
    }, []);
    useEffect(() => {
        dispatch(getChapterProcessingThunk());
    }, []);

    const itemsPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = Array.from({ length: processingChapters.totalChapter }, (_, index) => {
        const chapterNumber = index + 1;
        const isCurrentChapter = chapterNumber === processingChapters.currentChapter;
        const isLastChapter = chapterNumber === processingChapters.totalChapter;
        const isUnfinished = chapterNumber > processingChapters.currentChapter;
        return {
            name: `Chapter ${chapterNumber}`,
            isCurrent: isCurrentChapter,
            isLast: isLastChapter,
            isUnfinished: isUnfinished,
        };
    }).slice(startIndex, endIndex);

    const totalPages = Math.ceil(processingChapters.totalChapter / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleChangeAvt = (avt) => {
        dispatch(
            updateUserThunk({
                fullName: user.fullName,
                dob: user.dob,
                address: user.address,
                hobby: user.hobby,
                lastLogin: user.dob,
                learnHourPerDay: 0,
                strength: user.strength,
                email: user.email,
                avatarUrl: avt,
            })
        )
            .unwrap()
            .then((response) => {
                console.log(response);
                Swal.fire({
                    title: "Success!!",
                    text: "Change Avatar successfully!!",
                    icon: "success",
                    showCancelButton: false,
                    showConfirmButton: false,
                    background: "white",
                    timer: 1500,
                    timerProgressBar: true,
                    scrollbarPadding: false,
                }).then(() => {
                    location.reload();
                });
            });
        setOpen(false);
    };

    const dobDate = new Date(user.dob);

    // Format the Date object to the desired format
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const formattedDob = dobDate.toLocaleDateString(undefined, options);

    return (
        <div className="userProfile">
            <div className="userProfile_top_box">
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div className="userProfile_top_left">
                            <Grid container>
                                <Grid item xs={3}>
                                    <div className="container">
                                        <img
                                            src={user.avatarUrl}
                                            className="userProfile_top_left_img"
                                        />
                                        <div
                                            className="overlay"
                                            onClick={handleOpen}
                                        >
                                            <EditIcon
                                                sx={{
                                                    color: "white",
                                                    fontSize: 60,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <div
                                            style={{
                                                outline: 0,
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform:
                                                    "translate(-50%, -50%)",
                                                textAlign: "center",
                                                background: "white",
                                                borderRadius: "10px",
                                                padding: "15px",
                                                transition: "1s ease",
                                            }}
                                        >
                                            <p
                                                style={{
                                                    fontSize: "24px",
                                                    fontWeight: "bold",
                                                    paddingTop: "15px",
                                                    paddingBottom: "30px",
                                                }}
                                            >
                                                Choose Your Avatar
                                            </p>
                                            <Grid container spacing={2}>
                                                {avtArray.map((avt, index) => (
                                                    <Grid
                                                        item
                                                        xs={4}
                                                        style={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "center",
                                                            alignItems:
                                                                "center",
                                                        }}
                                                        key={index}
                                                    >
                                                        <img
                                                            src={avt}
                                                            style={{
                                                                width: "40%",
                                                                cursor: "pointer",
                                                            }}
                                                            onClick={() =>
                                                                handleChangeAvt(
                                                                    avt
                                                                )
                                                            }
                                                        />
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </div>
                                    </Modal>
                                </Grid>
                                <Grid item xs={9}>
                                    <div className="userProfile_top_left_text">
                                        <p className="userProfile_top_left_name">
                                            {user.fullName}
                                        </p>
                                        <p className="userProfile_top_left_location">
                                            <span>
                                                <LocationOnOutlinedIcon />
                                            </span>
                                            {user.address}
                                        </p>
                                        <p className="userProfile_top_left_location">
                                            <span>
                                                <CalendarMonthOutlinedIcon />
                                            </span>
                                            {formattedDob}
                                        </p>
                                        <p className="userProfile_top_left_location">
                                            <span>
                                                <RunCircleOutlinedIcon />
                                            </span>
                                            {user.hobby}
                                        </p>
                                        <p className="userProfile_top_left_location">
                                            <span>
                                                <MovingOutlinedIcon />
                                            </span>
                                            {user.strength}
                                        </p>
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                spacing={2}
                                style={{ marginTop: "50px" }}
                            >
                                <Grid item xs={3}>
                                    <p className="userProfile_top_left_achievements">
                                        <img
                                            src={Clock}
                                            className="userProfile_top_left_icon"
                                        />
                                        <span>
                                            {" "}
                                            1+ Years <br />
                                            Studying
                                        </span>
                                    </p>
                                </Grid>
                                <Grid item xs={3}>
                                    <p className="userProfile_top_left_achievements">
                                        <img
                                            src={ArchiveTick}
                                            className="userProfile_top_left_icon"
                                        />
                                        <span> 5 Certifications Achieved</span>
                                    </p>
                                </Grid>
                                <Grid item xs={3}>
                                    <p className="userProfile_top_left_achievements">
                                        <img
                                            src={Book}
                                            className="userProfile_top_left_icon"
                                        />
                                        <span>7 Courses Completed</span>
                                    </p>
                                </Grid>
                                <Grid item xs={3}>
                                    <p className="userProfile_top_left_achievements">
                                        <img
                                            src={Medal}
                                            className="userProfile_top_left_icon"
                                        />
                                        <span>
                                            Top 3 <br />
                                            On Leaderboard
                                        </span>
                                    </p>
                                </Grid>
                            </Grid>
                            {enrollCourses?.items?.length !== 0 ? (
                                <div>
                                    <div className="userProfile_top_left_border"></div>
                                    <p className="userProfile_top_left_favorite_header">
                                        Enrolled Courses
                                    </p>
                                    <Carousel itemsToShow={2}>
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
                                                        style={{
                                                            float: "right",
                                                        }}
                                                    />
                                                </div>
                                                <p
                                                    style={{
                                                        fontWeight: "550",
                                                        fontSize: "20px",
                                                        lineHeight: "120%",
                                                        marginTop: "20px",
                                                        marginBottom: "25px",
                                                        color: "black",
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
                                                        color: "black",
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
                            ) : (
                                <div className="flex-center">
                                    <h2>There's Nothing Here Yet</h2>
                                    <Link
                                        to="/"
                                        style={{ textDecoration: "underline" }}
                                    >
                                        Enroll in a course
                                    </Link>
                                </div>
                            )}
                        </div>
                    </Grid>
                    {/* {!(Array.isArray(processingChapters) && processingChapters.length === 0) ? (
                        <Grid item xs={2}>
                            <div className="userProfile_top_right">
                                <p className="userProfile_top_right_text">
                                    Course <br />
                                    Progress Bar
                                </p>
                                <div className="userProfile_top_right_bar">
                                    <p
                                        className="userProfile_top_right_status"
                                        style={{
                                            marginBottom: `calc(584px * ${processingChapters.currentChapter}/${processingChapters.totalChapter} + 10px)`,
                                        }}
                                    >
                                        {`${
                                            ((processingChapters.currentChapter /
                                                processingChapters.totalChapter) *
                                            100).toFixed(1)
                                        }%`}
                                    </p>
                                    <div
                                        className="userProfile_top_right_progress"
                                        style={{
                                            height: `calc(584px * ${processingChapters.currentChapter}/${processingChapters.totalChapter})`,
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </Grid>
                    ) : (
                        <Grid item xs={2}></Grid>
                    )} */}
                </Grid>
            </div>
            {!(Array.isArray(processingChapters) && processingChapters.length === 0) ? (
                <div className="userProfile_mid_box">
                    <div className="userProfile_mid_top"></div>
                    <p className="userProfile_mid_top_text">
                        Currently Studying
                    </p>
                    <div className="userProfile_mid_border">
                        <Grid container spacing={2}>
                            {currentItems.map((chap, index) => {
                                return (
                                    <Grid
                                        item
                                        xs={12 / `${currentItems.length}`}
                                        key={index}
                                    >
                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                marginTop: "50px",
                                                gap: "20px",
                                            }}
                                        >
                                            <div className="userProfile_mid_chap">
                                                <span className="userProfile_mid_chap_text">
                                                    {chap.name}
                                                </span>
                                                <div className={`${chap.isUnfinished ? 'userProfile_mid_chap_icon_unfinished' : 'userProfile_mid_chap_icon'}`}>
                                                {chap.isUnfinished ?<></> : <DoneIcon />}
                                                </div>
                                            </div>
                                            {chap.isLast ? (
                                                <>
                                                    <div
                                                        className="flex"
                                                        style={{
                                                            marginTop: "26px",
                                                        }}
                                                    >
                                                        <div className="userProfile_mid_chap_finish_pointer"></div>
                                                        <PlayArrowIcon />
                                                    </div>
                                                    <div className="userProfile_mid_chap_finish">
                                                        <span className="userProfile_mid_chap_text">
                                                            FINISHED
                                                        </span>
                                                        <div className="userProfile_mid_chap_finish_icon">
                                                            <LocalFloristIcon />
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <div
                                                    className="flex"
                                                    style={{
                                                        marginTop: "26px",
                                                    }}
                                                >
                                                    <div className="userProfile_mid_chap_pointer"></div>
                                                    <PlayArrowIcon />
                                                </div>
                                            )}
                                        </div>
                                    </Grid>
                                );
                            })}
                        </Grid>
                        <div
                            className="flex"
                            style={{ marginTop: "80px", gap: "20px" }}
                        >
                            <button
                                onClick={() =>
                                    handlePageChange(currentPage - 1)
                                }
                                disabled={currentPage === 1}
                                className="userProfile_pagi_nav_btn"
                            >
                                <ArrowBackIosIcon />
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => handlePageChange(i + 1)}
                                    className={
                                        i + 1 === currentPage
                                            ? "userProfile_pagi_btn userProfile_active"
                                            : "userProfile_pagi_btn"
                                    }
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                onClick={() =>
                                    handlePageChange(currentPage + 1)
                                }
                                disabled={currentPage === totalPages}
                                className="userProfile_pagi_nav_btn"
                            >
                                <ArrowForwardIosIcon />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
            {finishedCourses?.items?.length !== 0 ? (
                <div className="userProfile_bot_box">
                    <p className="userProfile_bot_box_text">Finished Courses</p>
                    <Carousel itemsToShow={2}>
                        {finishedCourses?.items?.map((c, index) => (
                            <div className="package" key={index}>
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
                                <div className="package_border"></div>
                                <button className="package_btn">
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </Carousel>
                </div>
            ) : (
                <div></div>
            )}
            {relatedCourses?.length !== 0 ? (
                <div className="userProfile_bot_box">
                    <p className="userProfile_bot_box_text">Related Courses</p>
                    <Carousel itemsToShow={2}>
                        {relatedCourses?.items?.map((c, index) => (
                            <div className="package" key={index}>
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
                                <div className="package_border"></div>
                                <button className="package_btn">
                                    Learn More
                                </button>
                            </div>
                        ))}
                    </Carousel>
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
}
