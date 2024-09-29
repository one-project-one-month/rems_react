import React from "react";
import { useGetAgentByUserIdQuery } from "../../services/agent/api/getAgentApiSlice";
import { useAuth } from "../../login/login-context/AuthContext";
import { useGetPropertiesQuery } from "../../services/agent/api/propertyApiSlice";
import { SwiperSlide, Swiper } from "swiper/react";
import PropertyCard from "./components/PropertyCard";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { LoadingOutlined } from "@ant-design/icons";
import { Empty } from "antd";

const RecentPosts: React.FC = () => {
  const { user } = useAuth();
  const userId = user?.UserId;

  const { data, isLoading, error } = useGetAgentByUserIdQuery(userId);

  const agent = data?.data;
  const agentId = agent?.agentId;

  const {
    data: propertyData,
    isLoading: isPropertyLoading,
    error: isPropertyError,
  } = useGetPropertiesQuery({
    page: 1,
    limit: 10,
    city: "",
    agentId: agentId,
  });

  const recentPosts = propertyData?.data.properties;

  if (isPropertyError) return <p>Error...</p>

  return (
    <div className="carousel-with-yangoncity | font-bold text-2xl h-auto w-[90%] mx-auto py-10">
      <div className="flex gap-2 justify-center md:justify-start items-center ">
        <h1 className="cursor-pointer font-raleWay hover:text-gray-500 transition-all ease-in-out duration-75 text-[1.2rem] md:text-[1.6rem]">
          Your Recent Posts
        </h1>
        <button className="text-blue-600 hover:text-blue-400 active:text-blue-900 text-[2rem] transition-all ease-in-out duration-100">
          <BsFillFileEarmarkPostFill />
        </button>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={false}
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
          },
        }}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper py-10 px-10 max-w-[1200px] cursor-grabbing"
      >
        {isPropertyLoading ? (
          <div className="flex justify-center items-center h-auto text-blue-500">
            <LoadingOutlined className="text-4xl" spin />
          </div>
        ) : recentPosts?.length === 0 ? (
          <Empty
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        ) : (
          recentPosts?.slice(0, 5).map((property, index) => (
            <SwiperSlide key={index}>
              <PropertyCard property={property} nav="property-create" />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default RecentPosts;
