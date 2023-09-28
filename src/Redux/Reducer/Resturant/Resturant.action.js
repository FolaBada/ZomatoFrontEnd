import axios from "axios";

import { GET_RESTURANT } from "./Resturant.type";

export const getResturant = () => async(dispatch) => {
    try{
        const resturantList = await axios ({
            method: "GET",
            url: "http://localhost:4000/resturant/allResturants"
        });

        return dispatch({ type: GET_RESTURANT, payload: resturantList.data})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
};
