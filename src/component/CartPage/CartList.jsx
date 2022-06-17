import React from "react";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

const CartList = () => {
    const cartList = useSelector((state) => state.cart.cartItemsList);
    return (
        <div>
            {cartList.length > 0 ? (
                cartList.map((item, i) => <CartCard {...item} key={i} />)
            ) : (
                <div>No items in cart</div>
            )}
        </div>
    );
};

export default CartList;
