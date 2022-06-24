import React from "react";
import { Skeleton, Stack } from "@mui/material";
import { data } from "../extras/workshopsList";
import "./css/section4.css";
const Section4 = () => {
    const loading = false;
    return (
        <div className="sec4">
            <div className="sec4Text">
                <h1>Top Rated Workshops Near You</h1>
                <p>Schedule a pick up today</p>
            </div>
            <Stack spacing={4} direction="row" className="sec4c hbar">
                {!loading && data ? (
                    data.map((item, i) => (
                        <div key={i}>
                            <div className="sec4c_i">
                                <img src={item.imageLink} alt={item.name} />
                            </div>
                            <div className="sec4c_t">
                                <p>{item.name}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <>
                        <Skeleton
                            variant="rect"
                            animation="wave"
                            height={150}
                            width={150}
                        />
                        <Skeleton
                            variant="rect"
                            animation="wave"
                            height={150}
                            width={150}
                        />
                    </>
                )}
            </Stack>
        </div>
    );
};

export default Section4;
