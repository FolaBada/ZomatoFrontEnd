import React from "react";

//componenets
import DeliveryFoodCategory from "./deliveryFoodCategory";

const DeliveryCarousel = () => {
    return (
        <>
        <h1 className="text-xl font-semibold my-2">Eat what makes you happy</h1>
        <div className="flex flex-wrap justify-between gap-3s">
            <DeliveryFoodCategory />
            <DeliveryFoodCategory />
            <DeliveryFoodCategory />
            <DeliveryFoodCategory />
            <DeliveryFoodCategory />
            <DeliveryFoodCategory />
        </div>
        </>
    );
};

export default DeliveryCarousel;