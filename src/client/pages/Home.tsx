import React, { useEffect, useState } from "react";
import HomeGroup from "../components/HomeGroup";
import axios from "axios";
import { useNavigate } from "react-router";
import { Property } from "../Model/Property";

const Home: React.FC = () => {
  const [states, setStates] = useState([]);
  const [properties, setProperties] = useState<Property[]>([]);
  const [cities, setCities] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState<string[]>([
    "All",
    "Condo",
    "Apartment",
    "House",
    "Office",
  ]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    fetchStates();
    fetchProperties();
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetchCities(selectedState);
    } else {
      setCities([]);
    }
  }, [selectedState, selectedPropertyType]);

  const fetchProperties = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/properties");
      console.log(data);

      setProperties(data);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchStates = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/states");
      setStates(data);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchCities = async (selectedState) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/cities?state_id=${selectedState}`
      );
      setCities(response.data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleState = (e) => {
    setSelectedState(e.target.value);
  };

  const handleFilter = () => {
    navigate("/user/filter", {
      state: {
        state: selectedState,
        city: selectedCity,
        propertyType: selectedPropertyType,
      },
    });
  };
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-orange-50">
      {/* Fixed Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWV8ZW58MHx8MHx8fDA%3D)",
        }}
      ></div>

      {/* Black Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-30 z-10"></div>

      {/* Scrollable Content */}
      <div className="relative z-20 w-full pt-20 text-white">
        <div className="w-full mx-auto">
          <div className="h-screen mt-20">
            <header className="text-center mb-8">
              <h1 className="text-7xl font-bold mb-20">Find Your Dream Home</h1>
              <p className="text-2xl">
                We are a real estate agency that will help you <br /> find the
                best residence you dream of, let’s discuss your dream house?
              </p>
            </header>

            <main>
              <div>
                <ul className="text-black flex items-center justify-center gap-5 mb-5">
                  <li className="bg-white px-6 py-4 text-xl font-semibold rounded-md">
                    For Rent
                  </li>
                  <li className="bg-white px-6 py-4 text-xl font-semibold rounded-md">
                    For Sale
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-12">
                <form
                  action=""
                  className="bg-white col-span-10 text-black rounded-s-md h-24 py-6"
                >
                  <div className="grid grid-cols-3">
                    <div className="flex flex-col border-r px-4">
                      <label htmlFor="state" className="text-sm mb-2">
                        State
                      </label>
                      <select
                        id="state"
                        value={selectedState}
                        onChange={handleState}
                        className="outline-none"
                      >
                        <option value="">Select State</option>
                        {states.map((state) => (
                          <option key={state.id} value={state.id}>
                            {state.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex flex-col border-r px-4">
                      <label htmlFor="city" className="text-sm mb-2">
                        City
                      </label>
                      <select
                        id="city"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="outline-none"
                      >
                        <option value="">Select City</option>
                        {cities
                          .filter(
                            (city) => city.state_id === Number(selectedState)
                          ) // Convert selectedState to number
                          .map((city) => (
                            <option key={city.id} value={city.id}>
                              {city.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="flex flex-col border-r px-4">
                      <label htmlFor="type" className="text-sm mb-2">
                        Type
                      </label>
                      <select
                        id="type"
                        value={selectedPropertyType}
                        onChange={(e) =>
                          setSelectedPropertyType(e.target.value)
                        }
                        className="outline-none"
                      >
                        {propertyTypes.map((el, index) => (
                          <option key={index} value={index}>
                            {el}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </form>
                <button
                  onClick={handleFilter}
                  className="bg-orange-600 font-semibold col-span-2 text-white py-6 h-24 rounded-e-md"
                >
                  Find Properties
                </button>
              </div>
            </main>
          </div>

          <div className="h-[2000px] left-0 right-0 w-full max-w-[1600px] bg-white text-black">
          <HomeGroup properties={properties} propertyTypes={propertyTypes} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
