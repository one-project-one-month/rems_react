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
              <img className="h-[300px] m-0 w-[100%] xl:h-[400px] object-cover " src={img.imgBase64} alt="" />
              <p className="text-center font-bold ">{img.description}</p>
            </span>
          ))}
        </Carousel>
      </div>

      <div className="column-2 | p-6 ">
        <div className="mb-[1.5rem]">
          <p className="font-bold text-[1.8rem] ">${property?.price.toLocaleString()} MMK</p>
          <p>{property?.address}</p>
        </div>
        <div className="bds-bas | flex gap-2">
          <p className="font-bold text-[1.5rem]">{property?.numberOfBedrooms} Bed(s)</p>
          <p className="font-bold text-[1.5rem]">{property?.numberOfBathrooms} Bathroom(s)</p>
        </div>

        <div className="flex gap-2 my-[1rem]">
          <p className="bg-gray-300 px-3 py-2 rounded-md font-bold text-[1rem]">{property?.availiablityType}</p>
          <p className="bg-gray-300 px-3 py-2 rounded-md font-bold text-[1rem]">{property?.size} sqft</p>
          <p className="bg-gray-300 px-3 py-2 rounded-md font-bold text-[1rem]">Built: {property?.yearBuilt}</p>
          <p className="bg-gray-300 px-3 py-2 rounded-md font-bold text-[1rem]">For: {property?.propertyType}</p>
        </div>
        <p className="text-[1rem] font-semibold">{property?.description}</p>
      </div>
    </div>
  )
}

export default PropertyDetails
