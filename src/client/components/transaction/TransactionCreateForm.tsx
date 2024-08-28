import { useState } from "react";
import { useCreateTransactionMutation } from "../../../services/client/api/transactionApi";

interface Props {
  id: string;
}

const TransactionCreateForm = ({ id }: Props) => {
  const [createTransaction, { isLoading }] = useCreateTransactionMutation();

  const date = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const day = String(date.getDate()).padStart(2, '0');

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; 
  
  const formattedDate = `${year}-${month}-${day} ${hours}:${minutes} ${ampm}`;
  
  const initialInput = {
    client: "",
    salePrice: 0,
    commission: 0,
    status: "buy",
  };

  const [formData, setFormData] = useState(initialInput);

  const handleChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTransaction = {
        propertyId: Number(id),
        clientId: 3,
        transactionDate: formattedDate,
        salePrice: Number(formData.salePrice),
        commission: Number(formData.commission),
        status: formData.status,
    };
    

    try {
      const response = await createTransaction(newTransaction);
      console.log("Transaction created successfully:", response);
    } catch (error) {
      console.error("Failed to create transaction:", error);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <form
        onSubmit={handleSubmitHandler}
        className="bg-white shadow-md border w-full p-6 space-y-4 rounded-lg"
      >
        <div className="flex flex-col space-y-2 text-gray-600">
          <label className="font-semibold ">Contact Name</label>
          <input
            name="client"
            onChange={handleChangeHandler}
            className="p-3 rounded-md bg-[#F7F7F7] outline-none focus:border focus:border-blue-500"
            type="text"
            placeholder="Emily Fleur"
          />
        </div>
        <div className="flex flex-col space-y-2 text-gray-600">
          <label className="font-semibold ">Contact Phone</label>
          <input
            className="p-3 rounded-md bg-[#F7F7F7] outline-none focus:border focus:border-blue-500"
            type="tel"
            placeholder="09********"
          />
        </div>
        <div className="flex flex-col space-y-2 text-gray-600">
          <label className="font-semibold ">Transaction Type</label>
          <select
            name="status"
            onChange={handleChangeHandler}
            className="ps-3 pe-10 bg-[#F7F7F7] py-3 rounded-md appearance-none outline-none focus:border focus:border-blue-500"
          >
            <option value="">Choose a transaction type</option>
            <option value="Rent">Rent</option>
            <option value="Buy">Buy</option>
            <option value="Sell">Sell</option>
          </select>
        </div>
        <div className="flex flex-col space-y-2 text-gray-600">
          <label className="font-semibold ">Transaction Amount</label>
          <input
            name="salePrice"
            onChange={handleChangeHandler}
            className="p-3 rounded-md bg-[#F7F7F7] outline-none focus:border focus:border-blue-500"
            type="number"
            placeholder="10,*******"
          />
        </div>
        <div className="flex flex-col text-gray-600">
          <label className="font-semibold pb-2">Commission Fee</label>
          <input
            name="commission"
            onChange={handleChangeHandler}
            className="p-3 rounded-md mb-6 bg-[#F7F7F7] outline-none focus:border focus:border-blue-500"
            type="number"
            placeholder="10,*******"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-3 w-full rounded-md font-semibold"
          disabled={isLoading}
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default TransactionCreateForm;
