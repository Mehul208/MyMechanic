import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
const BusinessRegister = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const navigate = useNavigate();
    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/auth");
        } 
        
    }, [isLoggedIn, navigate]);
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default BusinessRegister;
