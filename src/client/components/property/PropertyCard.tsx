import { Badge, Col, Modal, Row, Tag } from "antd";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { LiaRulerCombinedSolid } from "react-icons/lia";
import { MdOutlineBedroomChild, MdOutlineReviews } from "react-icons/md";
import { PiBathtubThin } from "react-icons/pi";
import { useNavigate } from "react-router";
import { Properties } from "../../../type/type";

interface HomeCardProps {
  property: Properties;
}

const PropertyCard: React.FC<HomeCardProps> = ({ property }) => {
  const nav = useNavigate();
  const [openModal, setOpenModal] = useState(false)

  const handlePropertyDetail = () => {
    nav(`./property/${property.property.propertyId}`);
  };

  return (
    <>
      <Modal title="Reviews" open={openModal} onCancel={() => setOpenModal(false)} footer={null} centered>
        {property.reviews.map((review: any) => (
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
      </Modal>
      <div className="border rounded-xl overflow-hidden">
        <div className="relative">
          <img
            src={"https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50fGVufDB8fDB8fHww"} // Handle image URL
            alt={"Property Image"}
            className="w-full h-30 object-cover"
          />
          <div className="absolute top-2 right-5">
            <div className="flex items-center gap-3 mt-1">
              <Tag color="#108ee9">{property.property.availiablityType}</Tag>
              {
                property?.reviews?.length > 0 &&

                <Badge count={property?.reviews?.length}>
                  <div className="p-1 bg-black bg-opacity-50 hover:bg-primary rounded-md cursor-pointer" onClick={() => setOpenModal(true)}>
                    <MdOutlineReviews className="text-white text-xl font-semibold" />
                  </div>
                </Badge>
              }
              {/* <div
                onClick={handlePropertyDetail}
                className="p-1 bg-black bg-opacity-50 hover:bg-primary rounded-md cursor-pointer"
              >
                <IoEyeOutline className="text-white text-xl font-semibold" />
              </div> */}
            </div>
          </div>
        </div>

        <div className="px-4 py-4 border-b flex flex-col gap-2">
          <h1 className="font-semibold text-lg">{property.property.address}</h1>
          <p className="flex items-center gap-1 text-gray-500">
            <CiLocationOn />
            {property.property.city}, {property.property.state} {/* Adjust as necessary */}
          </p>
          <div className="flex items-center gap-7 font-semibold text-sm">
            <p className="flex items-center gap-2">
              <MdOutlineBedroomChild />
              {property.property.numberOfBedrooms}
            </p>
            <p className="flex items-center gap-2">
              <PiBathtubThin /> {property.property.numberOfBathrooms}
            </p>
            <p className="flex items-center gap-2">
              <LiaRulerCombinedSolid /> {property.property.size} SqFt
            </p>
          </div>
        </div>
        <div className="px-4 py-3 flex items-center justify-between">
          {/* <div className="flex items-center gap-2 text-gray-500">
          <img
            src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww"
            className="w-10 h-10 object-cover rounded-full"
            alt="Agent"
          />
          <p>{property.property.agentId}</p>
        </div> */}
          <h1 className="font-semibold">
            {property.property.price}{" "}
            <span className="text-gray-500 font-normal text-sm">/month</span>
          </h1>
          <div
            onClick={handlePropertyDetail}
            className="px-2 py-1 text-sm bg-black bg-opacity-50 hover:bg-primary rounded-md text-white cursor-pointer"
          >
            Schedule Visit
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyCard;
