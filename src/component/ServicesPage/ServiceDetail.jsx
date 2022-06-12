import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../extras/landingPageCard";

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
        // Put all this in a service card

        <div>
            <h1>{service.title}</h1>
            <p>
                <img src={service.image} alt="" /> <br /> {service.desc}
            </p>

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
