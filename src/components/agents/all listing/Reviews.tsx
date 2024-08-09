import React from 'react'
import { reviews } from './data-for-agent/reviewsData'
interface ReviewsProp {
  review: reviews[] | undefined
}

const Reviews: React.FC<ReviewsProp> = ({review}) => {
  return (
    <div className='px-5'>
      {review?.map((review, index) => (
        <div key={index} className=''>
          <p className='mb-5'><span>{index + 1}.</span> {review.comments}</p>
          <hr/>
          <br/>
        </div>
      ))}
    </div>
  )
}

export default Reviews
