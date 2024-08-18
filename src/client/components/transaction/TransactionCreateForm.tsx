const TransactionCreateForm = () => {
  return (
    <div className="flex justify-center mt-4">
       <form className="bg-[#F7F7F7] w-[450px] p-6 space-y-4 rounded-lg">
            <div className="flex flex-col space-y-2 text-gray-600">
                <label className="font-semibold ">Contact Name</label>
                <input className="p-3 rounded-md outline-none focus:border focus:border-blue-500" type="text" placeholder="Emily Fleur"/>
            </div>
            <div className="flex flex-col space-y-2 text-gray-600">
                <label className="font-semibold ">Contact Phone</label>
                <input className="p-3 rounded-md outline-none focus:border focus:border-blue-500" type="tel" placeholder="09********"/>
            </div> 
            <div className="flex flex-col space-y-2 text-gray-600">
                <label className="font-semibold ">Transaction Type</label>
                <select className="ps-3 pe-10 py-3 rounded-md appearance-none	 outline-none focus:border focus:border-blue-500">
                    <option selected>Choose a transaction type </option>
                    <option value="Rent">Rent</option>
                    <option value="Buy">Buy</option>
                    <option value="Sell">Sell</option>
                </select>
            </div>
            <div className="flex flex-col space-y-2 text-gray-600">
                <label className="font-semibold ">Transaction Amount</label>
                <input className="p-3 rounded-md outline-none focus:border focus:border-blue-500" type="tel" placeholder="10,*******"/>
            </div>
            <div className="flex flex-col text-gray-600">
                <label className="font-semibold pb-2">Commission Fee</label>
                <input className="p-3 rounded-md mb-6 outline-none focus:border focus:border-blue-500" type="tel" placeholder="10,*******"/>
            </div>

            <button className="bg-blue-500 text-white p-3 w-full rounded-md font-semibold">Submit</button>
       </form>
    </div>
  )
}

export default TransactionCreateForm
