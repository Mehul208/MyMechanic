import React from "react";
import { useSelector } from "react-redux";

const CartList = () => {
    const cartList = useSelector((state) => state.cart.cartItemsList);
    return (
        <div>
            {cartList.length > 0 ? (
                cartList.map((item, i) => (
                    <div key={i}>
                        workshop - {item.workshop_name}, service - {item.title},
                        price - {item.price}, slot time: {item.time}, slot date:{" "}
                        {item.date},
                    </div>
                ))
            ) : (
                <div>No items in cart</div>
            )}
        </div>
    );
};

export default CartList;
