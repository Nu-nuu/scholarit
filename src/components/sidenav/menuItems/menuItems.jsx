import React, { useState } from 'react'
import dropdownArrow from "../../../assets/scholaritPics/navi_open.png"
import { useNavigate } from 'react-router-dom';
import "./menuItems.css"
import { useEffect } from 'react';
export default function MenuItems({ item, isOpen, activeItem, handleItemClick, setIsOpen }) {
  const navigate = useNavigate()
  const [isDropdown, setIsDropdown] = useState(false);
  const [currentLocation, setCurrentLocation] = useState('')
  useEffect(() => {
    setCurrentLocation(location.pathname);
  }, [location.pathname]);
  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
  }
  const hanldeClick = () => {
    navigate(`${item.path}`)
    setIsOpen(false)
  }
  return (
    <>
      {
        item.subMenus.length > 0 ?
          (<>
            <div style={{ width: isOpen ? "236px" : "100px" }} className="sidenav__option" onClick={handleDropdown}>
              <img src={item.icon} alt="" className="sidenav__option__icon" />
              <div style={{ display: isOpen ? "" : "none" }} className="sidenav__option__text">{item.name}</div>
              <div className='sidenav__option__dropdownArrow'>
                <img style={{ display: isOpen ? "" : "none" }}
                  src={dropdownArrow} alt=""
                />
              </div>
            </div>
          </>
          ) : (
            <div style={{ width: isOpen ? "240px" : "100px" }} className={"sidenav__option"} onClick={hanldeClick}>
              <img src={item.icon} alt="" className="sidenav__option__icon" />
              <div style={{ display: isOpen ? "" : "none" }} className={"sidenav__option__text"}>{item.name}</div>
            </div>
          )
      }
    </>
  )
}
