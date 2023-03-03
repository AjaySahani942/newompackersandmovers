import React from "react";
// import img18 from "../../images/Truck.webp";

const TruckandTempoOnRent = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Truck and Tempo on Rent
          </h1>

          <p className="font-normal text-base leading-6 text-gray-600 pb-8">
            Truck and Temp on Rent is a leading transport company serving the
            logistics needs of customers in both domestic and international
            markets. Our professionals at Truck and Temp on Rent are well-versed
            in driving, handling and delivering heavy loads. We also offer door
            to door services across India with our dedicated fleet of trucks,
            vans and mini buses. Our professional team at Truck and Temp on Rent
            make sure that your shipments reach destination safely and timely.
          </p>
          <h1 className="text-2xl lg:text-3xl font-bold leading-9 text-gray-800 pb-4">
            Quality of Truck and Tempo on Rent
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 pb-8">
            Truck and tempo is a very versatile service that can be used to load
            and unload goods, transport them within the city or country,
            facilitate shipments of goods from one place to another, etc. We
            offer competitive rates, reliable service and quality trucks at an
            affordable cost.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full rounded"
            src='/images/Truck.webp'
            alt="Truck"
          />
        </div>
      </div>
    </div>
  );
};

export default TruckandTempoOnRent;
