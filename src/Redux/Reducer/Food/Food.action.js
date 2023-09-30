import axios from "axios";

import { GET_FOOD } from "./Food.type";

export const getFood = () => async(dispatch) => {
    try{
        const foodList = await axios ({
            method: "GET",
            url: "http://localhost:4000/order/:_id"
        });

        return dispatch({ type: GET_FOOD, payload: foodList.data})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
};
