import React from "react";

// import img46 from "../../images/pa1.webp";
// import img47 from "../../images/pa2.webp";
// import img48 from "../../images/pa3.webp";
// import img49 from "../../images/pa4.webp";
// import img50 from "../../images/pa5.webp";
// import img51 from "../../images/pa6.webp";

export default function PackingMaterial() {
  return (
    <>
      <div className="xl:mx-auto xl:container 2xl:px-20 px-2 py-20">
        <h1 className="text-4xl font-semibold leading-10 text-gray-800 text-center">
          {" "}
          Packing Material
        </h1>
        <div className="flex flex-wrap items-stretch xl:justify-between justify-center mt-16 xl:gap-6 gap-2">
          <div className="lg:w-96 w-80">
            <img
              src='/images/pa1.webp'
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="Packing"
            />
            <h1 className="font-bold text-center py-1 pb-3">Bubble Wrap</h1>
          </div>
          <div className="lg:w-96 w-80">
            <img
              src='/images/pa2.webp'
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="Packing"
            />
             <h1 className="font-bold text-center py-1 pb-3">Rope</h1>
          </div>
          <div className="lg:w-96 w-80">
            <img
              src='/images/pa3.webp'
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="Packing"
            />
             <h1 className="font-bold text-center py-1 pb-3"> Lemination Role</h1>
          </div>
          <div className="lg:w-96 w-80">
            <img
              src='/images/pa4.webp'
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="Packing"
            />
               <h1 className="font-bold text-center py-1 pb-3">2x2  Boxes</h1>
          </div>
          <div className="lg:w-96 w-80">
            <img
              src='/images/pa5.webp'
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="Packing"
            />
             <h1 className="font-bold text-center py-1 pb-3">All Materials</h1>
          </div>
          <div className="lg:w-96 w-80">
            <img
              src='/images/pa6.webp'
              className="h-72 w-full object-cover object-center rounded-t-md"
              alt="Packing"
            />
                 <h1 className="font-bold text-center py-1 pb-3">Big Boxes</h1>
          </div>
          <div className="w-full flex flex-col justify-center pt-6">
            <p className=" w-full font-normal text-base leading-6  text-gray-600 pb-8">
              Packing up regularly decade's worth of residence stuff can be
              tough and scary task even though. It is made definitely easier
              while you have the correct tools and objects at hand. Organize
              your move and move is very important pace to get to make sure
              unpack at the other external is fast and common, as far as NewOm
              Packers and Movers in Gorakhpur put together your stuff are
              absolute correctly. NewOm Packers and Movers in Gorakhpur can
              offer wide set of packing tools and equipments from shipment space
              boxes and box, container to packing and unpacking such as bubble
              enclose for slight stuff. For additional in sequence about packing
              matter Please speak to join of NewOm Packers and Movers lovely
              board at Gorakhpur, India. As in the Packers and Movers industry
              NewOm are brilliant to direct packing tools would maximum suits
              your requirements as well as reply any question you might have.
            </p>

            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">
              Packaging component:
            </h1>
            <div className=" w-full font-normal text-base leading-6  text-gray-600 pb-8">
              <ul>
                <li> 1. Bubble Wrap</li>
                <li> 2. Cardboard Boxes</li>
                <li> 3. Packing Tape </li>
                <li> 4. Packing Labels</li>
                <li> 5. Moving Blankets </li>
                <li> 6. Furniture Covers </li>
                <li> 7. Straps or Rope</li>
                <li> 8. Tool Set </li>
                <li> 9. Cleaning Supplies </li>
                <li> 10. Trash Bin</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
