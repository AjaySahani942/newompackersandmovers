import React from "react";
import { NavLink } from "react-router-dom";


const Testimonial = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col lg:items-center justify-between lg:flex-row">
        <div className="mb-14 xl:mb-0">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-semibold leading-10   text-gray-800 xl:w-2/3 pr-16 lg:pr-0">
            Our customers love what we do
          </h1>
          <p className="mt-4 text-base leading-normal text-gray-600 md:w-2/3 lg:w-3/4 pr-16 lg:pr-0">
            Many users satisfied with our logistic Services and shows our
            reviews.
          </p>
          <button className="hidden md:block w-full sm:w-auto mt-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00838C] flex items-start justify-center sm:justify-start px-8 py-4  bg-[#00838C] hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">
            <NavLink to="/testimonal">Cutomer Review</NavLink>
          </button>
        </div>
        <div
          role="list"
          aria-label="Testimonials"
          className="xl:w-1/2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 flex-wrap justify-center items-start"
        >
          <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
            <img src='/images/left-quote.webp' alt="left quote" aria-hidden="true" />

            <div className="pl-4 pt-4 flex items-start justify-between">
              <div className="mr-6">
                <p className="xl:text-xl xl:leading-loose text-gray-600">
                  "NewOM Packers and Movers did an amazing job with my move!
                  They showed up on time and were very professional. Highly
                  recommend them!
                </p>
                <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                  Alisha Verma
                </p>
              </div>
              <img
                className="w-[65px] h-[65px] rounded-full"
                src='/images/avatar-1.webp'
                alt="Display Avatar of Alisha Verma"
              />
            </div>
          </div>
          <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
            <img src='/images/left-quote.webp' alt="left quote" />
            <div className="pl-4 pt-4 flex items-start justify-between">
              <div className="mr-6">
                <p className="xl:text-xl xl:leading-loose text-gray-600">
                  "I had a great experience working with NewOM Packers and
                  Movers. They were great to work with and made the moving
                  process much easier. Highly recommend!"
                </p>
                <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                  Milan Gurung
                </p>
              </div>
              <img
                className="w-[65px] h-[65px] rounded-full"
                src='/images/avatar-2.webp'
                alt="Display avatar of Milan Gurung"
              />
            </div>
          </div>
          <div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
            <img src='/images/left-quote.webp' alt="left quote" />
            <div className="pl-4 pt-4 flex items-start justify-between">
              <div className="mr-6">
                <p className="xl:text-xl xl:leading-loose text-gray-600">
                  This website has a bunch of amazing components which improves
                  my design
                </p>
                <p className="mt-4 text-base font-semibold leading-none text-gray-800">
                  Rohan Verma
                </p>
              </div>
              <img
                className="w-[65px] h-[65px] rounded-full"
                src='/images/avatar-3.webp'
                alt="Display Avatar Rohan Verma"
              />
            </div>
          </div>
          <button className="md:hidden w-full sm:w-auto mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00838C] flex items-start justify-center sm:justify-start px-8 py-4 bg-[#00838C] hover:bg-gray-600 rounded text-base font-medium leading-none text-center text-white">
            <NavLink to="/testimonal">Cutomer Reviews</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
