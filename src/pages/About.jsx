import React from "react";
// import img25 from "../images/about1.jpg";
// import img26 from "../images/about2.webp";
// import img27 from "../images/about3.webp";
// import img28 from "../images/about4.webp";
// import img29 from "../images/about5.webp";
// import img30 from "../images/about6.webp";

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="lg:w-10/12 w-full">
        <p className="font-normal text-xl leading-3 text-[#00838C] hover:text-[#00838cde] cursor-pointer">
          About
        </p>
        <h2 className="xl:w-8/12 lg:w-10/12 w-full font-bold text-gray-800 lg:text-4xl text-3xl lg:leading-10 leading-9 mt-2">
          Efficiency is increased while utilizing the services of an experienced
          team of NewOm Packers & Movers.
        </h2>
        <p className="font-normal text-base leading-6 text-gray-600 mt-6">
          If you're looking for a reliable and affordable packers and movers
          service in Gorakhpur, then you should definitely consider using NewOm.
          Not only are they one of the most reputable companies in the area, but
          their prices are also very reasonable. Plus, they offer a wide range
          of services, so you're sure to find something that fits your needs.
        </p>
      </div>

      <div className="lg:mt-14 sm:mt-10 mt-12">
        <img
          className="lg:block hidden w-full"
          src='/images/about1.jpg'
          alt="About"
        />
        <img
          className="lg:hidden sm:block hidden w-full"
          src='/images/about2.webp'
          alt="About"
        />
        <img
          className="sm:hidden block w-full"
          src='/images/about3.webp'
          alt="About"
        />
      </div>

      <div className="lg:mt-16 sm:mt-12 mt-16 flex lg:flex-row justify-between flex-col lg:gap-8 gap-12">
        <div className="w-full xl:w-5/12 lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">
            Our Story
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-4">
            Our recent success story about NewOm Packers & Movers is a perfect
            example of how our team can help you move your belongings with ease
            and efficiency. From the moment we contacted them, our team was able
            to take care of everything - from coordinating the move to ensuring
            that all of our customers' belongings were delivered on time and in
            perfect condition. Thanks to their hard work, we were able to
            successfully complete our move without any issues whatsoever. We
            highly recommend NewOm Packers & Movers if you're looking for a
            reliable and professional moving company.
          </p>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            Our Story NewOm packers and movers services in Gorakhpur are the
            best in town. We have a wide range of services that we can offer, so
            you can be sure that we can take care of everything for you. We're
            here to help you move quickly and easily, so don't hesitate to
            contact us today!
          </p>
        </div>
        <div className="lg:flex items-center w-full lg:w-1/2 ">
          <img
            className="lg:block hidden w-full"
            src='/images/about4.webp'
            alt="About"
          />
          <img
            className="lg:hidden sm:block hidden w-full h-3/4"
            src='/images/about5.webp'
            alt="About"
          />
          <img
            className="sm:hidden block w-full"
            src='/images/about6.webp'
            alt="About"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
