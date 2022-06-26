import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";
import Button from "@mui/material/Button";
import DonePage from "./donePage";

const CartList = () => {
    const cartList = useSelector((state) => state.cart.cartItemsList);
    const total = useSelector((state) => state.cart.totalPrice);
    const [checkout, setChekout] = useState(false);
    return (
        <div>
            {checkout ? (
                <DonePage />
            ) : (
                <>
                    {cartList.length > 0 ? (
                        cartList.map((item, i) => (
                            <CartCard {...item} key={i} />
                        ))
                    ) : (
                        <div>No items in cart</div>
                    )}
                    <div className="mt-5 cntr">
                        <div style={{ fontSize: "20px" }}>Total - ₹{total}</div>{" "}
                        <br />
                        <Button
                            variant="contained"
                            size="medium"
                            onClick={() => {
                                if (cartList.length > 0) setChekout(true);
                            }}
                        >
                            Checkout
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartList;
