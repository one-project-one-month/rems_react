import type { TableProps } from "antd";
import { Col, Row, Table, Tag } from "antd";
import dayjs from "dayjs";
import React, { useState } from "react";
import { useGetAllTransactionsQuery } from "../../../services/admin/api/transactions";
import { Transactions } from "../../../type/type";

const renderStatus = (status: any) => {
	let color;

	switch (status) {
		case "PENDING":
			color = "orange";
			break;
		case "COMPLETED":
			color = "green";
			break;
		case "CANCELLED":
			color = "red";
			break;
		default:
			break;
	}
	return <Tag color={color}>{status}</Tag>;
};

interface PageSetting {
	totalCount: number;
	pageSize: number;
	isEndOfPage: boolean;
}

interface TransApiResponse {
	isFetching: boolean;
	data: {
		isSuccess: boolean;
		isError: boolean;
		data: {
			pageSetting: PageSetting;
			lstTransaction: Transactions[];
		};
	};
}

const columns: TableProps<Transactions>["columns"] = [
	{
		title: "Transaction ID",
		dataIndex: "transactionId",
		key: "transactionId",
		align: "center",
		render: (_, record) => (
			<span>{record?.transaction?.transactionId}</span>
		),
	},
	{
		title: "Client Info",
		dataIndex: "clientId",
		key: "clientId",
		align: "center",
		render: (_, record) => (
			<div>
				<span>{`${record.client?.firstName}${record.client.lastName}`}</span>{" "}
				<br />
				<span style={{ color: "#096DD9" }}>{record.client.phone}</span>
			</div>
		),
	},
	{
		title: "Transaction Date",
		dataIndex: "transactionDate",
		key: "date",
		render: (transactionDate: Date) =>
			dayjs(transactionDate).format("YYYY-MM-DD HH:mm A"),
	},
	{
		title: "Sale Price",
		dataIndex: "salePrice",
		key: "sale",
		align: "center",
		render: (_, record) => <span>{record.transaction.salePrice}</span>,
	},
	{
		title: "Property Price",
		dataIndex: "propertyPrice",
		key: "propertyPrice",
		align: "center",
		render: (_, record) => <span>{record.property.price}</span>,
	},
	{
		title: "Commission",
		dataIndex: "commission",
		key: "commission",
		align: "center",
		render: (_, record) => <span>{record.transaction.commission}</span>,
	},
	{
		title: "Status",
		key: "status",
		dataIndex: "status",
		render: (_, record) => renderStatus(record.transaction.status),
	},
];

const TransactionList: React.FC = () => {
	const [page, setPage] = useState({ pageNumber: 1, pageSize: 2 });

	const { isFetching, data } =
		useGetAllTransactionsQuery<TransApiResponse>(page);

	const pageSetting = data?.data?.pageSetting;
	const lstTransaction: Transactions[] = data?.data?.lstTransaction ?? [];

	const handlePagination = (pageNumber: number, pageSize: number) => {
		setPage({
			pageNumber,
			pageSize,
		});
	};

	return (
		<Table
			columns={columns}
			dataSource={lstTransaction}
			rowKey='transactionId'
			loading={isFetching}
			pagination={{
				total: pageSetting?.totalCount,
				current: page?.pageNumber,
				onChange: handlePagination,
			}}
			expandable={{
				expandedRowRender: (record) => (
					<Row gutter={16}>
						<Col span={6}>
							<div className='text-gray-600 font-semibold'>
								Property Address
							</div>
							<div className='text-gray-800'>{`${record.property.address}, ${record.property.city}, ${record.property.state}, ${record.property.zipCode}`}</div>
						</Col>
						<Col span={6}>
							<div className='text-gray-600 font-semibold'>
								Property Features
							</div>
							<div className='text-gray-800'>{`${record.property.size} sq ft, ${record.property.numberOfBedrooms} bed, ${record.property.numberOfBathrooms} bath, Built in ${record.property.yearBuilt}`}</div>
						</Col>
						<Col span={6}>
							<div className='text-gray-600 font-semibold'>
								Minimum Rental Period
							</div>
							<div className='text-gray-800'>{`${record.property.minrentalPeriod}`}</div>
						</Col>
						<Col span={6}>
							<div className='text-gray-600 font-semibold'>
								Available Type
							</div>
							<div className='text-gray-800'>{`${record.property.availiablityType}`}</div>
						</Col>
					</Row>
				),
			}}
		/>
	);
};

export default TransactionList;
