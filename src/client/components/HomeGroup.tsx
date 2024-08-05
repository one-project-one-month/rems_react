import React from 'react';
import HomeCard from './HomeCard';
import { HomeGroupProps } from '../Model/Property';


const HomeGroup: React.FC<HomeGroupProps> = ({ properties, propertyTypes }) => {
  console.log(propertyTypes);

  return (
    <div className="px-10 py-10">
      <div>
        <ul className="text-black flex items-center justify-center gap-5 mb-5">
          {propertyTypes.map((type, index) => (
            <li
              key={index}
              className="px-6 py-2 text-[16px] cursor-pointer bg-primary text-white rounded-md"
            >
              {type}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
        {properties.map((property) => (
          <HomeCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default HomeGroup;
