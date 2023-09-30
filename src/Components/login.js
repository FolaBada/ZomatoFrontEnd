// import React from "react";
// import { useNavigate } from "react-router";

// const Login = () => {
//    const navigate = useNavigate();

//     const Navigate = () => {
//         navigate("/home")
//     }

//     return (
//         <div className=" place-content-center py-20">
//             <div className=" justify-center">
//                 <form className="max-w-[400px] w-full mx-auto bg-gray-900 p-8 rounded-lg">
//                     <h2 className="text-4xl text-white font-bold text-center">SIGN IN TO ZOMATO</h2>
//                     <div className="flex flex-col text-gray-400 py-2">
//                         <label>User Name</label>
//                         <input className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="text" />
//                     </div>
//                     <div className="flex flex-col text-gray-400 py-2">
//                         <label>Password</label>
//                         <input className=" rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none" type="password" />
//                     </div>
//                     <div className="flex justify-between text-gray-400 py-2">
//                         <p className="flex items-center"><input className="mr-2" type="checkbox" /> Remember Me</p>
//                         <p >Forgot Password</p>
//                     </div>
//                     <button onClick={Navigate} className="w-full my-5 py-2 bg-red-500 shadow-lg shadow-red-500/40 text-white font-semibold rounded-lg">Sign In</button>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login;