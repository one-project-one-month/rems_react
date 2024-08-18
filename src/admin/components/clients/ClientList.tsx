import { Button, Empty, Input, Modal, Space, Table, Tag, Row, Col } from "antd";
import type { TableProps } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useCallback, useEffect, useState } from "react";
import UserDrawer from "./ClientDrawer";
import { Client } from "../../../type/type";
import { toast } from "sonner";
import {
  useDeleteClientMutation,
  useGetAllClientsQuery,
} from "../../../services/admin/api/clientApi";

const ClientList = () => {
  const [open, setOpen] = useState(false);
  const [currentRecords, setCurrentRecords] = useState<Client | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearched, setIsSearched] = useState(false);
  const [filteredData, setFilteredData] = useState<Client[] | undefined>([]);
  const [dataSource, setDataSource] = useState<Client[] | undefined>([]);
  const [clientToDelete, setClientToDelete] = useState<Client | null>(null);

  const { data: clients, refetch } = useGetAllClientsQuery();
  const [deleteClient] = useDeleteClientMutation();

  const fetchAndUpdateData = useCallback(async () => {
    try {
      if (clients?.data.dataLst) {
        const dataWithKeys = clients.data.dataLst.map(
          (item: Client, index: number) => ({
            ...item,
            key: (index + 1).toString(),
          })
        );
        setDataSource(dataWithKeys);
      }
    } catch (err) {
      console.log("ERROR ===> ", err);
    }
  }, [clients?.data?.dataLst]);

  useEffect(() => {
    fetchAndUpdateData();
  }, [fetchAndUpdateData]);

  const handleOk = async () => {
    if (clientToDelete) {
      await deleteClient(clientToDelete.clientId);
      await refetch();
      toast.success(`Client delete successfully`);
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setClientToDelete(null);

    setIsModalOpen(false);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const filtered = clients?.data?.dataLst.filter(
      (item) =>
        item.firstName.toLowerCase().includes(value.toLowerCase()) ||
        item.lastName.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
    setIsSearched(true);
  };

  const handleCreate = () => {
    setCurrentRecords(null);
    setOpen(true);
  };

  const handleEdit = (record: Client) => {
    setCurrentRecords(record);
    setOpen(true);
  };

  const handleDelete = (record: Client) => {
    setClientToDelete(record);
    setIsModalOpen(true);
  };

  const columns: TableProps<Client>["columns"] = [
    {
      title: "Client Id",
      dataIndex: "clientId",
      key: "clientId",
      sorter: (a, b) => a.clientId - b.clientId,
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Full name",
      dataIndex: "fullname",
      key: "fullname",
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
      sorter: (a, b) => a.email.length - b.email.length,
      responsive: ["md"],
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      responsive: ["lg"],
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      responsive: ["xl"],
    },
    {
      title: "Roles",
      key: "roles",
      render: (_, record) => {
        let color;
        record.role === "Agent" ? (color = "red") : (color = "green");
        return (
          <Tag color={color} key={record.role}>
            {record.role}
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

  return (
    <div className="p-5">
      <Row gutter={[16, 16]} className="mb-5">
        <Col xs={24} sm={16} md={18} lg={20}>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search by name"
            onChange={handleSearch}
            className="w-full"
          />
        </Col>
        <Col xs={24} sm={8} md={6} lg={4}>
          <Button type="primary" onClick={handleCreate} className="w-full">
            Create Clients
          </Button>
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={isSearched ? filteredData : dataSource}
        locale={{
          emptyText: (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="No data found"
            />
          ),
        }}
        scroll={{ x: "max-content" }}
        pagination={{
          responsive: true,
          position: ["bottomLeft"],
        }}
      />
      <UserDrawer
        onClose={onClose}
        open={open}
        records={currentRecords}
        refetch={refetch}
      />
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
