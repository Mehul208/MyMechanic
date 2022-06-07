import React, { useState } from "react";
import menuIcon from "../images/icon.png";
import { data } from "./extras/nav_data";
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="main-nav">
            <div className="logo">
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
                            <a href={item.link}>{item.title}</a>
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
