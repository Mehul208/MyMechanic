import React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const CartCard = ({ workshop_name, title, price }) => {
    return (
        <div>
            <div>
                workshop - {workshop_name}, service - {title}, price - {price}
            </div>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    renderInput={(props) => <TextField {...props} />}
                    label="Choose a slot"
                    onChange={(newValue) => {
                        console.log(newValue);
                    }}
                />
            </LocalizationProvider>
        </div>
    );
};

export default CartCard;
