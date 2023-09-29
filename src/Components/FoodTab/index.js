import React, { useEffect , useState} from "react";
import { useParams, Link } from "react-router-dom";
import { BsBagCheck } from "react-icons/bs";
import { CiBeerMugFull } from "react-icons/ci";
import { GiMorgueFeet } from "react-icons/gi";


const MobileTab = () => {

    const [allTypes, setAllTypes] = useState([
        {
            id: "delivery",
            icon: <BsBagCheck />,
            name: "Delivery",
            isActive: false
        },

        {
            id: "night",
            icon: <CiBeerMugFull />,
            name: "Night Life",
            isActive: false
        },

        {
            id: "dining",
            icon: <GiMorgueFeet />,
            name: "Dining Out",
            isActive: false
        }
    ]);
    const { type } = useParams();

    return (
        <>
            <div className="md:hidden bg-white p-3 fixed bottom-0 z-10 w-full flex items-center justify-between border text-gray-500">
               {
                allTypes.map((items) => (
                   <Link to = {`/${items.id}`}>
                    <div
                        className={
                            type === items.id
                            ? "flex flex-col relative items-center text-xl text-zomato-400"
                            : "flex flex-col items-center text-xl"
                        }>

                            <div
                                className={
                                    type === items.id && 
                                    "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"
                                }
                            />
                            {items.icon}
                            <h5 className="text-sm">{items.name}</h5>
                    </div>
                   </Link>
                ))
               }
            </div>
        </>
    );
}


const FoodTab =  () => {
    return (
        <>
        <div>
            <MobileTab />
        </div>
        </>
    )
}

export default FoodTab;

//master_url: type

//delivery, dining, night life -> type