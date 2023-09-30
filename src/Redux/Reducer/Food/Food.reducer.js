import { GET_FOOD } from "./Food.type";

const INITIAL_STATE = {
    food: []
};

const foodReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_FOOD:
            return {
                ...state,
                food: action.payload
            };

            default:
                return {
                    ...state
                };
    }
};

export default foodReducer;