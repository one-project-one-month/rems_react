import type { TableProps } from 'antd';
import { Col, Row, Table, Tag } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { Properties } from '../../../type/type';

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
    return <Tag color={color}>{status}</Tag>
}

const columns: TableProps<Properties>['columns'] = [
    {
        title: 'Property ID',
        dataIndex: 'property_id',
        key: 'property_id',
        align: 'center'
    },
    {
        title: 'Agent Info',
        dataIndex: 'agentInfo',
        key: 'agent',
        render: (_, record) => (
            <div>
                <span>{record.agent.agency_name}</span> <br />
                <span style={{ color: "#096DD9" }}>{record.agent.phone}</span>
            </div>
        )
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        render: (_, record) => (
            <div>
                <span>{`${record.address},(${record.city},${record.state})`}</span> <br />
            </div>
        )
    },
    {
        title: 'Type',
        dataIndex: 'property_type',
        key: 'property_type',
        render: (_, record) => (
            <div>
                <span>{record.property_type}</span> <br />
                <Tag color="#2db7f5" style={{marginRight: 0}}>{record.availability_type}</Tag>
            </div>
        ),
        align: 'center'
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (price) => <span>{price} MMK</span>
    },
    {
        title: 'Features',
        dataIndex: 'features',
        key: 'features',
        render: (_, record) => (
            <div>
                <span>{`${record.size} sq ft, ${record.number_of_bedrooms} bed, ${record.number_of_bathrooms} bath`}</span> <br />
                <span>{`Built in ${record.year_built}`}</span>
            </div>
        )
    },
    {
        title: 'Minimum Rental Period',
        dataIndex: 'min_rental_period',
        key: 'min_rental_period',
        render: (period) => <span>{period} {period > 1 ? 'Months' : 'Month'} </span>,
        width: 150
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        render: (status) => renderStatus(status)
    }
]

const properties: Properties[] = [
    {
        "property_id": 1,
        "agent": {
            "agency_name": "Top Realty",
            "license_number": "A1234567",
            "phone": "555-9999",
            "email": "top.realty@example.com"
        },
        "address": "123 Maple St",
        "city": "Springfield",
        "state": "IL",
        "zip_code": "62704",
        "property_type": "House",
        "price": 250000.00,
        "size": 1500.00,
        "number_of_bedrooms": 3,
        "number_of_bathrooms": 2,
        "year_built": 1990,
        "description": "Beautiful 3 bedroom house with garden",
        "status": "AVAILABLE",
        "availability_type": "FOR SALE",
        "min_rental_period": 3,
        "approved_by": "John Doe",
        "add_date": new Date("2023-01-01T12:00:00"),
        "edit_date": new Date("2023-01-01T12:00:00")
    },
    {
        "property_id": 2,
        "agent": {
            "agency_name": "City Brokers",
            "license_number": "B2345678",
            "phone": "555-1234",
            "email": "info@citybrokers.com"
        },
        "address": "456 Oak Ave",
        "city": "Metropolis",
        "state": "NY",
        "zip_code": "10001",
        "property_type": "Apartment",
        "price": 1500.00,
        "size": 800.00,
        "number_of_bedrooms": 2,
        "number_of_bathrooms": 1,
        "year_built": 2010,
        "description": "Cozy 2 bedroom apartment in downtown",
        "status": "AVAILABLE",
        "availability_type": "FOR RENT",
        "min_rental_period": 6,
        "approved_by": "Jane Smith",
        "add_date": new Date("2023-02-15T09:30:00"),
        "edit_date": new Date("2023-02-15T09:30:00")
    },
    {
        "property_id": 3,
        "agent": {
            "agency_name": "Luxury Estates",
            "license_number": "C3456789",
            "phone": "555-5678",
            "email": "contact@luxuryestates.com"
        },
        "address": "789 Pine Dr",
        "city": "Gotham",
        "state": "CA",
        "zip_code": "90210",
        "property_type": "Condo",
        "price": 350000.00,
        "size": 1200.00,
        "number_of_bedrooms": 2,
        "number_of_bathrooms": 2,
        "year_built": 2005,
        "description": "Modern condo with a great view",
        "status": "SOLD",
        "availability_type": "FOR SALE",
        "min_rental_period": 3,
        "approved_by": "Alice Johnson",
        "add_date": new Date("2023-03-10T11:45:00"),
        "edit_date": new Date("2023-03-10T11:45:00")
    },
    {
        "property_id": 4,
        "agent": {
            "agency_name": "Family Homes",
            "license_number": "D4567890",
            "phone": "555-9876",
            "email": "sales@familyhomes.com"
        },
        "address": "321 Elm St",
        "city": "Star City",
        "state": "TX",
        "zip_code": "73301",
        "property_type": "Townhouse",
        "price": 180000.00,
        "size": 1100.00,
        "number_of_bedrooms": 3,
        "number_of_bathrooms": 1.5,
        "year_built": 1985,
        "description": "Spacious townhouse with a large backyard",
        "status": "AVAILABLE",
        "availability_type": "FOR SALE",
        "min_rental_period": 6,
        "approved_by": "Robert Brown",
        "add_date": new Date("2023-04-05T10:20:00"),
        "edit_date": new Date("2023-04-05T10:20:00")
    }
]
    ;

const PropertyList: React.FC = () => <Table columns={columns} dataSource={properties} rowKey="property_id" expandable={{
    expandedRowRender: (record) => (
        <Row>
            <Col span={8}>
                <div className='text-gray-600 font-semibold'>Approved By</div>
                <div className='text-gray-800'>{`${record.approved_by}`}</div>
            </Col>
            <Col span={8}>
                <div className='text-gray-600 font-semibold'>Added Date&Edited Date</div>
                <div className='text-gray-800'>{`${dayjs(record.add_date).format('YYYY-MM-DD HH:mm A')},${dayjs(record.edit_date).format('YYYY-MM-DD HH:mm A')}`}</div>
            </Col>
            <Col span={8}>
                <div className='text-gray-600 font-semibold'>Description</div>
                <div className='text-gray-800'>{record.description}</div>
            </Col>
        </Row>
    )
}} />

export default PropertyList