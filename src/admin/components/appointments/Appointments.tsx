import React from "react";
import { Table, Tag } from "antd";
import dayjs from "dayjs";

interface DataType {
  appointmentId: number;
  agentName: string;
  clientName: string;
  appointmentDate: Date;
  appointmentTime: Date;
  status: string;
  note: string;
}

// Function to determine the color of the status
const getStatusTag = (status: string) => {
  const statusColors: { [key: string]: string } = {
    COMPLETED: "green",
    SCHEDULED: "blue",
    CANCELLED: "red",
  };
  return <Tag color={statusColors[status] || "default"}>{status}</Tag>;
};

// Columns for the table
const columns = [
  {
    title: "Appointment ID",
    dataIndex: "appointmentId",
    key: "appointmentId",
    sorter: (a: DataType, b: DataType) => a.appointmentId - b.appointmentId,
  },
  {
    title: "Agent Name",
    dataIndex: "agentName",
    key: "agentName",
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
    sorter: (a: DataType, b: DataType) => a.status.localeCompare(b.status),
  },
  {
    title: "Note",
    dataIndex: "note",
    key: "note",
  },
];

// Data for the table
const data: DataType[] = [
  {
    appointmentId: 100,
    agentName: "David Hub",
    clientName: "John Doe",
    appointmentDate: new Date("2024-07-21"),
    appointmentTime: new Date("2024-07-21T11:30:00"),
    status: "COMPLETED",
    note: "An appointment has been made to sell the apartment",
  },
  {
    appointmentId: 101,
    agentName: "Emma Clarke",
    clientName: "Sophia Smith",
    appointmentDate: new Date("2024-08-05"),
    appointmentTime: new Date("2024-08-05T14:00:00"),
    status: "SCHEDULED",
    note: "Client requested a viewing of the property",
  },
  {
    appointmentId: 102,
    agentName: "James Carter",
    clientName: "Michael Johnson",
    appointmentDate: new Date("2024-09-10"),
    appointmentTime: new Date("2024-09-10T09:00:00"),
    status: "CANCELLED",
    note: "Client cancelled the appointment due to personal reasons",
  },
  {
    appointmentId: 103,
    agentName: "Olivia Brown",
    clientName: "Emma Davis",
    appointmentDate: new Date("2024-10-15"),
    appointmentTime: new Date("2024-10-15T16:30:00"),
    status: "CANCELLED",
    note: "Appointment rescheduled to a later date",
  },
  {
    appointmentId: 104,
    agentName: "Liam Wilson",
    clientName: "Isabella Garcia",
    appointmentDate: new Date("2024-11-20"),
    appointmentTime: new Date("2024-11-20T10:30:00"),
    status: "COMPLETED",
    note: "Inspection of the property completed",
  },
  {
    appointmentId: 105,
    agentName: "Ava Johnson",
    clientName: "Lucas Martinez",
    appointmentDate: new Date("2024-12-25"),
    appointmentTime: new Date("2024-12-25T13:00:00"),
    status: "SCHEDULED",
    note: "Client interested in buying the property",
  },
  {
    appointmentId: 106,
    agentName: "Ethan Lee",
    clientName: "Charlotte Anderson",
    appointmentDate: new Date("2024-07-30"),
    appointmentTime: new Date("2024-07-30T15:00:00"),
    status: "COMPLETED",
    note: "Property appraisal appointment completed",
  },
  {
    appointmentId: 107,
    agentName: "Mia Taylor",
    clientName: "Benjamin Thomas",
    appointmentDate: new Date("2024-08-12"),
    appointmentTime: new Date("2024-08-12T08:30:00"),
    status: "SCHEDULED",
    note: "Meeting with client to discuss property sale",
  },
  {
    appointmentId: 108,
    agentName: "Noah Harris",
    clientName: "Lily Wilson",
    appointmentDate: new Date("2024-09-03"),
    appointmentTime: new Date("2024-09-03T12:00:00"),
    status: "CANCELLED",
    note: "Appointment cancelled due to unforeseen circumstances",
  },
];

const App: React.FC = () => (
  <Table columns={columns} dataSource={data} rowKey="appointmentId" />
);

export default App;
