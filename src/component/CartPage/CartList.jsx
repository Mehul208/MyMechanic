import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import Button from "@mui/material/Button";

const CartList = () => {
    const cartList = useSelector((state) => state.cart.cartItemsList);
    const total = useSelector((state) => state.cart.totalPrice);
    return (
        <div>
            {cartList.length > 0 ? (
                cartList.map((item, i) => <CartCard {...item} key={i} />)
            ) : (
                <div>No items in cart</div>
            )}
            <div className="mt-5">
                <div style={{ fontSize: "20px" }}>Total - ₹{total}</div> <br />
                <Button variant="contained" size="medium">
                    Checkout
                </Button>
            </div>
        </div>
    );
};

export default CartList;
