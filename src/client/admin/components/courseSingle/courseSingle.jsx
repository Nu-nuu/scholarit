import React, { useState, useEffect } from 'react';
import './courseSingle.scss';
import Tooltip from '@mui/material/Tooltip';
import { IconButton } from '@mui/material'
import EditNoteIcon from '@mui/icons-material/EditNote';
import { categoryDetailSelector } from '../../../../store/sellectors';
import { getCategoryByIdThunk } from '../../../../store/apiThunk/categoryThunk';
import { useSelector, useDispatch } from 'react-redux';

const CourseSingle = (props) => {
  const dispatch = useDispatch();
  const categoryDetail = useSelector(categoryDetailSelector);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (props.category) {
      dispatch(getCategoryByIdThunk(props.category))
        .then(() => setIsLoading(false))
        .catch((error) => {
          setIsLoading(false);
          console.error('Error fetching category:', error);
        });
    }
    else {
      setIsLoading(false);
    }
  }, [props.category]);

  const date = new Date(props.createdAt)
  const formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <div className="single_course">
      <div className="info">
        <h2 className="course_title">{props.name}</h2>
        <Tooltip title="Edit Course">
          <IconButton color='warning' onClick={props.onEditCourseClick}>
            <EditNoteIcon />
          </IconButton>
        </Tooltip>
      </div>
      <div className="background_course">
        <div className="flex_container">
          <div className='title_items'>
            <h5>Category</h5>
            <div className="box_course_cl1">
              {isLoading ? (
                'Loading...'
              ) : (
                categoryDetail.name || 'Category Name...'
              )}
            </div>
          </div>
        </div>
        <div className="description_box">
          <div className='title_items'>
            <h5>Description</h5>
            <div className="box_course_cl2">{props.description}</div>
          </div>
        </div>
        <div className="description_box"></div>
        <div className="flex_container">
          <div className='title_items'>
            <h5>Duration</h5>
            <div className="box_course_cl3">{props.duration}</div>
          </div>
          <div className='title_items'>
            <h5>Price</h5>
            <div className="box_course_cl3">{props.price}</div>
          </div>
          <div className='title_items'>
            <h5>Discount</h5>
            <div className="box_course_cl3">{props.discount}</div>
          </div>
        </div>
        <div className="flex_container_text">
          <div className="text_course">
            <span>Created At: {formattedDate}</span>
          </div>
          <div className="text_course">
            <span>Author: {props.author}</span>
          </div>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default CourseSingle;
