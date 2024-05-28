import Dropdown from "./DropDown";
import { Link } from "react-router-dom";
import { useState } from "react";

const MenuItems = ({ item, isOpen }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="menu-items">
      {item.subMenus.length > 0 ? (
        <>
          <div
            className="sidenav__option"
            onClick={() => setDropdown(!dropdown)}
          >
            <img
              src={item.icon}
              alt={item.name}
              className="sidenav__option__icon"
            ></img>
            <div style={{ display: isOpen ? "" : "none" }}>{item.name}</div>

            <div
              style={{ display: isOpen ? "" : "none" }}
              className="drop_arrow"
            >
              <div
                className={
                  dropdown ? "dropdown_arrow_open" : "dropdown_arrow_close"
                }
              ></div>
            </div>
          </div>
          <div
            style={{
              display: dropdown && isOpen ? "block" : "none",
            }}
            className="dropdown"
          >
            <Dropdown subMenus={item.subMenus} />
          </div>
        </>
      ) : (
        <Link to={item.path}>
          <div className="sidenav__option">
            <img
              src={item.icon}
              alt={item.name}
              className="sidenav__option__icon"
            ></img>
            <div style={{ display: isOpen ? "block" : "none" }}>
              {item.name}
            </div>
          </div>
        </Link>
      )}
    </div>
  );
};

export default MenuItems;
