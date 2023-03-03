import React from "react";

import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className=" relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
      <div className="text-color w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12">
        <h1 className="text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-gray-900 font-extrabold f-f-l">
          NewOm Packers and Movers
        </h1>
        <div className="f-f-r text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6">
          <h2>
            NewOM Packers and Movers will provide you with prompt and reliable
            service to ensure your move is a success.{" "}
          </h2>
          <div className="pt-1">

          <p className=" text-black text-base hover:text-gray-300 ease-in">
            <a href="tel:+918853503889" target="_blank" rel="noreferrer">
              {" "}
              +91 88535 03889
            </a>
          </p>
          <p className=" text-black text-base hover:text-gray-300 ease-in">
            <a href="tel:+917786860700" target="_blank" rel="noreferrer">
              +91 77868 60700
            </a>
          </p>
          </div>
        </div>
        <div className="lg:flex">
          <button
            className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-[#00838C] text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00838C] rounded-lg"
            onClick={() => navigate("/services")}
          >
            View our Services
          </button>

          <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 lg:ml-2 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-[#00838c38] text-[#00838ccb] font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00838C] rounded-lg">
            <a href="tel:+918853503889"> Call Us Now</a>
          </button>
        </div>
      </div>
      <img
        className="w-full mt-[-2rem] md:mt-0 object-fill md:w-2/3 md:-ml-4 lg:-ml-4 xl:ml-0 rounded-lg"
        src='/images/cover.webp'
        alt=""
        role="img"
      />
      <button
        className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-[#00838C] text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00838C] rounded-lg"
        onClick={() => navigate("/services")}
      >
        View our Services
      </button>
      <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-[#00838c5a] text-[#00838ccb] font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00838C] rounded-lg">
        {" "}
        <a href="tel:+918853503889"> Call Us Now</a>
      </button>
    </div>
  );
};

export default Header;
