import React from "react";
import { BiSolidPizza } from "react-icons/bi";


const MobileNav = () => {
    return (<>

    <div className="items-center justify-between flex w-full md:hidden">
    <div className="w-28">
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhscJWf5GMSStgPisQEdIxc0w0TnH3ME2GA&usqp=CAU"
            alt="logo"
            className="w-full h-full"
            />
        </div>
        <div className="flex items-center gap-3">
            <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
            <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
                <BiSolidPizza />
            </span>
        </div>
    </div>
    
    </>)
}

const Navbar = () => {
return(
    <>
    <nav className="p-4 flex bg-white shadow-md items-center ">
       <MobileNav />
    </nav>
</>
)

};

export default Navbar;