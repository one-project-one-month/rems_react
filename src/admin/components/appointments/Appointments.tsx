import React from "react";
import { Flex, Spin, Table, Tag } from "antd";
import dayjs from "dayjs";
import { useGetAppointmentsQuery } from "../../../services/admin/api/appointmentApi";
import { Appointment } from "../../../type/type"

const getStatusTag = (status: string) => {
  const statusColors: { [key: string]: string } = {
    APPROVED: "green",
    PENDING: "blue",
    FDS: "red",
  };
  return (
    <Tag color={statusColors[status.toUpperCase()] || "default"}>{status}</Tag>
  );
};

const columns = [
  {
    title: "Client Name",
    dataIndex: "clientName",
    key: "clientName",
  },
  {
    title: "Agent Name",
    dataIndex: "agentName",
    key: "agentName",
  },
  {
    title: "Appointment Date",
    dataIndex: "appointmentDate",
    key: "appointmentDate",
    render: (date: string) => dayjs(date).format("DD/MM/YYYY"),
    sorter: (a: Appointment, b: Appointment) =>
      dayjs(a.appointmentDate).unix() - dayjs(b.appointmentDate).unix(),
  },
  {
    title: "Appointment Time",
    dataIndex: "appointmentTime",
    key: "appointmentTime",
    render: (time: string) => dayjs(time, "HH:mm:ss").format("HH:mm"),
    sorter: (a: Appointment, b: Appointment) =>
      dayjs(a.appointmentTime, "HH:mm:ss").unix() -
      dayjs(b.appointmentTime, "HH:mm:ss").unix(),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status: string) => getStatusTag(status),
  },
  {
    title: "Notes",
    dataIndex: "notes",
    key: "notes",
    render: (notes: string | null) => notes || "No Notes",
  },
];

const App: React.FC = () => {
  const {
    data: appointmentsData,
    error: appointmentsError,
    isLoading: appointmentsLoading,
  } = useGetAppointmentsQuery();

  if (appointmentsLoading) {
    return (
      <Flex justify="center" gap="middle">
        <Spin size="large" />
      </Flex>
    );
  }

  if (appointmentsError) {
    console.error("Appointments Error:", appointmentsError);
    return <div>Error loading appointments data</div>;
  }

  const listAppointment = Array.isArray(
    appointmentsData?.data?.appointmentDetails
  )
    ? appointmentsData.data.appointmentDetails
    : [];

  return (
    <Table
      columns={columns}
      dataSource={listAppointment}
      rowKey="appointmentId"
    />
  );
};

export default App;
