import React from "react";
import "./step.scss";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";

const StepFour = () => {
    return (
        <div className="step">
            <div className="step_header">
                <h3>STEP 3/3</h3>
            </div>
            <div className="step_body">
                <div className="step_complete">
                    <div className="step_box">
                        <CheckCircleIcon
                            className="step_icon"
                            color="primary"
                        />
                    </div>
                </div>
            </div>
            <div className="step_sbody">
                <div className="note">
                    <p>Your order is completed</p>
                    <br />
                    <p>Thank you for the your purchase</p>
                </div>
                <div className="pay_button">
                    <Button className="payment_button" variant="contained">
                        <Link to="/myCourse">To Course</Link>
                    </Button>
                </div>
            </div>
            <div className="step_footer">About Our Insurance Policy</div>
        </div>
    );
};

export default StepFour;
