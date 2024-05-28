import React, { useState, useEffect } from 'react';
import DataTable from "../../components/dataTable/dataTable";
import './user.scss';
import { useSelector, useDispatch } from 'react-redux';
import { userListSelector } from '../../../../store/sellectors';
import { getUserListThunk } from '../../../../store/apiThunk/userThunk';
import Pagination from '@mui/material/Pagination';

const userColumns = [
  { field: "id", headerName: "ID", width: 90 },
  { field: "fullName", headerName: "Full Name", width: 150 },
  { field: "dob", headerName: "Date of Birth", width: 150 },
  { field: "address", headerName: "Address", width: 250 },
  { field: "hobby", headerName: "Hobby", width: 150 },
  { field: "lastLogin", headerName: "Last Login", width: 150 },
  { field: "strength", headerName: "Strength", width: 150 },
  { field: "email", headerName: "Email", width: 150 },
  { field: "avatarUrl", headerName: "Avatar URL", width: 150 },
];

const User = () => {
  const dispatch = useDispatch();
  const userData = useSelector(userListSelector);
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [uploadClick, setUploadClick] = useState(false);

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setPageNo(1);
  };

  const handlePageNoChange = (newPageNo) => {
    setPageNo(newPageNo);
  };

  const handlePaginationChange = (event, value) => {
    const newPageNo = value;
    setPageNo(newPageNo);
    dispatch(getUserListThunk({ pageNo: newPageNo, pageSize }));
  };

  useEffect(() => {
    dispatch(getUserListThunk({ pageNo, pageSize }));
  }, [pageNo, pageSize, uploadClick]);

  setTimeout(() => {
    setUploadClick(false);
  }, 10);

  return (
    <div className="users">
      <div className="info">
        <h1>All User</h1>
        
      </div>
      {userData && userData.items ? (
        <div className='user_data_table'>
          <DataTable
            slug="admin/user-page"
            columns={userColumns}
            rows={userData.items}
            pageNo={pageNo}
            pageSize={pageSize}
            totalItems={userData.totalItems}
            onPageChange={handlePageNoChange}
            onPageSizeChange={handlePageSizeChange}
          />
          <Pagination
            className='user_pagination'
            count={Math.ceil(userData.totalItems / pageSize)}
            color="primary"
            page={pageNo}
            onChange={handlePaginationChange}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default User;

