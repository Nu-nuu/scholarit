import "./forgotPassword.css";
import { Fragment, useState } from "react";
import { Button, TextField, Grid, InputAdornment } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { sendOTPThunk, checkOTPThunk } from "../../../store/apiThunk/userThunk";
import Swal from "sweetalert2";
import Logo from "../../../assets/scholaritPics/logo2.png";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import VpnKeyOffOutlinedIcon from "@mui/icons-material/VpnKeyOffOutlined";

function ForgotPassword() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [fault, setFault] = useState(false);
    const [showCode, setShowCode] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);
    const [thisEmail, setThisEmail] = useState("");

    const formik = useFormik({
        initialValues: {
            email: "",
            code: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Required"),
            code: Yup.string().required("Required"),
        }),
        onSubmit: async (values) => {
            try {
                dispatch(
                    checkOTPThunk({
                        email: values.email,
                        otp: values.code,
                    })
                )
                    .unwrap()
                    .then((response) => {
                        if (response === true) {
                            Swal.fire({
                                title: "Success!!",
                                text: "Enter code successfully!!",
                                icon: "success",
                                showCancelButton: false,
                                showConfirmButton: false,
                                background: "white",
                                timer: 1500,
                                timerProgressBar: true,
                                scrollbarPadding: false,
                            }).then(() => {
                                navigate(`/resetPassword?email=${values.email}`)
                            });
                        } else {
                            setShowAlert(true);
                            setFault(true);
                                setAlertMessage("Wrong code.");
                        }
                    })
            } catch (error) {
                // Handle the error
                console.log(error);
            }
        },
    });

    const handleEmailChange = (event) => {
        setShowAlert(false);
        setThisEmail(event.target.value); // Update the email state
        formik.handleChange(event); // Call formik's handleChange to manage form state
    };

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleSendCode = () => {
        // Disable the button when it is clicked
        setIsButtonDisabled(true);

        if (thisEmail === "") {
            setShowAlert(true);
            setFault(true);
            setAlertMessage("Enter Email!");
            setIsButtonDisabled(false); // Enable the button again
            return;
        } else {
            dispatch(sendOTPThunk(thisEmail))
                .unwrap()
                .then((response) => {
                    Swal.fire({
                        title: "Success!!",
                        text: "We Have Sent You An Email!",
                        icon: "success",
                        showCancelButton: false,
                        showConfirmButton: false,
                        background: "white",
                        timer: 2000,
                        timerProgressBar: true,
                        scrollbarPadding: false,
                    }).then(() => {
                        setIsButtonDisabled(true); // Enable the button after 1 minute
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
        }
    };

    return (
        <Fragment>
            <Grid container className="forgotPassword" spacing={2}>
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
                                forgot your password?
                            </span>
                        </h3>
                        <h5 className="login__desc">
                            Fear not, We will send a code to verify the
                            information you have registered, please check your
                            email inbox.
                        </h5>
                        <form onSubmit={formik.handleSubmit}>
                            <div>
                                <TextField
                                    className="login__input"
                                    id="email"
                                    label="Enter Your Email"
                                    variant="outlined"
                                    type="email"
                                    value={formik.values.email}
                                    onChange={handleEmailChange}
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
                            <Grid container spacing={2} className="flex-center">
                                <Grid item xs={8} style={{ marginTop: "13px" }}>
                                    <TextField
                                        className="login__input"
                                        id="code"
                                        label="Enter Code"
                                        variant="outlined"
                                        type={showCode ? "text" : "password"}
                                        value={formik.values.code}
                                        onChange={(e) => {
                                            formik.handleChange(e);
                                            setShowAlert(false);
                                        }}
                                        fullWidth
                                        autoComplete="code"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    {showCode ? (
                                                        <VpnKeyOffOutlinedIcon
                                                            className="login__view__password__btn"
                                                            onClick={() =>
                                                                setShowCode(
                                                                    !showCode
                                                                )
                                                            }
                                                        />
                                                    ) : (
                                                        <VpnKeyOutlinedIcon
                                                            className="login__view__password__btn"
                                                            onClick={() =>
                                                                setShowCode(
                                                                    !showCode
                                                                )
                                                            }
                                                        />
                                                    )}
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    <div className="login__validation__error">
                                        {formik.touched.code &&
                                        formik.errors.code ? (
                                            <p>{formik.errors.code}</p>
                                        ) : null}
                                    </div>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button
                                        className={
                                            !isButtonDisabled
                                                ? "login__btn"
                                                : "login__btn__disable"
                                        }
                                        variant="contained"
                                        onClick={handleSendCode}
                                        disabled={isButtonDisabled}
                                    >
                                        Send Code
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                spacing={2}
                                className="flex-center"
                                style={{ marginTop: "15px" }}
                            >
                                <Grid item xs={6}>
                                    <Button
                                        className="login__btn"
                                        variant="contained"
                                        type="submit"
                                    >
                                        Continue
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <p className="login__link">
                                        Haven't received it yet?{" "}
                                        <span
                                            style={{
                                                textDecoration: "underline",
                                                cursor: "pointer",
                                            }}
                                            onClick={() =>
                                                setIsButtonDisabled(false)
                                            }
                                        >
                                            Try again!
                                        </span>
                                    </p>
                                </Grid>
                            </Grid>
                        </form>
                        {showAlert && fault == true && (
                            <div
                                className="flex-center"
                                style={{ width: "100%" }}
                            >
                                <div
                                    style={{
                                        height: "59px",
                                        marginTop: "50px",
                                        width: "fit-content",
                                    }}
                                >
                                    <Alert
                                        severity="error"
                                        className="login__alert"
                                    >
                                        <AlertTitle>{alertMessage}</AlertTitle>
                                    </Alert>
                                </div>
                            </div>
                        )}
                        {showAlert && fault == false && (
                            <div
                                className="flex-center"
                                style={{ width: "100%" }}
                            >
                                <div
                                    style={{
                                        height: "59px",
                                        marginTop: "50px",
                                        width: "fit-content",
                                    }}
                                >
                                    <Alert
                                        severity="success"
                                        className="login__alert__success"
                                    >
                                        <AlertTitle>{alertMessage}</AlertTitle>
                                    </Alert>
                                </div>
                            </div>
                        )}
                    </div>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </Fragment>
    );
}

export default ForgotPassword;
