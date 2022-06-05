import React from "react";

const Card = ({ image, title, desc, bgColor }) => {
    return (
        <div className="myCard">
            <div className="myCardImg" style={{ backgroundColor: bgColor }}>
                <img src={image} alt="" />
            </div>
            <h5>{title}</h5>
            <p>{desc}</p>
        </div>
    );
};

export default Card;
