import React from 'react'

import { NavLink } from "react-router-dom";
// import img22 from "../images/Error.webp";


const NotFound = () => {
  return (
    <div className="bg-gray-800 h-screen">
    <div className="flex items-center justify-center py-12">
      <div className="bg-white border rounded-md flex items-center justify-center mx-4 md:w-2/3 ">
        <div className="flex flex-col items-center py-16 ">
          <img className="px-4 hidden md:block" src='/images/Error.webp' alt="Error Page" />
          <img className="md:hidden" src='/images/Error.webp' alt="Error Page" />
          <h1 className="px-4 pt-8 pb-4 text-center text-5xl font-bold leading-10 text-gray-800">
            OOPS!{" "}
          </h1>
          <p className="px-4 pb-10 text-base leading-none text-center text-gray-600">
            Sorry about that! Please visit our hompage to get where you need
            to go{" "}
          </p>
          <button className="mx-4 h-10 w-44 border rounded-md text-white text-base bg-[#00838cec] hover:bg-[#00838C] focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-[#00838C]">
            <NavLink to="/"> Go back</NavLink>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NotFound;
