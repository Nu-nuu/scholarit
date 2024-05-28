import React, { useState, useEffect } from 'react';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from "sweetalert2";
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getResourceInChapterThunk, updateResourceThunk, deleteResourceThunk, createResourceThunk } from '../../../../store/apiThunk/resourceThunk';
import { Button, IconButton, ListItemButton, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Select, MenuItem } from '@mui/material';

import './resource.scss';

const Resource = (props) => {
    const [uploadClick, setUploadClick] = useState(false);

    const [resource, setResource] = useState([]);
    const [editingResource, setEditingResource] = useState(null);
    const [resourceData, setResourceData] = useState({
        type: '', // Loại tài nguyên
        url: '',
        chapterId: props.chapterId,
        resourceParentId: null,
    });
    const [resourceType, setResourceType] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getResourceInChapterThunk(props.chapterId))
            .then((response) => {
                setResource(response.payload);
            });
    }, [uploadClick, props.chapterId]);

    const handleUpdateResource = (resourceId, type) => {
        setEditingResource(resource.find(item => item.id === resourceId));
        setResourceType(type);
    };

    const handleDeleteResource = (resourceId) => {
        dispatch(deleteResourceThunk(resourceId))
            .then(() => {
                Swal.fire({
                    title: 'Success',
                    text: 'Delete successful!',
                    icon: 'success',
                    showConfirmButton: false,
                    showCancelButton: false,
                    timer: 2000,
                });
                setEditingResource(null);
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
    };

    const handleSaveResource = () => {
        if (!editingResource) return;

        const newData = {
            id: editingResource.id,
            type: resourceType,
            url: resourceData.url,
            chapterId: editingResource.chapterId,
            resourceParentId: editingResource.resourceParentId,
        };

        dispatch(updateResourceThunk(newData))
            .then(() => {
                Swal.fire({
                    title: 'Success',
                    text: 'Update successful!',
                    icon: 'success',
                    showConfirmButton: false,
                    showCancelButton: false,
                    timer: 1000,
                });
                setEditingResource(null);
                setResourceType("");
                setResourceData({ type: "", url: "" });
                setUploadClick(true);

            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error',
                    text: 'Update failed. Please try again.',
                    icon: 'error',
                });
                console.error('Update error:', error);
            });
    };

    const handleSaveCreateResource = () => {
        dispatch(createResourceThunk(resourceData))
            .then((response) => {
                Swal.fire({
                    title: 'Success',
                    text: 'Create successful!',
                    icon: 'success',
                    showConfirmButton: false,
                    showCancelButton: false,
                    timer: 1000,
                });
                setUploadClick(true);
                setResourceData({
                    type: '',
                    url: '',
                    chapterId: props.chapterId,
                    resourceParentId: null,
                });
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Error',
                    text: 'Create failed. Please try again.',
                    icon: 'error',
                });
                console.error('Create error:', error);
            });
    };
    setTimeout(() => {
        setUploadClick(false);
    }, 10);
    return (
        <div>
            <form method='post'>
                <div className="add_resource">
                    <div className="resource_items">
                        <div className='title_items'>
                            <h5>Add Resource</h5>
                            <div className="box_course_cl2">
                                <div className="form_control">
                                    <label htmlFor="type">Type:</label>
                                    <Select
                                        id="type"
                                        name="type"
                                        value={resourceData.type}
                                        onChange={(e) => setResourceData({ ...resourceData, type: e.target.value })}
                                    >
                                        <MenuItem value="url">URL</MenuItem>
                                        <MenuItem value="image">Image</MenuItem>
                                        <MenuItem value="pdf">PDF</MenuItem>
                                    </Select>
                                </div>
                                <div className="form_control">
                                    <label htmlFor="url">URL:</label>
                                    <input
                                        type="text"
                                        id="url"
                                        name="url"
                                        value={resourceData.url}
                                        onChange={(e) => setResourceData({ ...resourceData, url: e.target.value })}
                                    />
                                </div>
                                <Button onClick={handleSaveCreateResource}>Save Resource</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className='chapter_single_resource'>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>URL</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {resource.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>
                                        {editingResource && editingResource.id === item.id ? (
                                            <Select
                                                id={`type-${item.id}`}
                                                name={`type-${item.id}`}
                                                value={resourceType}
                                                onChange={(e) => setResourceType(e.target.value)}
                                            >
                                                <MenuItem value="url">URL</MenuItem>
                                                <MenuItem value="image">Image</MenuItem>
                                                <MenuItem value="pdf">PDF</MenuItem>
                                            </Select>
                                        ) : (
                                            item.type
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {editingResource && editingResource.id === item.id ? (
                                            <input
                                                type="text"
                                                id={`url-${item.id}`}
                                                name={`url-${item.id}`}
                                                value={resourceData.url}
                                                onChange={(e) => setResourceData({ ...resourceData, url: e.target.value })}
                                            />
                                        ) : (
                                            <Link to={item.url} target="_blank" rel="noopener noreferrer">
                                                {item.url}
                                            </Link>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {editingResource && editingResource.id === item.id ? (
                                            <Button onClick={handleSaveResource}>Save</Button>
                                        ) : (
                                            <div className='item_material'>
                                                <Tooltip title="Edit Resource">
                                                    <IconButton color='warning' onClick={() => handleUpdateResource(item.id, item.type)}>
                                                        <EditNoteIcon />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Delete Resource">
                                                    <IconButton color='error' onClick={() => handleDeleteResource(item.id)}>
                                                        <DeleteIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </div>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default Resource;
