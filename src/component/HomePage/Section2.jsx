import React from "react";
import { offers } from "../extras/offers";
import { Stack } from "@mui/material";
import "./css/section2.css";

const Section2 = () => {
    return (
        <div className="my-5 _offr1a">
            <h2 className="mb-3">Offers for you</h2>
            <div className="_offr1b hbar">
                <Stack spacing={2} direction="row">
                    {offers.map((offer,i)=>(
                        <img src={offer.image} alt="offer" key={i}/>
                    ))}
                </Stack>
            </div>
        </div>
    );
};

export default Section2;
