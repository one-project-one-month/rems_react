import { Button, Form, Input, message, Select } from "antd";
import { FormInstance } from "antd/lib";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useCreateTransactionMutation } from "../../../services/client/api/transactionApi";
import { clientId } from "../../../services/client/features/idSlice";

const { Option } = Select;

interface Props {
  id?: string;
}

const TransactionCreateForm = ({ id }: Props) => {
  const [createTransaction, { isLoading }] = useCreateTransactionMutation();
  const formRef = useRef<FormInstance>(null);
  const client = useSelector(clientId)

  const handleSubmitHandler = async (values: any) => {
    const newTransaction = {
      propertyId: Number(id),
      clientId: client,
      transactionDate: new Date().toISOString(),
      salePrice: Number(values.salePrice),
      commission: Number(values.commission),
      status: values.status,
    };

    try {
      await createTransaction(newTransaction)
        .unwrap()
        .then(() => {
          message.success("Transaction created successfully")
          formRef.current?.resetFields()
        })
        .catch((error) => console.error('rejected', error));
    } catch (error) {
      console.error("Failed to create transaction:", error);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <Form
        ref={formRef}
        onFinish={handleSubmitHandler}
        layout="vertical"
        className="bg-white shadow-md border w-full p-6 space-y-4 rounded-lg">

        <Form.Item label="Contact Name" name="client" rules={[{ required: true }]}
        >
          <Input
            placeholder="Emily Fleur"
          />
        </Form.Item>

        <Form.Item label="Contact Phone" name="phone" rules={[{ required: true }]}>
          <Input
            type="tel"
            placeholder="09********"
          />
        </Form.Item>

        <Form.Item label="Transaction Type" name="status" rules={[{ required: true }]}
        >
          <Select
            placeholder="Choose a transaction type"
          >
            <Option value="Rent">Rent</Option>
            <Option value="Buy">Buy</Option>
            <Option value="Sell">Sell</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Transaction Amount" name="salePrice" rules={[{ required: true }]}
        >
          <Input
            type="number"
            placeholder="10,*******"
          />
        </Form.Item>

        <Form.Item label="Commission Fee" name="commission" rules={[{ required: true }]}
        >
          <Input
            type="number"
            placeholder="10,*******"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isLoading}
            className="w-full"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TransactionCreateForm;
