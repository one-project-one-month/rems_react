import { Table } from 'antd';
import dayjs from 'dayjs'
import { dataSource } from '../data/data';
import { useEffect, useState } from 'react';
import TransactionSummary from '../components/TransactionSummary';

const Transaction = () => {
    const [isSummaryShow , setIsSummaryShow ] = useState<boolean>(false)

    const clientId = 201;
    const clientData = dataSource.filter((data)=> data.client_id === clientId)

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
          if (isSummaryShow ) {
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
            title: 'ID',
            dataIndex: 'transaction_id',
            key: 'transaction_id',
        },
        {
            title: 'Property',
            dataIndex: 'property_id',
            key: 'property_id',
        },
        {
            title: 'Agent',
            dataIndex: 'agent',
            key: 'agent',
        },
        {
            title: 'Type',
            dataIndex: 'status',
            key: 'transaction_type',
          },
        {
            title: 'Transaction Date',
            dataIndex: 'transaction_date',
            key: 'date',
            render: (transaction_date: Date) => dayjs(transaction_date).format('YYYY-MM-DD HH:mm A')    
        },
        {
            title: 'Sale Price',
            dataIndex: 'sale_price',
            key: 'sale_price',
        },
        {
            title: 'Commission',
            dataIndex: 'commission',
            key: 'commission',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (action:string) => <a className='text-blue-400' onClick={()=>setIsSummaryShow(true)}>{action}</a>,
        },
        
      ];
      
  return (
   <div>
        {isSummaryShow && <TransactionSummary setIsShow= {setIsSummaryShow}/>}
        <div className='p-12'>
            <Table dataSource={clientData} columns={columns} />
        </div>
   </div>
  )
}

export default Transaction
