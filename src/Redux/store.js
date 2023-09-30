import React from "react";

import { configureStore } from "@reduxjs/toolkit";

import resturantReducer from "./Reducer/Resturant/Resturant.reducer";
import orderReducer from "./Reducer/Orders/Order.reducer";
import foodReducer from "./Reducer/Food/Food.reducer";
import menuReducer from "./Reducer/Menu/Menu.reducer";

export default configureStore({
    reducer: {
        resturant: resturantReducer,
        order: orderReducer,
        food: foodReducer,
        menu: menuReducer
    }
});


