import type { ColumnsType } from 'antd/es/table';
import { Table, Tag, Typography } from 'antd';
import React from 'react';
import { Properties, PropertyResponse } from '../../../type/type';
import { useGetAllPropertiesQuery } from "../../../features/properties/api/propertiesApi";
import { Link } from 'react-router-dom';

const renderStatus = (status: any) => {
    let color;

    switch (status) {
        case "AVAILABLE":
            color = 'green';
            break;
        case "SOLD":
            color = 'red';
            break;
        default:
            break;
    }
    return <Tag color={color}>{status}</Tag>;
}

const columns: ColumnsType<Properties> = [
    {
        title: 'Property ID',
        dataIndex: 'propertyId',
        key: 'propertyId',
        align: 'center',
        render: (_, record) => (
            <span>{record?.property.propertyId}</span>
        )
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render: (_, record) => (
            <div>
                <span>{`${record.property.address}, (${record.property.city}, ${record.property.state})`}</span> <br />
            </div>
        )
    },
    {
        title: 'Type',
        dataIndex: 'property_type',
        key: 'property_type',
        render: (_, record) => (
            <div>
                <span>{record.property.propertyType}</span> <br />
                <Tag color="#2db7f5" style={{ marginRight: 0 }}>{record.property.availiablityType}</Tag>
            </div>
        ),
        align: 'center'
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (_, record) => <span>{record.property.price} MMK</span>
    },
    {
        title: 'Features',
        dataIndex: 'features',
        key: 'features',
        render: (_, record) => (
            <div>
                <span>{`${record.property.size} sq ft, ${record.property.numberOfBedrooms} bed, ${record.property.numberOfBathrooms} bath`}</span> <br />
                <span>{`Built in ${record.property.yearBuilt}`}</span>
            </div>
        )
    },
    {
        title: 'Minimum Rental Period',
        dataIndex: 'minrentalPeriod',
        key: 'minrentalPeriod',
        render: (_, record) => <span>{record.property.minrentalPeriod} {record.property.minrentalPeriod > 1 ? 'Months' : 'Month'} </span>,
        width: 150
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (_, record) => renderStatus(record.property.status)
    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (_, record) => (
            <Link to='/properties/detail'
                state={{ properties: record }}
            >
                <Typography.Link>Detail</Typography.Link>
            </Link>
        )
    },
   
];

const PropertyList: React.FC = () => {
    const { data, isLoading: propertiesLoading } = useGetAllPropertiesQuery<PropertyResponse>();
    
   const properties = data?.data ?? [];

    if (propertiesLoading) {
        return <div>Loading...</div>;
    }

    if (!Array.isArray(properties) || properties.length === 0) {
        return <div>No properties available.</div>;
    }
    return (
        <Table
            columns={columns}
            dataSource={properties}
            rowKey="propertyId"
        />
    );
};

export default PropertyList;
