import React from "react";
// import img17 from "../../images/Relocation.webp";

const RelocationServices = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Relocation Services
          </h1>

          <p className="font-normal text-base leading-6 text-gray-600 pb-8">
            You have to hire the NewOm Packers and Movers. We are hands down the
            best one in the moving process and then understand the needs of our
            clients and then as per their ways move out the services. If you
            progress in your own way, you must manage various things during the
            process. The first thing you have to consider is that corporate
            moving is not handled by a single person alone. Yes, even if you
            want professionals who can help with packing and unpacking, they
            need to come up with their own plan on how to transport all goods
            safely.
          </p>
          <h1 className="text-2xl lg:text-3xl font-bold leading-9 text-gray-800 pb-4">
            Quality of Relocation Services
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 pb-8">
            Quality of relocation services is one of the most important factors
            in ensuring a smooth and successful move. The company needs to be
            structured well so that it can give an efficient service with
            respect to crew members and equipment availability.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full rounded"
            src='/images/Relocation.webp'
            alt="Relocation"
          />
        </div>
      </div>
    </div>
  );
};

export default RelocationServices;
