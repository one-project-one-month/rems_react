import { Button, Input, Space, Table, Tag } from "antd";
import type { TableProps } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import UserDrawer from "./UserDrawer";

export interface DataType {
  key: string;
  name: string;
  email: string;
  phone: number;
  roles: string;
}

const UserList = () => {
  const [open, setOpen] = useState(false);
  const [currentRecords, setCurrentRecords] = useState<DataType | null>(null);

  const onClose = () => {
    setOpen(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
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
  };

  const columns: TableProps<DataType>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.name.length - b.name.length,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.email.length - b.email.length,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Roles",
      key: "roles",
      dataIndex: "roles",
      defaultSortOrder: "descend",
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
      name: "John Brown",
      phone: 32,
      email: "New York No. 1 Lake Park",
      roles: "Agent",
    },
    {
      key: "2",
      name: "Jim Green",
      phone: 42,
      email: "London No. 1 Lake Park",
      roles: "User",
    },
    {
      key: "3",
      name: "Joe Black",
      phone: 32,
      email: "Sydney No. 1 Lake Park",
      roles: "User",
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
          Create Users
        </Button>
      </div>
      <Table columns={columns} dataSource={data} />
      <UserDrawer onClose={onClose} open={open} records={currentRecords} />
    </div>
  );
};

export default UserList;
