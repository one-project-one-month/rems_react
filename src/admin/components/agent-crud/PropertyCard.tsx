import React, { MouseEvent } from "react";
import "./styles.css";
import { Card, Carousel } from "antd";
import { DeleteFilled, EditFilled } from "@ant-design/icons";

interface Image {
  imgBase64: string;
  description: string;
}

export interface ItemProps {
  agentId: number;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  propertyType: string;
  price: string;
  size: number;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  yearBuilt: number;
  description: string;
  availiablityType: string;
  minRentalPeriod: number;
  images: Image[];
}

interface PropertyCardProps {
  item: ItemProps;
  onEdit: (event: MouseEvent) => void;
  onDelete: (event: MouseEvent) => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  item,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="grid grid-cols-3 max-w-96">
      <Card
        key={item.agentId}
        className="overflow-hidden shadow-lg min-h-[50px] col-span-3 hover:shadow-2xl transition-all ease-in-out duration-300 rounded-md cursor-pointer"
        cover={
          <Carousel arrows infinite={false}>
            {item.images.map((img) => (
              <img
                key={img.imgBase64}
                src={img.imgBase64}
                alt={img.description}
                className="object-cover h-[200px]"
              />
            ))}
          </Carousel>
        }
        actions={[
          <EditFilled onClick={onEdit} key="edit" />,
          <DeleteFilled onClick={onDelete} key="delete" />,
        ]}
      >
        <div className="">
          <div className="flex flex-wrap gap-2">
            <p className="text-[1.125rem] font-bold">
              Price: {item.price.toLocaleString()} MMK,
            </p>
            <p className="text-[1.125rem] font-bold">Size: {item.size},</p>
            <p className="text-[1.125rem] font-bold">
              Bathrooms: {item.numberOfBathrooms},
            </p>
            <p className="text-[1.125rem] font-bold">
              Bedrooms: {item.numberOfBedrooms},
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <p className="text-[1.125rem] font-bold">
              Address: {item.address},
            </p>
            <p className="text-[1.125rem] font-bold">
              {item.city}, {item.zipCode},
            </p>
            <p className="text-[1.125rem] font-bold">{item.description}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PropertyCard;
