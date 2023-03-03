import React from "react";

const VisitingCard = () => {
  return (
    <div className="">
      <h2 className="  flex items-center justify-center pt-[4.5rem] pb-2">
        Click Here To Download Our Visiting Card
      </h2>
      <div className="flex items-center justify-center  pt-[2rem] pb-[8rem]">
        <button className=" focus:ring-2 focus:ring-offset-2 focus:ring-[#00838C] px-8 py-4  bg-[#00838C] hover:bg-gray-600 rounded text-base font-medium leading-none text-white">
          <a href="https://drive.google.com/file/d/1Q2Ah1LD2xOf9jDQCM9bNZgWhvrSyYPRN/view?usp=share_link">
            Download
          </a>
        </button>
      </div>
    </div>
  );
};

export default VisitingCard;
