import React, { useState, useEffect } from 'react';
import './step.scss'
import Button from '@mui/material/Button';
import zalopay from '../../../assets/scholaritPics/qrPayment/zalopay.jpg'
import momo from '../../../assets/scholaritPics/qrPayment/momo.jpg'

const StepTwo = ({ selectedPaymentMethod, onConfirm, onRandomCodeChange }) => {

    const generateRandomCode = () => {
        const randomCode = Math.floor(1000 + Math.random() * 9000);
        return randomCode;
    };

    const [randomCode, setRandomCode] = useState(generateRandomCode());

    useEffect(() => {
        onRandomCodeChange(randomCode);
    }, [randomCode, onRandomCodeChange]);

    return (
        <div className='step'>
            <div className="step_header">
                <h3>STEP 2/3</h3>
            </div>
            <div className="step_body">
                <div className="step_qr">
                    {selectedPaymentMethod === 'Momo' && (
                        <img src={momo} alt="Momo" />
                    )}
                    {selectedPaymentMethod === 'ZaloPay' && (
                        <img src={zalopay} alt="ZaloPay" />
                    )}
                    {selectedPaymentMethod === 'Banking' && (
                        <img src={zalopay} alt="Banking" />
                    )}
                </div>
            </div>
            <div className="step_sbody">
                <div className="note">
                    <p>Please enter this code </p>
                    <br />
                    <p>in the transfer note</p>
                </div>
                <div className="code">
                    {randomCode}
                </div>
                <div className="pay_button">
                    <Button
                        className='payment_button'
                        variant="contained"
                        onClick={onConfirm}
                    >
                        Confirm
                    </Button>
                </div>
            </div>
            <div className="step_footer">
                About Our Insurance Policy
            </div>
        </div>
    )
}

export default StepTwo