import React from 'react'
import Container from '../Container';
import ListingHead from './ListingHead';
import ListingInfo from './ListingInfo';
import ListingBuy from './ListingBuy';
import { useParams } from 'react-router';

export const Properties = {
  image_url: [
    "https://a0.muscache.com/im/pictures/miso/Hosting-749944387202007594/original/4c8947f5-ff4c-481c-b78e-c46cf6111272.jpeg?im_w=960",
    "https://a0.muscache.com/im/pictures/miso/Hosting-749944387202007594/original/dab5a2cd-d0e6-4b28-87a7-d50938ed30b3.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-749944387202007594/original/bb0cee23-e9e7-47b8-abad-3dbca808a824.jpeg?im_w=720",
  ],
  property_id: "12345",
  address: "123 Main St",
  city: "Sample City",
  state: "CA",
  zip_code: "90001",
  property_type: "Apartment",
  price: '35,000,000',
  size: 1200,
  number_of_bedrooms: 3,
  number_of_bathrooms: 2,
  year_built: 1990,
  description: "This beautifully maintained 3-bedroom, 2-bathroom home offers over 1,200 square feet of comfortable living space. The open floor plan features a bright living area, a gourmet kitchen with granite countertops, and a spacious master suite with a luxurious en-suite bathroom. Enjoy outdoor relaxation in the landscaped backyard with a large patio. Conveniently located near top-rated schools, parks, and shopping, this home is perfect for modern family living. Don’t miss the chance to make this your dream home!",
  status: "For Sale",
  date_listed: "2024-07-20"
};


const DetailedListing: React.FC = () => {
  const {id} = useParams();
  console.log(id);
  return (
    <Container>
      <div className=" font-sans max-w-screen-lg mx-auto">
        <div className="flex flex-col py-16 gap-6">
          <ListingHead />
          <div className=" grid grid-cols-1 mt-4  gap-x-20 gap-y-6 md:grid-cols-7">
            <div className=" md:col-span-4">
              <ListingInfo />
            </div>
            <div className=" order-first md:order-last md:col-span-3">
              <ListingBuy />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default DetailedListing