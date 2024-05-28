import React, { useState } from 'react';
import '../courseSingle/courseSingle.scss'
import { Autocomplete, Box, Button, TextField } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import './editCourse.scss';
import TemplateFile from '../templateFile/templateFile';
import ExcelUpload from '../excelUpload/excelUpload';

const EditCourse = (props) => {
    const { category, singleCourse, onSaveClickCourse } = props;

    const [updatedCourseData, setUpdatedCourseData] = useState({
        id: singleCourse.id,
        name: singleCourse.name,
        description: singleCourse.description,
        price: singleCourse.price,
        discount: singleCourse.discount,
        categoryId: singleCourse.categoryId,
        author: singleCourse.author
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUpdatedCourseData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="edit_course">
            <h2>Edit Course</h2>
            <div className="background_course">
                <div className="flex_container">
                    {/* <div className='title_items'>
                        <Autocomplete
                            getOptionLabel={(category) => `${category.name}`}
                            options={category}
                            sx={{
                                width: 300
                            }}
                            isOptionEqualToValue={(option, value) =>
                                option.name === value.name
                            }
                            noOptionsText={"No available Course"}
                            renderOption={(props, category) => (
                                <Box component="li" {...props} key={category.id}>
                                    {category.name}
                                </Box>
                            )}
                            renderInput={(params) => <TextField {...params} label='Choose Category' />}
                        />
                    </div> */}
                </div>
                <div className="add_chapter_content">
                    <div className='title_items'>
                        <h5>Name</h5>

                        <div className="box_course_cl2">
                            <textarea
                                className='content_chapter'
                                name="name"
                                cols="28"
                                rows="1"
                                value={updatedCourseData.name}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="add_chapter_content">
                    <div className='title_items'>
                        <h5>Description</h5>
                        <div className="box_course_cl2">
                            <textarea className='content_chapter' name="description" cols="68" rows="4" value={updatedCourseData.description}
                                onChange={handleInputChange} ></textarea>
                        </div>
                    </div>
                </div>
                <div className="add_chapter_content">
                    <div className="flex_container">
                        <div className='title_items'>
                            <h5>Price</h5>
                            <div className="box_course_cl2">
                                <textarea className='content_chapter' name="price" cols="4" rows="1" value={updatedCourseData.price}
                                    onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className='title_items'>
                            <h5>Discount</h5>
                            <div className="box_course_cl2">
                                <textarea className='content_chapter' name="discount" cols="4" rows="1" value={updatedCourseData.discount}
                                    onChange={handleInputChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex_container_text">
                    <div className="flex_bottom_material">
                        <div className="add_chapter_material">
                            <div className="button_upload">
                                <TemplateFile />
                                <ExcelUpload />
                            </div>
                        </div>
                        <div className="add_chapter_material">
                            <div className="button_save">
                                <Button
                                    variant="contained"
                                    onClick={() => onSaveClickCourse(updatedCourseData)}
                                    endIcon={<SaveIcon />}
                                >
                                    Save
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default EditCourse;
