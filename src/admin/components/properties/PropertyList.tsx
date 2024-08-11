import type { TableProps } from 'antd';
import { Col, Row, Table, Tag } from 'antd';
import dayjs from 'dayjs';
import React from 'react';
import { Properties,Review } from '../../../type/type';
import { useGetAllReviewsQuery } from "../../../features/review/api/reviewApi";
import { useGetAllPropertiesQuery } from "../../../features/properties/api/propertiesApi";

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
                <span>{`${record.address}, (${record.city}, ${record.state})`}</span> <br />
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
                <Tag color="#2db7f5" style={{ marginRight: 0 }}>{record.availability_type}</Tag>
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
    },
    {
        title: 'Rating',
        dataIndex: 'rating',
        key: 'rating',
        align: 'center',
        render: (rating) => <span>{rating ? `${rating} ⭐` : 'N/A'}</span>
    },
    {
        title: 'Comments',
        dataIndex: 'comments',
        key: 'comments',
        render: (comments) => <span>{comments || 'No comments'}</span>
    }
];


const PropertyList: React.FC = () => {
    const { data: properties, isLoading: propertiesLoading } = useGetAllPropertiesQuery();
    const { data: review, isLoading: reviewsLoading } = useGetAllReviewsQuery();

    
    if (propertiesLoading || reviewsLoading) {
        return <div>Loading...</div>;
    }

    if (!properties) {
        return <div>No properties available.</div>;
    }

    return (
        <Table
            // columns={columns}
            dataSource={properties}
            rowKey="property_id"
            expandable={{
                expandedRowRender: (record) => (
                    <Row>
                        <Col span={8}>
                            <div className='text-gray-600 font-semibold'>Approved By</div>
                            <div className='text-gray-800'>{record.approved_by}</div>
                        </Col>
                        <Col span={8}>
                            <div className='text-gray-600 font-semibold'>Added Date & Edited Date</div>
                            <div className='text-gray-800'>
                                {`${dayjs(record.add_date).format('YYYY-MM-DD HH:mm A')}, ${dayjs(record.edit_date).format('YYYY-MM-DD HH:mm A')}`}
                            </div>
                        </Col>
                        <Col span={8}>
                            <div className='text-gray-600 font-semibold'>Description</div>
                            <div className='text-gray-800'>{record.description}</div>
                        </Col>
                    </Row>
                ),
                rowExpandable: (record) => record.description !== undefined
            }}
        />
    );
};

export default PropertyList;
