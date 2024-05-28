import React, { useState } from 'react';
import './step.scss'
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';

const StepOne = (props) => {
    const [isDiscountInputVisible, setDiscountInputVisible] = useState(false);
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

    const toggleDiscountInput = () => {
        setDiscountInputVisible(!isDiscountInputVisible);
    };

    const handlePaymentMethodClick = (method) => {
        setSelectedPaymentMethod(method);
    };
    const handlePaymentMethod = (method) => {
        props.onSelectPaymentMethod(method);
    }
    const handlePayButtonClick = () => {
        if (selectedPaymentMethod) {
            handlePaymentMethod(selectedPaymentMethod)
        } else {
            alert('Vui lòng chọn phương thức thanh toán trước khi thanh toán.');
        }
    };

    return (
        <div className='step'>
            <div className="step_header">
                <h3>STEP  1/3</h3>
            </div>
            <div className="step_body">
                <h3>Billing Summary </h3>
                <div className="summary_material">
                    <div className="material">
                        <div>Price</div>
                        <div>{props.price} $</div>
                    </div>
                    <div className="material">
                        <div>Discount</div>
                        <div>0.00 $</div>
                    </div>
                </div>
                {!isDiscountInputVisible && (
                    <div className="discount">
                        <div className="discount_content">
                            Have a discount code?
                        </div>
                        <button className='discount_button' onClick={toggleDiscountInput}>
                            <TrendingFlatIcon />
                        </button>
                    </div>
                )}
                {isDiscountInputVisible && (
                    <div className="discount_input">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { width: '20ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Code discount" color="primary" focused />

                        </Box>
                        <button className='cancel_button' onClick={toggleDiscountInput}>
                            Cancel
                        </button>
                    </div>
                )}
                <div className='line'>--------------------------------</div>
                <div className="summary_material">
                    <div className="material">
                        <div>Amount to pay</div>
                        <div>{props.price} $</div>
                    </div>
                </div>
            </div>
            <div className="step_sbody">
                <h3>Payment Method</h3>
                <div className="method">
                    <div className='method_flex'>
                        <Button
                            className={`method_button ${selectedPaymentMethod === 'Momo' ? 'contained' : 'outlined'}`}
                            variant={selectedPaymentMethod === 'Momo' ? 'contained' : 'outlined'}
                            onClick={() => handlePaymentMethodClick('Momo')}
                        >
                            Momo
                        </Button>
                        <Button
                            className={`method_button ${selectedPaymentMethod === 'Banking' ? 'contained' : 'outlined'}`}
                            variant={selectedPaymentMethod === 'Banking' ? 'contained' : 'outlined'}
                            onClick={() => handlePaymentMethodClick('Banking')}
                        >
                            Banking
                        </Button>
                    </div>
                    <div className='method_flex'>
                        <Button
                            className={`method_button ${selectedPaymentMethod === 'ZaloPay' ? 'contained' : 'outlined'}`}
                            variant={selectedPaymentMethod === 'ZaloPay' ? 'contained' : 'outlined'}
                            onClick={() => handlePaymentMethodClick('ZaloPay')}
                        >
                            ZaloPay
                        </Button>
                        <ToggleButton className='method_button' variant="outlined" value="paypal">Paypal</ToggleButton>
                    </div>
                </div>
                <div className="pay_button">
                    <Button
                        className='payment_button'
                        variant="contained"
                        onClick={handlePayButtonClick}
                    >
                        Pay {props.price} $
                    </Button>
                </div>
            </div>
            <div className="step_footer">
                About Our Insurance Policy
            </div>
        </div>
    )
}

export default StepOne