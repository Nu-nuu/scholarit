import React from "react";
import Carousel from "react-elastic-carousel";
import "./coursesRecommend.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
 
  getMostViewedCourseThunk
} from "../../../store/apiThunk/courseThunk";

import {
 
  mostViewedCoursesSelector
  
} from "../../../store/sellectors";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const items = [
  { id: 1, courseName: "Enchanted Geometry", description: "Description " },
  { id: 2, courseName: "Quantum Wizardry", description: "Description " },
  { id: 3, courseName: "Mathemagical Potions", description: "Description " },
  { id: 4, courseName: "Time Travel Arithmetic", description: "Description " },
  { id: 5, courseName: "Symphonic Equations", description: "Description " },
  {
    id: 5,
    courseName: "Magical Algebraic Spells",
    description: "Description ",
  },
  { id: 5, courseName: "Astroarithmetics", description: "Description " },
  { id: 5, courseName: "Mathematical Artistry", description: "Description " },
];

function coursesCompleted() {
  const dispatch = useDispatch();
  const mostViewedCourses = useSelector(mostViewedCoursesSelector);
  useEffect(() => {
    dispatch(getMostViewedCourseThunk());
  }, []);
  //--------------------------------------------
  const navigate = useNavigate();
  // const itemElements = items.map((item) => (
  //   <div className="course" key={item.id}>
  //     <div
  //       style={{
  //         fontWeight: "550",
  //         fontSize: "20px",
  //         lineHeight: "120%",
  //         margin: "0",
  //         // marginTop: "15px",
  //         marginBottom: "25px",
  //       }}
  //     >
  //       {item.courseName}
  //     </div>
  //     <div>{item.description}</div>
  //     <div>
  //       <Button
  //         variant="gradient"
  //         color="info"
  //         style={{
  //           height: "100%",
  //           float: "right",
  //           width: "50%",
  //           backgroundColor: "#FCB163   ",
  //         }}
  //         // onClick={() => navigate("/course-detail")}
  //       >
  //         Pre-Enroll
  //       </Button>
  //     </div>
  //   </div>
  // ));

  return (
    <Carousel className="mostPopularCourses" itemsToShow={2}>
      {mostViewedCourses?.items?.map((c, index) => (
        <div
          className="course"
          key={index}
          onClick={() => navigate(`/course-detail?id=${c.id}`)}
        >
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
            <div>{c.description}</div>
          </p>
          <div>
            <Button
              variant="gradient"
              color="info"
              style={{
                height: "100%",
                float: "right",
                width: "50%",
                backgroundColor: "#FCB163   ",
              }}
              // onClick={() => navigate("/course-detail")}
            >
              Pre-Enroll
            </Button>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default coursesCompleted;
