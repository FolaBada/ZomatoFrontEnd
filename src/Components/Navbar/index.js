import React from "react";
import { BiSolidPizza } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";


const MobileNav = () => {
    return (<>

    <div className="items-center justify-between flex w-full md:hidden p-4 flex bg-white shadow-md items-center">
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


const MedNav = () => {
    return(<>
    <div className="hidden items-center justify-between flex w-full hidden md:flex py-4">
    <div className="w-28">
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhscJWf5GMSStgPisQEdIxc0w0TnH3ME2GA&usqp=CAU"
            alt="logo"
            className="w-full h-full"
            />
        </div>
        
        <div className="flex items-center w-full h-full px-8 w-40">
            <div><AiOutlineSearch/></div>
            <input type="search"className="border-2 w-full"/>
             <input type="text"  className="border-2 w-full"/>
        </div>

        <div className="flex items-center">
            <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
                <BiSolidPizza />
            </span>
            <p className="px-2">Fola</p>
            <div><RiArrowDropDownLine/></div>
        </div>
    </div>
    </>)

}

const Navbar = () => {
return(
    <>
    <nav>
       <MobileNav />
       {<nav className="">
        <MedNav />
       </nav> }
    </nav>
</>
)

};

export default Navbar;