import React, { useState, useEffect } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";
import { useSelector, useDispatch } from 'react-redux';
import { categorySelector } from '../../../../store/sellectors';
import { getCategoryThunk } from '../../../../store/apiThunk/categoryThunk';

const categoryColors = ["#FF5733", "#FFC300", "#33FF57", "#3362FF", "#FF33DD"];

const PieChartBox = () => {
    const dispatch = useDispatch();
    const categoryList = useSelector(categorySelector);

    useEffect(() => {
        dispatch(getCategoryThunk())
    })

    // Tạo dữ liệu cho biểu đồ
    const chartData = categoryList?.map((category, index) => {
        const categoryId = category.id;
        const value = category.totalCourse;
        const color = categoryColors[index % categoryColors.length];
        return { ...category, value, color };
    });

    return (
        <div className="pieChartBox">
            <h2>Category of Course</h2>
            <div className="chart">
                <ResponsiveContainer width="99%" height={300}>
                    <PieChart>
                        <Tooltip
                            contentStyle={{ background: "white", borderRadius: "5px" }}
                        />
                        <Pie
                            data={chartData}
                            innerRadius={"70%"}
                            outerRadius={"90%"}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {chartData.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="options">
                {chartData.map((item) => (
                    <div className="option" key={item.name}>
                        <div className="title">
                            <div className="dot" style={{ backgroundColor: item.color }} />
                            <span>{item.name}</span>
                        </div>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PieChartBox;
