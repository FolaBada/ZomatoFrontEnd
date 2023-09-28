import React from "react";

import DiningCarousel from "./diningCarousel";
import Location from "../location";
import Filter from "../filter";
import DiningCardOne from "./diningCardOne";


const Dining = () => {
    return(<>
        <div>
            <Location />
            <Filter  />
            <DiningCarousel />
            <DiningCardOne />
        </div>
    </>)
}

export default Dining;