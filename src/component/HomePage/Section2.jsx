import React from "react";
import { offers } from "../extras/offers";
import "./css/section2.css";

const Section2 = () => {
    return (
        <div className="my-5 _offr1a" >
            <h2 className="mb-3">Offers for you</h2>
            <div className="_offr1">
                {offers.map((offer, i) => (
                    <div    
                        key={i}
                        className="_offr"
                        // style={{ backgroundImage: `url(${offer.image})` }}
                    >
                        <h4>{offer.title}</h4>
                        {/* <br /> */}
                        <small>{offer.desc}</small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section2;
