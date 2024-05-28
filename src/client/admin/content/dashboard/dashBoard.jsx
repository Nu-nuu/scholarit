import React, { useState, useEffect } from 'react';
import './dashboard.scss'
import TopBox from '../../components/topBox/topBox';
import ChartBox from '../../components/chartBox/chartBox';
import { barChartBoxRevenue } from '../../constants/dbCourse';
import BarChartBox from '../../components/barChartBox/barChartBox';
import { barChartBoxVisit } from '../../constants/dbWeb';
import PieChartBox from '../../components/pieChartBox/pieChartBox';
import BigChartBox from '../../components/bigChartBox/bigChartBox';
import { useSelector, useDispatch } from 'react-redux';
import { userListSelector, coursesSelector, orderByAdminSelector } from '../../../../store/sellectors';
import { getUserListThunk } from '../../../../store/apiThunk/userThunk';
import { getCoursesThunk } from '../../../../store/apiThunk/courseThunk';
import { getOrderByAdminThunk } from '../../../../store/apiThunk/orderThunk';



const Dashboard = () => {

  const dispatch = useDispatch();
  const userData = useSelector(userListSelector);
  const courseData = useSelector(coursesSelector);
  const orderData = useSelector(orderByAdminSelector);
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(100);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch user data
    dispatch(getUserListThunk({ pageNo, pageSize }))
      .then(() => setLoading(false))
      .catch(() => setLoading(false));

    // Fetch course data
    dispatch(getCoursesThunk({ pageNo, pageSize }))
      .then(() => setLoading(false))
      .catch(() => setLoading(false));

    // Fetch order data
    dispatch(getOrderByAdminThunk({ pageNo, pageSize }))
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [pageNo, pageSize]);

  // User
  const userCountByDay = userData?.items
    ? userData.items.reduce((countByDay, user) => {
      if (user && user.lastLogin) {
        const lastLogin = new Date(user.lastLogin);
        if (!isNaN(lastLogin)) {
          const dayOfWeek = lastLogin.getUTCDay();
          countByDay[dayOfWeek] = (countByDay[dayOfWeek] || 0) + 1;
        }
      }
      return countByDay;
    }, {})
    : {};

  const userCount = userData?.items
    ? userData?.items?.filter((item) => Object.values(item).every((value) => value !== null)).length
    : 0;
  const totalUsers = userData?.totalItems;

  const chartBoxUsers = {
    color: "#8884d8",
    link: 'user',
    icon: "/userIcon.svg",
    title: "Total Users",
    number: userCount,
    dataKey: "users",
    percentage: (
      (userCount / totalUsers) * 100
    ).toFixed(0),
    chartData: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => ({
      name: day,
      users: userCountByDay[index] || 0,
    })),
  };

  // Course
  const coursesByDay = courseData?.items
    ? courseData.items.reduce((countByDay, course) => {
      if (course && course.dateCreated) {
        const dateCreated = new Date(course.dateCreated);
        if (!isNaN(dateCreated)) {
          const dayOfWeek = dateCreated.getDay();
          const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek];
          countByDay[dayName] = (countByDay[dayName] || 0) + 1;
        }
      }
      return countByDay;
    }, {})
    : {};

  const courseCount = courseData?.items
    ? courseData.items.length
    : 0;
  const totalCourses = courseData?.totalItems;

  const chartBoxCourses = {
    color: "#8884d8",
    link: 'course',
    icon: "/productIcon.svg",
    title: "Total Course",
    number: courseCount.toString(),
    dataKey: "courses",
    percentage: (
      (courseCount / totalCourses) * 100
    ).toFixed(0),
    chartData: Object.entries(coursesByDay).map(([day, count]) => ({
      name: day,
      courses: count,
    })),
  };

  const totalViews = courseData?.items ? courseData?.items?.reduce((acc, course) => acc + course.view, 0) : 1;

  const latestCourseViews = courseData?.items ? courseData?.items[0].view : 1;

  const latestCoursePercentage = ((latestCourseViews / totalViews) * 100).toFixed(2);

  const chartBoxStudys = {
    color: "gold",
    link: 'course',
    icon: "/conversionIcon.svg",
    title: "Total Study",
    number: totalViews.toString(),
    dataKey: "ratio",
    percentage: parseFloat(latestCoursePercentage),
    chartData: courseData?.items ? courseData?.items?.map(course => ({ name: course.name, ratio: course.view })) : {}
  };

  // Order
  const revenueByDay = {};
  let totalRevenue = 0;
  orderData?.items ? orderData?.items?.forEach((item) => {
    const date = new Date(item.dateCreated);
    const dayOfWeek = date.getDay();
    const dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek];
    const price = item.price || 0;
    revenueByDay[dayName] = (revenueByDay[dayName] || 0) + price;
    totalRevenue += price;
  }) : {};

  const chartBoxRevenues = {
    color: "teal",
    link: 'order-course',
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: totalRevenue.toFixed(0) + "$",
    dataKey: "revenue",
    percentage: ((Object.values(revenueByDay).reduce((acc, val) => acc + val, 0) / totalRevenue) * 100).toFixed(0),
    chartData: Object.keys(revenueByDay).map((day) => ({
      name: day,
      revenue: revenueByDay[day],
    })),
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="dashboard">
          <div className="box-admin box1">
            <TopBox />
          </div>
          <div className="box-admin box2">
            <ChartBox chartData={chartBoxUsers} />
          </div>
          <div className="box-admin box3">
            <ChartBox chartData={chartBoxRevenues} />
          </div>
          <div className="box-admin box4">
            <PieChartBox />
          </div>
          <div className="box-admin box5">
            <ChartBox chartData={chartBoxCourses} />
          </div>
          <div className="box-admin box6">
            <ChartBox chartData={chartBoxStudys} />
          </div>
          <div className="box-admin box7">
            <BigChartBox />
          </div>
          <div className="box-admin box8">
            <BarChartBox chartData={barChartBoxVisit} />
          </div>
          <div className="box-admin box9">
            <BarChartBox chartData={barChartBoxRevenue} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard