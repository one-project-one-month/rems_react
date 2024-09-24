import React, { useEffect, useState } from 'react'
import { PropertyDataType, Review } from './data-for-agent/propertyData'
import { Avatar, Empty } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import axios from 'axios'
import { useAuth } from '../../login/login-context/AuthContext'
import { toast } from 'sonner'

interface ReviewsProp {
  review: Review[] | undefined;
  property: PropertyDataType | undefined;
}

interface Client {
  clientId: number,
  userId: number,
  firstName: string,
  lastName: string,
  phone: string,
  email: string,
  address: string,
  role: string
}

interface Agent {
  agentId: number,
  userId: number,
  agentName: string,
  agencyName: string,
  licenseNumber: string,
  email: string,
  phone: string,
  address: string,
  role: string
}

const Reviews: React.FC<ReviewsProp> = ({review, property}) => {

  const {user} = useAuth(); 

  const [clients, setClients] = useState<Client[] | []>([]);
  const [agents, setAgents] = useState<Agent[] | []>([]);
  const [comments, setComments] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rating, setRating] = useState(5);
  const propertyId = property?.property.propertyId;
  const userId = user?.UserId;
  

  console.log(propertyId)

  useEffect(() => {
    const fetchClientAndAgent = async () => {
      try {
        setLoading(true);

        const ClientRes = await axios.get(`http://65.18.112.78:44010/rems/api/v1/clients/1/100`);
        setClients(ClientRes.data.data.dataLst);
        
        const AgentRes = await axios.get(`http://65.18.112.78:44010/rems/api/v1/agents/1/100`);
        setAgents(AgentRes.data.data.agentList);

      } catch (error) {
        setError("Error Loading reviews")
      } finally {
        setLoading(false)
      }

    }
    fetchClientAndAgent();
  },[]);
  
  const handleSubmitComments = async (e: React.FormEvent) => {
    e.preventDefault();
    try {

      if (!comments) {
        toast.error("Please add something in the input");
        return;
      }

      axios.post(`http://65.18.112.78:44010/rems/api/v1/reviews`, {
        userId,
        propertyId,
        rating,
        comments
      });
      setComments("");
      toast.success("reviews successfully submitted");
    } catch (error) {
      setError("Something went wrong submitting the review");
      toast.error("Something went wrong submitting the review")
    }
  }


  const getClientForReview = (userId: number) => {
    return clients.find(client => client.userId === userId)
  }

  const getAgentForReview = (userId: number) => {
    return agents.find(agent => agent.userId === userId)
  }

 console.log(getClientForReview(5))

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error}</p>

  return (
    <div className='px-5 relative'>
      {
        review?.length === 0 ? (
          <Empty style={{ 
            width: "100%", 
            height: "50vh" 
          }} 
          />
        ) : (
          review?.map((review, index) => {
            const client = getClientForReview(review.userId);
            const agent = getAgentForReview(review.userId)
            return (
              <div key={index} className='bg-gray-200 p-5 rounded-md shadow-md  mb-5'>
                <div className='flex gap-3'>
                  <Avatar className='mb-5' size="large" icon={<UserOutlined />} />
                  {
                    client ? (
                      <p className='font-bold'>{client.firstName} {client.lastName}</p>
                    ): agent ? (
                      <p className='font-bold'>{agent.agentName}</p>
                    ) : (
                      <p className='font-bold'>No user information found</p>
                    )
                  }
                </div>
                <p className='font-bold mb-5'>Rating: {review.rating}/10</p>
                <p className='mb-5 font-bold font-lato'>{review.comments}</p>
              </div>
            )
          })
        )
      }

      <form className='flex flex-wrap gap-5 md:gap-0 items-end' onSubmit={handleSubmitComments}>
        
        <input
          value={comments}
          onChange={(e) => setComments(e.target.value)} 
          type="text" 
          className='bg-gray-300 border-2 border-blue-500 placeholder:font-bold focus:outline-none px-3 py-2  rounded-tl-md rounded-bl-md w-[50%]'
          placeholder='Add Comments?...'
        />
        <button 
          className='bg-blue-500 hover:bg-blue-400 hover:border-blue-400 active:bg-blue-700  border-2 rounded-tr-md rounded-br-md border-blue-500 px-3 py-2 text-white font-bold'>
            Add
        </button>
      
        <div className='ml-5 flex gap-2 justify-center items-center'>
          <p className='font-bold'>Rating:</p>
          <input
          type="number"
          value={rating}
          onChange={(e) => setRating(Math.max(1, Math.min(10, Number(e.target.value))))} // Limit input between 1 and 10
          min="1"
          max="10"
          className='bg-gray-300 border-2 font-bold border-blue-500 focus:outline-none px-2 py-2 rounded-md'
        />
        </div>
      </form>
    </div>
  )
}

export default Reviews