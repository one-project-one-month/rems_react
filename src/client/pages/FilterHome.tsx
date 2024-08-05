import { ChangeEvent, useEffect, useState } from "react";
// import { TiDelete } from "react-icons/ti";
import "../style/priceRange.css";
import PriceRangeSlider from "../components/PriceRangeSlider";
// import CheckboxGroup from "../components/CheckboxGroup";
import HomeCard from "../components/PropertyCard";
import { useLocation } from "react-router";
import { Property } from "../Model/Property";
import axios from "axios";

const FilterHome = () => {
  const location = useLocation();
  const { state, city, propertyType } = location.state || {};
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [bedrooms, setBedrooms] = useState<number[]>([]);
  const [bathrooms, setBathrooms] = useState<number[]>([]);
  const [sizes, setSizes] = useState<number[]>([]);

  const [selectedBedrooms, setSelectedBedrooms] = useState(new Set());
  const [selectedBathrooms, setSelectedBathrooms] = useState(new Set());
  const [selectedSizes, setSelectedSizes] = useState(new Set());

  // Extract the filter criteria from location state
  const { state: filterCriteria } = location;

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const { data } = await axios.get<Property[]>(
          "http://localhost:3000/properties"
        );
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  const handleBedroomChange = (e) => {
    console.log(e.target.value);
    
    const value = e.target.id.split("-")[1];
    console.log(value);
    // setSelectedBedrooms(value)
    
    setSelectedBedrooms((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(value)) {
        newSet.delete(value);
      } else {
        newSet.add(value);
      }
      return newSet;
    });
  };

  const handleBathroomChange = (e) => {
    const value = e.target.id.split('-')[1];
    setSelectedBathrooms(prev => {
      const newSet = new Set(prev);
      if (newSet.has(value)) {
        newSet.delete(value);
      } else {
        newSet.add(value);
      }
      return newSet;
    });
  };

 

  const handleSizeChange = (e) => {
    const value = e.target.id.split('-')[1];
    setSelectedSizes(prev => {
      const newSet = new Set(prev);
      if (newSet.has(value)) {
        newSet.delete(value);
      } else {
        newSet.add(value);
      }
      return newSet;
    });
  };

  const applyFilters = (properties) => {
    return properties.filter(property => {
      const matchesBedrooms = selectedBedrooms.size === 0 || selectedBedrooms.has(property.numberOfBedrooms.toString());
      const matchesBathrooms = selectedBathrooms.size === 0 || selectedBathrooms.has(property.numberOfBathrooms.toString());
      const matchesSizes = selectedSizes.size === 0 || selectedSizes.has(property.size.toString());
      return matchesBedrooms && matchesBathrooms && matchesSizes;
    });
    
    
  };

  useEffect(() => {
    if (properties.length > 0) {
      const { state, city, propertyType } = filterCriteria;

      const initialFilteredProperties = properties.filter(
        (property) =>
          (state ? property.state_id === state : true) &&
          (city ? property.city_id === city : true) &&
          (propertyType ? property.propertyType === propertyType : true)
      );

      console.log(applyFilters(initialFilteredProperties));
      

      setFilteredProperties(applyFilters(initialFilteredProperties));
      console.log(filteredProperties);
      const bedrooms = [
        ...new Set(filteredProperties.map((el) => el.numberOfBedrooms)),
      ];
      const bathrooms = [
        ...new Set(filteredProperties.map((el) => el.numberOfBathrooms)),
      ];
      const sizes = [...new Set(filteredProperties.map((el) => el.size))];
      setBedrooms(bedrooms);
      setBathrooms(bathrooms);
      setSizes(sizes);
    }
  }, [properties, filterCriteria]);

  const [minPrice, setMinPrice] = useState<number>(0); // Initial minimum price
  const [maxPrice, setMaxPrice] = useState<number>(1000); // Initial maximum price

  const handleMinimumPriceChange = (price: number) => {
    setMinPrice(price);
  };

  const handleMaximumPriceChange = (price: number) => {
    setMaxPrice(price);
  };


 

  return (
    <div className="container mx-auto text-sm">
      <div className="grid grid-cols-12 gap-5 mt-16">
        <div className="col-span-3">
          <div className="shadow-md h-screen rounded-xl">
            <div className="px-6 py-4">
              <div className="border-b pb-5 border-primary">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-[16px] font-medium">Filter (4)</p>
                  <p className="text-red-600 underline cursor-pointer">
                    Clear All
                  </p>
                </div>
                <div className="flex items-center gap-2">
                {Array.from(selectedBedrooms).map((bedroom, index) => (
                    <button key={index} className="border border-primary rounded-full px-2 py-1 flex items-center gap-2">
                      Bedroom {bedroom}
                    </button>
                  ))}
                  {Array.from(selectedBathrooms).map((bathroom, index) => (
                    <button key={index} className="border border-primary rounded-full px-2 py-1 flex items-center gap-2">
                      Bathroom {bathroom}
                    </button>
                  ))}
                  {Array.from(selectedSizes).map((size, index) => (
                    <button key={index} className="border border-primary rounded-full px-2 py-1 flex items-center gap-2">
                      {size} SqFt
                    </button>
                  ))}
                 
                </div>
              </div>
              <div className="py-5 border-b border-primary">
                <div>
                  <p className="mb-4 text-[16px] font-medium">Bedroom</p>
                  <div className="grid grid-cols-2 gap-3">
                  {bedrooms.map((bedroom, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input type="checkbox" value={bedroom} onChange={handleBedroomChange} id={`bedroom-${bedroom}`} />
                        <label
                          htmlFor={`bedroom-${bedroom}`}
                          className="text-gray-700"
                        >
                          bedroom {bedroom}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="py-5 border-b border-primary">
                <div>
                  <p className="mb-4 text-[16px] font-medium">Bathroom</p>
                  <div className="grid grid-cols-2 gap-3">
                    {bathrooms.map((bathroom, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input type="checkbox" id={`bathroom-${bathroom}`} value={bathroom} onChange={handleBathroomChange} />
                        <label
                          htmlFor={`bathroom-${bathroom}`}
                          className="text-gray-700"
                        >
                          Bathroom {bathroom}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="py-5 border-b border-primary">
                <div>
                  <p className="mb-4 text-[16px] font-medium">Sizes</p>
                  <div className="grid grid-cols-2 gap-3">
                    {sizes.map((size, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <input type="checkbox" id={`size-${size}`} value={size} onChange={handleSizeChange} />
                        <label
                          htmlFor={`size-${size}`}
                          className="text-gray-700"
                        >
                          {size} <span className="font-medium">SqFt</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

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
          <div className="shadow-md rounded-xl mb-5">
            <div className="px-6 py-4 flex items-center justify-between">
              <p className="">
                "{filteredProperties.length}"{" "}
                <span className="ms-5 font-medium">{propertyType}</span>
              </p>
              <div>
                <div className="px-4">
                  <select
                    name="sort"
                    id="sort"
                    className="py-2 border rounded-sm outline-none px-4"
                  >
                    <option value="">Recommend</option>
                    <option value="price-low-high">
                      From Price Low To High
                    </option>
                    <option value="price-high-low">
                      From Price High To Low
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5 p-6">
              {filteredProperties.length > 0 ? (
                filteredProperties.map((property) => (
                  <HomeCard key={property.id} property={property} />
                ))
              ) : (
                <div className="col-span-4 text-center">No Properties Found</div>
              )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default FilterHome;
