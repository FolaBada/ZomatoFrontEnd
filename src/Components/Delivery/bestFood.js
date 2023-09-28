import React from "react";

import BestFoodCategory from "./bestFoodCategory";

const BestRatedFood = () => {
    return(<>
        <h1 className="hidden md:block py-20 px-3 text-3xl font-semibold my-2">Best Food In Lagos</h1>
        <div className="hidden md:flex flex flex-wrap justify-between gap-2 rounded-md">
       
        <BestFoodCategory />
        </div>

        <div className="md:hidden flex flex-wrap justify-between gap-3 rounded-md">
        <h1 className="md:hidden py-20 px-3 text-xl font-semibold my-2">Best Food In Lagos</h1>
        <BestFoodCategory />
        </div>
    </>)
}

export default BestRatedFood;


//flex flex-wrap justify-between gap-2 text-4xl

