import "./resetSuccessful.css";
import { Fragment, useState, useEffect } from "react";
import { Button, TextField, Grid, InputAdornment } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../../../assets/scholaritPics/logo2.png";
import Success from "../../../assets/scholaritPics/success.mp4";

function ResetSuccessful() {
    const navigate = useNavigate();

    return (
        <Fragment>
            <Grid container className="resetSuccessful" spacing={2}>
                <Grid item xs={1}></Grid>
                <Grid item xs={5} className="flex-center">
                    <img src={Logo} />
                </Grid>
                <Grid item xs={5} className="flex-center">
                    <div className="signup__form">
                        <div className="flex-center" style={{ width: "100%" }}>
                            <video autoPlay loop muted className="video">
                                <source src={Success} type="video/mp4" />
                            </video>
                        </div>
                        <h3 variant="h3" className="login__title">
                            <span className="orange-text">Nice job!</span>
                        </h3>
                        <h5 className="login__desc">
                            YOur password has been reset succesfully!
                            <br /> You can now login with your new account
                        </h5>
                        <Button
                            className="login__btn"
                            onClick={() => navigate("/login")}
                        >
                            Return to login screen
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </Fragment>
    );
}

export default ResetSuccessful;
