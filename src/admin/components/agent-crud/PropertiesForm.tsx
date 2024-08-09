import {
  Button,
  ConfigProvider,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
} from "antd";
import { useEffect, useState } from "react";
import { ItemProps } from "./PropertyCard";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { cityData, stateData } from "../../../data/db";

interface IProps {
  onClose: () => void;
  initialValues: ItemProps | null;
}

interface ImageProps {
  imageBase64: string;
  description: string;
}

const PropertiesForm = ({ onClose, initialValues }: IProps) => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const { Option } = Select;

  const [item, setItem] = useState<ImageProps[]>([]);
  const [images, setImages] = useState<ImageListType[]>([]);
  const maxNumber = 69;

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  const onChange = (imageList: ImageListType) => {
    setImages(imageList as never[]);
  };

  const onFinish = () => {
    console.log("form", form.getFieldsValue());
    const formData = form.getFieldsValue();
    const image = images.map((img) => img.dataURL);
    const imageBase64 = image.toString();
    const imagesArray: ImageProps = {
      imageBase64,
      description: form.getFieldValue("description"),
    };
    setItem([...item, imagesArray]);

    const property = {
      ...formData,
      images: item,
    };
    console.log(property);
    setImages([]);
    onClose();
  };

  return (
    <ConfigProvider
      form={{
        requiredMark: (label, { required }) => (
          <>
            {label}
            {required && (
              <span style={{ color: "#ff4d4f", marginLeft: 4 }}>*</span>
            )}
          </>
        ),
      }}
    >
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        className="custom-form"
      >
        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true, message: "Please enter your address" }]}
        >
          <TextArea />
        </Form.Item>
        <div className="flex md:flex-row space-x-4">
          <Form.Item
            name="city"
            label="City"
            rules={[{ required: true, message: "Please enter your city" }]}
            className="flex-1"
          >
            <Select>
              {cityData.map((address) => (
                <Option key={address.TownshipId} value={address.TownshipName}>
                  {address.TownshipName}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="state"
            label="State"
            rules={[{ required: true, message: "Please enter your state" }]}
            className="flex-1"
          >
            <Select>
              {stateData.map((state) => (
                <Option key={state.StateId} value={state.StateName}>
                  {state.StateName}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <div className="flex md:flex-row space-x-4">
          <Form.Item
            name="zipCode"
            label="Zip Code"
            rules={[{ required: true, message: "Please enter your zip code" }]}
          >
            <InputNumber placeholder="Please enter your zip code" />
          </Form.Item>
          <Form.Item
            name="price"
            label="Price"
            rules={[{ required: true, message: "Please enter your price" }]}
          >
            <InputNumber placeholder="Please enter your price" />
          </Form.Item>
          <Form.Item
            name="size"
            label="Size"
            rules={[{ required: true, message: "Please enter size" }]}
          >
            <InputNumber placeholder="Please enter size" />
          </Form.Item>
        </div>

        <div className="flex md:flex-row space-x-4">
          <Form.Item
            name="numberOfBedrooms"
            label="Bedrooms"
            rules={[
              { required: true, message: "Please enter number of bedrooms" },
            ]}
          >
            <InputNumber placeholder="Please enter number of bedrooms" />
          </Form.Item>
          <Form.Item
            name="numberOfBathrooms"
            label="Bathrooms"
            rules={[
              { required: true, message: "Please enter number of bathrooms" },
            ]}
          >
            <InputNumber placeholder="Please enter number of bathrooms" />
          </Form.Item>
          <Form.Item
            name="yearBuilt"
            label="Year Built"
            rules={[
              { required: true, message: "Please enter number of year built" },
            ]}
          >
            <InputNumber placeholder="Please enter number of year built" />
          </Form.Item>
        </div>
        <Form.Item
          name="propertyType"
          label="Property Type"
          rules={[
            { required: true, message: "Please enter your property type" },
          ]}
        >
          <Input placeholder="Please enter your property type" />
        </Form.Item>
        <Form.Item
          name="availabilityType"
          label="Availability Type"
          rules={[
            { required: true, message: "Please enter availability type" },
          ]}
        >
          <Input placeholder="Please enter availability type" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            { required: true, message: "Please enter number of description" },
          ]}
        >
          <Input placeholder="Please enter number of description" />
        </Form.Item>
        <Form.Item
          name="minRentalPeriod"
          label="Min Rental Period"
          rules={[
            { required: true, message: "Please enter minimum renal period" },
          ]}
        >
          <Input placeholder="Please enter minimum renal period" />
        </Form.Item>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className="">
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                className="bg-blue-500 p-3 rounded mb-3"
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button onClick={onImageRemoveAll}>Remove all images</button>
              {imageList.map((image, index) => (
                <div key={index} className="">
                  <img src={image.dataURL} alt="" width="100" />
                  <div className="">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
        <Form.Item>
          <Space>
            <Button htmlType="submit" type="primary">
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </Space>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default PropertiesForm;
