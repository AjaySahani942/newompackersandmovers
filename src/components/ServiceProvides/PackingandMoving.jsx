import React from "react";
// import img16 from "../../images/Packing.webp";
const PackingandMoving = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Packing and Moving Services
          </h1>

          <p className="font-normal text-base leading-6 text-gray-600 pb-8">
            Our company provides packing and moving services to our clients. We
            have a team of dedicated professionals, who are experts in their
            fields, to handle all types of staffing work. They are also trained
            to provide the best solutions to your problems. We offer several
            solutions for environment protection and safety at every phase of
            your relocation project. Our experts can provide you with all kinds
            of packing materials that are needed for an efficient packing
            process as well as safe transport from one place to another.
          </p>
          <h1 className="text-2xl lg:text-3xl font-bold leading-9 text-gray-800 pb-4">
            Quality of Packing and Moving Services
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 pb-8">
            Packing and moving is a very important step in the process of
            shipping goods from one place to another. It is not easy to find
            that perfect material which would ensure good packing, with proper
            wear and tear on the goods, but it is essential for your business.
            We take pride in offering our clients with high quality packing
            services that make sure every aspect of your move goes smooth from
            its beginning until delivery. From customer satisfaction to
            efficiency in handling your shipments, our team is committed to
            providing total coverage for all types of commercial moves through
            our professional services.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full rounded"
            src='/images/Packing.webp'
            alt="Packing"
          />
        </div>
      </div>
    </div>
  );
};

export default PackingandMoving;
