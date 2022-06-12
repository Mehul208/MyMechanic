import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import menuIcon from "../images/icon.png";
import { data } from "./extras/nav_data";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const naviagte = useNavigate();
    return (
        <nav className="main-nav">
            <div
                className="logo"
                onClick={() => {
                    naviagte("/");
                }}
            >
                <h2>
                    <span>My</span>Mechanic
                </h2>
            </div>
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
