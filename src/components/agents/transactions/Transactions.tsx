import React, { useState } from 'react';
import { Button, Input, message, Popconfirm, Select, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import dayjs from 'dayjs';
import { SearchOutlined, CloseOutlined, CheckOutlined, ClearOutlined } from '@ant-design/icons';

interface DataType {
  transaction_id: number;
  property_name: string;
  client_name: string;
  agent_name: string;
  transaction_date: Date;
  sale_price: number;
  commission: number;
  status: string;
}

const renderStatus = (status: string) => {
  let color;

  switch (status) {
    case 'PENDING':
      color = 'orange';
      break;
    case 'COMPLETED':
      color = 'green';
      break;
    case 'CANCELLED':
      color = 'red';
      break;
    default:
      break;
  }
  return <Tag color={color}>{status}</Tag>;
};

const Transactions: React.FC = () => {
  const [transactions, setTransactions] = useState<DataType[]>([
    {
      transaction_id: 1,
      property_name: 'Alice',
      client_name: 'Bob',
      agent_name: 'Chris',
      transaction_date: new Date('2023-01-01T12:00:00'),
      sale_price: 250000.0,
      commission: 12500.0,
      status: 'COMPLETED',
    },
    {
      transaction_id: 2,
      property_name: 'David',
      client_name: 'Eric',
      agent_name: 'Frank',
      transaction_date: new Date('2023-01-05T14:30:00'),
      sale_price: 300000.0,
      commission: 15000.0,
      status: 'PENDING',
    },
    {
      transaction_id: 3,
      property_name: 'Gorge',
      client_name: 'Helen',
      agent_name: 'Iris',
      transaction_date: new Date('2023-01-10T10:15:00'),
      sale_price: 400000.0,
      commission: 20000.0,
      status: 'CANCELLED',
    },
    {
      transaction_id: 4,
      property_name: 'John',
      client_name: 'Kelvin',
      agent_name: 'Linda',
      transaction_date: new Date('2023-01-15T09:00:00'),
      sale_price: 500000.0,
      commission: 25000.0,
      status: 'COMPLETED',
    },
    {
      transaction_id: 5,
      property_name: 'Marsha',
      client_name: 'Ophen',
      agent_name: 'Pelee',
      transaction_date: new Date('2023-01-20T16:45:00'),
      sale_price: 600000.0,
      commission: 30000.0,
      status: 'PENDING',
    },
    {
      transaction_id: 6,
      property_name: 'Quavo',
      client_name: 'Richard',
      agent_name: 'Steve',
      transaction_date: new Date('2023-01-25T11:30:00'),
      sale_price: 700000.0,
      commission: 35000.0,
      status: 'COMPLETED',
    },
    {
      transaction_id: 7,
      property_name: 'Tom',
      client_name: 'Uggue',
      agent_name: 'Vale',
      transaction_date: new Date('2023-01-30T13:00:00'),
      sale_price: 800000.0,
      commission: 40000.0,
      status: 'CANCELLED',
    },
    {
      transaction_id: 8,
      property_name: 'Wakada',
      client_name: 'Xin Xaung',
      agent_name: 'Ying',
      transaction_date: new Date('2023-02-01T14:00:00'),
      sale_price: 900000.0,
      commission: 45000.0,
      status: 'PENDING',
    },
    {
      transaction_id: 9,
      property_name: 'Zaka',
      client_name: 'Alex',
      agent_name: 'Binladin',
      transaction_date: new Date('2023-02-05T10:00:00'),
      sale_price: 1000000.0,
      commission: 50000.0,
      status: 'COMPLETED',
    },
    {
      transaction_id: 10,
      property_name: 'Colon',
      client_name: 'Docker',
      agent_name: 'Eleven',
      transaction_date: new Date('2023-02-10T15:00:00'),
      sale_price: 1100000.0,
      commission: 55000.0,
      status: 'PENDING',
    },
    {
      transaction_id: 11,
      property_name: 'Frank',
      client_name: 'Ginger',
      agent_name: 'Hooger',
      transaction_date: new Date('2023-02-10T15:00:00'),
      sale_price: 1400000.0,
      commission: 4000.0,
      status: 'PENDING',
    },
  ]);
  const [searchText, setSearchText] = useState('');
  const [filterStatus, setFilterStatus] = useState('');

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const handleClearSearch = () => {
    setSearchText('');
    // setFilterStatus('');
  };

  const handleStatusChange = (value: string) => {
    setFilterStatus(value);
  };

  const confirmTransaction = (id: number) => {
    const newTransactions = transactions.map((transaction) => {
      if (transaction.transaction_id === id) {
        return { ...transaction, status: 'COMPLETED' };
      }
      return transaction;
    });
    setTransactions(newTransactions);
    message.success('Transaction confirmed');
  };

  const cancelTransaction = (id: number) => {
    const newTransactions = transactions.map((transaction) => {
      if (transaction.transaction_id === id) {
        return { ...transaction, status: 'CANCELLED' };
      }
      return transaction;
    });
    setTransactions(newTransactions);
    message.success('Transaction cancelled');
  };

  const checkStatus = (status: string, id: number) => {
    switch (status) {
      case 'CANCELLED':
        return (
            <Popconfirm
              title="Confirm Transaction"
              description="Are you sure you want to confirm this transaction?"
              onConfirm={() => confirmTransaction(id)}
              onCancel={() => message.error('Confirmation aborted')}
              okText="Yes"
              cancelText="No"
            >
                <Button type='primary' className='bg-blue-500 text-white'>
                    Confirm
                </Button>  
            </Popconfirm>
        );
      case 'COMPLETED':
        return (
            <Popconfirm
              title="Cancel Transaction"
              description="Are you sure you want to cancel this transaction?"
              onConfirm={() => cancelTransaction(id)}
              onCancel={() => message.error('Cancellation aborted')}
              okText="Yes"
              cancelText="No"
            >
                <Button type='primary' danger>
                    Cancel
                </Button>
            </Popconfirm>
        );
      default:
        return (
          <Space size={"middle"}>
            <Popconfirm
              title="Confirm Transaction"
              description="Are you sure you want to confirm this transaction?"
              onConfirm={() => confirmTransaction(id)}
              onCancel={() => message.error('Confirmation aborted')}
              okText="Yes"
              cancelText="No"
            >
              <Button className='text-blue-500 border-blue-500'
                icon={<CheckOutlined />}
              />
            </Popconfirm>
            <Popconfirm
              title="Cancel Transaction"
              description="Are you sure you want to cancel this transaction?"
              onConfirm={() => cancelTransaction(id)}
              onCancel={() => message.error('Cancellation aborted')}
              okText="Yes"
              cancelText="No"
            >
            <Button
                icon={<CloseOutlined />}
                danger
            />
            </Popconfirm>
          </Space>
        );
    }
  };

  const columns: TableProps<DataType>['columns'] = [
    {
      title: 'Property Name',
      dataIndex: 'property_name',
      key: 'property',
    },
    {
      title: 'Client Name',
      dataIndex: 'client_name',
      key: 'client',
    },
    {
      title: 'Agent Name',
      dataIndex: 'agent_name',
      key: 'agent',
    },
    {
      title: 'Transaction Date',
      dataIndex: 'transaction_date',
      key: 'date',
      render: (transaction_date: Date) => dayjs(transaction_date).format('YYYY-MM-DD HH:mm A'),
    },
    {
      title: 'Sale Price',
      dataIndex: 'sale_price',
      key: 'sale',
    },
    {
      title: 'Commission',
      dataIndex: 'commission',
      key: 'commission',
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status) => renderStatus(status),
    },
    {
      title: 'Action',
      key: 'action',
      render: (record: DataType) => checkStatus(record.status, record.transaction_id),
    },
  ];

  const filteredData = transactions.filter(
    (item) => {
        const matchedSearchText = item.property_name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.client_name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.agent_name.toLowerCase().includes(searchText.toLowerCase());

        const matchesStatus = filterStatus ? item.status === filterStatus : true;

        return matchedSearchText && matchesStatus;
    });

  return (
    <div className="p-5">
        <div className="flex items-center justify-between">
            <div className="">
                <Input
                    prefix={<SearchOutlined />}
                    placeholder="Search by name"
                    className="w-64 md:w-80"
                    value={searchText}
                    onChange={(e) => handleSearch(e.target.value)}
                    allowClear
                />
                <Button className="mx-3 bg-blue-500 text-white" icon={<ClearOutlined />} onClick={handleClearSearch} />
                    
            </div>
            <Select
                placeholder="Filter by status"
                style={{ width: 200 }}
                onChange={handleStatusChange}
                allowClear
            >
            <Select.Option value="COMPLETED">COMPLETED</Select.Option>
            <Select.Option value="CANCELLED">CANCELLED</Select.Option>
            <Select.Option value="PENDING">PENDING</Select.Option>
            </Select>
        </div>
      <Table columns={columns} dataSource={filteredData} className='mt-8'/>
    </div>
  );
};

export default Transactions;