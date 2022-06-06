import React from "react";

const Card = ({ image, title, desc, bgColor, shadow }) => {
    const boxShadow = shadow ? "25px 25px 100px rgba(166, 161, 157, 0.2)" : "none";
    return (
        <div className="myCard" style={{ boxShadow: boxShadow }}>
            <div className="myCardImg" style={{ backgroundColor: bgColor }}>
                <img src={image} alt="" />
            </div>
            <h5>{title}</h5>
            <p>{desc}</p>
        </div>
    );
};

export default Card;
