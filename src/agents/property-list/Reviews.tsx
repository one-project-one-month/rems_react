import React from 'react'
import { reviews } from './data-for-agent/reviewsData'
interface ReviewsProp {
  review: reviews[] | undefined
}

const Reviews: React.FC<ReviewsProp> = ({review}) => {
  return (
    <div className='px-5'>
      {review?.map((review, index) => (
        <div key={index} className='bg-gray-200 p-5 rounded-md shadow-md  mb-5'>
          <p className='mb-5 font-bold font-lato'><span>{index + 1}.</span> {review.comments}</p>
        </div>
      ))}
    </div>
  )
}

export default Reviews