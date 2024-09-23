import React from "react";
import { FaSearch } from "react-icons/fa";

const VinylSearch = () => {
  return (
    <div
      className={`background-pic | bg-[url("/images/agent-estate.jpg")] bg-cover object-center bg-no-repeat font-bold text-2xl h-[500px]`}
    >
      <div className="pt-[11rem] pl-[4rem] space-y-10 ">
        <h1 className="text-white text-[4rem] flex flex-col gap-[2.1rem]">
          <span>Agents.Tours.</span>
          <span>Sells.Homes</span>
        </h1>
        <div className="relative w-[30%]">
          <input
            className="text-[1rem] w-[100%] rounded-md p-3 hover:border-[0.5px] hover:border-blue-500 focus:outline-blue-500 transition-all ease-in-out duration-75 placeholder:text-[1rem]"
            placeholder="Enter City You Want To Search"
          />
          <div className="py-4 px-5 hover:bg-blue-500 rounded-r-md absolute  hover:border-blue-500 focus:outline-blue-500 right-0 top-0 cursor-pointer transition-all ease-in-out duration-300 hover:text-white">
            <FaSearch className=" cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VinylSearch;
