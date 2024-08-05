import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { Property } from "../Model/Property";


interface HomeCardProps {
  property: Property;
}

const HomeCard: React.FC<HomeCardProps> = ({ property }) => {
  return (
    <div className="border rounded-xl overflow-hidden">
      <div className="relative">
        <img
          src={property.images[0]?.url || "default-image-url"} // Handle image URL
          alt={property.images[0]?.description || "Property Image"}
          className="w-full h-72 object-cover"
        />
        <div className="absolute top-2 right-5">
          <div className="flex items-center gap-3">
            <div className="p-1 bg-black bg-opacity-50 hover:bg-primary rounded-md cursor-pointer">
              <CiHeart className="text-white text-xl font-semibold" />
            </div>
            <div className="p-1 bg-black bg-opacity-50 hover:bg-primary rounded-md cursor-pointer">
              <IoEyeOutline className="text-white text-xl font-semibold" />
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 border-b flex flex-col gap-2">
        <h1 className="font-semibold text-xl">{property.address}</h1>
        <p className="flex items-center gap-1 text-gray-500">
          <CiLocationOn />
          {property.city_id}, {property.state_id} {/* Adjust as necessary */}
        </p>
        <div className="flex items-center gap-7 font-semibold">
          <p className="flex items-center gap-1">
            <CiLocationOn /> {property.numberOfBedrooms}
          </p>
          <p className="flex items-center gap-1">
            <CiLocationOn /> {property.numberOfBathrooms}
          </p>
          <p className="flex items-center gap-1">
            <CiLocationOn /> {property.size} SqFt
          </p>
        </div>
      </div>
      <div className="px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-500">
          <img
            src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww"
            className="w-10 h-10 object-cover rounded-full"
            alt="Agent"
          />
          <p>{property.agent_id}</p>
        </div>
        <h1 className="font-semibold">
          {property.price} <span className="text-gray-500 font-normal text-sm">/month</span>
        </h1>
      </div>
    </div>
  );
};

export default HomeCard;
