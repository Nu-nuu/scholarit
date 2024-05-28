import React, { useState, useEffect } from 'react';
import DataTable from "../../components/dataTable/dataTable";
import './course.scss';
import Swal from "sweetalert2";
import TemplateFile from '../../components/templateFile/templateFile';
import ExcelUpload from '../../components/excelUpload/excelUpload';
import Pagination from '@mui/material/Pagination';

const courseColumns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "name", headerName: "Name", width: 200 },
  { field: "description", headerName: "Title", width: 250 },
  { field: "categoryId", headerName: "Category", width: 150 },
  { field: "duration", headerName: "Duration", width: 100 },
  { field: "author", headerName: "Author", width: 150 },
  { field: "dateCreated", headerName: "Created At", width: 150 },
  { field: "price", headerName: "Price", width: 100 },
  { field: "discount", headerName: "Discount", width: 90 },
];
import { useSelector, useDispatch } from 'react-redux';
import { coursesSelector, categorySelector } from '../../../../store/sellectors';
import { getCoursesThunk, deleteCourseThunk, createCourseThunk } from '../../../../store/apiThunk/courseThunk';
import { getCategoryThunk } from '../../../../store/apiThunk/categoryThunk';


const Course = () => {
  const courseList = useSelector(coursesSelector);
  const categoryList = useSelector(categorySelector);
  const dispatch = useDispatch();
  const [courseData, setCourseData] = useState([]);
  const [uploadClick, setUploadClick] = useState(false);
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalItems, setTotalItems] = useState(0);

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setPageNo(1);
  };

  const handlePageNoChange = (newPageNo) => {
    setPageNo(newPageNo);
  };
  const handlePaginationChange = (event, value) => {
    const newPageNo = value;
    setPageNo(newPageNo);
    dispatch(getCoursesThunk({ pageNo: newPageNo, pageSize }));
  };
  useEffect(() => {
    dispatch(getCoursesThunk({ pageNo, pageSize }));
  }, [pageNo, pageSize, uploadClick]);

  useEffect(() => {
    dispatch(getCategoryThunk());
  }, []);

  const mapCategoryIdToName = (categoryId) => {
    const category = categoryList.find((cat) => cat.id === categoryId);
    return category ? category.name : '';
  };

  useEffect(() => {
    if (courseList.items && categoryList) {
      const updatedCourseData = courseList.items.map((course) => ({
        ...course,
        categoryId: mapCategoryIdToName(course.categoryId),
      }));
      setCourseData(updatedCourseData);
      setTotalItems(courseList.totalItems);
    }
  }, [courseList.items, categoryList]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Delete Course',
      text: 'Are you sure you want to delete this course?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCourseThunk(id))
          .then(() => {
            Swal.fire({
              title: 'Success',
              text: 'Delete successful!',
              icon: 'success',
              showConfirmButton: false,
              showCancelButton: false,
              timer: 2000,
            });
            setUploadClick(true);
          })
          .catch((error) => {
            Swal.fire({
              title: 'Error',
              text: 'Delete failed. Please try again.',
              icon: 'error',
            });
            console.error('Delete error:', error);
          });
      }
    });
  };


  const handleExcelDataUpload = (data) => {
    dispatch(createCourseThunk(data))
      .then(() => {
        Swal.fire({
          title: 'Success',
          text: 'Upload successful!',
          icon: 'success',
          showConfirmButton: false,
          showCancelButton: false,
          timer: 2000,
        });
        setUploadClick(true);
      })
      .catch((error) => {
        Swal.fire({
          title: 'Error',
          text: 'Upload failed. Please try again.',
          icon: 'error',
        });
        console.error('Upload error:', error);
      });
  };

  setTimeout(() => {
    setUploadClick(false);
  }, 10);
  return (
    <div className="courses">
      <div className="info">
        <h1>All Courses</h1>
        <div className="course_material">
          <TemplateFile />
          <ExcelUpload onExcelDataUpload={handleExcelDataUpload} />
        </div>
      </div>
      {courseList.items ? (
        <div className='course_data_table'>
          <DataTable
            slug="admin/course-page"
            columns={courseColumns}
            rows={courseData}
            handleDelete={handleDelete}
            pageNo={pageNo}
            pageSize={pageSize}
            totalItems={totalItems}
            onPageChange={handlePageNoChange}
            onPageSizeChange={handlePageSizeChange}
          />
          <Pagination
            className='course_pagination'
            count={Math.ceil(totalItems / pageSize)} // Calculate the number of pages
            color="primary"
            page={pageNo}
            onChange={handlePaginationChange} // Handle page changes
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Course;