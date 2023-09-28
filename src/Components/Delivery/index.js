import React, { useEffect, useState} from "react";

import { useSelector} from "react-redux";

//components
import DeliveryCarousel from "./deliveryCorusal";
import OrderCarousel from "../Carousel/orderCarousel.component";
import BrandCarousel from "../Carousel/brandsCarousel";
import BestRatedFood from "./bestFood";


const Delivery = () => {
    const [resturantList, setResturantList] = useState([]);

    const reduxState = useSelector(
        (globalStore) => globalStore.resturant.resturants
    );

    useEffect(() => {
        setResturantList(reduxState.resturants);
    }, [reduxState.resturants]);
     
    return (
        <>
        <div>
        <OrderCarousel />
        <DeliveryCarousel />
        <BrandCarousel />
        <BestRatedFood />
        
        </div>
        
        </>
    );
};

export default Delivery;