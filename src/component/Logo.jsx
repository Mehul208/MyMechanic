import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();
    return (
        <div
            className="logo"
            onClick={() => {
                navigate("/");
            }}
        >
            <h2>
                <span>My</span>Mechanic
            </h2>
        </div>
    );
};

export default Logo;
