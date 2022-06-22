import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import menuIcon from "../images/icon.png";
import { data } from "./extras/nav_data";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Logo from "./Logo";
import { authActions } from "../store/auth-slice";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const cartCount = useSelector((state) => state.cart.cartItems);
    const naviagte = useNavigate();
    const dispatch = useDispatch();
    return (
        <nav className="main-nav">
            <Logo />
            <div
                style={toggle ? { display: "block" } : { display: "none" }}
                className="_mnvd"
            >
                <ul>
                    {data.map((item, i) => (
                        <li key={i}>
                            <Link to={item.link}>{item.title}</Link>
                        </li>
                    ))}
                    {/* below needs to be in other file as they are not part of the system here */}
                    <IconButton
                        onClick={() => {
                            naviagte("cart");
                        }}
                    >
                        <Badge badgeContent={cartCount} color="primary">
                            <AddShoppingCartIcon color="action" />
                        </Badge>
                    </IconButton>
                    <button
                        className={`btn btn-primary mx-4`}
                        onClick={() => {
                            if (isLoggedIn) dispatch(authActions.logout());
                            else naviagte("auth");
                        }}
                    >
                        {isLoggedIn ? "Logout" : "Login"}
                    </button>
                </ul>
            </div>
            <div
                className="menu-icon"
                onClick={() => {
                    setToggle(!toggle);
                }}
            >
                <img src={menuIcon} alt="" />
            </div>
        </nav>
    );
};

export default Navbar;
