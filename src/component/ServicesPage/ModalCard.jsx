import React, { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
const ModalCard = ({ name, title, price, time }) => {
    const [loading, setLoading] = useState(false);
    const [inCart, setInCart] = useState(false);
    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setInCart(!inCart);
        }, 1500);
    };
    return (
        <div>
            name - {name} <br />
            service - {title} <br />
            price - {price} <br />
            time - {time}
            <LoadingButton
                onClick={handleClick}
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
