import axios from "axios";

import { GET_RESTURSNT } from "./Resturant.type";

export const getResturant = () => async(dispatch) => {
    try{
        const resturantList = await axios ({
            method: "GET",
            url: "http://localhost:3000/resturant"
        });

        return dispatch({ type: GET_RESTURSNT, payload: resturantList.data})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
};