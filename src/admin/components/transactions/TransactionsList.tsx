import React from 'react';
import { Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import dayjs from 'dayjs'

interface DataType {
    transaction_id: number,
    property_id: number,
    client_id: number,
    agent_id: number,
    transaction_date: Date,
    sale_price: number,
    commission: number,
    status: string
}

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

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Transaction ID',
        dataIndex: 'transaction_id',
        key: 'transaction_id',
        align: 'center'
    },
    {
        title: 'Property ID',
        dataIndex: 'property_id',
        key: 'property',
    },
    {
        title: 'Client ID',
        dataIndex: 'client_id',
        key: 'client'
    },
    {
        title: 'Agent ID',
        dataIndex: 'agent_id',
        key: 'agent'
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
        key: 'sale'
    },
    {
        title: 'Commission',
        dataIndex: 'commission',
        key: 'commission'
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (status) => renderStatus(status)
    }
];

const transactions: DataType[] = [
    {
        transaction_id: 1,
        property_id: 101,
        client_id: 201,
        agent_id: 301,
        transaction_date: new Date("2023-01-01T12:00:00"),
        sale_price: 250000.00,
        commission: 12500.00,
        status: "COMPLETED"
    },
    {
        transaction_id: 2,
        property_id: 102,
        client_id: 202,
        agent_id: 302,
        transaction_date: new Date("2023-01-05T14:30:00"),
        sale_price: 300000.00,
        commission: 15000.00,
        status: "PENDING"
    },
    {
        transaction_id: 3,
        property_id: 103,
        client_id: 203,
        agent_id: 303,
        transaction_date: new Date("2023-01-10T10:15:00"),
        sale_price: 400000.00,
        commission: 20000.00,
        status: "CANCELLED"
    },
    {
        transaction_id: 4,
        property_id: 104,
        client_id: 204,
        agent_id: 304,
        transaction_date: new Date("2023-01-15T09:00:00"),
        sale_price: 500000.00,
        commission: 25000.00,
        status: "COMPLETED"
    },
    {
        transaction_id: 5,
        property_id: 105,
        client_id: 205,
        agent_id: 305,
        transaction_date: new Date("2023-01-20T16:45:00"),
        sale_price: 600000.00,
        commission: 30000.00,
        status: "PENDING"
    },
    {
        transaction_id: 6,
        property_id: 106,
        client_id: 206,
        agent_id: 306,
        transaction_date: new Date("2023-01-25T11:30:00"),
        sale_price: 700000.00,
        commission: 35000.00,
        status: "COMPLETED"
    },
    {
        transaction_id: 7,
        property_id: 107,
        client_id: 207,
        agent_id: 307,
        transaction_date: new Date("2023-01-30T13:00:00"),
        sale_price: 800000.00,
        commission: 40000.00,
        status: "CANCELLED"
    },
    {
        transaction_id: 8,
        property_id: 108,
        client_id: 208,
        agent_id: 308,
        transaction_date: new Date("2023-02-01T14:00:00"),
        sale_price: 900000.00,
        commission: 45000.00,
        status: "PENDING"
    },
    {
        transaction_id: 9,
        property_id: 109,
        client_id: 209,
        agent_id: 309,
        transaction_date: new Date("2023-02-05T10:00:00"),
        sale_price: 1000000.00,
        commission: 50000.00,
        status: "COMPLETED"
    },
    {
        transaction_id: 10,
        property_id: 110,
        client_id: 210,
        agent_id: 310,
        transaction_date: new Date("2023-02-10T15:00:00"),
        sale_price: 1100000.00,
        commission: 55000.00,
        status: "PENDING"
    },
    {
        transaction_id: 11,
        property_id: 111,
        client_id: 211,
        agent_id: 311,
        transaction_date: new Date("2023-02-10T15:00:00"),
        sale_price: 1400000.00,
        commission: 4000.00,
        status: "PENDING"
    }
];

const App: React.FC = () => <Table columns={columns} dataSource={transactions} />;

export default App;