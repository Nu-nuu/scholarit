import "./userInfoSignup.css";
import Avt1 from "../../../assets/scholaritPics/avatar/1.jpg";
import Avt2 from "../../../assets/scholaritPics/avatar/2.jpg";
import Avt3 from "../../../assets/scholaritPics/avatar/3.jpg";
import Avt4 from "../../../assets/scholaritPics/avatar/4.jpg";
import Avt5 from "../../../assets/scholaritPics/avatar/5.jpg";
import Avt6 from "../../../assets/scholaritPics/avatar/6.jpg";
import * as React from "react";
import { Fragment, useEffect } from "react";
import { Button, TextField, Grid, Checkbox } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateUserThunk, loginThunk } from "../../../store/apiThunk/userThunk";
import Swal from "sweetalert2";
import Logo from "../../../assets/scholaritPics/logo2.png";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "@mui/material/Modal";

const avtArray = [Avt1, Avt2, Avt3, Avt4, Avt5, Avt6];

function UserInfoSignup() {
    const [searchParams, setSearchParams] = useSearchParams();
    const email = searchParams.get("email");
    const password = searchParams.get("password");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            loginThunk({
                email: email,
                password: password,
            })
        )
            .unwrap()
            .then((response) => {
                localStorage.setItem("accessToken", JSON.stringify(response));
            });
    }, []);

    const [value, setValue] = React.useState(dayjs("01-01-2000"));

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            dob: "01-01-2000",
            address: "",
            hobby: "",
            strength: "",
            check: false,
            avatarUrl: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            dob: Yup.string()
                .required("Required")
                .matches(
                    /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z$/,
                    "Invalid date format"
                )
                .test(
                    "valid-year",
                    "Year must be > 1990 and < 2023",
                    (value) => {
                        // Extract the year from the input value (assuming it's in the format "YYYY-MM-DDTHH:mm:ss.SSSZ")
                        const year = parseInt(value.split("-")[0], 10);
                        // Check if the year is within the desired range (1990 to 2023)
                        return year >= 1990 && year <= 2023;
                    }
                ),
            address: Yup.string().required("Required"),
            hobby: Yup.string().required("Required"),
            strength: Yup.string().required("Required"),
            check: Yup.boolean().oneOf([true], "Required"),
            avatarUrl: Yup.string().required("Required"),
        }),
        onSubmit: async (values) => {
            try {
                dispatch(
                    updateUserThunk({
                        fullname: values.firstName + " " + values.lastName,
                        dob: values.dob,
                        address: values.address,
                        hobby: values.hobby,
                        lastLogin: values.dob,
                        learnHourPerDay: 0,
                        strength: values.strength,
                        avatarUrl: values.avatarUrl,
                    })
                )
                    .unwrap()
                    .then((response) => {
                        Swal.fire({
                            title: "Success!!",
                            text: "You have created account successfully!!",
                            icon: "success",
                            showCancelButton: false,
                            showConfirmButton: false,
                            background: "white",
                            timer: 1500,
                            timerProgressBar: true,
                            scrollbarPadding: false,
                        }).then(() => {
                            navigate("/login");
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (error) {
                // Handle the error
                console.log(error);
            }
        },
    });

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChangeAvt = (avt) => {
        formik.setFieldValue("avatarUrl", avt);
        setOpen(false);
    };

    return (
        <Fragment>
            <Grid container className="userInfoSignup" spacing={2}>
                <Grid item xs={1}></Grid>
                <Grid item xs={5} className="flex-center">
                    <img src={Logo} />
                </Grid>
                <Grid item xs={5} className="flex-center">
                    <div className="signup__form">
                        <h3 variant="h3" className="login__title">
                            <span className="orange-text">Welcome To</span>{" "}
                            <span className="blue-text">Scholarit</span>
                        </h3>
                        <h5 className="login__desc">
                            Before starting your journey we need you to fill up
                            these information below, all of your private
                            informations will be safe to us.
                        </h5>
                        <form onSubmit={formik.handleSubmit}>
                            <Grid container spacing={2} className="flex-center">
                                <Grid item xs={4.5}>
                                    <TextField
                                        className="login__input"
                                        id="firstName"
                                        label="First Name"
                                        variant="outlined"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        fullWidth
                                        autoComplete="firstName"
                                    />
                                    <div className="login__validation__error">
                                        {formik.touched.firstName &&
                                        formik.errors.firstName ? (
                                            <p>{formik.errors.firstName}</p>
                                        ) : null}
                                    </div>
                                </Grid>
                                <Grid item xs={4.5}>
                                    <TextField
                                        className="login__input"
                                        id="lastName"
                                        label="Last Name"
                                        variant="outlined"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        fullWidth
                                        autoComplete="lastName"
                                    />
                                    <div className="login__validation__error">
                                        {formik.touched.lastName &&
                                        formik.errors.lastName ? (
                                            <p>{formik.errors.lastName}</p>
                                        ) : null}
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
                                    <div className="container">
                                        <img
                                            src={formik.values.avatarUrl}
                                            alt=""
                                            className="top_left_img"
                                        />
                                        <div
                                            className="overlay"
                                            onClick={handleOpen}
                                        >
                                            <EditIcon
                                                sx={{
                                                    color: "white",
                                                    fontSize: 40,
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="login__validation__error"
                                        style={{
                                            textAlign: "center",
                                            marginTop: "15px",
                                            padding: 0,
                                        }}
                                    >
                                        {formik.touched.avatarUrl &&
                                        formik.errors.avatarUrl ? (
                                            <p>{formik.errors.avatarUrl}</p>
                                        ) : null}
                                    </div>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <div
                                            style={{
                                                outline: 0,
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform:
                                                    "translate(-50%, -50%)",
                                                textAlign: "center",
                                                background: "white",
                                                borderRadius: "10px",
                                                padding: "15px",
                                                transition: "1s ease",
                                            }}
                                        >
                                            <p
                                                style={{
                                                    fontSize: "24px",
                                                    fontWeight: "bold",
                                                    paddingTop: "15px",
                                                    paddingBottom: "30px",
                                                }}
                                            >
                                                Choose Your Avatar
                                            </p>
                                            <Grid container spacing={2}>
                                                {avtArray.map((avt, index) => (
                                                    <Grid
                                                        item
                                                        xs={4}
                                                        style={{
                                                            display: "flex",
                                                            justifyContent:
                                                                "center",
                                                            alignItems:
                                                                "center",
                                                        }}
                                                        key={index}
                                                    >
                                                        <img
                                                            src={avt}
                                                            style={{
                                                                width: "40%",
                                                                cursor: "pointer",
                                                            }}
                                                            onClick={() =>
                                                                handleChangeAvt(
                                                                    avt
                                                                )
                                                            }
                                                        />
                                                    </Grid>
                                                ))}
                                            </Grid>
                                        </div>
                                    </Modal>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} className="flex-center">
                                <Grid item xs={4}>
                                    <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                    >
                                        <DemoContainer
                                            components={[
                                                "DatePicker",
                                                "DatePicker",
                                            ]}
                                        >
                                            <DatePicker
                                                id="dob"
                                                label="Date Of Birth"
                                                value={value}
                                                onChange={(date) => {
                                                    const formattedDate = dayjs(
                                                        date
                                                    ).format(
                                                        "YYYY-MM-DDTHH:mm:ss.SSS[Z]"
                                                    );
                                                    setValue(date); // Update the state with the selected date
                                                    formik.setFieldValue(
                                                        "dob",
                                                        formattedDate
                                                    ); // Update the formik field value
                                                }}
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                    <div className="login__validation__error">
                                        {formik.touched.dob &&
                                        formik.errors.dob ? (
                                            <p>{formik.errors.dob}</p>
                                        ) : null}
                                    </div>
                                </Grid>
                                <Grid
                                    item
                                    xs={8}
                                    style={{
                                        marginTop: "3px",
                                        paddingLeft: "8px",
                                    }}
                                >
                                    <TextField
                                        className="login__input"
                                        id="address"
                                        label="Address"
                                        variant="outlined"
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        fullWidth
                                        margin="dense"
                                    />
                                    <div className="login__validation__error">
                                        {formik.touched.address &&
                                        formik.errors.address ? (
                                            <p>{formik.errors.address}</p>
                                        ) : null}
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} className="flex-center">
                                <Grid item xs={6}>
                                    <TextField
                                        className="login__input"
                                        id="hobby"
                                        label="Hobby"
                                        variant="outlined"
                                        value={formik.values.hobby}
                                        onChange={formik.handleChange}
                                        fullWidth
                                        margin="dense"
                                    />
                                    <div className="login__validation__error">
                                        {formik.touched.hobby &&
                                        formik.errors.hobby ? (
                                            <p>{formik.errors.hobby}</p>
                                        ) : null}
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        className="login__input"
                                        id="strength"
                                        label="Strength"
                                        variant="outlined"
                                        value={formik.values.strength}
                                        onChange={formik.handleChange}
                                        fullWidth
                                        margin="dense"
                                    />
                                    <div className="login__validation__error">
                                        {formik.touched.strength &&
                                        formik.errors.strength ? (
                                            <p>{formik.errors.strength}</p>
                                        ) : null}
                                    </div>
                                </Grid>
                            </Grid>
                            <div
                                className="flex-left"
                                style={{ width: "100%" }}
                            >
                                <Checkbox
                                    id="check"
                                    icon={<RadioButtonUncheckedIcon />}
                                    checkedIcon={<RadioButtonCheckedIcon />}
                                    value={formik.values.check}
                                    onChange={formik.handleChange}
                                />
                                <span
                                    style={{
                                        textTransform: "uppercase",
                                        fontSize: "14px",
                                    }}
                                >
                                    I agree to{" "}
                                    <span style={{ fontWeight: "bold" }}>
                                        Scholarit's
                                    </span>{" "}
                                    PRIVACY POLICY AND Term of Service
                                </span>
                            </div>
                            <div
                                className="login__validation__error"
                                style={{
                                    marginTop: "41px",
                                    marginBottom: "15px",
                                }}
                            >
                                {formik.touched.check && formik.errors.check ? (
                                    <p>{formik.errors.check}</p>
                                ) : null}
                            </div>
                            <Button
                                className="login__btn"
                                variant="contained"
                                type="submit"
                            >
                                Create account
                            </Button>
                        </form>
                    </div>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </Fragment>
    );
}

export default UserInfoSignup;
