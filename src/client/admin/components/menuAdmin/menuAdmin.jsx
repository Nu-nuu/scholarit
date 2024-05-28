import React from 'react'
import "./menuAdmin.scss"
import {menu} from '../../constants/dbMenu'
import { Link } from "react-router-dom";


const MenuAdmin = () => {
  return (
    <div className="menu_admin">
      {menu.map((item) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MenuAdmin