import React, { useState } from 'react';
import { Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import TemplateFile from '../templateFile/templateFile';
import ExcelUpload from '../excelUpload/excelUpload';


const EditChapter = (props) => {

    const { chapter, courseId, onSaveClick } = props;

    const [updatedChapterData, setUpdatedChapterData] = useState({
        name: chapter.name,
        intro: chapter.intro,
        content: chapter.content,
        summary: chapter.summary,
        description: chapter.description,
        courseId: courseId,
        order: chapter.order,
        duration: chapter.duration,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        // Update the state with the new input values
        setUpdatedChapterData({ ...updatedChapterData, [name]: value });
    };

    return (
        <div className='add_chapter'>
            <div className="add_chapter_material">
                <div className="button_upload">
                    <TemplateFile />
                    <ExcelUpload />
                </div>
            </div>
            <div className="add_chapter_header">
                <div className="add_chapter_content">
                    <div className='title_items'>
                        <h5>Chapter Name</h5>
                        <div className="box_course_cl2">
                            <textarea
                                className='content_chapter'
                                name="name"
                                cols="28"
                                rows="1"
                                value={updatedChapterData.name}
                                onChange={handleInputChange}
                            ></textarea>
                        </div>
                    </div>
                </div>
                <div className="add_chapter_content">
                    <div className='title_items'>
                        <h5>Number</h5>
                        <div className="box_course_cl2">
                            <input className='number_chapter'
                                type="number" step={1} min={0}
                                name="order" value={updatedChapterData.order}
                                onChange={handleInputChange} ></input>
                        </div>
                    </div>
                </div>
                <div className="add_chapter_content">
                    <div className='title_items'>
                        <h5>Duration</h5>
                        <div className="box_course_cl2">
                            <input className='number_chapter'
                                type="number" step={1} min={0}
                                name="duration" value={updatedChapterData.duration}
                                onChange={handleInputChange}></input>
                        </div>
                    </div>
                </div>
            </div>
            <div className="add_chapter_body">
                <div className="add_chapter_content">
                    <div className='title_items'>
                        <h5>Introduction</h5>
                        <div className="box_course_cl2">
                            <textarea className='content_chapter'
                                name="intro" cols="48" rows="2"
                                value={updatedChapterData.intro}
                                onChange={handleInputChange}></textarea>
                        </div>
                    </div>
                </div>
                <div className="add_chapter_content">
                    <div className='title_items'>
                        <h5>Description</h5>
                        <div className="box_course_cl2">
                            <textarea className='content_chapter'
                                name="description" cols="48" rows="2"
                                value={updatedChapterData.description}
                                onChange={handleInputChange}></textarea>
                        </div>
                    </div>
                </div>
                <div className="add_chapter_content">
                    <div className='title_items'>
                        <h5>Content</h5>
                        <div className="box_course_cl2">
                            <textarea className='content_chapter'
                                name="content" cols="48" rows="2"
                                value={updatedChapterData.content}
                                onChange={handleInputChange}></textarea>
                        </div>
                    </div>
                </div>
                <div className="add_chapter_content">
                    <div className='title_items'>
                        <h5>Summary</h5>
                        <div className="box_course_cl2">
                            <textarea className='content_chapter'
                                name="summary" cols="48" rows="2"
                                value={updatedChapterData.summary}
                                onChange={handleInputChange}></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div className="add_chapter_material">
                <div className="button_save">
                    <Button variant="contained"
                        onClick={() => onSaveClick(updatedChapterData)}
                        endIcon={<SaveIcon />}>
                        Save
                    </Button>
                </div>
            </div>
        </div>


    );
}

export default EditChapter