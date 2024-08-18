import React from "react";
import { Button, Space, Table, Tag, message, Popconfirm, Alert } from "antd";
import dayjs from "dayjs";
import {
  useGetAppointmentsByAgentIdQuery,
  useUpdateAppointmentsStatusMutation
} from "../../../store/slices/appointmentaApiSlice";

interface DataType {
  id: number;
  agentId: number;
  property: string;
  clientName: string;
  appointmentDate: Date;
  appointmentTime: Date;
  status: string;
  note: string;
}

const App: React.FC = () => {
  const AGENT_ID = 1
  const {
    data: appointments = [],
    error,
    isLoading,
  } = useGetAppointmentsByAgentIdQuery(AGENT_ID);

  const [ updateAppointmentsStatus] = useUpdateAppointmentsStatusMutation()

  const columns = [
    {
      title: "Appointment ID",
      dataIndex: "id",
      key: "id",
      sorter: (a: DataType, b: DataType) => a.id - b.id,
    },
    {
      title: "Property Address",
      dataIndex: "property",
      key: "property",
    },
    {
      title: "Client Name",
      dataIndex: "clientName",
      key: "clientName",
    },
    {
      title: "Appointment Date",
      dataIndex: "appointmentDate",
      key: "appointmentDate",
      render: (date: Date) => dayjs(date).format("DD/MM/YYYY"),
      sorter: (a: DataType, b: DataType) =>
        a.appointmentDate.getTime() - b.appointmentDate.getTime(),
    },
    {
      title: "Appointment Time",
      dataIndex: "appointmentTime",
      key: "appointmentTime",
      render: (time: Date) => dayjs(time).format("HH:mm"),
      sorter: (a: DataType, b: DataType) =>
        a.appointmentTime.getTime() - b.appointmentTime.getTime(),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => getStatusTag(status),
    },
    {
      title: "Note",
      dataIndex: "note",
      key: "note",
    },
    {
      title: "Action",
      dataIndex: ["status"],
      key: "action",
      render: (_: DataType, resource: DataType) =>
        checkStatus(resource.status, resource.id),
    },
  ];

  // Function to determine the color of the status
  const getStatusTag = (status: string) => {
    const statusColors: { [key: string]: string } = {
      COMPLETED: "green",
      SCHEDULED: "blue",
      CANCELLED: "red",
    };
    return <Tag color={statusColors[status] || "default"}>{status}</Tag>;
  };

  // Check the status for button
  const checkStatus = (status: string, appointmentsId: number) => {
    switch (status) {
      case "CANCELLED":
        return <Alert message="Cancelled Appointment" type="error" />;
      case "COMPLETED":
        return <Alert message="Completed Appointment" type="success" />;
      default:
        return (
          <Space>
            <Popconfirm
              title="Confirm Appointment?"
              description="Are you sure you want to confirm this appointment?"
              onConfirm={async () => {
                message.success("Appointment confirmed");
              
                await  updateAppointmentsStatus({id: AGENT_ID,  appointmentId : appointmentsId, data: {status : "COMPLETED"} }).unwrap()
               
              }}
              onCancel={() => {
                message.error("Cancellation aborted");
              }}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary">Confirm</Button>
            </Popconfirm>
            <Popconfirm
              title="Cancel Appointment?"
              description="Are you sure you want to cancel this appointment?"
              onConfirm={async () => {
                message.success("Appointment cancelled");
                await  updateAppointmentsStatus({id: AGENT_ID,  appointmentId : appointmentsId, data: {status : "CANCELLED"} }).unwrap()
              }}
              onCancel={() => {
                message.error("Cancellation aborted");
              }}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary" danger>
                Cancel
              </Button>
            </Popconfirm>
          </Space>
        );
    }
  };

  if (isLoading) return <p>Loading....</p>;

  if (error) return <p>Error...</p>;

  return <Table columns={columns} dataSource={appointments} rowKey="id" />;
};

export default App;
