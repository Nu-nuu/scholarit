import "./signup.css";
import { Fragment, useState } from "react";
import { Button, TextField, Grid, InputAdornment } from "@mui/material";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { signupThunk } from "../../../store/apiThunk/userThunk";
import Swal from "sweetalert2";
import Logo from "../../../assets/scholaritPics/logo2.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

function Signup() {
    const navigate = useNavigate();
    const dispatch = useDispatch();  

    const [fault, setFault] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
            confirm_password: "",
            email: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Required"),
            password: Yup.string().required("Required"),
            confirm_password: Yup.string().required("Required"),
            email: Yup.string().required("Required"),
        }),
        onSubmit: async (values) => {
            try {
                if (values.password !== values.confirm_password) {
                    setShowAlert(true);
                    setFault(true);
                    setAlertMessage("Incorrect confirm password");
                    return;
                }
                dispatch(
                    signupThunk({
                        name: values.username,
                        email: values.email,
                        password: values.password,
                    })
                    ).unwrap()
                    .then((response) => {
                        Swal.fire({
                            title: "Success!!",
                            // text: "Login successfully!!",
                            icon: "success",
                            showCancelButton: false,
                            showConfirmButton: false,
                            background: "white",
                            timer: 1500,
                            timerProgressBar: true,
                            scrollbarPadding: false,
                        }).then(() => {
                            navigate(`/userInfoSignup?email=${values.email}&password=${values.password}`)
                        });
                    })
                    .catch((error) => {
                        // Handle login error
                        setShowAlert(true);
                        setFault(true);
                        if (error.error) {
                            setAlertMessage(error.error);
                            return;
                        } else {
                            setAlertMessage("An unknown error occurred.");
                            return; //
                        }
                    });
            } catch (error) {
                // Handle the error
                console.log(error);
            }
        },
    });

    return (
        <Fragment>
            <Grid container className="signup" spacing={2}>
                <Grid item xs={1}></Grid>
                <Grid item xs={5} className="flex-center">
                    <Link to="/">
                        <img src={Logo} />
                    </Link>
                </Grid>
                <Grid item xs={5} className="flex-center">
                    <div className="signup__form">
                        <h3 variant="h3" className="login__title">
                            <span className="orange-text">
                                Start Your Journey To Learn more about
                                <br /> math by
                            </span>{" "}
                            <span className="blue-text">
                                Creating a free account
                            </span>
                        </h3>
                        <form onSubmit={formik.handleSubmit}>
                            <Grid container spacing={2} className="flex-center">
                                <Grid item xs={8} style={{ marginTop: "13px" }}>
                                    <TextField
                                        className="login__input"
                                        id="username"
                                        label="Username"
                                        variant="outlined"
                                        value={formik.values.username}
                                        onChange={(e) => {
                                            formik.handleChange(e);
                                            setShowAlert(false);
                                        }}
                                        fullWidth
                                        autoComplete="username"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <PersonOutlineOutlinedIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <div className="login__validation__error">
                                        {formik.touched.username &&
                                        formik.errors.username ? (
                                            <p>{formik.errors.username}</p>
                                        ) : null}
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button
                                        className="login__btn"
                                        variant="contained"
                                        type="submit"
                                    >
                                        Continue
                                    </Button>
                                </Grid>
                            </Grid>
                            <div>
                                <TextField
                                    className="login__input"
                                    id="email"
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    value={formik.values.email}
                                    onChange={(e) => {
                                        formik.handleChange(e);
                                        setShowAlert(false);
                                    }}
                                    fullWidth
                                    margin="dense"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <EmailOutlinedIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <div className="login__validation__error">
                                    {formik.touched.email &&
                                    formik.errors.email ? (
                                        <p>{formik.errors.email}</p>
                                    ) : null}
                                </div>
                            </div>
                            <div>
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
                            </div>
                            <div>
                                <TextField
                                    className="login__input"
                                    id="confirm_password"
                                    label="Confirm Password"
                                    variant="outlined"
                                    type={showPassword1 ? "text" : "password"}
                                    value={formik.values.confirm_password}
                                    onChange={(e) => {
                                        formik.handleChange(e);
                                        setShowAlert(false);
                                    }}
                                    fullWidth
                                    margin="dense"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                {showPassword1 ? (
                                                    <VisibilityOffOutlined
                                                        className="login__view__password__btn"
                                                        onClick={() =>
                                                            setShowPassword1(
                                                                !showPassword1
                                                            )
                                                        }
                                                    />
                                                ) : (
                                                    <VisibilityOutlined
                                                        className="login__view__password__btn"
                                                        onClick={() =>
                                                            setShowPassword1(
                                                                !showPassword1
                                                            )
                                                        }
                                                    />
                                                )}
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <div className="login__validation__error">
                                    {formik.touched.confirm_password &&
                                    formik.errors.confirm_password ? (
                                        <p>{formik.errors.confirm_password}</p>
                                    ) : null}
                                </div>
                            </div>
                            <Link
                                to="/login"
                                variant="body2"
                                align="center"
                                underline="hover"
                                className="login__link"
                            >
                                Already have an account?{" "}
                                <span style={{ textDecoration: "underline" }}>
                                    Sign In Now!
                                </span>
                            </Link>
                        </form>
                        <div className="flex-center" style={{ width: "100%" }}>
                            <div
                                style={{
                                    height: "59px",
                                    marginTop: "50px",
                                    width: "fit-content",
                                }}
                            >
                                {showAlert && fault == true && (
                                    <Alert
                                        severity="error"
                                        className="login__alert"
                                    >
                                        <AlertTitle>{alertMessage}</AlertTitle>
                                    </Alert>
                                )}
                                {showAlert && fault == false && (
                                    <Alert
                                        severity="success"
                                        className="login__alert__success"
                                    >
                                        <AlertTitle>{alertMessage}</AlertTitle>
                                    </Alert>
                                )}
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </Fragment>
    );
}

export default Signup;
