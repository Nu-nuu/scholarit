import React from "react";
import { Link } from "react-router-dom";
import "./chartBox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

const ChartBox = (props) => {
    const {
        color,
        link,
        icon,
        title,
        number,
        dataKey,
        percentage,
        chartData,
    } = props.chartData; // Use the chart data passed as a prop

    return (
        <div className="chartBox">
            <div className="boxInfo">
                <div className="title">
                    <img src={icon} alt="" />
                    <span>{title}</span>
                </div>
                <h1>{number}</h1>
                <Link to={link} style={{ color }}>
                    View all
                </Link>
            </div>
            <div className="chartInfo">
                <div className="chart">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={chartData}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 70 }}
                            />
                            <Line
                                type="monotone"
                                dataKey={dataKey}
                                stroke={color}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="texts">
                    <span
                        className="percentage"
                        style={{ color: percentage < 0 ? "tomato" : "limegreen" }}
                    >
                        {percentage}%
                    </span>
                    <span className="duration">this month</span>
                </div>
            </div>
        </div>
    );
};

export default ChartBox;
