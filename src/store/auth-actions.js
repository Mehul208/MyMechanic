import { loginApi } from "../api";
import { authActions } from "./auth-slice";

export const loginUser = (cred) => {
    return async (dispatch) => {
        try {
            dispatch(authActions.setLoading(true), authActions.setError(false));
            const {data} = await loginApi(cred);
            dispatch(authActions.login({user:data}));
        } catch (error) {
            console.log(error);
            dispatch(authActions.setError(true));
        }
    };
};
