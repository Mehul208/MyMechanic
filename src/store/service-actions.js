import { fetchOptions, fetchServices } from "../api";
import { serviceActions } from "./service-slice";

export const fetchData = () => {
    return async (dispatch) => {
        try {
            dispatch(serviceActions.setLoading(true));
            const { data } = await fetchServices();
            dispatch(serviceActions.setServices({ services: data }));
            dispatch(serviceActions.setLoading(false));
        } catch (error) {
            console.log(error);
        }
    };
};
export const fetchOption = (id) => {
    return async (dispatch) => {
        try {
            dispatch(serviceActions.setLoading(true));
            const { data } = await fetchOptions(id);
            console.log(data);
            dispatch(serviceActions.setOptions({ options: data }));
            dispatch(serviceActions.setLoading(false));
        } catch (error) {
            console.error(error.response.status);
        }
    };
};
