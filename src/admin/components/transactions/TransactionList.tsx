import type { TableProps } from 'antd';
import { Table, Tag } from 'antd';
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { useGetAllTransactionsQuery } from '../../../features/transactions/api/transactions';
import { Transaction } from '../../../type/type';

const renderStatus = (status: any) => {
    let color;

    switch (status) {
        case "PENDING":
            color = 'orange';
            break;
        case "COMPLETED":
            color = 'green';
            break;
        case "CANCELLED":
            color = 'red';
            break;
        default:
            break;
    }
    return <Tag color={color}>{status}</Tag>
}

interface PageSetting {
    totalCount: number,
    pageSize: number,
    isEndOfPage: boolean
}

interface TransApiResponse {
    isFetching: boolean,
    data: {
        isSuccess: boolean;
        isError: boolean;
        data: {
            pageSetting: PageSetting;
            lstTransaction: Transaction[];
        };
    }
}

const columns: TableProps<Transaction>['columns'] = [
    {
        title: 'Transaction ID',
        dataIndex: 'transactionId',
        key: 'transactionId',
        align: 'center'
    },
    {
        title: 'Client Info',
        dataIndex: 'buyerId',
        key: 'buyerId',
        align: 'center',
        // render: (_, record) => (
        //     <div>
        //         <span>{`${record.buyerId.first_name}${record.buyerId.last_name}`}</span> <br />
        //         <span style={{ color: "#096DD9" }}>{record.buyerId.phone}</span>
        //     </div>
        // )
    },
    // {
    //     title: 'Agent Info',
    //     dataIndex: 'agentInfo',
    //     key: 'agent',
    //     render: (_, record) => (
    //         <div>
    //             <span>{record.agent.agency_name}</span> <br />
    //             <span style={{ color: "#096DD9" }}>{record.agent.phone}</span>
    //         </div>
    //     )
    // },
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
        align: 'center'
    },
    {
        title: 'Commission',
        dataIndex: 'commission',
        key: 'commission',
        align: 'center'
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (status) => renderStatus(status)
    }
];

// const transactions: Transaction[] = [
//     {
//         "transaction_id": 1,
//         "property": {
//             "address": "123 Maple St",
//             "city": "Springfield",
//             "state": "IL",
//             "zip_code": "62701",
//             "price": 250000.00
//         },
//         "client": {
//             "first_name": "Alice",
//             "last_name": "Johnson",
//             "phone": "555-8765",
//             "email": "alice.johnson@example.com"
//         },
//         "agent": {
//             "agency_name": "Top Realty",
//             "license_number": "A1234567",
//             "phone": "555-9999",
//             "email": "top.realty@example.com"
//         },
//         "transaction_date": new Date("2024-07-01T00:00:00"),
//         "sale_price": 240000.00,
//         "commission": 12000.00,
//         "status": "COMPLETED",

//     },
//     {
//         "transaction_id": 2,
//         "property": {
//             "address": "456 Oak Ave",
//             "city": "Lincoln",
//             "state": "NE",
//             "zip_code": "68508",
//             "price": 300000.00
//         },
//         "client": {
//             "first_name": "Bob",
//             "last_name": "Brown",
//             "phone": "555-4321",
//             "email": "bob.brown@example.com"
//         },
//         "agent": {
//             "agency_name": "Elite Properties",
//             "license_number": "B7654321",
//             "phone": "555-8888",
//             "email": "elite.properties@example.com"
//         },
//         "transaction_date": new Date("2024-07-15T00:00:00"),
//         "sale_price": 290000.00,
//         "commission": 14500.00,
//         "status": "PENDING",
//     }
// ]

const TransactionList: React.FC = () => {
    const [page,setPage] = useState({ pageNumber: 1, pageSize: 2 })

    const { isFetching,data } = useGetAllTransactionsQuery<TransApiResponse>(page);    

    const pageSetting = data?.data?.pageSetting;
    const lstTransaction: Transaction[] = data?.data?.lstTransaction ?? [];

    const handlePagination = (pageNumber:number, pageSize:number) => {
        setPage({
            pageNumber,
            pageSize
        })
    }

    return (
        <Table columns={columns} dataSource={lstTransaction} rowKey="transactionId" loading={isFetching}
        pagination={{
            total: pageSetting?.totalCount,
            current: page?.pageNumber,
            onChange: handlePagination
        }}
        // expandable={{
        //     expandedRowRender: (record) => (
        //         <Row>
        //             <Col span={8}>
        //                 <div className='text-gray-600 font-semibold'>Property Address</div>
        //                 <div className='text-gray-800'>{`${record.property.address}, ${record.property.city}`}</div>
        //             </Col>
        //             <Col span={8}>
        //                 <div className='text-gray-600 font-semibold'>Location Details</div>
        //                 <div className='text-gray-800'>{`${record.property.state} ${record.property.zip_code}`}</div>
        //             </Col>
        //             <Col span={8}>
        //                 <div className='text-gray-600 font-semibold'>Property Price</div>
        //                 <div className='text-gray-800'>{record.property.price}</div>
        //             </Col>
        //         </Row>
        //     )
        // }}  
        />
    )
};

export default TransactionList;