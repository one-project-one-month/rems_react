import React, { useState } from 'react';
import { Button, Input, Select, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import dayjs from 'dayjs';
import { SearchOutlined, ClearOutlined } from '@ant-design/icons';
import { useGetAllTransactionsQuery } from '../../services/admin/api/transactionsApi';
import { Transactions, TransApiResponse } from '../../type/type';

const renderStatus = (status: string) => {
  let color;

  switch (status) {
    case 'Rent':
      color = 'orange';
      break;
    case 'Sell':
      color = 'green';
      break;
    case 'Buy':
      color = 'blue';
      break;
    default:
      break;
  }
  return <Tag color={color}>{status}</Tag>;
};

const AgentTransactions: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [isFilter, setIsFilter] = useState(false);
  const [page, setPage] = useState({ pageNumber: 1, pageSize: 10 });

  const { data, isFetching } = useGetAllTransactionsQuery<TransApiResponse>(page);

  const localStorageToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      return JSON.parse(atob(token.split(".")[1]));
    }
    return null;
  };
  const token = localStorageToken();
  const currentUserId = token.UserId;

  const transactionData: Transactions[] = data?.data?.lstTransaction ?? [];
  const transactionDataByAgentId = transactionData.filter((data) => data.property.agentId === currentUserId);

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const handleStatusChange = (value: string) => {
    setIsFilter(true);
    setFilterStatus(value || ''); 
  };

  const handlePagination = (pageNumber: number, pageSize: number) => {
    setPage({
      pageNumber,
      pageSize,
    });
  };

  const columns: TableProps<Transactions>['columns'] = [
    {
      title: 'No',
      dataIndex: 'transactionId',
      key: 'transactionId',
      align: 'center',
      render: (_, record) => <span>{record?.transaction.transactionId}</span>,
    },
    {
      title: 'Client Name',
      dataIndex: ['firstName', 'lastName'],
      key: 'client',
      align: 'center',
      render: (_, record) => <span>{record?.client?.firstName} {record?.client?.lastName}</span>,
    },
    {
      title: 'Agent Name',
      dataIndex: 'agent_name',
      key: 'agent',
      render: () => <span>{token.UserName}</span>,
    },
    {
      title: 'Transaction Date',
      dataIndex: 'transactionDate',
      key: 'date',
      render: (transactionDate: Date) => dayjs(transactionDate).format('YYYY-MM-DD HH:mm A'),
    },
    {
      title: 'Sale Price',
      dataIndex: 'salePrice',
      key: 'sale',
      align: 'center',
      render: (_, record) => <span>{record.transaction.salePrice}</span>,
    },
    {
      title: 'Commission',
      dataIndex: 'commission',
      key: 'commission',
      align: 'center',
      render: (_, record) => <span>{record.transaction.commission}</span>,
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (_, record) => renderStatus(record.transaction.status),
    },
  ];

  const filteredData = transactionDataByAgentId.filter((item) => {
    const clientName = item.client.firstName + " " + item.client.lastName;
    const matchesSearchText = clientName.toLowerCase().includes(searchText.toLowerCase()) || 
                              token.UserName.toLowerCase().includes(searchText.toLowerCase());
    const matchesStatus = !filterStatus || item.transaction.status.toLowerCase() === filterStatus.toLowerCase();

    return matchesSearchText && matchesStatus;
  });

  return (
    <div className="p-5 w-full">
      <div className="flex items-center justify-between">
        <div>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search by client name"
            className="w-64 md:w-80"
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
            allowClear
          />
          <Button className="mx-3 bg-blue-500 text-white" icon={<ClearOutlined />} onClick={() => setIsFilter(true)} />
        </div>
        <Select
          placeholder="Filter by status"
          style={{ width: 200 }}
          onChange={handleStatusChange}
          allowClear
        >
          <Select.Option value="Sell">SELL</Select.Option>
          <Select.Option value="Rent">RENT</Select.Option>
          <Select.Option value="Buy">BUY</Select.Option>
        </Select>
      </div>
      <div className="mt-8 max-w-[390px] sm:max-w-[650px] md:max-w-[980px] lg:max-w-full bg-white overflow-x-scroll no-scrollbar">
        <Table
          loading={isFetching}
          rowKey={(record) => record.transaction.transactionId}
          dataSource={isFilter ? filteredData : transactionDataByAgentId}
          columns={columns}
          pagination={{
            total: isFilter ? filteredData.length : transactionDataByAgentId.length,
            current: page?.pageNumber,
            onChange: handlePagination,
          }}
        />
      </div>
    </div>
  );
};

export default AgentTransactions;

