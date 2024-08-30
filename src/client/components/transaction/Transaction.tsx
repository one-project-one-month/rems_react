import { Table } from "antd";
// import { dataSource } from "../../db/data";
import { TableProps } from "antd/lib";
import dayjs from 'dayjs';
import { useEffect, useState } from "react";
import { useGetTransactionByClientIdQuery } from "../../../services/admin/api/transactionsApi";
import { Transactions, TransApiResponse } from "../../../type/type";
import TransactionSummary from "../transaction/TransactionSummary";

const Transaction = () => {
  const [isSummaryShow, setIsSummaryShow] = useState<boolean>(false);

  const initailParams = {
    clientId: 3,
    pageNumber: 1,
    pageSize: 10
  }

  const [params, setParams] = useState(initailParams)

  // const {data,isSuccess,isError} = useGetAllTransactionByClientIdQuery<TransApiResponse>(params)
  // console.log("DAta",data ,isSuccess,isError);  

  // const clientId = 201;
  // const clientData = dataSource.filter((data) => data.client_id === clientId);

  const { isFetching, data } = useGetTransactionByClientIdQuery<TransApiResponse>(params);

  const pageSetting = data?.data?.pageSetting;
  const transactionData: Transactions[] = data?.data?.lstTransaction ?? [];
  
  const handlePagination = (pageNumber: number, pageSize: number) => {
   setParams({
    clientId: 3,
    pageNumber,
    pageSize
   })
  };


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

  const columns: TableProps<Transactions>['columns'] = [
    {
      title: "ID",
      dataIndex: "transactionId",
      key: "transactionId",
      align: 'center',
      render: (_, record) => (
        <span>{record?.transaction?.transactionId}</span>
      )
    },
    {
      title: "Property",
      dataIndex: "propertyId",
      key: "propertyId",
      render: (_, record) => (
        <span>{record?.property?.propertyId}</span>
      ),
      align: 'center'
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (_, record) => record.transaction.status
    },
    {
      title: 'Transaction Date',
      dataIndex: 'transactionDate',
      key: 'date',
      render: (transactionDate: Date) => dayjs(transactionDate).format('YYYY-MM-DD HH:mm A')
    },
    {
      title: 'Sale Price',
      dataIndex: 'salePrice',
      key: 'sale',
      align: 'center',
      render: (_, record) => (
        <span>{record.transaction.salePrice}</span>
      )
    },
    {
      title: 'Commission',
      dataIndex: 'commission',
      key: 'commission',
      align: 'center',
      render: (_, record) => (
        <span>{record.transaction.commission}</span>
      )
    },
    {
      title: "Action",
      dataIndex: "action",
      render: () => (
        <a className="text-blue-400" onClick={() => setIsSummaryShow(true)}>
          Detail
        </a>
      ),
    },
  ];

  return (
    <div>
      {isSummaryShow && <TransactionSummary setIsShow={setIsSummaryShow} />}
      <div className="px-2 md:px-8 lg:px-12 py-12 w-[390px] sm:w-[650px] md:w-[980px] lg:w-full overflow-x-scroll no-scrollbar">
        <Table
          loading={isFetching}
          rowKey={(record) => record.transaction.transactionId}
          dataSource={transactionData}
          columns={columns}
          pagination={{
            total: pageSetting?.totalCount,
            current: params?.pageNumber,
            onChange: handlePagination
        }}
        />
      </div>
    </div>
  );
};

export default Transaction;
