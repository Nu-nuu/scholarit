import React from 'react'
import './addChapter.scss'
import SaveIcon from '@mui/icons-material/Save';
import { Button } from '@mui/material';
import TemplateFile from '../templateFile/templateFile';
import ExcelUpload from '../excelUpload/excelUpload';



const AddChapter = (props) => {

  return (
    <form onSubmit={props.onSaveClick}>
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
                  name="name" cols="28" rows="1"
                  placeholder='Type Name of Chapter ...'
                  value={props.chapterData.name}
                  onChange={(e) =>
                    props.onChapterDataChange('name', e.target.value)
                  }
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
                  name="order"
                  value={props.chapterData.order}
                  onChange={(e) =>
                    props.onChapterDataChange('order', e.target.value)
                  }
                ></input>
              </div>
            </div>
          </div>
          <div className="add_chapter_content">
            <div className='title_items'>
              <h5>Duration</h5>
              <div className="box_course_cl2">
                <input className='number_chapter'
                  type="number" step={1} min={0}
                  name="duration"
                  value={props.chapterData.duration}
                  onChange={(e) =>
                    props.onChapterDataChange('duration', e.target.value)
                  }
                ></input>
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
                  placeholder='Type Introduction about Chapter ...'
                  value={props.chapterData.intro}
                  onChange={(e) =>
                    props.onChapterDataChange('intro', e.target.value)
                  }
                ></textarea>
              </div>
            </div>
          </div>
          <div className="add_chapter_content">
            <div className='title_items'>
              <h5>Description</h5>
              <div className="box_course_cl2">
                <textarea className='content_chapter'
                  name="description" cols="48" rows="2"
                  placeholder='Type Content about Chapter ...'
                  value={props.chapterData.description}
                  onChange={(e) =>
                    props.onChapterDataChange('description', e.target.value)
                  }
                ></textarea>
              </div>
            </div>
          </div>
          <div className="add_chapter_content">
            <div className='title_items'>
              <h5>Content</h5>
              <div className="box_course_cl2">
                <textarea className='content_chapter'
                  name="content" cols="48" rows="2"
                  placeholder='Type Content about Chapter ...'
                  value={props.chapterData.content}
                  onChange={(e) =>
                    props.onChapterDataChange('content', e.target.value)
                  }
                ></textarea>
              </div>
            </div>
          </div>
          <div className="add_chapter_content">
            <div className='title_items'>
              <h5>Summary</h5>
              <div className="box_course_cl2">
                <textarea className='content_chapter' 
                name="summary" cols="48" rows="2" 
                placeholder='Type Summary about Chapter ...'
                value={props.chapterData.summary}
                  onChange={(e) =>
                    props.onChapterDataChange('summary', e.target.value)
                  }
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="add_chapter_material">
          <div className="button_save">
            <Button variant="contained" type='submit' endIcon={<SaveIcon />}>
              Save
            </Button>
          </div>
        </div>
      </div>

    </form>
  )
}

export default AddChapter