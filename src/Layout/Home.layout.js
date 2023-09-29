import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
//Components
import Navbar from "../Components/Navbar";
import FoodTab from "../Components/FoodTab";
import MedFoodTab from "../Components/FoodTab/Temp";

//redux actions

 import { getResturant } from "../Redux/Reducer/Resturant/Resturant.action";

const HomeLayout = (props) => {
const dispatch = useDispatch();

useEffect (() => {
    dispatch(getResturant());
}, []);

    return <>
    <div className="container mx-auto ">
        <Navbar />
        <MedFoodTab />
        {props.children}
       
       
        </div>
        
        <FoodTab />
    </>
};

export default HomeLayout;