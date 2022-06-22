import { createSlice, current } from "@reduxjs/toolkit";

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
            console.log(current(state));
        },
        setOptions(state, action) {
            state.optionsList = action.payload.options;
            console.log(current(state));
        },
        setLoading(state, action) {
            state.loading = action.payload;
            console.log(current(state));
        },
        setNotFound(state, action) {
            state.notFound = action.payload;
        },
    },
});
export const serviceActions = service_slice.actions;
export default service_slice;
