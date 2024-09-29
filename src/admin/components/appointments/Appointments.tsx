<<<<<<< HEAD
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
=======
import { Table } from "antd";
import { TableProps } from "antd/lib";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useGetAppoitmentByAdminQuery } from "../../../services/client/api/appointmentApi";
import { TAppointment } from "../../../type/type";

const columns: TableProps<TAppointment>['columns'] = [
  {
    title: "Appointment ID",
    dataIndex: "appointmentId",
    key: "appointmentId",
    width: 20,
    align: 'center',
>>>>>>> dev_conflict_fixed
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
<<<<<<< HEAD
    render: (date: string) => dayjs(date).format("DD/MM/YYYY"),
    sorter: (a: Appointment, b: Appointment) =>
      dayjs(a.appointmentDate).unix() - dayjs(b.appointmentDate).unix(),
=======
    render: (date: Date) => dayjs(date).format("DD/MM/YYYY"),
>>>>>>> dev_conflict_fixed
  },
  {
    title: "Appointment Time",
    dataIndex: "appointmentTime",
    key: "appointmentTime",
<<<<<<< HEAD
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
=======
    render: (time: string) => {
      const formattedTime = time.split('.')[0];
      const dayjsTime = dayjs(formattedTime, "HH:mm:ss");
      return dayjs(dayjsTime).format("HH:mm:ss A");
    },
  },
  {
		title: "Features",
		dataIndex: "features",
		key: "features",
		render: (_, record) => <span>{`${record.size} sq ft, ${record.numberOfBedrooms} bed, ${record.numberOfBathrooms} bath`}</span>
,
	},
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    render: (_, record) => (
      <div>
        <span>{`${record.address}, (${record.city}, ${record.state})`}</span>{" "}
        <br />
      </div>
    ),
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (_, record) => <span>{record.price} MMK</span>
>>>>>>> dev_conflict_fixed
  },
  {
    title: "Notes",
    dataIndex: "notes",
    key: "notes",
    render: (notes: string | null) => notes || "No Notes",
  },
];

const App: React.FC = () => {
<<<<<<< HEAD
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
=======
  const [page, setPage] = useState({ pageNumber: 1, pageSize: 10 });

  const { isFetching, data } = useGetAppoitmentByAdminQuery(page)

  const pageSetting = data?.data?.pageSetting;
  const appoitmentData = data?.data?.appointmentDetails ?? [];

  const handlePagination = (page: number, pageSize: number) => {
    setPage({ pageNumber: page, pageSize: pageSize });
  };

  return (
    <Table columns={columns} dataSource={appoitmentData} rowKey="appointmentId" 
    loading={isFetching}
    pagination={{
        total: pageSetting?.totalCount,
        current: page?.pageNumber,
        onChange: handlePagination
    }} />
  );
}
>>>>>>> dev_conflict_fixed

export default App;
