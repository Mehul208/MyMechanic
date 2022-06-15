import React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect } from "react";
import { data } from "../extras/workshopsList";
import ModalCard from "./ModalCard";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "10px",
    outline: "none",
    p: 4,
};

export default function ListModal({ open, setOpen, st, ot }) {
    const handleClose = () => setOpen(false);
    useEffect(() => {
        console.log(st, ot);
    }, [st, ot]);
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {data ? (
                        data.map((workshop, i) => {
                            let existing;
                            if (workshop.services[st]) {
                                existing = workshop.services[st].find(
                                    (s) => s.title === ot.toLowerCase()
                                );
                            } else return <div key={i * 90}>Not found</div>;
                            if (existing !== undefined) {
                                return (
                                    <ModalCard
                                        key={i}
                                        name={workshop.name}
                                        {...existing}
                                    />
                                );
                            }
                            return <></>;
                        })
                    ) : (
                        <Typography>Loading ...</Typography>
                    )}
                </Box>
            </Modal>
        </div>
    );
}
