import { Transactions } from "../../../type/type";

interface Props {
  setIsShow: (value: boolean) => void;
  data: Transactions | undefined;
}
const TransactionSummary = ({ setIsShow ,data}: Props) => {
  
  function formatDate(dateString: string): string {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.getMonth(); 
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  
  let details;
  if (data !== undefined) {
    const user = data.client;
    const property = data.property;
    const transaction = data.transaction;
    const formattedDate = formatDate("2024-08-09T14:35:30.957");


    details = {
      data: {
        userData: [
          { label: "Name :", value: `${user.firstName} ${user.lastName}` },
          { label: "Trans :", value: `${transaction.status}`},
          { label: "Agent :", value: `${property.agent}` },
        ],
        transData: [
          { label: "Contract Date", value: `${formattedDate}` },
          { label: "Property Name", value: `${property.propertyType}` },
          { label: "Location", value: `${property.address}` },
          { label: "Sale Price", value: `${transaction.salePrice}` },
          { label: "Commission", value: `${transaction.commission}` },
        ],
      },
    };
  }

  const userDetail = details?.data.userData;
  const transDetail = details?.data.transData;


  
  return (
    <div className="fixed z-30 w-screen h-full flex justify-center items-center bg-slate-900/40">
     
      <div className="w-[340px] md:w-[600px] bg-white py-3 px-3 md:px-5 rounded-lg mx-8 my-8 h-[480px] overflow-scroll no-scrollbar">
        
        <div className="w-[30rem] mt-5">
          <div className="ml-[4rem]  col-span-2 md:col-span-2 text-gray-500 space-y-2 p-3 mt-2 md:mt-0 border border-gray-300 rounded-lg ">
            {userDetail?.map((detail, index) => (
              <div key={index} className="flex space-x-[10rem] ">
                <h5 className="text-[1.1rem] font-semibold pb-1">
                  {detail.label}
                </h5>
                <p>{detail.value}</p>
              </div>
            ))}
          </div>

          <h1 className="uppercase mt-5 font-bold text-gray-700 ml-8 ">
            Transfer Details
          </h1>

          <ul className="col-span-12 ml-[3rem] md:col-span-8 text-gray-700 space-y-4 p-3 mt-5 md:mt-0">
            {transDetail?.map((data, index) => (
              <li
                className="flex justify-between border-b border-gray-300 border-dashed"
                key={index}
              >
                <h5>{data.label}</h5>
                <p className="bg-white px-3 rounded-md text-[.9rem] py-1 w-[170px]">
                  {data.value}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* <button
          onClick={handleConfirm}
          className="bg-blue-500 text-white text-lg font-semibold w-full p-3 mt-8 rounded-lg"
        >
          Confirm
        </button> */}
      </div>
    </div>
  );
};

export default TransactionSummary;
