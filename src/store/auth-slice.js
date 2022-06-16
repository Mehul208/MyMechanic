import { createSlice } from "@reduxjs/toolkit";

const auth_slice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false },
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    },
});

export const authActions = auth_slice.actions;
export default auth_slice;
