import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { fetchData } from "../../store/service-actions";
import { Button } from "@mui/material";

export default function DetailForm() {
    const services = useSelector((state) => state.services.servicesList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);
    return (
        <div className="text-center">
            <h2 className="mb-5">Please Update Service Prices Below</h2>
            {services
                ? services.map((service, i) => (
                      <div key={i} className="my-3">
                          <TextField
                              id="outlined-number"
                              label={service.title}
                              type="number"
                              InputLabelProps={{
                                  shrink: true,
                              }}
                          />
                      </div>
                  ))
                : "Loading"}
            <Button variant="contained">Update</Button>
        </div>
    );
}
