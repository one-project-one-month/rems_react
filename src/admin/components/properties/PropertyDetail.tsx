import { Button, Col, Divider, Row, Typography } from 'antd';
import dayjs from 'dayjs';
import { useLocation } from 'react-router';
import { useAgentIndexQuery } from "../../../features/agents/api/agentApiTest";
import { AgentResponse, ChangeStatus} from '../../../type/type'; 
import { useChangeStatusMutation } from "../../../features/properties/api/propertiesApi";

const PropertyDetail = () => {
    const location = useLocation();
    const properties = location.state?.properties;

    const { data, isLoading } = useAgentIndexQuery<AgentResponse>(properties?.property?.agentId);

    const [changeStatus] = useChangeStatusMutation();

    const handleApprove = async () => {
        try {
            await changeStatus({ 
                propertyId: properties?.property?.propertyId, 
                propertyStatus: 'Approved', 
                approvedBy: 'admin'
            }).unwrap();
        } catch (error) {
            console.log("error is happening",error)
        }
    };

    const handleReject = async () => {
        try {
            await changeStatus({ 
                propertyId: properties?.property?.propertyId, 
                propertyStatus: ' Canceled', 
                approvedBy: 'admin' 
            }).unwrap();
        } catch (error) {
            console.log("error is is happening",error)
        }
    };

    return (
        <Row gutter={[24, 24]}>
            <Col span={24}>
                <Typography.Title level={3}>Property Detail</Typography.Title>
            </Col>
            {/* <Col span={24}>Images</Col> */}
            <Col span={24}>
                <Row gutter={[16, 16]}>
                    <Col span={8}>
                        <div className='text-gray-600 font-semibold'>Approved By</div>
                        <div className='text-gray-800'>{properties?.property?.approvedby}</div>
                    </Col>
                    <Col span={8}>
                        <div className='text-gray-600 font-semibold'>Added Date & Edited Date</div>
                        <div className='text-gray-800'>
                            {`${dayjs(properties?.property?.addDate).format('YYYY-MM-DD HH:mm A')}, ${dayjs(properties?.property?.editDate).format('YYYY-MM-DD HH:mm A')}`}
                        </div>
                    </Col>
                    <Col span={8}>
                        <div className='text-gray-600 font-semibold'>Description</div>
                        <div className='text-gray-800'>{properties?.property?.description}</div>
                    </Col>
                </Row>
            </Col>
            <Divider orientation='left' style={{ marginBlock: 0 }}>Client Reviews</Divider>
            <Col span={24}>
                {
                    properties?.reviews.map((review: any) => (
                        <Row key={review.id} style={{ marginBottom: 10 }}>
                            <Col span={8}>
                                <div className='text-gray-600 font-semibold'>User Name</div>
                                <div className='text-gray-800'>Testing username</div>
                            </Col>
                            <Col span={8}>
                                <div className='text-gray-600 font-semibold'>Rating</div>
                                <div className='text-gray-800'>{review.rating ? `${review.rating} ⭐` : 'N/A'}</div>
                            </Col>
                            <Col span={8}>
                                <div className='text-gray-600 font-semibold'>Comments</div>
                                <div className='text-gray-800'>{review.comments || 'No comments'}</div>
                            </Col>
                        </Row>
                    ))
                }
            </Col>
            <Divider orientation='left' style={{ marginBlock: 0 }}>Agent Info</Divider>
            <Col span={24}>
                {data?.isSuccess && data?.data ? (
                    <>
                        <span className='font-bold'>Agent :</span> 
                        <span>{data?.data?.agencyName}</span>
                        <div>{data?.data?.email}</div>
                        <div>{data?.data?.phoneNumber}</div>
                        <div>{data?.data?.licenseNumber}</div>



                    </>
                   
                ) : (
                    data?.isError ? <span>{data?.message}</span> : <span>Loading...</span>
                )}
            </Col>
            <Col span={24}>
                <Row justify='end'>
                    <Col>
                        <Button type='primary' style={{ marginRight: 8 }} onClick={handleApprove}>Approved</Button>
                        <Button type='primary' danger onClick={handleReject}>Canceled</Button>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
};

export default PropertyDetail;
