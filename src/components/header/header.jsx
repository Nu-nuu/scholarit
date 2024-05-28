import "./header.css";
import * as React from "react";
import logo from "../../assets/scholaritPics/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import home from "../../assets/scholaritPics/home.png";
import bell from "../../assets/scholaritPics/notification.png";
import userpic from "../../assets/scholaritPics/user.png";
import Popover from "@mui/material/Popover";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.clear();
        Swal.fire({
            title: "Success!!",
            text: "Logout successfully!!",
            icon: "success",
            showCancelButton: false,
            showConfirmButton: false,
            background: "white",
            timer: 1500,
            timerProgressBar: true,
            scrollbarPadding: false,
        }).then(() => {
            navigate("/");
        });
    };
    
    const handleSignIn = () => {
        localStorage.clear();
        navigate("/login");
    };
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            {/* <div className="homepage_search_box">
                <SearchIcon />
                <input className="homepage_search_text" placeholder="Search" />
            </div> */}
            <div className="flex-center">
                {/* <img src={bell} /> */}
                <div onClick={handleClick} style={{ cursor: "pointer" }}>
                    <img src={userpic} />
                </div>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                    }}
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    style={{ marginTop: "10px" }}
                >
                    {accessToken === null && (
                        <div
                            style={{ padding: "15px", cursor: "pointer" }}
                            onClick={handleSignIn}
                        >
                            Sign In
                        </div>
                    )}
                    {accessToken !== null && (
                        <div style={{ padding: "15px" }}>
                            <Link to="/userProfile">View Profile</Link>
                            <div
                                onClick={handleLogout}
                                style={{
                                    cursor: "pointer",
                                    marginTop: "10px",
                                    borderTop: "solid 1px gray",
                                    paddingTop: "10px",
                                }}
                            >
                                Log out
                            </div>
                        </div>
                    )}
                </Popover>
                <Link to="/">
                    <img src={home} />
                </Link>
            </div>
        </div>
    );
}
