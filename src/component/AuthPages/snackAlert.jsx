import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import React, { useState } from "react";

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackAlert({ open, message, variant }) {
    const [isOpen, setIsOpen] = useState(open);
    return (
        <Snackbar
            open={isOpen}
            autoHideDuration={6000}
            onClose={() => {
                setIsOpen(false);
            }}
        >
            <Alert
                onClose={() => {
                    setIsOpen(false);
                }}
                severity={variant}
                sx={{ width: "100%" }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
}
