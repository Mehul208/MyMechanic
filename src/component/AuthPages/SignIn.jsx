import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link as Lik, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../store/auth-actions";
import SimpleBackdrop from "../backdropEffect";
import SnackAlert from "./snackAlert";
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
                MyMechanic
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const theme = createTheme();

export default function SignIn() {
    const [emailErr, setEmailErr] = useState(false);
    const [pswdErr, setpswdErr] = useState(false);
    const [email, setEmail] = useState("");
    const [pswd, setpswd] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.isError);
    const loggedIn = useSelector((state) => state.auth.isLoggedIn);
    const validate = (em) => {
        if (em === "") return false;
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(em)) {
            return true;
        }
        return false;
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === "" || pswd === "") {
            setEmailErr(true);
            setpswdErr(true);
        } else {
            const cred = {
                email: email,
                password: pswd,
            };
            dispatch(loginUser(cred));
        }
    };

    useEffect(() => {
        if (loggedIn) {
            setTimeout(() => {
                navigate("/");
            }, 2000);
        }
    }, [loggedIn, navigate]);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                {loading ? <SimpleBackdrop open={loading} /> : <></>}
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            value={email}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            type="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            error={emailErr}
                            helperText={emailErr ? "Invalid email adsress" : ""}
                            onChange={(e) => {
                                if (validate(e.target.value)) {
                                    setEmailErr(false);
                                } else setEmailErr(true);
                                setEmail(e.target.value);
                            }}
                        />
                        <TextField
                            value={pswd}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            error={pswdErr}
                            helperText={
                                pswdErr ? "Must be at least 8 digits" : ""
                            }
                            onChange={(e) => {
                                if (e.target.value.length < 8) {
                                    setpswdErr(true);
                                } else {
                                    setpswdErr(false);
                                }
                                setpswd(e.target.value);
                            }}
                        />
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Lik to="signUp" style={{ fontSize: "14px" }}>
                                    {"Don't have an account? Sign Up"}
                                </Lik>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
                {error ? (
                    <SnackAlert
                        open={true}
                        message="Invalid Data"
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
