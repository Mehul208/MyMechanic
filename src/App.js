import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/HomePage/Layout";
import "./app.css";
import Page404 from "./Page404";
import SignIn from "./component/AuthPages/SignIn";
import SignUp from "./component/AuthPages/SignUp";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";
import ListServices from "./component/ServicesPage/ListServices";
import ServiceDetail from "./component/ServicesPage/ServiceDetail";
import CartList from "./component/CartPage/CartList";
import Section5 from "./component/HomePage/Section5";
const App = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Layout />} />
                    <Route path="services" element={<ListServices />} />
                    <Route path="services/:id" element={<ServiceDetail />} />
                    <Route path="auth">
                        <Route index element={<SignIn />} />
                        <Route path="signUp" element={<SignUp />} />
                        <Route path="*" element={<Page404 />} />
                    </Route>
                    <Route path="cart" element={<CartList />} />
                    <Route path="404" element={<Page404 />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </div>
            <Section5/>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
