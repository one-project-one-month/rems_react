import { Table } from "antd";
// import { dataSource } from "../../db/data";
import { useEffect, useState } from "react";
import TransactionSummary from "../transaction/TransactionSummary";
import { useGetAllTransactionByClientIdQuery } from "../../../services/client/api/transactionApi";
import { TransApiResponse } from "../../../type/type";


const Transaction = () => {
  const [isSummaryShow, setIsSummaryShow] = useState<boolean>(false);

  const initailParams = {
    clientId:3,
    pageNumber:2,
    pageSize:10
  }

  const [params,setParams] = useState(initailParams)

  const {data,isSuccess,isError} = useGetAllTransactionByClientIdQuery<TransApiResponse>(params)
  console.log("DAta",data ,isSuccess,isError);  

  // const clientId = 201;
  // const clientData = dataSource.filter((data) => data.client_id === clientId);
  

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isSummaryShow) {
        setIsSummaryShow(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isSummaryShow]);

  const columns = [
    {
      title: "ID",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    {
      title: "Property",
      dataIndex: "propertyId",
      key: "propertyId",
    },
    {
      title: "Type",
      dataIndex: "status",
      key: "transaction_type",
    },
    {
      title: "Transaction Date",
      dataIndex: "transactionDate",
      key: "date",
    },
    {
      title: "Sale Price",
      dataIndex: "salePrice",
      key: "sale_price",
    },
    {
      title: "Commission",
      dataIndex: "commission",
      key: "commission",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (action: string) => (
        <a className="text-blue-400" onClick={() => setIsSummaryShow(true)}>
          {action}
        </a>
      ),
    },
  ];

  return (
    <div>
      {isSummaryShow && <TransactionSummary setIsShow={setIsSummaryShow} />}
      <div className="px-2 md:px-8 lg:px-12 py-12 w-[390px] sm:w-[650px] md:w-[980px] lg:w-full overflow-x-scroll no-scrollbar">
        <Table
          // dataSource={clientData}
          columns={columns}
          pagination={{
            className: "custom-pagination",
          }}
        />
      </div>
    </div>
  );
};

export default Transaction;
