import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerWorkshop } from "../../api";
import { useSelector } from "react-redux";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="/">
                My Mechanic
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const theme = createTheme();

export default function RegisterForm() {
    const user = useSelector((state) => state.auth.user);
    const [gstErr, setGstErr] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const reg =
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(
                data.get("GSTIN")
            );
        if (!reg) setGstErr(true);
        else {
            const wData = {
                user: user._id,
                name: data.get("name"),
                gstin: data.get("GSTIN"),
                state: data.get("state"),
                address: data.get("address"),
                services: {},
            };
            const res = await registerWorkshop(wData);
            if (res.status === 201) navigate("/business/detailForm");
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <BusinessCenterIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Register Business
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="workshop-name"
                                    name="name"
                                    required
                                    fullWidth
                                    label="Workshop Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="address"
                                    name="address"
                                    required
                                    fullWidth
                                    label="Workshop Address"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    autoComplete="state"
                                    name="state"
                                    required
                                    fullWidth
                                    label="State"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="GSTIN"
                                    label="GSTIN"
                                    type="text"
                                    autoComplete="GSTIN"
                                    error={gstErr}
                                    helperText={
                                        gstErr
                                            ? "Please enter a valid gst number"
                                            : ""
                                    }
                                    onChange={() => {
                                        setGstErr(false);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    autoComplete="ps"
                                    name="ps"
                                    required
                                    fullWidth
                                    label="Periodic Service Charge"
                                    type="number"
                                    autoFocus
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    autoComplete="acsr"
                                    name="acsr"
                                    required
                                    fullWidth
                                    label="Ac Repair and Service Charge"
                                    type="number"
                                    autoFocus
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    autoComplete="dtp"
                                    name="dtp"
                                    required
                                    fullWidth
                                    label="Denting and painting"
                                    type="number"
                                    autoFocus
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    autoComplete="dtp"
                                    name="dtp"
                                    required
                                    fullWidth
                                    label="Clutch service charges"
                                    type="number"
                                    autoFocus
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            value="accept tnc"
                                            color="primary"
                                        />
                                    }
                                    label="I accept my mechanic terms and conditions"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Verify & submit
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
