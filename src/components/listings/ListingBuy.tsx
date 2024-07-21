import React from 'react'
import { Properties } from './DetailedListing'

const ListingBuy: React.FC = () => {
  return (
    <div className=' bg-white shadow-md hover:shadow-lg transition rounded-xl border-[1px] overflow-hidden border-neutral-200'>
    <div className="flex flex-col items-center gap-2 p-4">
        <div className="text-2xl">$ {Properties.price}</div>
    <button className=' uppercase font-semibold text-sm px-4 py-2 w-full hover:bg-white hover:text-black transition duration-300 border-2 hover:border-2 hover:border-black rounded-lg bg-black text-white'>Buy Property</button>
    </div>
    <hr />
</div>
  )
}

export default ListingBuy