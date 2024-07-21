import React from 'react'
import { Properties } from './DetailedListing'


const ListingHead: React.FC = () => {
    return (
        <div>
            <div className=' grid grid-cols-3 gap-2'>
                <div className='  overflow-hidden row-span-2 col-span-2'>
                    <img className=' hover:scale-110 transition-transform duration-300 transform rounded-s-xl' src={Properties.image_url[0]} alt="" />
                </div>
                <div className=' overflow-hidden'>
                    <img className=' hover:scale-110 transition-transform duration-300 transform rounded-tr-xl' src={Properties.image_url[1]} alt="" />
                </div>
                <div className=' overflow-hidden'>
                    <img className='hover:scale-110 transition-transform duration-300 transform rounded-br-xl' src={Properties.image_url[2]} alt="" />
                </div>
            </div>
        </div>
    )
}

export default ListingHead      