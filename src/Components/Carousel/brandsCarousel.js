import React from "react";
import BrandSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BrandCarousel = () => {
    const settingsMd ={
        arrows:true,
        autoplay: true,
        centerMode: true,
        slidesToShow: 2,
        centerPadding: "100px",
        infinite: "true"
    }


    const settings = {
        arrows: true,
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1
        
    };
    const images = [
        "https://pbs.twimg.com/profile_images/1678414062441381888/K1V_1xZb_400x400.png",
        "https://c8.alamy.com/comp/2E1KDEP/kentucky-fried-chicken-restaurant-logo-2E1KDEP.jpg",
        "https://marketingedge.com.ng/wp-content/uploads/2019/09/mr.-bigg.jpg",
        "https://cdn-images-1.medium.com/max/521/1*u-fina3zNpg1FHiR_yDObg.jpeg",
        "https://www.coldstonecreamery.ng/templates/eatn_go/img/coldstone/MenuFav2.png"
    ]

    return (
        <>
        <div className="md:hidden py-3 px-3">
        <h1 className="text-xl font-semibold my-2">Top brands for you</h1>
        <BrandSlider {...settings}>
        {
            images.map((image) => (
                <div className="w-full h-56 ">
                    <img src={image} alt="testing" className="w-full h-full  rounded-md"/>
                </div>
            ))
        }    
        </BrandSlider> 
        </div>

        <div className="hidden md:block py-10">
        <h1 className="text-xl font-semibold my-2">Top brands for you</h1>
        <BrandSlider {...settingsMd}>
        {
            images.map((image) => (
                <div className="w-full h-72 px-2 py-3">
                    <img src={image} alt="testing" className="w-full h-full rounded-md"/>
                </div>
            ))
        }    
        </BrandSlider> 
        </div>

        </>
    );
};

export default BrandCarousel;
