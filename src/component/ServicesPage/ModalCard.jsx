import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { cartActions } from "../../store/cart-slice";

const ModalCard = ({ id, name, title, price, time }) => {
    const [loading, setLoading] = useState(false);
    const [inCart, setInCart] = useState(false);
    const dispatch = useDispatch();
    const cartList = useSelector((state) => state.cart.cartItemsList);

    useEffect(() => {
        const checkCart = async () => {
            const existing = cartList.find(
                (item) =>
                    item.id === id &&
                    item.workshop_name === name &&
                    item.title === title
            );
            if (existing) setInCart(true);
            else setInCart(false);
        };
        checkCart();
    }, [cartList, id, name, title]);

    const handleAdd = () => {
        setLoading(true);
        dispatch(
            cartActions.addToCart({
                id: id,
                name,
                title,
                price: parseInt(price, 10),
                time,
                date: "15 Jun 2022",
            })
        );
        setTimeout(() => {
            setLoading(false);
            setInCart(true);
        }, 1000);
    };
    const handleRemove = () => {
        setLoading(true);
        dispatch(cartActions.removeFromCart(id));
        setTimeout(() => {
            setLoading(false);
            setInCart(false);
        }, 1000);
    };
    return (
        <div>
            name - {name} <br />
            service - {title} <br />
            price - {price} <br />
            time - {time}
            <LoadingButton
                onClick={!inCart ? handleAdd : handleRemove}
                endIcon={
                    !inCart ? (
                        <AddShoppingCartIcon />
                    ) : (
                        <RemoveShoppingCartIcon />
                    )
                }
                loading={loading}
                loadingPosition="end"
                variant="outlined"
                size="small"
            >
                {!inCart ? "Add to Cart" : "Remove from Cart"}
            </LoadingButton>
            <br /> <hr />
        </div>
    );
};

export default ModalCard;
