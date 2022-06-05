import React, { useState } from "react";
import menuIcon from "../images/icon.png";
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <div className="main-nav">
            <div className="logo">
                <h2>
                    <span>My</span>Mechanic
                </h2>
            </div>
            <div className="menu-icon">
                <img src={menuIcon} alt="" />
            </div>
        </div>
    );
};

export default Navbar;
