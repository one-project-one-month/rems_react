import { Button, Empty, Input, Modal, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import UserDrawer from "./ClientDrawer";

export interface DataType {
  key: string;
  client_id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  roles: string;
  address: string;
}

const ClientList = () => {
  const [open, setOpen] = useState(false);
  const [currentRecords, setCurrentRecords] = useState<DataType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [filteredData, setFilteredData] = useState<DataType[]>([]);

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filtered = data.filter(
      (item) =>
        item.firstName.toLowerCase().includes(value.toLowerCase()) ||
        item.lastName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
    setIsSearched(true);
  };

  const handleCreate = () => {
    console.log("Create");
    setCurrentRecords(null);
    setOpen(true);
  };

  const handleEdit = (record: DataType) => {
    console.log("Edit", record);
    setCurrentRecords(record);
    setOpen(true);
  };

  const handleDelete = (record: DataType) => {
    console.log("Delete", record);
    setIsModalOpen(true);
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Client Id",
      dataIndex: "client_id",
      key: "client_id",
      // defaultSortOrder: "descend",
      sorter: (a, b) => a.client_id - b.client_id,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Full name",
      dataIndex: "fullname",
      key: "fullname",
      // defaultSortOrder: "descend",
      sorter: (a, b) =>
        `${a.firstName} ${a.lastName}`.localeCompare(
          `${b.firstName} ${b.lastName}`
        ),
      render: (_, record) => (
        <a>
          {record.firstName} {record.lastName}
        </a>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      // defaultSortOrder: "descend",
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Roles",
      key: "roles",
      dataIndex: "roles",
      // defaultSortOrder: "descend",
      sorter: (a, b) => a.roles.length - b.roles.length,
      render: (roles) => {
        let color;
        roles === "Agent" ? (color = "red") : (color = "green");
        return (
          <Tag color={color} key={roles}>
            {roles.toUpperCase()}
          </Tag>
        );
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
            danger
          />
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      client_id: 1,
      firstName: "John",
      lastName: "Brown",
      phone: "0977777777",
      email: "test01@gmail.com",
      roles: "Agent",
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      client_id: 2,
      firstName: "Jim",
      lastName: "Green",
      phone: "0977777777",
      email: "test02@gmail.com",
      roles: "User",
      address: "New York No. 1 Lake Park",
    },
    {
      key: "3",
      client_id: 3,
      firstName: "Joe",
      lastName: "Black",
      phone: "0977777777",
      email: "test03@gmail.com",
      roles: "User",
      address: "New York No. 1 Lake Park",
    },
  ];

  return (
    <div className="p-5">
      <div className="flex justify-between items-center mb-5">
        <Input
          prefix={<SearchOutlined />}
          placeholder="Search by name"
          onChange={handleSearch}
          className="w-64 md:w-80"
        />
        <Button type="primary" onClick={handleCreate}>
          Create Clients
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={isSearched ? filteredData : data}
        locale={{
          emptyText: (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="No data found"
            />
          ),
        }}
      />
      <UserDrawer onClose={onClose} open={open} records={currentRecords} />
      <Modal
        title="Deleting User"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}>
        <p>Are you sure to delete this user?</p>
      </Modal>
    </div>
  );
};

export default ClientList;
