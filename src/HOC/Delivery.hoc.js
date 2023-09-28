import React, { Component } from "react";
import {Route} from "react-router-dom";

//Layout
import DeliveryCarousel from "../Components/Delivery/deliveryCorusal";

const DeliveryCarouselHOC = ({component: Component, ...rest}) => {
    return (
        <>
            <Route 
            {...rest}
            component= {(props) => (
                <DeliveryCarousel>
                <Component {...rest} />
                </DeliveryCarousel>
            )} 
            />
        </>
    )
}

export default DeliveryCarouselHOC;