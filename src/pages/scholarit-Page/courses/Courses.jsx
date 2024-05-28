import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
// Material Kit 2 React components
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import ebg from "../../../assets/scholaritPics/coursebg.jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCut, faCopy, faPaste } from "@fortawesome/free-solid-svg-icons";
import "../courses/Courses.css";
import ContentProgress from "../courses-progress/coursesProgress";
import ContentCompleted from "../cources-completed/coursesCompleted";
import ContentRecommend from "../courses-recommend/coursesRecommend";
import { Collapse } from 'antd';
import { useNavigate } from "react-router-dom";
import {
  getCoursesBySearchThunk,
  getCoursesThunk,
  getEnrollCoursesThunk,
  getMostViewedCourseThunk,
} from "../../../store/apiThunk/courseThunk";

import {
  coursesSelector,
  coursesBySearchSelector,
  mostViewedCoursesSelector,
  enrollCoursesSelector,
} from "../../../store/sellectors";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#314995",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Courses() {
  const dispatch = useDispatch();
  const mostViewedCourses = useSelector(mostViewedCoursesSelector);
  useEffect(() => {
    dispatch(getMostViewedCourseThunk());
}, []);

  //-----------------------------------------------------------------------------------------------//
  const navigate = useNavigate();
  // ----------------------------------GorupButton----------------------------------------------------------------------------------

  const [numButtons, setNumButtons] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(5);
  const [clickedButton, setClickedButton] = React.useState(1);

  React.useEffect(() => {
    // Fetch data from fake API
    const fetchData = async () => {
      // Simulate API response with a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Set the number of buttons to a random value between 1 and 10
      const randomNumButtons = Math.floor(Math.random() * 10) + 1;
      setNumButtons(randomNumButtons);
    };
    fetchData();
  }, []);


  // Get the index of the last item to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  // Get the index of the first item to display on the current page
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // Slice the array of buttons based on the current page number and the number of items to display per page
  const currentButtons = [...Array(numButtons)].slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Get the total number of pages
  const totalPages = Math.ceil(numButtons / itemsPerPage);

  // Generate an array of page numbers to display in the pagination component
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }
  // Function to handle button click
  const handleButtonClick = (buttonNumber) => {
    setClickedButton(buttonNumber);
  };

  // --------------------------------------------------------------------------------------------------------------------------
  const onChange = (key) => {
    console.log(key);
  };
  // --------------------------------------------------------------------------------------------------------------------------
  return (
    <div  component="section" pt={6} my={6}>
      <Item>
        <Grid container alignItems="center" spacing={2}>
          <Grid item sx={12} md={4}>
            <Box position="relative">
              <Box component="img" src={ebg} alt="ebg" width="100%" />
            </Box>
          </Grid>
          <Grid item xs={12} md={7} sx={{ ml: "auto" }}>
            <div>
              <Typography variant="h4" color="#FFF">
                Ready to Continue your Sources ?
              </Typography>
              <Typography variant="body2" color="#FFF" mb={3}>
             <p>Mathematics is the music of reason.</p>  Do not worry about your difficulties in mathematics; I can assure you that mine are still greater.
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={8}>
                  <Input
                    sx={{ backgroundColor: "#EEEEEE   ", borderRadius: "10px" }}
                    type="email"
                    label="Email Here..."
                    fullWidth
                  />
                </Grid>
                <Grid item xs={4}>
                <button className="button-to-everything"  onClick={() => navigate("/chapterPage")}>To Chapter</button>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Item>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} paddingTop={2}>
          {/* -----------------------------------------------------------------------------Left---------------------------------------- */}
          <Grid item xs={6} md={4}>
            <Item>
              {" "}
              <button className="button-to-everything"  onClick={() => navigate("/testPage")}>Test YourSelf</button>
              <div className="text-currently-chap">Week left before The Progress Test  </div>
              {/* {clickedButton && (
                    <div
                      className="text-currently-number"
                      variant="h6"
                      align="center"
                    >
                      {clickedButton}
                    </div>
                  )} */}
                  <div
                      className="text-currently-number"
                      variant="h6"
                      align="center"
                    >
                      3
                    </div>
            </Item>
          </Grid>

          {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
          {/* -----------------------------------------------------------------------------Right---------------------------------------- */}
          <Grid item xs={6} md={8}>
            <Item>
              <Grid container spacing={2}>
                <Grid item xs={6} md={4}>
                  <button className="button-to-everything"  onClick={() => navigate("/chapterPage")}>To Chapter</button>
                  <div className="text-currently-chap">
                    You Are Currently Studying Chapter
                  </div>
                  {clickedButton && (
                    <div
                      className="text-currently-number"
                      variant="h6"
                      align="center"
                    >
                      {clickedButton}
                    </div>
                  )}
                </Grid>
                <Grid item xs={6} md={8}>
                  <div className="potition-multi-button">
                    {currentButtons.map((_, index) => (
                      <button
                        className="multi-button"
                        key={indexOfFirstItem + index}
                        onClick={() =>
                          handleButtonClick(indexOfFirstItem + index + 1)
                        }
                      >
                        {indexOfFirstItem + index + 1}
                      </button>
                    ))}
                    <div className="pagination">
                      <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(currentPage - 1)}
                      >
                        Prev
                      </button>

                      <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(currentPage + 1)}
                      >
                        Next
                      </button>
                    </div>
                  </div>{" "}
                </Grid>
              </Grid>
            </Item>
          </Grid>
          {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
        </Grid>
      </Box>
      
        <div className="text-topic">In progress Courses</div>
        <ContentProgress/>
        <div className="text-topic">Completed Courses</div>
        <ContentCompleted/>
        <div className="text-topic">Recommend Courses</div>
        <ContentRecommend/>
        
        
    </div>
    
  );
}
