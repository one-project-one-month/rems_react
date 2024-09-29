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
    render: (date: Date) => dayjs(date).format("DD/MM/YYYY"),
  },
  {
    title: "Appointment Time",
    dataIndex: "appointmentTime",
    key: "appointmentTime",
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
  },
  {
    title: "Notes",
    dataIndex: "notes",
    key: "notes",
    render: (notes: string | null) => notes || "No Notes",
  },
];

const App: React.FC = () => {
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

export default App;
