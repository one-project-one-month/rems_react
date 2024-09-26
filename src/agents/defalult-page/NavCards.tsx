import React from 'react'
import { FaHouseChimney } from "react-icons/fa6";
import { HiArrowLongRight } from "react-icons/hi2";
import { CiTextAlignLeft } from "react-icons/ci";
import { IoIosCreate } from "react-icons/io";
import { useNavigate } from 'react-router';

const NavCards:React.FC = () => {

  const navigate = useNavigate();

  return (
    <div className="carousel-with-yangoncity flex flex-wrap justify-center md:gap-[3rem] gap-[1rem] items-center bg-gray-100 py-5">
        <div 
          className='bg-white w-[300px] h-[400px] shadow-lg rounded-md p-5 flex flex-col gap-4 justify-center items-center hover:shadow-2xl transition-all ease-in-out duration-300 '
        >
          <div className='bg-blue-500 p-5 rounded-[100%] text-white text-[1.5rem]'>
            <FaHouseChimney/>
          </div>
          <p className='text-center mt-5 text-[0.9rem] font-bold font-lato md:text-[1.2rem]'> 
            If you want to explore for some Market Values?
          </p>
          <p className='text-center text-[0.9rem] font-bold font-lato md:text-[1rem]'>
            Click below
          </p>
          <button
            className='text-[2rem] mt-5  font-bold  px-7 py-1 rounded-full active:bg-blue-800 hover:bg-blue-500 hover:text-white transition-all ease-in-out duration-75'
            onClick={() => navigate("/agent/property-list")}
          >
            <HiArrowLongRight/>
          </button>
        </div>

        <div 
          className='bg-white w-[300px] h-[400px] shadow-lg  rounded-md p-5 flex flex-col gap-4 justify-center items-center hover:shadow-2xl transition-all ease-in-out duration-300  '
        >
          <div className='bg-blue-500 p-5 rounded-[100%] text-white text-[1.5rem]'>
            <CiTextAlignLeft/>
          </div>
          <p className='text-center mt-5 text-[0.9rem] font-bold font-lato md:text-[1.2rem]'> 
            Manage  your appointments with your clients?
          </p>
          <p className='text-center text-[0.9rem] font-bold font-lato md:text-[1rem]'>
            Click below
          </p>
          <button
            className='text-[2rem] mt-5 font-bold  px-7 py-1 rounded-full active:bg-blue-800 hover:bg-blue-500 hover:text-white transition-all ease-in-out duration-75'
            onClick={() => navigate("/agent/agent-appointments")}
          >
            <HiArrowLongRight/>
          </button>
        </div>

        <div 
          className='bg-white w-[300px] h-[400px] shadow-lg rounded-md p-5 flex flex-col gap-4 justify-center items-center hover:shadow-2xl transition-all ease-in-out duration-300 '
        >
          <div className='bg-blue-500 p-5 rounded-[100%] text-white text-[1.5rem]'>
            <IoIosCreate/>
          </div>
          <p className='text-center mt-5 text-[0.9rem] font-bold font-lato md:text-[1.2rem]'> 
            Want to post or create the property ?
          </p>
          <p className='text-center text-[0.9rem] font-bold font-lato md:text-[1rem]'>
            Click below
          </p>
          <button
            className='text-[2rem] mt-5 font-bold  px-7 py-1 rounded-full active:bg-blue-800 hover:bg-blue-500 hover:text-white transition-all ease-in-out duration-75'
            onClick={() => navigate("/agent/property-create")}
          >
            <HiArrowLongRight/>
          </button>
        </div>

    </div>
  )
}

export default NavCards