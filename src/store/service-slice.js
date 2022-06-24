import { createSlice } from "@reduxjs/toolkit";

const service_slice = createSlice({
    name: "services",
    initialState: {
        servicesList: [],
        optionsList: [],
        loading: false,
        notFound: false,
    },
    reducers: {
        setServices(state, action) {
            state.servicesList = action.payload.services;
        },
        setOptions(state, action) {
            state.optionsList = action.payload.options;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setNotFound(state, action) {
            state.notFound = action.payload;
        },
    },
});
export const serviceActions = service_slice.actions;
export default service_slice;
