import { useParams } from "react-router";
import Container from "./Container";
import { useNavigate } from "react-router-dom";
import { GiBathtub, GiBunkBeds } from "react-icons/gi";
import { BiLocationPlus, BiRuler } from "react-icons/bi";
import { useGetPropertyByIdQuery } from "../../../services/client/api/propertyApi";
import { Button } from "antd";
import Review from "../review/Review"

const PropertyById: React.FC = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { data: property } = useGetPropertyByIdQuery(Number(id));

  const handleBuy = () => {
    nav("/user/appointment");
  };

  return (
    <Container>
      <div className=" font-sans max-w-screen-lg mx-auto">
        <div className="flex flex-col py-16 gap-6">
          <div>
            <div className=" w-full h-auto object-contain rounded-xl  overflow-hidden ">
              {/* <img
                className=" w-full hover:scale-110 transition-transform duration-300 transform"
                src={property?.images[0].url}
                alt="PropertyImage"
              /> */}
            </div>
          </div>
          <div className=" grid grid-cols-1 mt-4  gap-x-20 gap-y-6 md:grid-cols-7">
            <div className=" md:col-span-4">
              <div className=" flex flex-col gap-5">
                <div className="flex justify-between">
                  <button className="  bg-[#ff1f1f] w-fit text-sm font-semibold text-white uppercase rounded-md px-3 py-1">
                    {property?.data.property.status}
                  </button>
                  <p className="font-semibold">
                    {" "}
                    {property?.data.property.price} kyats
                  </p>
                </div>
                <button
                  onClick={handleBuy}
                  className=" uppercase font-semibold text-sm px-4 py-2 w-full hover:bg-white hover:text-black transition duration-300 border-2 hover:border-2 hover:border-black rounded-lg bg-black text-white"
                >
                  Checkout
                </button>
                <div className="flex justify-between">
                  <Button href="/client/appointment" type="link">
                    Get appointment
                  </Button>
                  <Button type="link">
                    <Review userId={0} propertyId={0}/>
                  </Button>
                </div>

                {/* <div className="flex flex-col gap-2">
                  <div className="flex flex-row text-xl gap-2 font-semibold items-center">
                    <div>{property?.images[0].description}</div>
                  </div>
                </div>
                <hr /> */}
                <h1 className="  text-neutral-500">Features:</h1>
                <div className=" flex  items-center   gap-4 font-medium text-neutral-950">
                  <div className=" flex items-center gap-1">
                    <GiBunkBeds />
                    <p>{property?.data.property.numberOfBedrooms} beds</p>
                  </div>
                  <div className="flex items-center gap-1 border-x-[1px] px-3">
                    <GiBathtub />
                    {property?.data.property.numberOfBathrooms} bathrooms
                    <p></p>
                  </div>
                  <div className=" flex items-center gap-1">
                    <BiRuler />
                    {property?.data.property.size} SqFt
                  </div>
                  <p></p>
                </div>
                <hr />
                <h1 className="  text-neutral-500">Location:</h1>
                <div className=" flex flex-row items-center   gap-4 font-medium text-neutral-950">
                  <BiLocationPlus />
                  <div className="">{property?.data.property.address},</div>
                  <div className="">{property?.data.property.city}</div>
                </div>
                <hr />
                <div className=" flex flex-row items-center   gap-4 font-medium text-neutral-500">
                  <h1 className="  text-neutral-950">Year Built:</h1>
                  <div className="">{property?.data.property.yearBuilt}</div>
                </div>
                <hr />
                {/* <div className="flex flex-row items-center gap-4">
                  <div className=" px-3 py-1.5 rounded-full bg-neutral-400">
                    P
                  </div>
                  <div className="flex flex-col">
                    <div>
                      Hosted by <span className="">{"someone"}</span>
                    </div>
                    <div className=" text-sm text-neutral-500">
                      example@gmail.com
                    </div>
                  </div>
                </div> */}
                <div>
                  <h1 className=" font-bold text-lg mb-2">Description</h1>
                  <div className=" text-neutral-500">
                    {property?.data.property.description}
                  </div>
                </div>
                <hr />
              </div>
            </div>
            {/* <div className=" order-first md:order-last md:col-span-3">
              <div className=" bg-white shadow-md hover:shadow-lg transition rounded-xl border-[1px] overflow-hidden border-neutral-200">
                <div className="flex flex-col items-center gap-2 p-4">
                  <div className="text-2xl">
                    $ {property?.data.property.price}
                  </div>
                  <button
                    onClick={handleBuy}
                    className=" uppercase font-semibold text-sm px-4 py-2 w-full hover:bg-white hover:text-black transition duration-300 border-2 hover:border-2 hover:border-black rounded-lg bg-black text-white"
                  >
                    Checkout
                  </button>
                </div>
                <hr />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PropertyById;
