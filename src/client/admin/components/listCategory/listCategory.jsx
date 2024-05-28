import React, { useState, useEffect } from 'react';
import { IconButton } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SaveIcon from '@mui/icons-material/Save';
import CircularProgress from '@mui/material/CircularProgress';
import List from '@mui/material/List';
import './listCategory.scss';
import { useSelector, useDispatch } from 'react-redux';
import { coursesSelector, categorySelector } from '../../../../store/sellectors';
import { getCategoryThunk, updateCategoryThunk, deleteCategoryThunk } from '../../../../store/apiThunk/categoryThunk';
import { getCoursesThunk } from '../../../../store/apiThunk/courseThunk';

const ListCategory = () => {
    const categoryList = useSelector(categorySelector);
    const courseList = useSelector(coursesSelector);
    const [editValues, setEditValues] = useState({});
    const [deleteClick, setDeleteClick] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategoryThunk())
            .then(() => {
                setIsLoading(false);
            });
    }, [editValues]);

    useEffect(() => {
        dispatch(getCoursesThunk());
    }, []);

    const handleEditStart = (categoryId, categoryName) => {
        setEditValues((prevEditValues) => ({
            ...prevEditValues,
            [categoryId]: categoryName,
        }));
    };

    const handleEditSave = (categoryId) => {
        setEditValues((prevEditValues) => ({
            ...prevEditValues,
            [categoryId]: prevEditValues[categoryId],
        }));

        dispatch(updateCategoryThunk({ id: categoryId, name: editValues[categoryId] }))
            .then(() => {
                setEditValues((prevEditValues) => ({
                    ...prevEditValues,
                    [categoryId]: undefined,
                }));
            });
    };

    const handleDelete = (categoryId) => {
        dispatch(deleteCategoryThunk(categoryId));
        setDeleteClick(true)
    };

    setTimeout(() => {
        setDeleteClick(false);
    }, 10);

    useEffect(() => {
        dispatch(getCategoryThunk())
            .then(() => {
                setIsLoading(false);
            });
    }, [deleteClick]);

    return (
        <div className="list_category">
            <div className="header_list_category">
                <h2>List Category</h2>
            </div>
            <div className="body_list_category">
                {isLoading ? (
                    <div className="loading-container">
                        <CircularProgress />
                    </div>
                ) : (
                    <List sx={{
                        position: 'relative',
                        overflow: 'auto',
                        maxHeight: 500,
                    }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th width="210px">Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categoryList.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>
                                            {editValues[item.id] !== undefined ? (
                                                <input
                                                    type="text"
                                                    value={editValues[item.id]}
                                                    onChange={(e) =>
                                                        setEditValues({
                                                            ...editValues,
                                                            [item.id]: e.target.value,
                                                        })
                                                    }
                                                />
                                            ) : (
                                                item.name
                                            )}
                                        </td>
                                        <td>
                                            {editValues[item.id] !== undefined ? (
                                                <IconButton
                                                    color="primary"
                                                    onClick={() => handleEditSave(item.id)}
                                                >
                                                    <SaveIcon />
                                                </IconButton>
                                            ) : (
                                                <IconButton
                                                    color="warning"
                                                    onClick={() => handleEditStart(item.id, item.name)}
                                                >
                                                    <EditNoteIcon />
                                                </IconButton>
                                            )}
                                            <Tooltip title="Delete Category">
                                                <IconButton
                                                    color="error"
                                                    onClick={() => handleDelete(item.id)}
                                                >
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Tooltip>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </List>
                )}
            </div>
            <div className="footer_list_category">
                <h4>Total category: {categoryList.length}</h4>
            </div>
        </div>
    );
};

export default ListCategory;
