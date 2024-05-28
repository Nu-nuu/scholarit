import React from 'react';
import './step.scss'
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';


const StepThree = () => {

    return (
        <div className='step'>
            <div className="step_header">
                <h3>STEP 2/3</h3>
            </div>
            <div className="step_body">
                <div className="step_wait">
                    <div className="step_box">
                        <CircularProgress className='step_icon' />
                    </div>
                </div>
            </div>
            <div className="step_sbody">
                <div className="note">
                    <p>Please wait while we're </p>
                    <br />
                    <p>checking for your payment</p>
                </div>
                <div className="pay_button">
                    <Button className='payment_button' variant="contained" >
                        Send Again
                    </Button>
                </div>
            </div>
            <div className="step_footer">
                About Our Insurance Policy
            </div>
        </div>
    )
}

export default StepThree