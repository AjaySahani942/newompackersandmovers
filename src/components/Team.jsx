import React from "react";

// import img37 from "../images/ga1.webp";
// import img38 from "../images/ga2.webp";
// import img43 from "../images/ga7.webp";
import { NavLink } from "react-router-dom";
function Team() {
  return (
    <div className="pb-[1rem]">
      <div className="container flex justify-center mx-auto pt-16 ">
        <div>
         
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
          Gallery

          </h1>
        </div>
      </div>
      <div className="w-full px-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around pt-10">
            <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative">
              <div className="bg-top bg-cover bg-no-repeat h-64">
                <img
                  src='/images/ga1.webp'
                  alt=""
                  className="h-full w-full overflow-hidden object-cover rounded shadow "
                />
              </div>
           
            </div>
            <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs  mb-20 xl:max-w-sm lg:w-1/2 relative">
              <div className="bg-top bg-cover bg-no-repeat h-64">
                <img
                  src='/images/ga2.webp'
                  alt=""
                  className="h-full w-full overflow-hidden object-cover rounded shadow"
                />
              </div>
             
            </div>
            <div className="xl:w-1/3 sm:w-1/2 mx-auto sm:max-w-xs mb-20 xl:max-w-sm lg:w-1/2 relative">
              <div className="bg-top bg-cover bg-no-repeat h-64">
                <img
                  src='/images/ga7.webp'
                  alt=""
                  className="h-full w-full overflow-hidden object-cover rounded shadow"
                />
              </div>
             
            </div>
          </div>
          <div className="lg:flex md:flex sm:flex lg:pl-[74px] md:pl-24">
            <button className="w-full sm:w-auto mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00838C] flex items-start justify-center sm:justify-start px-8 py-4 bg-[#00838C] hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">
            <NavLink to="/pages/gallery">
            View Our Gallery
                  </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;

