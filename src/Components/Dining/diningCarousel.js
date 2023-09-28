import React from "react";
import DiningSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DiningCarousel = () => {
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
        slidesToShow: 2
        
    };
    const images = [
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/2/0/DV1510H_fried-chicken-recipe-10_s4x3.jpg.rend.hgtvcom.826.620.suffix/1568222255998.jpeg",
        "https://www.allrecipes.com/thmb/pH8hoFfytcOT9XVK1DSmxv3L0OU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/140877-easy-eggless-strawberry-ice-cream-ddmfs-3x4-1-092e4d11b59049c8b3843014ea3c57f2.jpg",
        "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/07/what_to_know_apples_green_red_732x549_thumb-732x549.jpg",
        "https://media.istockphoto.com/id/1256670482/photo/turkey-sandwich-with-tomato-and-lettuce.jpg?s=612x612&w=0&k=20&c=CPwIFBHQqOob3SNZbegKKjUVL6xkUZgoQ2cxT0jcUrQ="
    ]

    return (
        <>
        <div className="md:hidden py-3 px-3">
        <h1 className="text-xl font-semibold my-2 px-2">Collection</h1>
        <h5 className="text-gray-500 text-sm my-3 px-2">Explore curated lists of top resturants,cafes,pubs and bars in Lagos based on trends</h5>
        <DiningSlider {...settings}>
        {
            images.map((image) => (
                <div className="w-full h-56 px-2">
                    <img src={image} alt="testing" className="w-full h-full  rounded-md"/>
                </div>
            ))
        }    
        </DiningSlider> 
        </div>

        <div className="hidden md:block py-10">
        <h1 className="text-xl font-semibold my-2">Collection</h1>
        <h5>Explore curated lists of top resturants,cafes,pubs and bars in Lagos based on trends</h5>
        <DiningSlider {...settingsMd}>
        {
            images.map((image) => (
                <div className="w-full h-96 px-2 py-3">
                    <img src={image} alt="testing" className="w-full h-full rounded-md"/>
                </div>
            ))
        }    
        </DiningSlider> 
        </div>

        </>
    );
};

export default DiningCarousel;
