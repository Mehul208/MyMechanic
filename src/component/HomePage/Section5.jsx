import React from "react";
import image from "./images/Rectangle.png";
import "./css/section5.css";
import { useState } from "react";
const Section5 = () => {
    const [vl, setVl] = useState("");
    const [sub, setSub] = useState(false);
    return (
        <div className="sec5" style={{ backgroundImage: `url(${image})` }}>
            <h1>Ready to get updated?</h1>
            <p>
                Suscribe to our news letter and stay updated with new offers
                from top workshops in your area.
            </p>
            <div className="sec5Inp">
                <input
                    type="email"
                    placeholder="Email Address"
                    value={vl}
                    onChange={(e) => {
                        setVl(e.target.value);
                        setSub(false);
                    }}
                    required
                />
                <div
                    className="btnOrange _bt"
                    onClick={() => {
                        setSub(true);
                    }}
                >
                    {sub ? "Submitted" : "Submit"}
                </div>
            </div>
        </div>
    );
};

export default Section5;
