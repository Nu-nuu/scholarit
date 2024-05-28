import React from 'react'
import { Link } from 'react-router-dom'
import "./navbarAdmin.scss";
import img from '../../../../assets/scholaritPics/avatar/4.jpg'


const NavbarAdmin = () => {
  return (
    <div className="navbar_admin">
      <div className="logo">
        <img src="dark-logo.svg" alt="" />
      </div>
      <div className="icons">
        <Link to="/admin/course"><img src="/search.svg" alt="" className="icon" /></Link>
        <Link to="/admin/category"><img src="/app.svg" alt="" className="icon" /></Link>
        <div className="notification">
          <Link to="/admin/order-course"> <img src="/notifications.svg" alt="" />
            <span>1</span></Link>
        </div>
        <div className="user">
          <Link to="/admin/admin-profile/1"><img
            src={img}
            alt=""
          />
            <span>Tan</span></Link>
        </div>
        <Link to="/admin/user"><img src="/settings.svg" alt="" className="icon" /></Link>
      </div>
    </div>
  )
}

export default NavbarAdmin