import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/service-actions";
const ListServices = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.services.servicesList);
    const loading = useSelector((state) => state.services.loading);
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    return (
        <div>
            <h1>All Services</h1>
            <ul style={{ listStyle: "none", margin: "20px auto" }}>
                {!loading && data ? (
                    data.map((item, i) => (
                        <li
                            key={i}
                            style={{
                                padding: " 10px 0",
                                textAlign: " center",
                                fontSize: "20px",
                                textTransform: "capitalize",
                            }}
                        >
                            <Link
                                to={`${item._id}`}
                                style={{
                                    textDecoration: "none",
                                    fontWeight: 500,
                                }}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))
                ) : (
                    <Stack spacing={1}>
                        <Skeleton variant="text" width={210} />
                        <Skeleton variant="text" width={210} />
                        <Skeleton variant="text" width={210} />
                        <Skeleton variant="text" width={210} />
                    </Stack>
                )}
            </ul>
        </div>
    );
};

export default ListServices;
