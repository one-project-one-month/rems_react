import { Button, Pagination } from "antd";
import PropertyCard from "./PropertyCard";
import { useState } from "react";
import PropertyDrawer from "./PropertyDrawer";

interface Image {
  imgBase64: string;
  description: string;
}

interface ItemProps {
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

const data: ItemProps[] = [
  {
    agentId: 1,
    address: "Yangon",
    city: "Yangon",
    state: "Yangon",
    zipCode: "11051",
    propertyType: "Type",
    price: "100",
    size: 0,
    numberOfBedrooms: 0,
    numberOfBathrooms: 0,
    yearBuilt: 0,
    description: "Desc",
    availiablityType: "approve",
    minRentalPeriod: 1,
    images: [
      {
        imgBase64:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        description: "Desc",
      },
      {
        imgBase64:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        description: "Desc",
      },
    ],
  },
  {
    agentId: 2,
    address: "Yangon",
    city: "Yangon",
    state: "Yangon",
    zipCode: "11051",
    propertyType: "Type",
    price: "100",
    size: 0,
    numberOfBedrooms: 0,
    numberOfBathrooms: 0,
    yearBuilt: 0,
    description: "Desc",
    availiablityType: "approve",
    minRentalPeriod: 2,
    images: [
      {
        imgBase64:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        description: "Desc",
      },
      {
        imgBase64:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        description: "Desc",
      },
    ],
  },
  {
    agentId: 3,
    address: "Yangon",
    city: "Yangon",
    state: "Yangon",
    zipCode: "11051",
    propertyType: "Type",
    price: "100",
    size: 0,
    numberOfBedrooms: 0,
    numberOfBathrooms: 0,
    yearBuilt: 0,
    description: "Desc",
    availiablityType: "reject",
    minRentalPeriod: 1,
    images: [
      {
        imgBase64:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        description: "Desc",
      },
      {
        imgBase64:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        description: "Desc",
      },
    ],
  },
  {
    agentId: 4,
    address: "Yangon",
    city: "Yangon",
    state: "Yangon",
    zipCode: "11051",
    propertyType: "string",
    price: "100",
    size: 0,
    numberOfBedrooms: 0,
    numberOfBathrooms: 0,
    yearBuilt: 0,
    description: "desc",
    availiablityType: "pending",
    minRentalPeriod: 2,
    images: [
      {
        imgBase64:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        description: "Desc",
      },
      {
        imgBase64:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        description: "Desc",
      },
      {
        imgBase64:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        description: "Desc",
      },
      {
        imgBase64:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        description: "Desc",
      },
      {
        imgBase64:
          "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
        description: "Desc",
      },
    ],
  },
];

const Properties = () => {
  const [open, setOpen] = useState(false);
  const [currentRecords, setCurrentRecords] = useState<ItemProps | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentItems = data.slice(startIndex, endIndex);

  const handlePageChange = (page: number, size: number) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  const handleCreate = () => {
    setCurrentRecords(null);
    setOpen((prev) => !prev);
  };

  const handleEdit = (data: ItemProps) => {
    setCurrentRecords(data);
    setOpen((prev) => !prev);
  };

  const handleDelete = (id: number) => {
    console.log("Delete", id);
  };

  const handleOnClose = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex justify-end pb-3">
        <Button type="primary" onClick={handleCreate}>
          Create Properties
        </Button>
      </div>
      <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((property) => (
          <PropertyCard
            key={property.agentId}
            item={property}
            onEdit={() => handleEdit(property)}
            onDelete={() => handleDelete(property.agentId)}
          />
        ))}
      </div>
      {/* <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={data.length}
        onChange={handlePageChange}
        className="mt-3"
      /> */}
      <PropertyDrawer
        data={currentRecords}
        onClose={handleOnClose}
        open={open}
      />
    </>
  );
};

export default Properties;
