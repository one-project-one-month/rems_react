import { BackwardFilled } from "@ant-design/icons";
import { Button, Drawer, Flex, Typography } from "antd";
import { useState } from "react";
import { BiLocationPlus, BiRuler } from "react-icons/bi";
import { GiBathtub, GiBunkBeds } from "react-icons/gi";
import { useNavigate, useParams } from "react-router";
import { useAuth } from "../../../login/login-context/AuthContext";
import { useGetPropertyByIdQuery } from "../../../services/admin/api/propertiesApi";
import { PropertyIdResponse } from "../../../type/type";
import Appointment from "../appointment/Appointment";
import Review from "../review/Review";
import TransactionCreateForm from "../transaction/TransactionCreateForm";
import Container from "./Container";

const PropertyById: React.FC = () => {
  const { id } = useParams();
  const [openDraw, setOpenDraw] = useState(false);
  const navigate = useNavigate();
  const { isFetching, data } = useGetPropertyByIdQuery<PropertyIdResponse>(Number(id));

  const property = data?.data ?? [];
  const { user } = useAuth();

  return (
    <>
      <Drawer open={openDraw} onClose={() => setOpenDraw(false)}>
        <Appointment propertyId={property?.property?.propertyId} closeDrawer={() => setOpenDraw(false)} />
      </Drawer>
      <Container>
        <div className=" font-sans max-w-screen-lg mx-auto">
          <Flex gap={10} style={{ width: '100%', marginBlock: 20 }}>
            <Button type="primary" shape="circle" icon={<BackwardFilled />} onClick={() => navigate(-1)} />
            <Typography.Title level={3} style={{ margin: 0 }}>
              Property Detail
            </Typography.Title>
          </Flex>
          <div className="flex flex-col pb-16">
            <div className=" w-full h-auto object-contain rounded-xl  overflow-hidden ">
              {/* <img
                className=" w-full hover:scale-110 transition-transform duration-300 transform"
                src={property?.images[0]?.imageUrl}
                alt="PropertyImage"
              /> */}
            </div>
            <div className=" grid grid-cols-1 mt-4  gap-x-20 gap-y-6 md:grid-cols-7">
              <div className=" md:col-span-4">
                <div className=" flex flex-col gap-5">
                  <div className="flex justify-between">
                    <button className="  bg-[#ff1f1f] w-fit text-sm font-semibold text-white uppercase rounded-md px-3 py-1">
                      {property?.property?.propertyType}
                    </button>
                    <p className="font-semibold">
                      {" "}
                      {property?.property?.price} kyats
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <Button type="link" onClick={() => setOpenDraw(true)}>
                      Get appointment
                    </Button>
                    <Button type="link">
                      <Review userId={user?.UserId} propertyId={property?.property?.propertyId} />
                    </Button>
                  </div>
                  <h1 className="  text-neutral-500">Features:</h1>
                  <div className=" flex  items-center   gap-4 font-medium text-neutral-950">
                    <div className=" flex items-center gap-1">
                      <GiBunkBeds />
                      <p>{property?.property?.numberOfBedrooms} beds</p>
                    </div>
                    <div className="flex items-center gap-1 border-x-[1px] px-3">
                      <GiBathtub />
                      {property?.property?.numberOfBathrooms} bathrooms
                      <p></p>
                    </div>
                    <div className=" flex items-center gap-1">
                      <BiRuler />
                      {property?.property?.size} SqFt
                    </div>
                    <p></p>
                  </div>
                  <hr />
                  <h1 className="  text-neutral-500">Location:</h1>
                  <div className=" flex flex-row items-center  gap-4 font-medium text-neutral-950">
                    <BiLocationPlus />
                    <div className="">{property?.property?.address},</div>
                    <div className="">{property?.property?.city}</div>
                  </div>
                  <hr />
                  <div className=" flex flex-row items-center   gap-4 font-medium text-neutral-500">
                    <h1 className="  text-neutral-950">Year Built:</h1>
                    <div className="">{property?.property?.yearBuilt}</div>
                  </div>
                  <hr />
                  <div>
                    <h1 className=" font-bold text-lg mb-2">Description</h1>
                    <div className=" text-neutral-500">
                      {property?.property?.description}
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
              <div className=" order-first md:order-last md:col-span-3">                
                <div className="mt-5">
                  <TransactionCreateForm id={id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default PropertyById;
