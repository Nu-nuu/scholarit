import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import "../barChartBox/barChartBox.scss";

const ChapterBarChartBox = (props) => {
    const { chapter } = props;
    const isLoading = chapter.length === 0; 

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const chartData = chapter.map((item) => ({
        name: item.name,
        duration: item.duration,
    }));

    return (
        <div className="barChartBox">
            <h1>Chapter Duration</h1>
            <div className="chart">
                <ResponsiveContainer width="99%" height={150}>
                    <BarChart data={chartData}>
                        <Tooltip
                            contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                            labelStyle={{ display: "none" }}
                            cursor={{ fill: "none" }}
                        />
                        <Bar dataKey="duration" fill="#FF8042" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default ChapterBarChartBox;
