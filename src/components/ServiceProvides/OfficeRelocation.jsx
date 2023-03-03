import React from "react";
// import img15 from "../../images/Officerelocation.webp";
const OfficeRelocation = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Office Relocation Services
          </h1>

          <p className="font-normal text-base leading-6 text-gray-600 pb-8">
            NewOm Packers and Movers is dedicated to providing safe and timely
            delivery every time. We use high quality material for Office
            Relocation as well as state-of-the-art packing to ensure that the
            goods are delivered safely. Our team has been trained to handle all
            these tasks, so you can rely on us 100%. Our services include all
            types of Office Relocation, Exotic Cargo Movement and Commercial
            Relocation in Gorakhpur, Allahabad, Mirzapur, Lucknow and other
            cities in India.
          </p>
          <h1 className="text-2xl lg:text-3xl font-bold leading-9 text-gray-800 pb-4">
            Quality of Relocation Services
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 pb-8">
            Trying to find a reliable and trustworthy Relocation Company in your
            location can be quite a challenge. We are dedicated to providing the
            best quality of relocation services, backed by our unmatched
            experience in Packing and Carrying Goods. We use finest quality
            material for packing which helps you to load and deliver the goods
            safely. In addition, our years of experience in Packing and Carrying
            Goods has proved that with a successful foothold, we have been at
            the forefront in offering high quality Office Relocation service."
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full rounded"
            src='/images/Officerelocation.webp'
            alt="Officerelocation"
          />
        </div>
      </div>
    </div>
  );
};

export default OfficeRelocation;
