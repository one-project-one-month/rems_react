import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Property } from "../../Model/Property";
import Container from "../common/Container";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import { GiBathtub, GiBunkBeds} from "react-icons/gi";
import { BiLocationPlus, BiRuler } from "react-icons/bi";

const PropertyById: React.FC = () => {
  const [property, setProperty] = useState<Property | null>(null);
  const { id } = useParams();
  const nav = useNavigate();
  // console.log(id);

  const handleBuy = () => {
    nav("/user/appointment");
  }

  const GetPropertyById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/properties/${id}`
      );
      setProperty(response.data);
    } catch (error) {
      console.error("Error fetching property:", error);
    }
  };

  useEffect(() => {
    if (id) {
      GetPropertyById();
    }
  }, [id]);

  console.log(property);

  return (
    <Container>
      hello
      <div className=" font-sans max-w-screen-lg mx-auto">
        <div className="flex flex-col py-16 gap-6">
          <div>
            <div className=" w-full h-auto object-contain rounded-xl  overflow-hidden ">
              <img
                className=" w-full hover:scale-110 transition-transform duration-300 transform"
                src={property?.images[0].url}
                alt="PropertyImage"
              />
            </div>
          </div>
          <div className=" grid grid-cols-1 mt-4  gap-x-20 gap-y-6 md:grid-cols-7">
            <div className=" md:col-span-4">
              <div className=" flex flex-col gap-5">
                <button className="  bg-[#ff1f1f] w-fit text-sm font-semibold text-white uppercase rounded-md px-3 py-1">
                  {property?.status}
                </button>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row text-xl gap-2 font-semibold items-center">
                    <div>{property?.images[0].description}</div>
                  </div>
                  <div className=" font-semibold ">{property?.price} kyats</div>
                </div>
                <hr />
                <div className=" flex flex-row items-center   gap-4 font-medium text-neutral-950">
                  <h1 className="  text-neutral-500">Features:</h1>
                  <div className=" flex items-center gap-1">
                    <GiBunkBeds />
                    <p>{property?.numberOfBedrooms} beds</p>
                    </div>
                  <div className="flex items-center gap-1 border-x-[1px] px-3">
                    <GiBathtub />
                    {property?.numberOfBathrooms} bathrooms
                    <p></p>
                  </div>
                  <div className=" flex items-center gap-1">
                    <BiRuler />
                    {property?.size} SqFt</div>
                    <p></p>
                </div>
                <hr />
                <div className=" flex flex-row items-center   gap-4 font-medium text-neutral-950">
                  <h1 className="  text-neutral-500">Location:</h1>
                  <BiLocationPlus />
                  <div className="">{property?.address},</div>
                  <div className="">{property?.city_id}</div>
                </div>
                <hr />
                <div className=" flex flex-row items-center   gap-4 font-medium text-neutral-500">
                  <h1 className="  text-neutral-950">Year Built:</h1>
                  <div className="">{property?.yearBuilt}</div>
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
                    {property?.description}
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div className=" order-first md:order-last md:col-span-3">
              <div className=" bg-white shadow-md hover:shadow-lg transition rounded-xl border-[1px] overflow-hidden border-neutral-200">
                <div className="flex flex-col items-center gap-2 p-4">
                  <div className="text-2xl">$ {property?.price}</div>
                  <button onClick={handleBuy} className=" uppercase font-semibold text-sm px-4 py-2 w-full hover:bg-white hover:text-black transition duration-300 border-2 hover:border-2 hover:border-black rounded-lg bg-black text-white">
                    Buy Property
                  </button>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PropertyById;
