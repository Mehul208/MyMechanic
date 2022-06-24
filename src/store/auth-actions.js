import { loginApi, registerUserApi } from "../api";
import { authActions } from "./auth-slice";

export const loginUser = (cred) => {
    return async (dispatch) => {
        try {
            dispatch(authActions.setLoading(true), authActions.setError(false));
            const { data } = await loginApi(cred);
            localStorage.setItem("user", JSON.stringify(data));
            dispatch(authActions.login({ user: data }));
        } catch (error) {
            console.log(error);
            dispatch(authActions.setError(true));
        }
    };
};
export const registerUser = (cred) => {
    return async (dispatch) => {
        try {
            dispatch(authActions.setLoading(true), authActions.setError(false));
            const { data } = await registerUserApi(cred);
            localStorage.setItem("user", JSON.stringify(data));
            dispatch(authActions.login({ user: data }));
        } catch (error) {
            console.log(error);
            dispatch(authActions.setError(true));
        }
    };
};
