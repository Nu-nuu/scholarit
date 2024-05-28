import "./loginUser.css";
import { Fragment, useState } from "react";
import { Button, TextField, Grid, InputAdornment } from "@mui/material";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../../store/apiThunk/userThunk";
import Swal from "sweetalert2";
import Logo from "../../../assets/scholaritPics/logo2.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

function LoginUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Required"),
            password: Yup.string().required("Required"),
        }),
        onSubmit: async (values) => {
            try {
                dispatch(
                    loginThunk({
                        // Assuming `login` is a function that makes the login API request
                        email: values.email,
                        password: values.password,
                    })
                )
                    .unwrap()
                    .then((response) => {
                        Swal.fire({
                            title: "Success!!",
                            text: "Login successfully!!",
                            icon: "success",
                            showCancelButton: false,
                            showConfirmButton: false,
                            background: "white",
                            timer: 1500,
                            timerProgressBar: true,
                            scrollbarPadding: false,
                        }).then(() => {
                            localStorage.setItem(
                                "accessToken",
                                JSON.stringify(response)
                            );
                            navigate("/")
                        });
                    })
                    .catch((error) => {
                        // Handle login error
                        setShowAlert(true);
                        if (error.error) {
                            setAlertMessage(error.error);
                            return;
                        } else {
                            setAlertMessage("An unknown error occurred.");
                            return; //
                        }
                    });
            } catch (error) {
                if (error.response) {
                    setShowAlert(true);
                    if (error.response.status === 401) {
                        setAlertMessage("Incorrect email or password");
                    }
                }
            }
        },
    });

    return (
        <Fragment>
            <Grid container className="loginUser" spacing={2}>
                <Grid item xs={1}></Grid>
                <Grid item xs={5} className="flex-center">
                    <Link to="/">
                        <img src={Logo} />
                    </Link>
                </Grid>
                <Grid item xs={5} className="flex-center">
                    <div className="login__form">
                        <h3 variant="h3" className="login__title">
                            <span className="blue-text">
                                Unlock Your Potential,{" "}
                            </span>
                            <br />
                            <span className="orange-text">Sign in</span>{" "}
                            <span className="blue-text"> to Math Mastery!</span>
                        </h3>

                        <form onSubmit={formik.handleSubmit}>
                            <TextField
                                className="login__input"
                                id="email"
                                label="email"
                                variant="outlined"
                                value={formik.values.email}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    setShowAlert(false);
                                }}
                                type="email"
                                fullWidth
                                autoComplete="email"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <EmailOutlinedIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <div className="login__validation__error">
                                {formik.touched.email && formik.errors.email ? (
                                    <p>{formik.errors.email}</p>
                                ) : null}
                            </div>
                            <TextField
                                className="login__input"
                                id="password"
                                label="Password"
                                variant="outlined"
                                type={showPassword ? "text" : "password"}
                                value={formik.values.password}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    setShowAlert(false);
                                }}
                                fullWidth
                                margin="dense"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            {showPassword ? (
                                                <VisibilityOffOutlined
                                                    className="login__view__password__btn"
                                                    onClick={() =>
                                                        setShowPassword(
                                                            !showPassword
                                                        )
                                                    }
                                                />
                                            ) : (
                                                <VisibilityOutlined
                                                    className="login__view__password__btn"
                                                    onClick={() =>
                                                        setShowPassword(
                                                            !showPassword
                                                        )
                                                    }
                                                />
                                            )}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <div className="login__validation__error">
                                {formik.touched.password &&
                                formik.errors.password ? (
                                    <p>{formik.errors.password}</p>
                                ) : null}
                            </div>
                            <Grid
                                container
                                spacing={2}
                                className="flex-center"
                                style={{
                                    marginTop: "10px",
                                    marginBottom: "20px",
                                }}
                            >
                                <Grid item xs={6}>
                                    <Link
                                        to="/forgotPassword"
                                        variant="body2"
                                        align="center"
                                        underline="hover"
                                        className="login__forgot"
                                    >
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button
                                        className="login__btn"
                                        variant="contained"
                                        type="submit"
                                        fullWidth
                                    >
                                        Sign in
                                    </Button>
                                </Grid>
                            </Grid>
                            <Link
                                to="/signup"
                                variant="body2"
                                align="center"
                                underline="hover"
                                className="login__link"
                            >
                                Don't have an account?{" "}
                                <span style={{ textDecoration: "underline" }}>
                                    Sign Up Now!
                                </span>
                            </Link>
                        </form>
                        {showAlert && (
                            <div
                                style={{
                                    width: "100%",
                                    height: "59px",
                                    marginTop: "70px",
                                }}
                                className="flex-center"
                            >
                                <Alert
                                    severity="error"
                                    className="login__alert"
                                >
                                    <AlertTitle>{alertMessage}</AlertTitle>
                                </Alert>
                            </div>
                        )}
                    </div>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </Fragment>
    );
}

export default LoginUser;
