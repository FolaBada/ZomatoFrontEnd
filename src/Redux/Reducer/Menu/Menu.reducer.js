import { GET_MENU } from "./Menu.type";

const INITIAL_STATE = {
    menus: []
};

const menuReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_MENU:
            return {
                ...state,
                menus: action.payload
            };

            default:
                return {
                    ...state
                };
    }
};

export default menuReducer;