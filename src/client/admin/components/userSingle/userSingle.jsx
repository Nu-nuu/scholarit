import React from 'react';
import {
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import "./userSingle.scss";

const formatDate = (dateString) => {
    if (!dateString) {
        return ''; // Xử lý trường hợp props.dob là null hoặc undefined
    }

    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Lưu ý rằng tháng bắt đầu từ 0, nên cộng thêm 1.
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
};

const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) {
        return ''; // Xử lý trường hợp props.lastLogin là null hoặc undefined
    }

    const dateTime = new Date(dateTimeString);
    const day = dateTime.getDate();
    const month = dateTime.getMonth() + 1; // Lưu ý rằng tháng bắt đầu từ 0, nên cộng thêm 1.
    const year = dateTime.getFullYear();
    const hours = dateTime.getHours().toString().padStart(2, '0');
    const minutes = dateTime.getMinutes().toString().padStart(2, '0');
    const seconds = dateTime.getSeconds().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

const UserSingle = (props) => {
    return (
        <div className="single">
            <div className="view">
                <div className="info">
                    <div className="topInfo">
                        {props.img && <img src={props.img} alt="User Avatar" />}
                        {props.fullName && <h1>{props.fullName}</h1>}
                        <button>Update</button>
                    </div>
                    <div className="details">
                        {props.email && (
                            <div className="item">
                                <span className='itemTitle'>Email: </span>
                                <span className='itemValue'>{props.email}</span>
                            </div>
                        )}
                        {props.dob && (
                            <div className="item">
                                <span className='itemTitle'>Date of Birth: </span>
                                <span className='itemValue'>{formatDate(props.dob)}</span>
                            </div>
                        )}
                        {props.address && (
                            <div className="item">
                                <span className='itemTitle'>Address: </span>
                                <span className='itemValue'>{props.address}</span>
                            </div>
                        )}
                        {props.hobby && (
                            <div className="item">
                                <span className='itemTitle'>Hobby: </span>
                                <span className='itemValue'>{props.hobby}</span>
                            </div>
                        )}
                        {props.strength && (
                            <div className="item">
                                <span className='itemTitle'>Strength: </span>
                                <span className='itemValue'>{props.strength}</span>
                            </div>
                        )}
                    </div>
                </div>
                <hr />
                {/* {props.chart && (
                    <div className="chart">
                        <ResponsiveContainer width="100%" height={300}>
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
                )} */}
            </div>
            <div className="activities">
                <h2>Latest Activities</h2>
                <p>{formatDateTime(props.lastLogin)}</p>
            </div>
        </div>
    );
};

export default UserSingle;
