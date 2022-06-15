import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../extras/landingPageCard";
import ServiceCard from "./ServiceCard";

const ServiceDetail = () => {
    const [service, setService] = useState({});
    let navigate = useNavigate();
    const id = parseInt(useParams().id, 10);
    useEffect(() => {
        const checkData = () => {
            const existing = data.find((item) => item.id === id);
            if (existing === undefined) navigate("/404");
            else setService({ ...existing });
        };
        checkData();
    }, [id, navigate]);

    return (
        <div>
            <ServiceCard {...service} />
            <button
                onClick={() => {
                    navigate(-1);
                }}
            >
                Go Back
            </button>
        </div>
    );
};

export default ServiceDetail;
