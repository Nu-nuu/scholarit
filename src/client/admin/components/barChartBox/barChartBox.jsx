import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "./barChartBox.scss";

const BarChartBox = (props) => {

    const {
        color,
        title,
        dataKey,
        chartData,
    } = props.chartData;

    return (
        <div className="barChartBox">
            <h1>{title}</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height={150}>
                    <BarChart data={chartData}>
                        <Tooltip
                            contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                            labelStyle={{ display: "none" }}
                            cursor={{ fill: "none" }}
                        />
                        <Bar dataKey={dataKey} fill={color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default BarChartBox