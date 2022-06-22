import { createSlice, current } from "@reduxjs/toolkit";

const auth_slice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        loading: false,
        user: null,
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
            console.table(current(state));
        },
        logout(state) {
            state.isLoggedIn = false;
            state.user = null;
            console.table(current(state));
        },
    },
});

export const authActions = auth_slice.actions;
export default auth_slice;
