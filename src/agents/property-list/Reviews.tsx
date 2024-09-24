import React, { useEffect, useState } from 'react'
import { Review } from './data-for-agent/propertyData'
import { Avatar, Empty } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import axios from 'axios'

interface ReviewsProp {
  review: Review[] | undefined
}

// interface Client {
//     clientId: number,
//     userId: number,
//     firstName: string,
//     lastName: string,
//     phone: string,
//     email: string,
//     address: string,
//     role: string
// }

const Reviews: React.FC<ReviewsProp> = ({review}) => {

  return (
    <div className='px-5'>
      {
        review?.length === 0 ? (
          <Empty style={{ 
            width: "100%", 
            height: "50vh" 
          }} 
          />
        ) : (
          review?.map((review, index) => (
            <div key={index} className='bg-gray-200 p-5 rounded-md shadow-md  mb-5'>
              <Avatar className='mb-5' size="large" icon={<UserOutlined />} />
              <p className='mb-5 font-bold font-lato'>{review.comments}</p>
            </div>
          ))
        )
      }
    </div>
  )
}

export default Reviews