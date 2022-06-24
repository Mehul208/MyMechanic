import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchOption } from "../../store/service-actions";
import ServiceCard from "./ServiceCard";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const ServiceDetail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = useParams().id;
    const options = useSelector((state) => state.services.optionsList);
    const loading = useSelector((state) => state.services.loading);
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(fetchOption(id));
        console.log(id);
    }, [dispatch, id]);

    return (
        <div>
            {!loading && options.length ? (
                options.map((item, i) => <ServiceCard {...item} key={i} />)
            ) : (
                <Stack spacing={1}>
                    <Skeleton variant="text" width={210} />
                    <Skeleton variant="rectangular" width={210} height={118} />
                </Stack>
            )}
            <button
                onClick={() => {
                    navigate(-1);
                }}
            >
                Go Back
            </button>
        </div>
    );
};

export default ServiceDetail;
