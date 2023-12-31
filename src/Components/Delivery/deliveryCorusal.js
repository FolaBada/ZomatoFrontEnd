import React from "react";

//componenets
import DeliveryFoodCategory from "./deliveryFoodCategory";

const DeliveryCarousel = () => {
    return (
        <>
        <h1 className="hidden md:flex text-3xl font-semibold my-2">Eat what makes you happy</h1>
        <div className="hidden md:flex py-5 flex flex-wrap justify-between gap-3 rounded-md">
            <DeliveryFoodCategory />
        </div>

        <h1 className="md:hidden text-xl font-semibold my-2">Eat what makes you happy</h1>
        <div className="md:hidden py-5 flex flex-wrap justify-between gap-3 rounded-md">
            <DeliveryFoodCategory />
        </div>
        </>
    );
};

export default DeliveryCarousel;