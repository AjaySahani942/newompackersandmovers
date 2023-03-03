import React from "react";
// import img22 from "../../images/PackingTips.webp";
// import img23 from "../../images/PackingTips2.webp";
// import img24 from "../../images/PackingTips3.webp";

const PackingTips = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="lg:mt-14 sm:mt-10 mt-12">
        <img className="lg:block hidden w-full" src='/images/PackingTips.webp' alt="Packaging" />
        <img
          className="lg:hidden sm:block hidden w-full"
          src='/images/PackingTips2.webp'
          alt="Packaging"
        />
        <img className="sm:hidden block w-full" src='/images/PackingTips3.webp' alt="Packaging" />
      </div>

      <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
        <div className="w-full ">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
            Packing Tips
          </h2>
          <p className="w-full font-normal text-base leading-6 text-gray-600 pb-8 mt-5">
            To pack the goods adequately, it is imperative to first sort out the
            goods and arrange them accordingly like separate fragile and
            delicate items, bulky goods, valuable goods and miscellaneous goods.
            Now, the second step is to pack the miscellaneous items first in a
            strong and durable carton and secure it with packing straps and
            tape. While packing keep all the things like labels, scissors, tape
            and marker at the place to perform the packing job efficiently in
            less time. Cartons should be selected according to the items to be
            packed and never overload the carton. All household electronic
            equipments like TV, computer, Microwave, washing machine,
            refrigerator and other electronic items should be packed in cartons
            of appropriate size and strength. Label each item and secure them
            with packing straps.
          </p>
          <p className="w-full font-normal text-base leading-6 text-gray-600 pb-8 mt-5">
            Pack the delicate items with a cover of air bubble sheet to avoid
            scratches and damages. Use edge board and wooden boxes to pack glass
            items. After packing up the cartons, seal them properly to avoid any
            type of leakage. The items likes clothes, curtains, pillows and
            blankets etc. need not to be packed separately, keep them in the
            cupboards and suitcases only and move as it is.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PackingTips;
