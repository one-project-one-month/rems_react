import type { TableProps } from "antd";
import { Table, Tag, Typography } from "antd";
import React from "react";
import { Properties} from "../../../type/type";
import { useGetAllPropertiesQuery } from "../../../services/admin/api/propertiesApi";
import { Link } from "react-router-dom";

const renderStatus = (status: any) => {
	let color;

	switch (status) {
		case "AVAILABLE":
			color = "green";
			break;
		case "SOLD":
			color = "red";
			break;
		default:
			break;
	}
	return <Tag color={color}>{status}</Tag>;
};

const columns: TableProps<Properties>["columns"] = [
	{
		title: "Property ID",
		dataIndex: "propertyId",
		key: "propertyId",
		align: "center",
		render: (_, record) => <span>{record?.property.propertyId}</span>,
	},
	{
		title: "Address",
		dataIndex: "address",
		key: "address",
		render: (_, record) => (
			<div>
				<span>{`${record.property.address}, (${record.property.city}, ${record.property.state})`}</span>{" "}
				<br />
			</div>
		),
	},
	{
		title: "Type",
		dataIndex: "property_type",
		key: "property_type",
		render: (_, record) => (
			<div>
				<span>{record.property.propertyType}</span> <br />
				<Tag color='#2db7f5' style={{ marginRight: 0 }}>
					{record.property.availiablityType}
				</Tag>
			</div>
		),
		align: "center",
	},
	{
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (_, record) => <span>{record.property.price} MMK</span>
    },
	{
		title: "Features",
		dataIndex: "features",
		key: "features",
		render: (_, record) => (
			<div>
				<span>{`${record.property.size} sq ft, ${record.property.numberOfBedrooms} bed, ${record.property.numberOfBathrooms} bath`}</span>{" "}
				<br />
				<span>{`Built in ${record.property.yearBuilt}`}</span>
			</div>
		),
	},
	{
		title: "Minimum Rental Period",
		dataIndex: "minrentalPeriod",
		key: "minrentalPeriod",
		render: (_, record) => (
			<span>
				{record.property.minrentalPeriod}{" "}
				{record.property.minrentalPeriod > 1 ? "Months" : "Month"}{" "}
			</span>
		),
		width: 150,
	},
	{
		title: "Status",
		key: "status",
		dataIndex: "status",
		render: (_, record) => renderStatus(record.property.status),
	},
	{
		title: "Action",
		dataIndex: "action",
		key: "action",
		render: (_, record) => (
			<Link to='/properties/detail' state={{ properties: record }}>
				<Typography.Link>Detail</Typography.Link>
			</Link>
		),
	},
];

// 	{
// 		property: {
// 			propertyId: 1,
// 			agentId: 1,
// 			address: "123 Maple Street Update",
// 			city: "Springfield",
// 			state: "IL",
// 			zipCode: "62704",
// 			propertyType: "Single Family Home",
// 			price: 350000,
// 			size: 2400.75,
// 			numberOfBedrooms: 4,
// 			numberOfBathrooms: 3,
// 			yearBuilt: 1998,
// 			description:
// 				"Beautiful 4-bedroom home with spacious backyard and modern amenities.",
// 			status: "Canceled",
// 			availiablityType: "Immediate",
// 			minrentalPeriod: 12,
// 			approvedby: "string",
// 			adddate: new Date("2024-07-31T23:56:30.093"),
// 			editdate: new Date("2024-08-01T14:59:32.383"),
// 		},
// 		images: [
// 			{
// 				imageId: 7,
// 				propertyId: 1,
// 				imageUrl:
// 					"D:\\rems_image\\9ba01f4b-22b1-418e-b835-1ab4bc164856.png",
// 				description: "Backyard with garden",
// 				dateUploaded: "2024-08-01T14:59:32.397",
// 			},
// 		],
// 		reviews: [
// 			{
// 				reviewId: 1,
// 				userId: 3,
// 				propertyId: 1,
// 				rating: 5,
// 				comments: "Amazing house, great location!",
// 				dateCreated: new Date("2024-07-31T23:56:30.367"),
// 			},
// 			{
// 				reviewId: 4,
// 				userId: 1,
// 				propertyId: 1,
// 				rating: 3,
// 				comments: "Good",
// 				dateCreated: new Date("2024-08-11T17:23:29.823"),
// 			},
// 		],
// 	},
// ];
const PropertyList: React.FC = () => {

	const { data, isLoading: propertiesLoading } = useGetAllPropertiesQuery();
    
	const properties = data?.data ?? [];
 
	 if (propertiesLoading) {
		 return <div>Loading...</div>;
	 }
 
	 if (!Array.isArray(properties) || properties.length === 0) {
		 return <div>No properties available.</div>;
	 }

	return (
		<Table columns={columns} dataSource={properties} rowKey='propertyId' />
	);
};

export default PropertyList;
