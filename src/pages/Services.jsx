import React from "react";
import { SiArdour } from "react-icons/si";
import {
  FaMotorcycle,
  FaCar,
  FaTruck,
  FaTruckLoading,
  FaWarehouse,
} from "react-icons/fa";
import { GiBoxUnpacking, GiMachineGun } from "react-icons/gi";
import { ImOffice } from "react-icons/im";
import { NavLink } from "react-router-dom";

export default function Services() {
  return (
    <div className="dark:bg-gray-900">
      <section className="mx-auto container py-20 ">
        <div className="flex justify-center items-center flex-col">
          <div className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800 dark:text-white  ">
            <h1>Our Services</h1>
          </div>
          <div className="pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
            <NavLink to="/services/car">
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <FaCar className="text-[#00838C]" size={40} />
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>Car Transportation Service</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center ">
                  <p>
                    Our car transport services are sure to get you where you
                    need to be on time!
                  </p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/services/bike">
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <FaMotorcycle className="text-[#00838C]" size={40} />
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>Bike Transportation Service</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                  <p>
                    Motorcycle transport services with experienced and certified
                    drivers.
                  </p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/services/relocation">
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <SiArdour className="text-[#00838C]" size={40} />
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>Relocation Service</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                  <p>
                    If you need relocation transport services, we can help make
                    your move easier.
                  </p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/services/truck">
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <FaTruck className="text-[#00838C]" size={40} />
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>Truck/Tempo on Rent Service</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                  <p>
                    Transporting trucks with the same cadence and timing as
                    music
                  </p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/services/office">
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <ImOffice className="text-[#00838C]" size={40} />
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>Office Relocation Service</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                  <p>
                    Office transportation services can make your commute a
                    smooth one.
                  </p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/services/packing">
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <GiBoxUnpacking className="text-[#00838C]" size={40} />
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>Packing and Moving Service</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                  <p>
                    Packing and moving transportation services can help you move
                    without any hassle.
                  </p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/services/loading">
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <FaTruckLoading className="text-[#00838C]" size={40} />
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>Loading and Unloading Service</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                  <p>
                    Loading and unloading transportation canines is always a
                    rewarding experience.
                  </p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/services/warehouse">
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <FaWarehouse className="text-[#00838C]" size={40} />
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>Warehousing and Storage Service</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                  <p>
                    Providing transportation and storage for goods being shipped
                    in bulk.
                  </p>
                </div>
              </div>
            </NavLink>
            <NavLink to="/services/machine">
              <div className="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                <div className="mb-6">
                  <GiMachineGun className="text-[#00838C]" size={40} />
                </div>
                <div className="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                  <h2>Heavy Machinery Shifting Service</h2>
                </div>
                <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                  <p>
                    Heavy machine transportation services can help make your job
                    easier.
                  </p>
                </div>
              </div>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
