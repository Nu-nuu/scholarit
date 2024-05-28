import "./resetPassword.css";
import { Fragment, useState } from "react";
import { Button, TextField, Grid, InputAdornment } from "@mui/material";
import { VisibilityOutlined, VisibilityOffOutlined } from "@mui/icons-material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { changePasswordThunk } from "../../../store/apiThunk/userThunk";
import Swal from "sweetalert2";
import Logo from "../../../assets/scholaritPics/logo2.png";

function ResetPassword() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [searchParams, setSearchParams] = useSearchParams();
    const email = searchParams.get("email");

    const [fault, setFault] = useState(false);
    const [showCode, setShowCode] = useState(false);
    const [showCode1, setShowCode1] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState(null);

    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            password: Yup.string().required("Required"),
            confirmPassword: Yup.string().required("Required"),
        }),
        onSubmit: async (values) => {
            try {
                if (values.password !== values.confirmPassword) {
                    setShowAlert(true);
                    setFault(true);
                    setAlertMessage("Incorrect confirm password");
                    return;
                }
                dispatch(
                    changePasswordThunk({
                        email: email,
                        newPassword: values.password,
                    })
                )
                    .unwrap()
                    .then((response) => {
                        Swal.fire({
                            title: "Success!!",
                            text: "You have reset your password successfully!!",
                            icon: "success",
                            showCancelButton: false,
                            showConfirmButton: false,
                            background: "white",
                            timer: 1500,
                            timerProgressBar: true,
                            scrollbarPadding: false,
                        }).then(() => {
                            navigate("/resetSuccessful");
                        });
                    });
            } catch (error) {
                // Handle the error
            }
        },
    });

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
                                reset your password
                            </span>
                        </h3>
                        <h5 className="login__desc">
                            gOOD JOB! YOU'RE oNE STEP CLOSER TO GET BACK YOUR
                            ACCOUNT, PLEASE NOTED THAT THE NEW PASSWORD SHOULD
                            BE MORE SECURE.
                        </h5>
                        <form onSubmit={formik.handleSubmit}>
                            <div style={{ marginBottom: "20px" }}>
                                <TextField
                                    className="login__input"
                                    id="password"
                                    label="Enter New Password"
                                    variant="outlined"
                                    type={showCode ? "text" : "password"}
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
                                                {showCode ? (
                                                    <VisibilityOffOutlined
                                                        className="login__view__password__btn"
                                                        onClick={() =>
                                                            setShowCode(
                                                                !showCode
                                                            )
                                                        }
                                                    />
                                                ) : (
                                                    <VisibilityOutlined
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
                                    {formik.touched.password &&
                                    formik.errors.password ? (
                                        <p>{formik.errors.password}</p>
                                    ) : null}
                                </div>
                            </div>
                            <div style={{ marginBottom: "20px" }}>
                                <TextField
                                    className="login__input"
                                    id="confirmPassword"
                                    label="Enter Confirm Password"
                                    variant="outlined"
                                    type={showCode1 ? "text" : "password"}
                                    value={formik.values.confirmPassword}
                                    onChange={(e) => {
                                        formik.handleChange(e);
                                        setShowAlert(false);
                                    }}
                                    fullWidth
                                    autoComplete="confirmPassword"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                {showCode1 ? (
                                                    <VisibilityOffOutlined
                                                        className="login__view__password__btn"
                                                        onClick={() =>
                                                            setShowCode1(
                                                                !showCode1
                                                            )
                                                        }
                                                    />
                                                ) : (
                                                    <VisibilityOutlined
                                                        className="login__view__password__btn"
                                                        onClick={() =>
                                                            setShowCode1(
                                                                !showCode1
                                                            )
                                                        }
                                                    />
                                                )}
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <div className="login__validation__error">
                                    {formik.touched.confirmPassword &&
                                    formik.errors.confirmPassword ? (
                                        <p>{formik.errors.confirmPassword}</p>
                                    ) : null}
                                </div>
                            </div>
                            <Button
                                className="login__btn"
                                variant="contained"
                                type="submit"
                            >
                                Continue
                            </Button>
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

export default ResetPassword;
