import React from "react";
import { Link } from "react-router-dom";

const Card = ({ _id, imageLink, title, description, shadow }) => {
    const boxShadow = shadow ? "25px 25px 100px rgba(166, 161, 157, 0.2)" : "";
    return (
        <div className="myCard" style={{ boxShadow: boxShadow }}>
            <Link to={`services/${_id}`} style={{ textDecoration: "none" }}>
                <div className="myCardImg">
                    <img src={imageLink} alt="" />
                </div>
                <h5>{title}</h5>
                <p>{description}</p>
            </Link>
        </div>
    );
};

export default Card;
