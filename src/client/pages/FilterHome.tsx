import React, { ChangeEvent, useState } from "react";
import { TiDelete } from "react-icons/ti";
import "../style/priceRange.css";
import PriceRangeSlider from "../components/PriceRangeSlider";
import CheckboxGroup from "../components/CheckboxGroup";
import HomeCard from "../components/HomeCard";
import { useLocation } from "react-router";

const FilterHome = () => {
  const location = useLocation();
  const { state, city, propertyType } = location.state || {};
  console.log(state,city,propertyType);
  
  const [minPrice, setMinPrice] = useState(0); // Initial minimum price
  const [maxPrice, setMaxPrice] = useState(1000); // Initial maximum price
  const [formData, setFormData] = useState({
    bedrooms: [] as string[], // Initialize as empty array
    bathrooms: [] as string[],
    sizes: [] as string[],
  });

  const handleMinimumPriceChange = (price: number) => {
    setMinPrice(price);
    console.log("Minimum Price:", price); // To verify that the value is changing
  };

  const handleMaximumPriceChange = (price: number) => {
    setMaxPrice(price);
    console.log("Maximum Price:", price); // To verify that the value is changing
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, value: string) => {
    // const { name, checked } = e.target;
    // setFormData((prev) => ({
    //   ...prev,
    //   [name]: checked
    //     ? [...prev[name], value] // Add value if checked
    //     : prev[name].filter((v: string) => v !== value) // Remove value if unchecked
    // }));
  };

  const bedroomOptions = [
    { label: "Bedroom 1", value: "bedroom1" },
    { label: "Bedroom 2", value: "bedroom2" },
    { label: "Bedroom 3", value: "bedroom3" },
  ];

  const bathroomOptions = [
    { label: "Bathroom 1", value: "bathroom1" },
    { label: "Bathroom 2", value: "bathroom2" },
    { label: "Bathroom 3", value: "bathroom3" },
  ];

  const sizeOptions = [
    { label: "20 ' x 40 '", value: "20x40" },
    { label: "30 ' x 50 '", value: "30x50" },
    { label: "40 ' x 60 '", value: "40x60" },
  ];

  return (
    <>
      <div className="container mx-auto text-sm ">
        <div className="grid grid-cols-12 gap-5 mt-16 ">
          <div className="col-span-3">
            <div className=" shadow-md h-screen rounded-xl">
              <div className="px-6 py-4">
                <div className="border-b pb-5 border-primary">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-[16px] font-medium ">Filter (4)</p>
                    <p className="text-red-600 underline ">Clear All</p>
                  </div>
                  <div>
                    <button className="border border-primary rounded-full px-2 py-1 flex items-center gap-2">
                      bedroom 4 <TiDelete />
                    </button>
                  </div>
                </div>

                <CheckboxGroup
                  label="Number of Bedrooms"
                  name="bedrooms"
                  options={bedroomOptions}
                  selectedValues={formData.bedrooms}
                  onChange={handleChange}
                  optional={true}
                />
                <CheckboxGroup
                  label="Number of Bathrooms"
                  name="bathrooms"
                  options={bathroomOptions}
                  selectedValues={formData.bathrooms}
                  onChange={handleChange}
                  optional={false}
                />
                <CheckboxGroup
                  label="Size"
                  name="sizes"
                  options={sizeOptions}
                  selectedValues={formData.sizes}
                  onChange={handleChange}
                  optional={true}
                />

                <div className="py-5 border-b border-primary">
                  <div>
                    <p className="mb-4 text-[16px] font-medium">Price</p>
                    <PriceRangeSlider
                      minPrice={minPrice}
                      maxPrice={maxPrice}
                      onMinimumPriceSent={handleMinimumPriceChange}
                      onMaximumPriceSent={handleMaximumPriceChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-9">
            <div className=" shadow-md rounded-xl mb-5 " >
              <div className="px-6 py-4 flex items-center justify-between" >
                <p>9 property-type</p>
                <div>
                    <div className="px-4" >
                      <select name="" id="" className=" py-2 border rounded-sm outline-none px-4">
                        <option value="">Recommend</option>
                        <option value="">From Price High To Low</option>
                        <option value="">RFrom Price High To Low</option>
                      </select>
                    </div>
                </div>
              </div>
             
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3" >
                <HomeCard/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterHome;
