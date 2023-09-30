import axios from "axios";

import { GET_ORDER } from "./Order.type";

export const getOrder = () => async(dispatch) => {
    try{
        const orderList = await axios ({
            method: "GET",
            url: "http://localhost:4000/order/:_id"
        });

        return dispatch({ type: GET_ORDER, payload: orderList.data})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
};
