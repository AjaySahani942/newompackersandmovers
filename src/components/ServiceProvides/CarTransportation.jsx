import React from "react";
// import img11 from "../../images/Car.webp";

const CarTransportation = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Car Transportation
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 pb-8">
            You can book NewOm Packers and Movers for car transport services in
            Gorakhpur. We will take utmost care of your vehicle, and transport
            it smoothly and safely to your desired destination. Your car is not
            just a car to you; it is a vehicle that you cosset, a vehicle to
            which your innumerable memories are attached, a vehicle that has
            always come to your aid whenever you wanted to move to different
            places.
          </p>
          <h1 className="text-2xl lg:text-3xl font-bold leading-9 text-gray-800 pb-4">
            Quality of Car Transportation
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 ">
            If you are looking for the best car shipping company in Gorakhpur
            then NewOm Packers and Movers is the right choice. We have experts
            who understand that you might be nervous about the thought of
            putting such an expensive investment in the hands of someone else to
            protect and transport. Don't worry, we have enough time-tested
            experience, knowledge and capabilities to ship any vehicle. No
            matter what vehicle you are shipping or where you are shipping it
            let our experts at NewOm Packers and Movers in Gorakhpur handle it."
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full rounded"
            src='/images/Car.webp'
            alt="Car"
          />
        </div>
      </div>
    </div>
  );
};

export default CarTransportation;
