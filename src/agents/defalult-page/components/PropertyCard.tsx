import React from 'react';
import { PropertyDataType } from '../../property-list/data-for-agent/propertyData';
import { useAppDispatch } from '../../../app/hook';
import { setCityFilter } from '../../agent-services/propertyFilterSearch';
import { useNavigate } from 'react-router';
import { formatNumber } from '../../property-list/AgentPropertyList';

interface PropertyCardProp {
  property: PropertyDataType;
  nav: string
}

const PropertyCard: React.FC<PropertyCardProp> = ({ property , nav}) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setCityFilter(property?.property.city));
    navigate(`/agent/${nav}`);
  };

  const images = property?.images;
  const imageURL = images[0]?.imgBase64;



  return (
    <div className='max-w-[95%] sm:max-w-[500px] mx-auto h-auto bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all ease-in-out duration-300'>
      <div className="relative">
        <img
          src={
            imageURL ? `${imageURL}` : "https://www.maramani.com/cdn/shop/files/home-4.jpg?v=1714079233&width=1400"
          }
          alt="House"
          className='w-full h-[180px] sm:h-[200px] object-cover cursor-pointer'
          onClick={handleClick}
        />
        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
          <p className="text-lg font-semibold">
            ${formatNumber(property?.property.price)} MMK
          </p>
          <p className="text-sm">
            {property?.property.city} | {property?.property.state}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 p-4 flex gap-5 justify-center items-end">
        <div>
          <p className='text-sm text-white'>
            Bas: {property?.property.numberOfBathrooms}
          </p>
          <p className='text-sm text-white'>
            Bds: {property?.property.numberOfBedrooms}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;