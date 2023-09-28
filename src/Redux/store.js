import React from "react";

import { configureStore } from "@reduxjs/toolkit";

import resturantReducer from "./Reducer/Resturant/Resturant.reducer";

export default configureStore({
    reducer: {
        resturant: resturantReducer
    }
});


