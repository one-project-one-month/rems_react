import React from 'react'
import { Properties } from './DetailedListing'

const ListingInfo: React.FC = () => {
    return (
        <div className=" flex flex-col gap-5">
            <button className='  bg-[#ff1f1f] w-fit text-sm font-semibold text-white uppercase rounded-md px-3 py-1'>{Properties.status}</button>
            <div className="flex flex-col gap-2">
                <div className="flex flex-row text-xl gap-2 font-semibold items-center">
                    <div>{Properties.property_type}</div>
                </div>
                <div className=' font-semibold '>{Properties.price} kyats</div>
            </div>
            <hr />
            <div className=" flex flex-row items-center   gap-4 font-medium text-neutral-500">
                <h1 className='  text-neutral-950'>Features:</h1>
                <div className="">{Properties.number_of_bedrooms} beds</div>
                <div className=' border-x-[1px] px-3'>{Properties.number_of_bathrooms} bathrooms</div>
                <div>{Properties.size} SqFt</div>
            </div>
            <hr />
            <div className=" flex flex-row items-center   gap-4 font-medium text-neutral-500">
                <h1 className='  text-neutral-950'>Location:</h1>
                <div className="">{Properties.address},</div>
                <div className="">{Properties.city}</div>
            </div>
            <hr />
            <div className=" flex flex-row items-center   gap-4 font-medium text-neutral-500">
                <h1 className='  text-neutral-950'>Year Built:</h1>
                <div className="">{Properties.year_built}</div>
            </div>
            <hr />
            <div className="flex flex-row items-center gap-4">
                <div className=' px-3 py-1.5 rounded-full bg-neutral-400'>P</div>
                <div className="flex flex-col">
                    <div>Hosted by <span className="">{"someone"}</span></div>
                    <div className=' text-sm text-neutral-500'>example@gmail.com</div>
                </div>
            </div>
            <hr />
            <div>
                <h1 className=' font-bold text-lg mb-2'>Description</h1>
                <div className=" text-neutral-500">
                    {Properties.description}
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ListingInfo