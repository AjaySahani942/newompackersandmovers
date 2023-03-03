import React from "react";
// import img14 from "../../images/Loading.webp";

const LoadingandUnloading = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Loading and Unloading Services
          </h1>

          <p className="font-normal text-base leading-6 text-gray-600 pb-8">
            NewOm Packers and Movers is one of the leading Moving Company in
            Gorakhpur, and has been able to forge its niche in the top Packers
            and Movers category by providing safe and timely delivery every
            time. We use high quality material for Loading and Unloading as well
            as state-of-the-art packing to ensure that the goods are delivered
            safely. We have a team of best packers who are well trained for all
            these tasks. Furthermore, you can easily reach us at our offices or
            call us at any time.
          </p>
          <h1 className="text-2xl lg:text-3xl font-bold leading-9 text-gray-800 pb-4">
            Quality of Loading and Unloading Services
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 pb-8">
            We are committed to provide you the complete Loading and Unloading
            Services at reasonable rates. With our years of experience in
            Packing and Carrying Goods, we have been at the forefront in
            offering high quality loading and unloading service. We use finest
            quality material for packing which helps you to load and deliver the
            goods safely. Proper packing of goods is one of the most important
            aspects of transfers. Knowledge of the right materials to use,
            packing methods and correct way of handling these materials are
            essential components of Loading & Unloading
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full rounded"
            src='/images/Loading.webp'
            alt="Loading"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingandUnloading;
