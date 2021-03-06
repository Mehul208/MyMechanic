import axios from "axios";
const url = "https://mmcserver.herokuapp.com";
export const fetchServices = () => axios.get(`${url}/services`);
export const fetchOptions = (id) => axios.get(`${url}/services/options/${id}`);
export const loginApi = (data) => axios.post(`${url}/user/login/`, data);
export const registerUserApi = (userData) =>
    axios.post(`${url}/user/register/`, userData);
export const registerWorkshop = (data) =>
    axios.post(`${url}/workshops/new/`, data);
