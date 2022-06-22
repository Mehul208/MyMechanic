import axios from "axios";
const url = "http://localhost:5000";
export const fetchServices = () => axios.get(`${url}/services`);
export const fetchOptions = (id) => axios.get(`${url}/services/options/${id}`);
export const loginApi = (data) => axios.post(`${url}/user/login/`, data);
export const registerUserApi = (userData) =>
    axios.post(`${url}/user/register/`, userData);
