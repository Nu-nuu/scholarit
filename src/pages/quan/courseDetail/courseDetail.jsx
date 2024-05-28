import React from "react";
import "./courseDetail.css";
import { Grid } from "@mui/material";
import Bg from "../../../assets/scholaritPics/bg-coworking.jpeg";
import CheckIcon from "@mui/icons-material/Check";
import Payment from "../../../components/payment/payment"; //tan payment
import { Link, useSearchParams } from "react-router-dom";
import {
  getCourseByIdThunk,
  getEnrollCoursesThunk,
} from "../../../store/apiThunk/courseThunk";
import {
  courseDetailSelector,
  enrollCoursesSelector,
} from "../../../store/sellectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

export default function CourseDetail() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [check, setCheck] = useState(false);
  const id = searchParams.get("id");

  const dispatch = useDispatch();

  const courseDetail = useSelector(courseDetailSelector);
  const enrollCource = useSelector(enrollCoursesSelector);

  useEffect(() => {
    dispatch(getCourseByIdThunk(id));
  }, []);

  useEffect(() => {
    dispatch(getEnrollCoursesThunk());
  }, []);

  useEffect(() => {
    const isCourseEnrolled =
      enrollCource?.items?.find((c) => c.id == id) !== undefined;
    if (isCourseEnrolled) {
      setCheck(true);
    } else setCheck(false);
  }, [enrollCource]);

  return (
    <div className="courseDetail">
      <div className="cD_header">
        <p className="cD_header_text">COURSE INFORMATION</p>
        {check == false && (
          <p className="cD_header_text">COMPLETE YOUR PURCHASE</p>
        )}
      </div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <div className="courseDetail_left">
            <div className="top_box">
              <img src={Bg} className="top_img" />
              <div className="top_list_box">
                <div>
                  <p className="top_header">{courseDetail.name}</p>
                  <ul className="top_list">
                    <li className="top_list_item">
                      Created By:{" "}
                      <span className="top_list_item_span">
                        {courseDetail.author}
                      </span>
                    </li>
                    <li className="top_list_item">
                      Total of chapters: {courseDetail.numberOfChapter} Chapters
                    </li>
                    <li className="top_list_item">
                      Total time: {courseDetail.duration} hours
                    </li>
                  </ul>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <p className="top_money">{courseDetail.price}$</p>
                </div>
              </div>
            </div>
            <div className="mid_box">
              <p className="mid_header">Description Of The Course :</p>
              <ul className="mid_list">
                <li className="mid_list_item">{courseDetail.description}</li>
              </ul>
            </div>
            <div className="bottom_box">
              <p className="bottom_header">
                After learning this course you will be able to{" "}
              </p>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <div className="flex-evenly" style={{ marginBottom: "15px" }}>
                    <div className="bottom_icon">
                      <CheckIcon />
                    </div>
                    <p className="bottom_text">
                      Earn a Certificate of Completion or Professional
                      Certificate.
                    </p>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="flex-evenly" style={{ marginBottom: "15px" }}>
                    <div className="bottom_icon">
                      <CheckIcon />
                    </div>
                    <p className="bottom_text">
                      Engage with a global peer network.
                    </p>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="flex-evenly">
                    <div className="bottom_icon">
                      <CheckIcon />
                    </div>
                    <p className="bottom_text">
                      Gain a greater career advancement prospects.
                    </p>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className="flex-evenly">
                    <div className="bottom_icon">
                      <CheckIcon />
                    </div>
                    <p className="bottom_text">
                      Build upon skills you already have.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
            {check ? (
              <div style={{ textAlign: "center", paddingTop: "30px" }}>
                <Link to={`/myCourse?id=${id}`} style={{ fontSize: "20px" }}>
                  To course
                </Link>
              </div>
            ) : (
              <></>
            )}
          </div>
        </Grid>
        <Grid item xs={4}>
          {/* tan payment */}
          {check === false ? <Payment price={courseDetail.price} courseId={courseDetail.id} />
            : <></>}
        </Grid>
      </Grid>
    </div>
  );
}
