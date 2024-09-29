import { Button, Col, Divider, Flex, message, Row, Typography } from "antd";
import dayjs from "dayjs";
import { useLocation, useNavigate } from "react-router";
import { useChangestatusMutation } from "../../../services/admin/api/propertiesApi.ts";

const PropertyDetail = () => {
  const location = useLocation();
  const properties = location.state.properties;
  const navigate = useNavigate();

  const [changeStatus] = useChangestatusMutation();

  const handleApprove = async () => {
    try {
      await changeStatus({
        propertyId: properties?.property?.propertyId,
        propertyStatus: "Approved",
        approvedBy: "admin",
      }).unwrap();
      message.success("Successfully approved");
    } catch (error) {
      console.log("error is happening", error);
    }
  };

  const cancelApprove = async () => {
    try {
      await changeStatus({
        propertyId: properties?.property?.propertyId,
        propertyStatus: " Canceled",
        approvedBy: "admin",
      }).unwrap();
      message.success("Successfully Rejected");
    } catch (error) {
      console.log("error is is happening", error);
    }
  };

  return (
    <Row gutter={[16, 16]}>
      <Flex justify="space-between" style={{width: '100%',marginBottom: 10}}>
        <Typography.Title level={3} style={{ margin: 0 }}>
          Property Detail
        </Typography.Title>
        <button
          className="bg-gray-400 rounded-md hover:bg-slate-300 cursor-pointer  px-5 py-1 text-white"
          onClick={() => navigate(-1)}
        >
          {" "}
          back{" "}
        </button>
      </Flex>
      <Col span={24}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <div className="text-gray-600 font-semibold">Approved By</div>
            <div className="text-gray-800">
              {properties.property.approvedby}
            </div>
          </Col>
          <Col span={8}>
            <div className="text-gray-600 font-semibold">
              Added Date & Edited Date
            </div>
            <div className="text-gray-800">
              {`${dayjs(properties.property.addDate).format(
                "YYYY-MM-DD HH:mm A"
              )}, ${dayjs(properties.property.editDate).format(
                "YYYY-MM-DD HH:mm A"
              )}`}
            </div>
          </Col>
          <Col span={8}>
            <div className="text-gray-600 font-semibold">Description</div>
            <div className="text-gray-800">
              {properties.property.description}
            </div>
          </Col>
        </Row>
      </Col>
      {properties.reviews.length !== 0 && (
        <>
          <Divider orientation="left" style={{ marginBlock: 0 }}>
            Client Reviews
          </Divider>
          <Col span={24}>
            {properties.reviews.map((review: any) => (
              <Row key={review.id} style={{ marginBottom: 10 }}>
                <Col span={8}>
                  <div className="text-gray-600 font-semibold">User Name</div>
                  <div className="text-gray-800">Testing username</div>
                </Col>
                <Col span={8}>
                  <div className="text-gray-600 font-semibold">Rating</div>
                  <div className="text-gray-800">
                    {review.rating ? `${review.rating} ⭐` : "N/A"}
                  </div>
                </Col>
                <Col span={8}>
                  <div className="text-gray-600 font-semibold">Comments</div>
                  <div className="text-gray-800">
                    {review.comments || "No comments"}
                  </div>
                </Col>
              </Row>
            ))}
          </Col>
        </>
      )}
      {properties.property.status === "Pending" && (
        <Col span={24}>
          <Flex gap="small" justify="right">
            <Button type="primary" onClick={handleApprove}>
              Approve
            </Button>
            <Button type="primary" danger onClick={cancelApprove}>
              Reject
            </Button>
          </Flex>
        </Col>
      )}
    </Row>
  );
};

export default PropertyDetail;
