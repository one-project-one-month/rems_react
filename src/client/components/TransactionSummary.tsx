import React from 'react'
import { transactionData } from '../data/data'

interface Props{
    setIsShow : (value:boolean)=>void
}

const TransactionSummary = ({setIsShow}:Props) => {


  return (
    <div className='fixed z-30 w-full h-full flex justify-center items-center bg-slate-900/40'>
        <div className="w-[600px] bg-white py-3 px-5 rounded-lg mx-8">
            <div className='text-center py-4 rounded-lg'>
                <h1 className='uppercase text-3xl font-bold '>Transaction</h1>
                <h1 className='uppercase italic text-2xl font-semibold text-blue-500'>Summary</h1>
            </div>

            <hr className='mt-1 my-8 border border-blue-500'/>

            <div className='grid grid-cols-12 gap-8'>
                <div className='col-span-4 space-y-5'>
                    <div className='text-center  rounded-md'>
                        <h5 className='text-[1.1rem] font-semibold pb-1 text-zinc-600'>County: </h5>
                        <p className='bg-zinc-200 px-3 text-[.9rem] text-zinc-500 py-1'>Iris Fleur</p>
                    </div>
                    <div className='text-center rounded-md'>
                        <h5 className='text-[1.1rem] font-semibold pb-1 text-zinc-600'>Transaction: </h5>
                        <p className='bg-zinc-200 px-3 text-[.9rem] py-1 text-zinc-500'>Rent</p>
                    </div>
                    <div className='text-center rounded-md'>
                        <h5 className='text-[1.1rem] font-semibold pb-1 text-zinc-600'>Agent: </h5>
                        <p className='bg-zinc-200 px-3 text-[.9rem] py-1 text-zinc-500'>David John</p>
                    </div>
                </div>

                <ul className='col-span-8 text-gray-700 space-y-4 bg-blue-100 p-3'>
                    {
                        transactionData.map((data,index)=>{
                            return(
                                <li className='flex justify-between' key={index}>
                                    <h5 className='text-lg'>{data.label}</h5>
                                    <p className='bg-white px-3 rounded-md text-[.9rem] py-1 w-[170px]'>{data.value}</p>
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </div>

            <button onClick={()=>setIsShow(false)} className='bg-blue-500 text-white text-lg font-semibold w-full p-3 mt-8 rounded-lg'>Confrim</button>
        </div>
    </div>
  )
}

export default TransactionSummary
