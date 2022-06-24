import React from "react";
import "./css/section3.css";
import Card from "./Card";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/service-actions";
import { Stack } from "@mui/material";

const Section3 = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.services.servicesList);
    const loading = useSelector((state) => state.services.loading);
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);
    return (
        <div style={{ marginBottom: "50px" }}>
            <div className="sect3Text">
                <h1>Services Near You</h1>
                <p>
                    A Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's{" "}
                </p>
            </div>
            {!loading && data ? (
                <div className="sect3cards">
                    {data.map((item, i) => (
                        <Card
                            {...item}
                            shadow={i === 0 ? true : false}
                            key={i}
                        />
                    ))}
                </div>
            ) : (
                <Stack direction="row" spacing={3} justifyContent="center">
                    <Skeleton
                        variant="rect"
                        animation="wave"
                        height={150}
                        width={200}
                    />
                    <Skeleton
                        variant="rect"
                        animation="wave"
                        height={150}
                        width={200}
                    />
                    <Skeleton
                        variant="rect"
                        animation="wave"
                        height={150}
                        width={200}
                    />
                </Stack>
            )}
        </div>
    );
};

export default Section3;
