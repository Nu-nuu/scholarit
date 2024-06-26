import React from 'react'
import {
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import "./adminSingle.scss";

const AdminSingle = (props) => {
    return (
        <div className="single">
            <div className="view">
                <div className="info">
                    <div className="topInfo">
                        {props.img && <img src={props.img} alt="" />}
                        <h1>{props.title}</h1>
                        <button>Update</button>
                    </div>
                    <div className="details">
                        <div className="item">
                            <span className='itemTitle'>User Name: </span>
                            <span className='itemValue'>{props.info.username}</span>
                        </div>
                        <div className="item">
                            <span className='itemTitle'>Email: </span>
                            <span className='itemValue'>{props.info.email}</span>
                        </div>
                        <div className="item">
                            <span className='itemTitle'>Phone: </span>
                            <span className='itemValue'>{props.info.phone}</span>
                        </div>
                        <div className="item">
                            <span className='itemTitle'>Joined in: </span>
                            <span className='itemValue'>{props.info.createdAt}</span>
                        </div>
                    </div>
                </div>
                <hr />
                {props.chart && (
                    <div className="chart">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={props.chart.data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                {props.chart.dataKeys.map((dataKey) => (
                                    <Line
                                        type="monotone"
                                        dataKey={dataKey.name}
                                        stroke={dataKey.color}
                                        key={dataKey.name}
                                    />
                                ))}
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>
            <div className="activities">
                <h2>Latest Activities</h2>
                {props.activities && (
                    <ul>
                        {props.activities.map((activity) => (
                            <li key={activity.text}>
                                <div>
                                    <p>{activity.text}</p>
                                    <time>{activity.time}</time>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default AdminSingle