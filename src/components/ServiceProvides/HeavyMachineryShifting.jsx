import React from "react";
// import img13 from "../../images/HeavyMachine.jpg";

const HeavyMachineryShifting = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Heavy Machinery Shifting
          </h1>

          <p className="font-normal text-base leading-6 text-gray-600 pb-8">
            Heavy Truck Transportation is a highly affordable and professional
            moving services. We are offering the best shifting services to our
            customers. Our team has good knowledge, skills and training so we
            can easily shift any item from top floor to ground floor or vice
            versa. The Commercial Shifting is not easy because there are many
            fragile items that need special attention while shifting them. When
            you want your commercial shop to vacate, then it's better to hire us
            because we offer commercial shifting services at an affordable
            price.
          </p>
          <h1 className="text-2xl lg:text-3xl font-bold leading-9 text-gray-800 pb-4">
            Quality of Heavy Machinery Shifting
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 pb-8">
            Quality is a word commonly used in the context of heavy machinery
            shifting, but quality is a matter of perspective. You might be in
            search of the best car shipping company in Gorakhpur but here at
            NewOm Packers and Movers, we understand that you might be nervous
            about the thought of putting such an expensive investment in the
            hands of someone else to protect and transport. Don't worry, we have
            enough time-tested experience, knowledge and capabilities to ship
            any vehicle. No matter what vehicle you are shipping or where you
            are shipping it let our experts at NewOm Packers and Movers in
            Gorakhpur handle it."
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full rounded"
            src='/images/HeavyMachine.jpg'
            alt="Machine"
          />
        </div>
      </div>
    </div>
  );
};

export default HeavyMachineryShifting;
