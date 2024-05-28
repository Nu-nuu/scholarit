
import "./sidenav.css"
import { useState } from "react"
import home from "../../assets/scholaritPics/HomeIcon.png";
import quiz from "../../assets/scholaritPics/quiz.svg";
import MenuItems from "./menuItems/menuItems"
import { useEffect } from "react";

const userLocal = JSON.parse(localStorage.getItem("user"));

export default function Sidenav() {
    const [isOpen, setIsOpen] = useState(false);
    const [menuItemList,setMenuItemList] = useState([])
    const handleClick = () => {
      setIsOpen(!isOpen);
    };
    const [activeItem, setActiveItem] = useState("");
    const handleItemClick = (item) => {
      setActiveItem(item);
    };
  
    useEffect(() => {
      const updatedMenuItemList = [
        {
          icon: quiz,
          path:
            "/upcomingTest",
          name:
            "Upcoming Tests",
            subMenus: [],
        },
        // {
        //   icon: quiz,
        //   path:
        //     "/course-detail",
        //   name:
        //     "Course Detail",
        //     subMenus: [],
        // },
        // {
        //   icon: quiz,
        //   path:
        //     "/myCourse",
        //   name:
        //     "MyCourse",
        //     subMenus: [],
        // },
        {
          icon: quiz,
          path:
            "/courses",
          name:
            "Courses",
            subMenus: [],
        },
        // {
        //   icon: quiz,
        //   path:
        //     "/mytest",
        //   name:
        //     "MyTest",
        //     subMenus: [],
        // },
      ];
        // updatedMenuItemList.unshift({
        //   icon: home,
        //   path: "/",
        //   name: "Home",
        //   subMenus: [],
        //   permission: "",
        // });
      setMenuItemList(updatedMenuItemList);
    }, [userLocal]);
    
  
    return (
      <div className={"sidenav " + (isOpen ? "" : "isClose")}>
        <div className="sidenav__option" onClick={handleClick}>
          <div className={"sidenav__option__icon " + (isOpen ? "active" : "")}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
        {menuItemList.map((item, index) => {
          return (
            <MenuItems
              item={item}
              key={index}
              isOpen={isOpen}
              activeItem={activeItem}
              handleItemClick={handleItemClick}
              setIsOpen={setIsOpen}
            />
          );
        })}
      </div>
    );
  }