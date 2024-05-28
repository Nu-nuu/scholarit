import React, { useState } from 'react'
import './chapterSingle.scss'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ImageIcon from '@mui/icons-material/Image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Link } from 'react-router-dom';
import { ListItem } from '@mui/material';

const ChapterSingle = (props) => {

    const { chapter } = props;

    if (!chapter) {
        return <div>Chapter not found</div>;
    }
    const [openImage, setOpenImage] = useState(false);
    const [openVideo, setOpenVideo] = useState(false);
    const [openDocument, setOpenDocument] = useState(false);



    const handleClickImage = () => {
        setOpenImage(!openImage);
    };
    const handleClickVideo = () => {
        setOpenVideo(!openVideo);
    };
    const handleClickDocument = () => {
        setOpenDocument(!openDocument);
    };

    return (
        <div className='chapter_single'>
            <div className="chapter_single_header">
                <h3>{chapter.name}</h3>
            </div>
            <div className="chapter_single_body">
                <h4>Chapter {chapter.order}</h4>
                <h4>Duration {chapter.duration}</h4>

            </div>
            <div className="description_box">
                <div className='title_items'>
                    <h5>Introduction</h5>
                    <div className="box_course_cl2">{chapter.intro}</div>
                </div>
            </div>
            <div className="description_box">
                <div className='title_items'>
                    <h5>Description</h5>
                    <div className="box_course_cl2">{chapter.description}</div>
                </div>
            </div>
            <div className="description_box">
                <div className='title_items'>
                    <h5>Content</h5>
                    <div className="box_course_cl2">{chapter.content}</div>
                </div>
            </div>
            <div className="description_box">
                <div className='title_items'>
                    <h5>Summary</h5>
                    <div className="box_course_cl2">{chapter.summary}</div>
                </div>
            </div>
        </div>
    );
}

export default ChapterSingle