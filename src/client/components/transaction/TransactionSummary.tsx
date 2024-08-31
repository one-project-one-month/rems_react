import {  Transactions } from "../../../type/type";
import { transactionData } from "../../db/data";

interface Props {
  setIsShow: (value: boolean) => void;
  data:Transactions | undefined
}

const TransactionSummary = ({ setIsShow ,data}: Props) => {
  console.log(data);

  function formatDate(dateString: string): string {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }
  
  let details ;
  if(data !== undefined){
    const user= data.client
    const property=data.property
    const transaction = data.transaction

    const formattedDate = formatDate("2024-08-09T14:35:30.957");

    details ={
      data:{
        userData:[
          {label:"Name",value:`${user.firstName} ${user.lastName}`},
          {label:"Transaction",value:`${transaction.status}`},
          {label:"Agent",value:`${property.agent}`},
        ],
        transData:[
          {label:"Contract Date",value:`${formattedDate}`},
          {label:"Property Name",value:`${property.propertyType}`},
          {label:"Location",value:`${property.address}`},
          {label:"Sale Price",value:`${transaction.salePrice}`},
          {label:"Commission",value:`${transaction.commission}`},
        ]
      }
    }
    
  }

  const userDetail = details?.data.userData
  const transDetail = details?.data.transData
  

  return (
    <div className="fixed z-30 w-screen h-full flex justify-center items-center bg-slate-900/40">
      <div className="w-[340px] md:w-[600px] bg-white py-3 px-3 md:px-5 rounded-lg mx-8 my-8 h-[480px] overflow-scroll no-scrollbar">
        <div className="text-center py-1 rounded-lg">
          <h1 className="uppercase text-3xl font-bold ">Transaction</h1>
          <h1 className="uppercase italic text-2xl font-semibold text-blue-500">
            Summary
          </h1>
        </div>

        <hr className="mt-1 my-8 border border-blue-500" />

        <div className="grid grid-cols-12 gap-3 md:gap-8 max-w-full">
          <div className="col-span-12 md:col-span-4 space-y-3 md:space-y-5">
            <div className="grid grid-cols-12 gap-x-5 gap-y-3 md:gap-2">
              {
                userDetail?.map((detail,index)=>(
                <div key={index} className="col-span-6 md:col-span-12 rounded-md">
                  <h5 className="text-[1.1rem] font-semibold pb-1 text-zinc-600">
                    {detail.label}
                  </h5>
                  <p className="bg-zinc-200 px-3 text-[.9rem] text-zinc-500 rounded-sm py-1">
                    {detail.value}
                  </p>
                </div>))
              }
              
            </div>
          </div>

          <ul className="col-span-12 md:col-span-8 text-gray-700 space-y-4 bg-blue-100 p-3 mt-5 md:mt-0">
            {transDetail?.map((data, index) => {
              return (
                <li className="flex justify-between" key={index}>
                  <h5>{data.label}</h5>
                  <p className="bg-white px-3 rounded-md text-[.9rem] py-1 w-[170px]">
                    {data.value}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          onClick={() => setIsShow(false)}
          className="bg-blue-500 text-white text-lg font-semibold w-full p-3 mt-8 rounded-lg"
        >
          Confrim
        </button>
      </div>
    </div>
  );
};

export default TransactionSummary;
