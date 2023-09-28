import React, { useEffect , useState} from "react";
import { useParams, Link } from "react-router-dom";
import { BsBagCheck } from "react-icons/bs";
import { CiBeerMugFull } from "react-icons/ci";
import { GiMorgueFeet } from "react-icons/gi";



const Temp = () => {

    
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
        
             <div className="hidden bg-white p-3 w-2/4 flex items-center justify-between text-gray-500 md:flex">
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
                                    "absolute -bottom-3 w-full h-2 border-t-4 border-zomato-400"
                                }
                            />
                            {items.icon}
                            <h5 className="text-sm">{items.name}</h5>
                    </div>
                   </Link>
                ))
               }
            </div>
    )
  
};
export default Temp;