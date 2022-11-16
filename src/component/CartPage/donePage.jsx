import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { useNavigate } from "react-router-dom";
const DonePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(cartActions.resetCart());
        setTimeout(() => {
            navigate("/");
        }, 2500);
    }, [dispatch, navigate]);
    return (
        <h1 classname="text-center">
            Your booking is done and your appointment will be scheduled and
            confirmed by the workshop.
        </h1>
    );
};

export default DonePage;
