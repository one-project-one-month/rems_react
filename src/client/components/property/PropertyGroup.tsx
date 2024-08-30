import React, { useState } from "react";
import { HomeGroupProps } from "../../../type/type";
import PropertyCard from "./PropertyCard";

const PropertyGroup: React.FC<HomeGroupProps> = ({
  properties,
  propertyTypes,
  agents,
}) => {
  const [activeType, setActiveType] = useState("All");

  const getAgentName = (agentId: number) => {
    const agent = agents.find((agent) => agent.agent_id === agentId);
    return agent ? agent.agentName : "Unknown Agent";
  };

  const filteredProperties =
    activeType === "All"
      ? properties
      : properties.filter((property) => property.propertyType === activeType);

  return (
    <div className="px-10 py-10">
      <div>
        <ul className="text-black flex items-center justify-center gap-5 mb-5">
          {propertyTypes.map((type, index) => (
            <li
              key={index}
              onClick={() => setActiveType(type)}
              className={`px-6 py-2 text-[16px] cursor-pointer rounded-md ${
                activeType === type
                  ? "bg-primary text-white"
                  : "border border-primary text-primary"
              }`}
            >
              {type}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {filteredProperties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default PropertyGroup;
