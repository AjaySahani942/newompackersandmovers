import React from "react";
// import img19 from "../../images/Warehousing.webp";

const WarehousingandStorage = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
            Warehouse Storage Services
          </h1>

          <p className="font-normal text-base leading-6 text-gray-600 pb-8">
            NewOm Packers and Movers is one of the most trusted names in
            providing A-Grade(Box) Warehouse storage Services in Gorakhpur. It
            includes multiple loading docks, provided with ample amount of space
            for placing of material at the time of receiving and shipping. We
            know the importance of safety of freights while forwarding them to a
            different destination. We realize that any damage to freights can
            cause a significant loss to our customer. Therefore, we take
            essential safety measures to ensure that no harm is caused while
            transportation. For this purpose, we also provide warehouse storage
            services to our customers.
          </p>
          <h1 className="text-2xl lg:text-3xl font-bold leading-9 text-gray-800 pb-4">
            Quality of Warehouse Storage Services
          </h1>
          <p className="font-normal text-base leading-6 text-gray-600 pb-8">
            Warehousing is the facility offered by Commercial and Industrial
            Users for storing goods at the destination of choice. These storage
            facilities can be availed either as an independent service, or with
            some form of additional services such as packing, transportation and
            conveyance etc.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full rounded"
            src='/images/Warehousing.webp'
            alt="Warehouse"
          />
        </div>
      </div>
    </div>
  );
};

export default WarehousingandStorage;
