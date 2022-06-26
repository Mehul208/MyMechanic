import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../store/auth-actions";
import { useEffect } from "react";
import SimpleBackdrop from "../backdropEffect";
import SnackAlert from "./snackAlert";

const theme = createTheme();

export default function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.isError);
    const loggedIn = useSelector((state) => state.auth.isLoggedIn);
    const [nameErr, setNameErr] = useState(false);
    const [nameErr2, setNameErr2] = useState(false);
    const [emailErr, setemailErr] = useState(false);
    const [pswdErr, setpswdErr] = useState(false);
    const validate = (em) => {
        if (em === "") return false;
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(em)) {
            return true;
        }
        return false;
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        if (
            data.get("firstName") === "" ||
            data.get("lastName") === "" ||
            data.get("email") === "" ||
            data.get("password") === ""
        ) {
            alert("Please fill in all fields");
        } else {
            const cred = {
                name: data.get("firstName") + " " + data.get("lastName"),
                email: data.get("email"),
                password: data.get("password"),
            };
            dispatch(registerUser(cred));
        }
    };
    useEffect(() => {
        if (loggedIn) navigate("/");
    }, [loggedIn, navigate]);
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                {loading ? <SimpleBackdrop open={loading} /> : <></>}
                <Box
                    sx={{
                        marginTop: 5,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box
                        component="form"
                        noValidate
                        onSubmit={handleSubmit}
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    error={nameErr}
                                    helperText={
                                        nameErr ? "Please enter first name" : ""
                                    }
                                    onChange={(e) => {
                                        if (e.target.value === "")
                                            setNameErr(true);
                                        else setNameErr(false);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    error={nameErr2}
                                    helperText={
                                        nameErr2
                                            ? "Please enter a last name"
                                            : ""
                                    }
                                    onChange={(e) => {
                                        if (e.target.value === "")
                                            setNameErr2(true);
                                        else setNameErr2(false);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    type="email"
                                    error={emailErr}
                                    helperText={emailErr ? "Invalid email" : ""}
                                    onChange={(e) => {
                                        if (validate(e.target.value))
                                            setemailErr(false);
                                        else setemailErr(true);
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    error={pswdErr}
                                    helperText={
                                        pswdErr
                                            ? "Must be at least 8 characters"
                                            : ""
                                    }
                                    onChange={(e) => {
                                        if (e.target.value.length < 8)
                                            setpswdErr(true);
                                        else setpswdErr(false);
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end" mb={3}>
                            <Grid item>
                                <Link to="/auth" style={{ fontSize: "14px" }}>
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                {error ? (
                    <SnackAlert
                        open={true}
                        message="An error occured"
                        variant="error"
                    />
                ) : (
                    <></>
                )}
                {loggedIn ? (
                    <SnackAlert
                        open={true}
                        message="Login Success"
                        variant="success"
                    />
                ) : (
                    <></>
                )}
            </Container>
        </ThemeProvider>
    );
}
