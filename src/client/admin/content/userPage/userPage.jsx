import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import UserSingle from '../../components/userSingle/userSingle'
import { useParams } from 'react-router-dom';
import { userInfoByAdminSelector } from '../../../../store/sellectors';
import { getUserInfoByAdminThunk } from '../../../../store/apiThunk/userThunk';

const UserPage = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(userInfoByAdminSelector)
    useEffect(() => {
        dispatch(getUserInfoByAdminThunk(id));
    }, [dispatch, id]);
    return (
        <div className='user'>
            <UserSingle
                id={user.id}
                img={user.avatarUrl}
                dob={user.dob}
                email={user.email}
                address={user.address}
                fullName={user.fullName}
                hobby={user.hobby}
                lastLogin={user.lastLogin}
                strength={user.strength}
            />
        </div>
    )
}

export default UserPage