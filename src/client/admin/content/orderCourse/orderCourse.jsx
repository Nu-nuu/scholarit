import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DoDisturbOffOutlinedIcon from '@mui/icons-material/DoDisturbOffOutlined';
import DoDisturbOffIcon from '@mui/icons-material/DoDisturbOff';
import List from '@mui/material/List';
import Pagination from '@mui/material/Pagination';
import './orderCourse.scss';
import { useSelector, useDispatch } from 'react-redux';
import Swal from "sweetalert2";
import { orderByAdminSelector, orderDetailSelector, userListSelector } from '../../../../store/sellectors'; // Chắc chắn rằng đường dẫn là đúng
import { getOrderByAdminThunk, updateOrderThunk, getOrderByIdThunk } from '../../../../store/apiThunk/orderThunk';
import { getUserListThunk } from '../../../../store/apiThunk/userThunk';


const OrderCourse = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [pageSizes, setPageSizes] = useState(100);
  const orderList = useSelector(orderByAdminSelector);
  const orderDetail = useSelector(orderDetailSelector);
  const user = useSelector(userListSelector);
  const dispatch = useDispatch();
  const [uploadClick, setUploadClick] = useState(false);
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    dispatch(getOrderByAdminThunk({ pageNo, pageSize }));
  }, [pageNo, pageSize, uploadClick]);

  useEffect(() => {
    dispatch(getUserListThunk({ pageNo, pageSizes }));
  }, [pageNo, pageSizes, uploadClick]);

  const viewOrderDetails = (order) => {
    setSelectedOrder(order);
    if (order) {
      dispatch(getOrderByIdThunk(order.id))
        .then((response) => {
          console.log('Order details have been fetched');
        })
        .catch((error) => {
          console.error('Failed to fetch order details:', error);
        });
    }
  };

  const markOrderAsCompleted = (order) => {
    if (order.status !== 2) {
      dispatch(updateOrderThunk({ orderId: order.id, status: 2 }))
        .then(() => {
          Swal.fire({
            title: 'Completed',
            text: 'Completed order successful!',
            icon: 'success',
            showConfirmButton: false,
            showCancelButton: false,
            timer: 2000,
          });
          setUploadClick(true);
        })
        .catch((error) => {
          Swal.fire({
            title: 'Error',
            text: 'Completed failed. Please try again.',
            icon: 'error',
          });
          console.error('Completed error:', error);
        });
    }
  };

  const markOrderAsRejected = (order) => {
    if (order.status !== 0) {
      dispatch(updateOrderThunk({ orderId: order.id, status: 0 }))
        .then(() => {
          Swal.fire({
            title: 'Rejected',
            text: 'Rejected successful!',
            icon: 'success',
            showConfirmButton: false,
            showCancelButton: false,
            timer: 2000,
          });
          setUploadClick(true);
        })
        .catch((error) => {
          Swal.fire({
            title: 'Error',
            text: 'Rejected failed. Please try again.',
            icon: 'error',
          });
          console.error('Rejected error:', error);
        });
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 1:
        return 'Pending';
      case 2:
        return 'Accepted';
      case 0:
        return 'Rejected';
      default:
        return 'Unknown';
    }
  };
  const dateFormatter = new Intl.DateTimeFormat('en-US', { year: '2-digit', month: '2-digit', day: '2-digit' });
  const timeFormatter = new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

  const getFullName = (userId) => {
    const foundUser = user?.items?.find((u) => u.id === userId);
    return foundUser ? foundUser?.fullName : 'Unknown';
  }
  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setPageNo(1);
  };

  const handlePageChange = (event, newPage) => {
    setPageNo(newPage);
    dispatch(getOrderByAdminThunk({ pageNo: newPage, pageSize }))
  };

  useEffect(() => {
    if (orderList?.items) {
      const data = orderList?.items;
      setOrderData(data)
    }
  }, [pageNo, pageSize, orderList]);

  setTimeout(() => {
    setUploadClick(false);
  }, 10);

  return (
    <div>
      <h1>Order Management</h1>
      <div className="order_page">
        <div className="flex_container">
          <div className="order_list">
            <List sx={{
              position: 'relative',
              overflow: 'auto',
              maxHeight: 650,
            }}>
              <table className="order_table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>User Name</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Note</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orderData?.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{getFullName(order.userId)}</td>
                      <td>{dateFormatter.format(new Date(order.dateCreated))}</td>
                      <td>{timeFormatter.format(new Date(order.dateCreated))}</td>
                      <td>${order.price.toFixed(2)}</td>
                      <td>{getStatusText(order.status)}</td>
                      <td>{order.note}</td>
                      <td>
                        <div className="order_material">
                          <Tooltip title="View Details">
                            <IconButton color='primary' onClick={() => viewOrderDetails(order)}>
                              <VisibilityIcon />
                            </IconButton>
                          </Tooltip>
                          {order.status !== 2 ? (
                            <Tooltip title="Mark Completed">
                              <IconButton color='primary' onClick={() => markOrderAsCompleted(order)}>
                                <CheckCircleOutlineIcon />
                              </IconButton>
                            </Tooltip>
                          ) : (
                            <Tooltip title="Order is Paid">
                              <IconButton color='warning' >
                                <CheckCircleIcon />
                              </IconButton>
                            </Tooltip>
                          )}
                          {order.status !== 0 ? (
                            <Tooltip title="Mark Reject">
                              <IconButton color='primary' onClick={() => markOrderAsRejected(order)}>
                                <DoDisturbOffOutlinedIcon />
                              </IconButton>
                            </Tooltip>
                          ) : (
                            <Tooltip title="Order is Rejected">
                              <IconButton color='error' >
                                <DoDisturbOffIcon />
                              </IconButton>
                            </Tooltip>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </List>
            <Pagination
              className='order_pagination'
              count={Math.ceil(orderList.totalItems / pageSize)}
              color="primary"
              page={pageNo}
              onChange={handlePageChange}
            />
          </div>
          <div className="order_details">
            <h2>Order Details</h2>
            <div className="order_details_selected">
              {orderDetail && (
                <div>
                  <p>UserName: {getFullName(orderDetail.userId)}</p>
                  <p>Price: {orderDetail.price} $</p>
                  <p>Status: {getStatusText(orderDetail.status)}</p>
                  <p>Note: {orderDetail.note}</p>
                  <p>Date Created: {new Date(orderDetail.dateCreated).toLocaleString()}</p>
                  {/* <h3>Feedback:</h3> */}
                  {/* <div className="order_items">
                    <ul>
                      {orderDetail && orderDetail.items && orderDetail.items.map((item) => (
                        <li key={item.id}>
                          <p>Course Name: {item.courseName} </p>
                          <p>Rate: {item.rate}</p>
                          <p>Feedback: {item.feedBack}</p>
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCourse;
