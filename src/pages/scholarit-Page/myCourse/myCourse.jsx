import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./myCourse.css";
import { Collapse } from "antd";
import { useRef } from "react";
import { Carousel } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumbs, Link } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import EG from "../../../assets/scholaritPics/EG.jpg";
import { useNavigate, useSearchParams } from "react-router-dom";
import { getChaptersInCourseByUserThunk } from "../../../store/apiThunk/chapterThunk";
import { getCourseByIdThunk } from "../../../store/apiThunk/courseThunk";
import {
  courseDetailSelector,
  chaptersInCourseByUserSelector,
} from "../../../store/sellectors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const text = `
 Content/ Time/ Note/ videos/ Data
`;

const chapers = [
  {
    key: "1",
    label: <div style={{ float: "center" }}>CHAPTER 1: Title of Chapter</div>,
    children: <p>{text}</p>,
    showArrow: false,
  },
  {
    key: "2",
    label: <div style={{ float: "center" }}>CHAPTER 2: Title of Chapter</div>,
    children: <p>{text}</p>,
    showArrow: false,
  },
  {
    key: "3",
    label: <div style={{ float: "center" }}>CHAPTER 3: Title of Chapter</div>,
    children: <p>{text}</p>,
    showArrow: false,
  },
  {
    key: "4",
    label: <div style={{ float: "center" }}>CHAPTER 4: Title of Chapter</div>,
    children: <p>{text}</p>,
    showArrow: false,
  },
 
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const steps = ["CHAP 1", "CHAP 2", "CHAP 3", "CHAP 4"];
const breadcrumbs = [
  <Link
    to="/"
    className="upcomingTest_breadcrumb"
    key={1}
    style={{ color: "white" }}
  >
    Home
  </Link>,
  <Link
    to="/"
    className="upcomingTest_breadcrumb"
    key={2}
    style={{ color: "white" }}
  >
    My Courses
  </Link>,
  <Link
    to="."
    className="upcomingTest_breadcrumb"
    key={3}
    style={{ color: "white" }}
  >
    Enchanted Geometry
  </Link>,
];

export default function BasicGrid() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carouselRef = useRef(null);
  const [searchParam, setSearchParam] = useSearchParams();
  const id = searchParam.get("id");

  const courseDetail = useSelector(courseDetailSelector);
  const chaptersInCourse = useSelector(chaptersInCourseByUserSelector);

  useEffect(() => {
    dispatch(getCourseByIdThunk(id));
  }, []);

  useEffect(() => {
    dispatch(getChaptersInCourseByUserThunk(id));
  }, []);

  console.log(courseDetail);
  console.log(chaptersInCourse);

  const handleNextCarousel = () => {
    carouselRef.current.next();
  };

  const handlePrevCarousel = () => {
    carouselRef.current.prev();
  };
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };
  return (
    <div>
      <>
        {" "}
        <div>
          <div className="myCourses_top_Box">
            {/* <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              style={{ marginBottom: "30px", color: "white" }}
            >
              {breadcrumbs}
            </Breadcrumbs> */}

            <Grid container spacing={4}>
              <Grid item xs={8}>
                <div className="myCourses_top_left">
                  <div className="myCourses_top_left_text">
                    <p className="myCourses_top_header">{courseDetail.name}</p>

                    <p className="myCourses_top_desc">
                    {courseDetail.description}
                    </p>
                    
                    <p className="myCourses_top_desc">
                      Author: {courseDetail.author}
                    </p>

                    <p className="myCourses_top_desc" style={{float:'right'}}>
                      Price: {courseDetail.price}
                    </p>
                  </div>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className="flex">
                  <img src={EG} className="myCourses_top_img" />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <div className="myCourse-text-practice"> </div>
            <div className="myCourse-text-topic-left">
              Chapter of the Course
            </div>
            <Item>
              {/* <Collapse accordion items={chapers} /> */}

              <Collapse accordion>
              {chaptersInCourse?.map((c, index) => (
                         <Collapse.Panel header={c.name} key={index} >
                         <p>{c.description}</p>
                       </Collapse.Panel>
                    ))}
                    </Collapse>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <div className="myCourse-text-practice"></div>
            <div className="myCourse-text-topic-right">{courseDetail.name}</div>
            <Item>
              {" "}
              <Box sx={{ width: "100%" }}>
                <Stepper
                  nonLinear
                  activeStep={activeStep}
                  orientation="vertical"
                >
                  {chaptersInCourse?.map((c, index) => (
                    <Step
                    
                      completed={completed[index]}
                      style={{ display: "flex" }}
                    >
                      <StepButton color="inherit" onClick={handleStep(index)}>
                        {c.name}
                      </StepButton>
                      <button
                        className="button-to-everything-start"
                        onClick={() => navigate(`/chapterPage?id=${c.id}`)}
                      >
                        Start
                      </button>

                      {/* ------------------------------------------------NAM GIUA--------------------------------------------------- */}

                      {/* ------------------------------------------------------------------------------------------------------------ */}
                    </Step>
                  ))}
                </Stepper>
           
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
