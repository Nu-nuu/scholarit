import React, { useState } from 'react';
import { Button, TextField } from "@mui/material";
import './addCategory.scss';
import { useDispatch } from 'react-redux';
import { createCategoryThunk, getCategoryThunk } from '../../../../store/apiThunk/categoryThunk';
import { useSelector } from 'react-redux';
import { categorySelector } from '../../../../store/sellectors';

const AddCategory = () => {
    const dispatch = useDispatch();
    const categoryList = useSelector(categorySelector);
    const [newCategory, setNewCategory] = useState('');
    const [isDuplicateCategory, setIsDuplicateCategory] = useState(false);

    const handleNewCategoryChange = (e) => {
        setNewCategory(e.target.value);
        setIsDuplicateCategory(false); // Reset the duplicate flag when the input changes.
    };

    const isCategoryNameExists = categoryList.some(category => category.name === newCategory);

    const handleCreateCategory = () => {
        if (newCategory && !isCategoryNameExists) {
            dispatch(createCategoryThunk({ name: newCategory }))
                .then(() => {
                    dispatch(getCategoryThunk());
                    setNewCategory('');
                });
        } else {
            // Show a message if the category name already exists.
            setIsDuplicateCategory(true);
        }
    };

    return (
        <div>
            <h2>Add Category</h2>
            <div className="add_category">
                <form className='category_content'>
                    <TextField
                        type="text"
                        value={newCategory}
                        onChange={handleNewCategoryChange}
                        placeholder="New Category"
                    />
                    {isDuplicateCategory && <div style={{ color: 'red' }}>Category already exists.</div>}
                    <Button variant="contained" onClick={handleCreateCategory}>
                        Add Category
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default AddCategory;
