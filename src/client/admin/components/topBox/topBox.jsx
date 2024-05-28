import React, { useState, useEffect } from 'react';
import "./topBox.scss"
import { topDealUsers } from '../../constants/dbUser'
import { useSelector, useDispatch } from 'react-redux';
import { userListSelector } from '../../../../store/sellectors';
import { getUserListThunk } from '../../../../store/apiThunk/userThunk';

const TopBox = () => {

    const dispatch = useDispatch();
    const userData = useSelector(userListSelector);
    const [pageNo, setPageNo] = useState(1);
    const [pageSize, setPageSize] = useState(100);

    useEffect(() => {
        dispatch(getUserListThunk({ pageNo, pageSize }));
    }, [pageNo, pageSize]);

    const filteredItems = userData?.items ? userData?.items?.filter(item => {
        for (const key in item) {
            if (item[key] === null) {
                return false;
            }
        }
        return true;
    }) : {};

    const startIndex = 2;
    const endIndex = 9;

    let slicedItems = [];
    if (Array.isArray(filteredItems)) {
        slicedItems = filteredItems.slice(startIndex, endIndex);
    }

    return (
        <div className="topBox">
            <h2>Top Students</h2>
            <div className="list">
                {slicedItems?.map(user => (
                    <div className="listItem" key={user.id}>
                        <div className="user">
                            {user.avatarUrl && <img src={user.avatarUrl} alt="User Avatar" />}
                            <div className="userTexts">
                                <span className="username">{user.fullName}</span>
                                <span className="email">{user.email}</span>
                            </div>
                        </div>
                        {/* <span className="amount">{user.amount} pt</span> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopBox