import React from 'react'
import { Property } from './data-for-agent/propertyData'
import { Carousel } from 'antd';

interface PropertyDetailsProp {
  property: Property | undefined;
}

const PropertyDetails: React.FC<PropertyDetailsProp> = ({property}) => {
  return (
    <div className="flex gap-2 flex-col md:flex-row ">
      <div className="column-1 | w-[100%] md:w-[50%]">
        <Carousel className="z-[0] w-[100%]" arrows infinite={false}>
          {property?.images.map(img => (
            <span>
              <img className="h-[300px] m-0 w-[100%] rounded-md xl:h-[400px] object-cover " src={img.imgBase64} alt="" />
              <p className="text-center font-bold ">{img.description}</p>
            </span>
          ))}
        </Carousel>
      </div>

      <div className="column-2 | p-6 ">
        <div className="mb-[1.5rem]">
          <p className="font-bold text-[1.6rem] mb-4 ">${property?.price.toLocaleString()} MMK</p>
          <p className='font-raleWay font-bold'>{property?.address}</p>
        </div>
        <div className="bds-bas | flex gap-2 items-center">
          <p className="font-semibold text-[1.3rem]">{property?.numberOfBedrooms}-Beds</p>
          <span>|</span>
          <p className="font-semibold text-[1.3rem]">{property?.numberOfBathrooms}-Bathrooms</p>
        </div>

        <div className="flex flex-wrap gap-2 my-[1rem]">
          <p className="bg-gray-200 px-3 py-2  rounded-md font-bold text-[0.9rem]">{property?.availiablityType}</p>
          <p className="bg-gray-200 px-3 py-2  rounded-md font-bold  text-[0.9rem]">{property?.size} sqft</p>
          <p className="bg-gray-200 px-3 py-2  rounded-md font-bold  text-[0.9rem]">Built: {property?.yearBuilt}</p>
          <p className="bg-gray-200 px-3 py-2  rounded-md font-bold  text-[0.9rem]">For: {property?.propertyType}</p>
        </div>
        <p className="text-[0.9rem] font-semibold font-raleWay ">{property?.description}</p>
      </div>
    </div>
  )
}

export default PropertyDetails