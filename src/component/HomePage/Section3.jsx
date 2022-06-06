import React from "react";
import Card from "./Card";
import { data } from "../extras/landingPageCard";
const Section3 = () => {
    return (
        <div>
            <div className="sect3Text">
                <h1>Services Near You</h1>
                <p>
                    A Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's{" "}
                </p>
            </div>
            <div className="sect3cards">
                {data.map((item, i) => (
                    <Card key={i} {...item} shadow={i===0?true:false}/>
                ))}
            </div>
        </div>
    );
};

export default Section3;
