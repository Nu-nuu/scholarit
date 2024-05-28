import React, { useState, useEffect } from 'react';
import './payment.scss';
import StepOne from './step/stepOne';
import StepTwo from './step/stepTwo';
import StepThree from './step/stepThree';
import StepFour from './step/stepFour';
import { useDispatch } from 'react-redux';
import { createOrderThunk, getOrderByIdUserThunk } from '../../store/apiThunk/orderThunk';

const Payment = (props) => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [randomCode, setRandomCode] = useState(null);
    const [orderId, setOrderId] = useState();

    const dispatch = useDispatch();

    const handleSelectPaymentMethod = (method) => {
        setSelectedPaymentMethod(method);
        setCurrentStep(2);
    };
    const handleCreateOrder = () => {

        const orderData = {
            price: props.price,
            note: randomCode,
            orderDetails: [
                {
                    courseId: props.courseId,
                    rate: null,
                    feedBack: null,
                    courseName: "string",
                }
            ]
        };

        dispatch(createOrderThunk(orderData))
            .then((response) => {
                setOrderId(response.payload);
                setCurrentStep(3);
            })
            .catch((error) => {
                console.error('Error creating order:', error);
            });
    };
    const checkOrderStatus = () => {
        dispatch(getOrderByIdUserThunk(orderId)).then((response) => {
            if (response.payload.status === 2) {
                setCurrentStep(4);
            }
        });
    };

    useEffect(() => {
        // Gọi lần đầu khi component được mount
        checkOrderStatus();

        // Thiết lập interval để gọi lại checkOrderStatus mỗi 20 giây
        const intervalId = setInterval(() => {
            checkOrderStatus();
        }, 20000);

        // Xóa interval khi component unmount
        return () => {
            clearInterval(intervalId);
        };
    }, [orderId, dispatch, currentStep]);

    const handleRandomCodeChange = (code) => {
        setRandomCode(code);
    };

    return (
        <div>
            {currentStep === 1 && (
                <StepOne price={props.price} onSelectPaymentMethod={handleSelectPaymentMethod} />
            )}
            {currentStep === 2 && (
                <StepTwo price={props.price} selectedPaymentMethod={selectedPaymentMethod} onConfirm={handleCreateOrder} onRandomCodeChange={handleRandomCodeChange} />
            )}
            {currentStep === 3 && (<StepThree />)}
            {currentStep === 4 && <StepFour />}
        </div>
    );
}

export default Payment;
