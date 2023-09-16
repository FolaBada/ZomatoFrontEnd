import { GET_RESTURSNT } from "./Resturant.type";

const INITIAL_STATE = {
    resturants: []
};

const resturantReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_RESTURSNT:
            return {
                ...state,
                resturants: action.payload
            };

            default:
                return {
                    ...state
                };
    }
};

export default resturantReducer;