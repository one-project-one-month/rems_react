import React from "react";
import { CiLocationOn } from "react-icons/ci";
import HomeCard from "./HomeCard";


const HomeGroup = () => {
  return (
    <div className="px-10 py-10">
      <div>
        <ul className="text-black flex items-center justify-center gap-5 mb-5">
          <li className=" px-6 py-2 text-[16px] bg-primary text-white  rounded-md">
            For Rent
          </li>
          <li className=" px-6 py-2 text-[16px] bg-primary text-white  rounded-md">
            For Rent
          </li>
          <li className=" px-6 py-2 text-[16px] bg-primary text-white  rounded-md">
            For Rent
          </li>
          <li className=" px-6 py-2 text-[16px] bg-primary text-white  rounded-md">
            For Rent
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 ">
        <HomeCard/>
      </div>
    </div>
  );
};

export default HomeGroup;
