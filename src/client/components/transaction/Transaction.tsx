import { Table, Tag} from "antd";
import { TableProps } from "antd/lib";
import dayjs from 'dayjs';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useGetTransactionByClientIdQuery } from "../../../services/admin/api/transactionsApi";
import { clientId } from "../../../services/client/features/idSlice";
import { Transactions, TransApiResponse } from "../../../type/type";
import TransactionSummary from "../transaction/TransactionSummary";


const Transaction = () => {
  const [isSummaryShow, setIsSummaryShow] = useState<boolean>(false);
  const [transDetailData, setTransDetailData] = useState<Transactions | undefined>(undefined);
  const  id= useSelector(clientId) 

  
  const initailParams = {
    clientId: id,
    pageNumber: 1,
    pageSize: 10
  }
  const [params, setParams] = useState(initailParams)

  const { isFetching, data } = useGetTransactionByClientIdQuery<TransApiResponse>(params);

  const pageSetting = data?.data?.pageSetting;
  const transactionData: Transactions[] = data?.data?.lstTransaction ?? [];

  const handlePagination = (pageNumber: number, pageSize: number) => {
    setParams((prev) => ({
      ...prev,
      pageNumber,
      pageSize
    }))
  };

  const detailClickHandler = (id: number) => {
    setIsSummaryShow(true)

    if (transactionData) {
      const transactionDataById = transactionData.find((data) => data.transaction.transactionId === id)
      setTransDetailData(transactionDataById)
    }
  }

  useEffect(() => {
    const handleOutsideClick = () => {
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
      title: "Transaction Id",
      dataIndex: "transactionId",
      key: "transactionId",
      align: 'center',
      render: (value, item, index) => <span>{(params?.pageNumber - 1) * params?.pageSize + index + 1}</span>
    },
   
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (_status: string, record) => getStatusTag(record.transaction.status),
      sorter: (a: Transactions, b: Transactions) => {
        const statusA = a.transaction?.status || ""; 
        const statusB = b.transaction?.status || ""; 
        return statusA.localeCompare(statusB);
      },
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
      render: (_, record) => (
        <a className="text-blue-400" onClick={() => detailClickHandler(record.transaction.transactionId)}>
          Detail
        </a>
      ),
    },
  ];

  const getStatusTag = (status: string) => {
    const statusColors: { [key: string]: string } = {
      Approved: "green",
      pending: "gold",
      Rent: "red",
      Sell: "green",
      true: "yellow",
      string : "blue"
     
    }
    return (
      <Tag color={statusColors[status] || "default"} className="text-xs">
        {status}
      </Tag>
    )
  }

  return (
    <div>
      {isSummaryShow && <TransactionSummary data={transDetailData} setIsShow={setIsSummaryShow} />}
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
