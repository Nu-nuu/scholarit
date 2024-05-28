import { Button, IconButton, ListItemButton, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import QuizIcon from '@mui/icons-material/Quiz';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import './listChapter.scss';
import { useEffect } from 'react';

const ListChapter = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (props.numberOfChapter) {
            setIsLoading(false);
        }
        if (!props.chapter) {
            return (
                <div className='list_chapter'>
                    <div className='header_list_chapter'>
                        <h2>List Chapter</h2>
                        <CircularProgress />
                    </div>
                </div>
            );
        }
    }, [props.numberOfChapter, props.chapter])

    return (
        <div className='list_chapter'>
            <div className='header_list_chapter'>
                <h2>List Chapter</h2>
                <h4>Total chapter:
                    {isLoading ? (
                        ' ...'
                    ) : (
                        props.numberOfChapter
                    )}
                </h4>
                <Button variant="contained" onClick={props.onAddChapterClick}>Add Chapter</Button>
            </div>
            <div className="body_list_chapter">
                <List
                    sx={{
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 350,
                    }}
                >
                    {props.chapter.map((item) => (
                        <ListItem
                            key={item.id}
                            onClick={() => props.onChapterClick(item.id)}
                        >
                            <ListItemButton>
                                <ListItemText primary={`Chapter ${item.order}`} secondary={`${item.name}`} onClick={props.onChapterSingleClick} />
                            </ListItemButton>

                            <div className='item_list_chapter'>
                                <Tooltip title="Add Little Quiz">
                                    <IconButton color='secondary' onClick={() => props.onQuizBankClick(item.id)}>
                                        <QuizIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Add Resource">
                                    <IconButton color='primary' onClick={() => props.onResourceClick(item.id)}>
                                        <LibraryAddIcon />
                                    </IconButton>
                                </Tooltip>


                                <Tooltip title="Edit Chapter">
                                    <IconButton color='warning' onClick={() => props.onEditChapterClick(item.id)}>
                                        <EditNoteIcon />
                                    </IconButton>
                                </Tooltip>

                                <Tooltip title="Delete Chapter">
                                    <IconButton color='error' onClick={() => props.onDeleteChapterClick(item.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </ListItem>

                    ))}
                </List>
            </div>
        </div>
    );
};

export default ListChapter;
