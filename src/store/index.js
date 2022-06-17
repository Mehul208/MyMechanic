import { configureStore } from "@reduxjs/toolkit";
import auth_slice from "./auth-slice";
import cart_slice from "./cart-slice";

const store = configureStore({
    reducer: {
        auth: auth_slice.reducer,
        cart: cart_slice.reducer,
    },
});

export default store;
