import { createSlice } from "@reduxjs/toolkit";

const local_user = JSON.parse(localStorage.getItem("user"));
const auth_slice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        user: local_user ? local_user : null,
        isLoggedIn: local_user ? true : false,
        isError: false,
    },
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.isError = action.payload;
            state.loading = false;
        },
        login(state, action) {
            state.isLoggedIn = true;
            state.loading = false;
            state.user = action.payload.user;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.user = null;
            localStorage.removeItem("user");
        },
    },
});

export const authActions = auth_slice.actions;
export default auth_slice;
