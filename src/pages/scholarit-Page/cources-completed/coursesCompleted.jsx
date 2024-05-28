import React from "react";
import Carousel from "react-elastic-carousel";
import "./coursesCompleted.css";
import { Button } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";

import { getCourseByIdThunk } from "../../../store/apiThunk/courseThunk";
import {
  courseDetailSelector
} from "../../../store/sellectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const items = [
  { id: 1, courseName: "Enchanted Geometry", description: "Description " },
  { id: 2, courseName: "Quantum Wizardry", description: "Description " },
  { id: 3, courseName: "Mathemagical Potions", description: "Description " },
  { id: 4, courseName: "Time Travel Arithmetic", description: "Description " },
  { id: 5, courseName: "Symphonic Equations", description: "Description " },
  { id: 5, courseName: "Magical Algebraic Spells", description: "Description " },
  { id: 5, courseName: "Astroarithmetics", description: "Description " },
  { id: 5, courseName: "Mathematical Artistry", description: "Description " },
];

function coursesCompleted() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [searchParam, setSearchParam] = useSearchParams();
  const id = searchParam.get("id");

  const courseDetail = useSelector(courseDetailSelector);


  useEffect(() => {
    dispatch(getCourseByIdThunk(id));
  }, []);


  console.log(courseDetail);


  const itemElements = items.map((item) => (
    <div className="course" key={item.id}>
      <div
        style={{
          fontWeight: "550",
          fontSize: "20px",
          lineHeight: "120%",
          margin: "0",
          // marginTop: "15px",
          marginBottom: "25px",
        }}
      >
        {item.courseName}
      </div>
      <div>{item.description}</div>
      <div><Button
        variant="gradient"
        color="info"
        style={{
          height: "100%",
          float: "right",
          width: "50%",
          backgroundColor: "#20C174   ",
          color:"white",
        }}
        onClick={() => navigate("/mycourse")}
      >
        View Reports
      </Button></div>
    </div>
  ));

  return (
    <Carousel className="mostPopularCourses" itemsToShow={3 }>
      {itemElements}
    </Carousel>
  );
}

export default coursesCompleted;
