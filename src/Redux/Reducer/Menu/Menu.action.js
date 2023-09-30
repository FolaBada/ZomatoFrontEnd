import axios from "axios";

import { GET_MENU } from "./Menu.type";

export const getMenu = () => async(dispatch) => {
    try{
        const menuList = await axios ({
            method: "GET",
            url: "http://localhost:4000/menu/list/:_id"
        });

        return dispatch({ type: GET_MENU, payload: menuList.data})
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error})
    }
};
