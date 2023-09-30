//HOC
import HomeLayoutHOC from "./HOC/Home.hoc";
import DeliveryCarouselHOC from "./HOC/Delivery.hoc";

//Component
import Master from "./Components/master";
import DeliveryCarousel from "./Components/Delivery/deliveryCorusal";
import OrderCarousel from "./Components/Carousel/orderCarousel.component";

function App() {
  return (
    <>
    <div className="hidden md:block px-20">
    <HomeLayoutHOC path="/"exact component={OrderCarousel} />
    <HomeLayoutHOC path="/:type"exact component={Master} />
    <DeliveryCarouselHOC path="/"exact component={DeliveryCarousel}/>
    </div>


    <div className="md:hidden">
    <HomeLayoutHOC path="/z"exact component={OrderCarousel} />
    <HomeLayoutHOC path="/:type"exact component={Master} />
    <DeliveryCarouselHOC path="/"exact component={DeliveryCarousel}/>
    </div>
    
    </>
  ) 
}

export default App;
