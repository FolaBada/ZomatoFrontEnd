import React from "react";
import { useParams } from "react-router-dom";


//components
import Delivery from "./Delivery";
import Dining from "./Dining";
import Night from "./NightLife";

const Master = () => {
    const { type } = useParams();

    return (
        <>
        <div className="w-full">
        {type === "delivery" && <Delivery />}
        </div>

        <div className="w-full">
        {type === "dining" && <Dining />}
        </div>

        <div className="w-full">
        {type === "night" && <Night />}
        </div>
        </>
    )
};

export default Master;