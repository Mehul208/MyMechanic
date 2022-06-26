import "./css/serviceCard.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { cartActions } from "../../store/cart-slice";
const ServiceCard = ({ _id, name, imageLink, services, id }) => {
    const [loading, setLoading] = useState(false);
    const [inCart, setInCart] = useState(false);
    const dispatch = useDispatch();
    const cartList = useSelector((state) => state.cart.cartItemsList);
    useEffect(() => {
        const checkCart = async () => {
            const existing = cartList.find((item) => item.category === id);
            if (existing) setInCart(true);
            else setInCart(false);
        };
        checkCart();
    }, [cartList, id]);
    const handleAdd = () => {
        setLoading(true);
        dispatch(
            cartActions.addToCart({
                id,
                wid: _id,
                name,
                price: services.find((s) => s.category === id).price,
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
        <div className="_scac">
            <h1>{name}</h1>
            <div className="_scac1">
                <div className="_scac1i">
                    <img src={imageLink} alt="" />
                </div>
                <div className="_prc">
                    ₹
                    {services.map((service) => {
                        if (service.category === id) return service.price;
                        else return <></>;
                    })}
                    <div className="text-center">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
