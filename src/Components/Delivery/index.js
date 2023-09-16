import React, { userState, useEffect, useState} from "react";

// import { useSelector} from "react-redux";

//components
import DeliveryCarousel from "./deliveryCorusal";

const Delivery = () => {
//     const [resturantList, setResturantList] = useState([]);

//     const reduxState = useSelector(
//         (globalStore) => globalStore.resturant.resturants
//     );

//     useEffect(() => {
//         setResturantList(reduxState.resturants);
//     }, [reduxState.resturants]);
     
    return (
        <>
        <DeliveryCarousel />
        </>
    );
};

export default Delivery;