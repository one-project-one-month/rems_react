import React, { useState } from 'react';
import { Input, Button, Table, Modal } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface Review {
  key: string;
  name: string;
  Properties: string;
  rating: number;
  comments: string;
  date: number;
}

const reviewData: Review[] = [
  {
    key: '1',
    name: 'John Doe',
    Properties: 'Property 1',
    rating: 4,
    comments: 'Great experience!',
    date: 1634567890000,
  },
  {
    key: '2',
    name: 'Jane Smith',
    Properties: 'Property 2',
    rating: 5,
    comments: 'Excellent service!',
    date: 1634567890000,
  },
  {
    key: '3',
    name: 'Michael Johnson',
    Properties: 'Property 3',
    rating: 3,
    comments: 'Good overall, but room for improvement.',
    date: 1634567890000,
  },
  {
    key: '4',
    name: 'Emily Brown',
    Properties: 'Property 4',
    rating: 2,
    comments: 'Disappointing experience, needs improvement.',
    date: 1634567890000,
  },
  {
    key: '5',
    name: 'Daniel Wilson',
    Properties: 'Property 5',
    rating: 5,
    comments: 'Absolutely fantastic service!',
    date: 1634567890000,
  },
  {
    key: '6',
    name: 'Sophia Garcia',
    Properties: 'Property 6',
    rating: 4,
    comments: 'Very satisfied with the service provided.',
    date: 1634567890000,
  },
];

const Review: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const handleClearSearch = () => {
    setSearchText('');
  };

  const filteredData = reviewData.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    console.log('New comment:', comment);
    setOpen(false);
    setComment('');
  };

  const handleCancel = () => {
    setOpen(false);
    setComment('');
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Properties',
      dataIndex: 'Properties',
      key: 'Properties',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },
    {
      title: 'Comments',
      dataIndex: 'comments',
      key: 'comments',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date: number) => new Date(date).toLocaleDateString(),
    },
  ];

  return (
    <div className="p-5">
      <Input
        prefix={<SearchOutlined />}
        placeholder="Search by name"
        className="w-64 md:w-80"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
        allowClear
      />
      <Button className="mx-3 bg-blue-500 text-white" onClick={handleClearSearch}>
        Clear
      </Button>

      <Button
        type="primary"
        onClick={showModal}
        className="text-blue-500 bg-white  border-blue-500 sm:ml-[32rem]"
      >
        Comment
      </Button>

      <Table
        columns={columns}
        dataSource={filteredData}
        pagination={{ pageSize: 3 }}
        className="mt-8"
      />

      <Modal
        title="Write your experience"
        visible={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Submit"
        cancelText="Cancel"
      >
        <Input.TextArea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={4}
          placeholder="Enter your comment here"
        />
      </Modal>
    </div>
  );
};

export default Review;
