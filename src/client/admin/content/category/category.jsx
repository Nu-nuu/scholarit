import React from 'react'
import './category.scss'
import ListCategory from '../../components/listCategory/listCategory'
import PieChartBox from '../../components/pieChartBox/pieChartBox'
import AddCategory from '../../components/addCategory/addCategory'
const Category = () => {
    return (
        <div className='category_admin'>
            <div className="header_category">
                <h1>Category</h1>
            </div>
            <div className="body_category">
                <div className="body_category_content">
                    <ListCategory />
                </div>
                <div className="body_category_content">
                    <AddCategory />
                </div>
                <div className="body_category_content">
                    <div className="pie_chart">
                        <PieChartBox />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category