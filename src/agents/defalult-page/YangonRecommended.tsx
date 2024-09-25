
import YangonCard from "./components/YangonCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';  
import React from "react";
import { useGetPropertiesQuery } from "../../services/agent/api/propertyApiSlice";
import { FaHouseCircleCheck } from "react-icons/fa6"
import { useAppDispatch } from "../../app/hook";
import { setCityFilter } from "../agent-services/propertyFilterSearch";
import { useNavigate } from "react-router";

const YangonRecommended: React.FC = () => {

  const { data, error, isLoading } = useGetPropertiesQuery({ 
    page: 1, 
    limit: 100,
    city: "yangon"
  }) ;

  const navigate = useNavigate()

  const properties = data?.data.properties;
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(setCityFilter("yangon"));
    navigate("/agent/property-list")
  }

  return (
    <div className="carousel-with-yangoncity | font-bold text-2xl h-auto w-[90%] mx-auto py-10">
      <div className="flex gap-2 justify-center md:justify-start items-center ">
        <h1 
          className="cursor-pointer font-raleWay hover:text-gray-500 transition-all ease-in-out duration-75 text-[1.2rem] md:text-[1.6rem]"
          onClick={handleClick}
        >
          Homes In Yangon
        </h1>
        <button 
          className="text-blue-600 hover:text-blue-400 active:text-blue-900 text-[2rem] transition-all ease-in-out duration-100"
          onClick={handleClick}
        >
          <FaHouseCircleCheck />  
        </button>
      </div>
      
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 50,
          }
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper py-10 px-10 flex flex-wrap max-w-[1200px] cursor-grabbing"
      >
        {properties?.map((property, index) => (
          <SwiperSlide key={index}>
            <YangonCard property={property} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default YangonRecommended;