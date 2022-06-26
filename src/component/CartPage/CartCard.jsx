import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartCard = ({ workshop_name, id, price }) => {
    const service = useSelector((state) => state.services.servicesList);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(cartActions.removeFromCart(id));
    };
    return (
        <div className="_ccrd">
            <h5>
                {service.map((item) => {
                    if (item._id === id) return item.title;
                    return <></>;
                })}
            </h5>
            <h6>{workshop_name}</h6>
            <p>₹{price}</p>
            <Button variant="outlined" onClick={handleClick}>
                Remove
            </Button>
        </div>
    );
};

export default CartCard;
