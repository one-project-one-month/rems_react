import React, { useEffect, useState, ChangeEvent, MouseEvent } from "react";
// import HomeGroup from "../components/PropertyGroup";
import axios from "axios";
import { useNavigate } from "react-router";
import { Property } from "../Model/Property";
import { Agent } from "../Model/Agent";
import { City } from "../Model/City";
import { State } from "../Model/State";
import PropertyGroup from "../components/PropertyGroup";

const Home: React.FC = () => {
  const [states, setStates] = useState<State[]>([]);
  const [properties, setProperties] = useState<Property[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [propertyTypes, _] = useState<string[]>([
    "All",
    "Condo",
    "Apartment",
    "House",
    "Office",
  ]);
  const [selectedState, setSelectedState] = useState<number | "">("");
  const [selectedCity, setSelectedCity] = useState<number | "">("");
  const [selectedPropertyType, setSelectedPropertyType] = useState<number | "">(
    ""
  );
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    fetchStates();
    fetchProperties();
    fetchAgents();
  }, []);

  useEffect(() => {
    if (selectedState) {
      fetchCities(selectedState);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  // Function to check if all fields are selected
  const checkButtonDisabled = () => {
    setButtonDisabled(!(selectedState && selectedCity && selectedPropertyType));
  };

  // Use effect to check button state when any selection changes
  useEffect(() => {
    checkButtonDisabled();
  }, [selectedState, selectedCity, selectedPropertyType]);

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

  const fetchAgents = async () => {
    try {
      const { data } = await axios.get<Agent[]>("http://localhost:3000/agents");
      setAgents(data);
    } catch (error) {
      console.error("Error fetching agents:", error);
    }
  };

  const fetchStates = async () => {
    try {
      const { data } = await axios.get<State[]>("http://localhost:3000/states");
      setStates(data);
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const fetchCities = async (stateId: number | "") => {
    try {
      const { data } = await axios.get<City[]>(
        `http://localhost:3000/cities?state_id=${stateId}`
      );
      setCities(data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const handleStateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(Number(e.target.value));
    setSelectedCity(""); // Reset city selection when state changes
    setSelectedPropertyType(""); // Reset property type selection when state changes
  };

  const handleCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(Number(e.target.value));
  };

  const handlePropertyTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedPropertyType(Number(e.target.value));
  };

  const handleFilter = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

    navigate("/user/filter", {
      state: {
        state:
          selectedState !== ""
            ? states.find((s) => s.id === selectedState)?.name
            : "",
        city:
          selectedCity !== ""
            ? cities.find((c) => c.id === selectedCity)?.name
            : "",
        propertyType:
          selectedPropertyType !== ""
            ? propertyTypes[selectedPropertyType]
            : "",
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
                        onChange={handleStateChange}
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
                        onChange={handleCityChange}
                        className="outline-none"
                        disabled={!selectedState}
                      >
                        <option value="">Select City</option>
                        {cities
                          .filter(
                            (city) => city.state_id === Number(selectedState)
                          )
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
                        onChange={handlePropertyTypeChange}
                        className="outline-none"
                        disabled={!selectedCity}
                      >
                        {propertyTypes.map((type, index) => (
                          <option key={index} value={index}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </form>
                <button
                  onClick={handleFilter}
                  disabled={buttonDisabled}
                  className="bg-orange-600 font-semibold col-span-2 text-white py-6 h-24 rounded-e-md"
                >
                  Find Properties
                </button>
              </div>
            </main>
          </div>

          <div className=" left-0 right-0 w-full max-w-[1600px] bg-white text-black">
            <PropertyGroup
              agents={agents}
              properties={properties}
              propertyTypes={propertyTypes}
            />
            <footer style={{ paddingLeft: "40px", paddingRight: "40px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #e5e7eb",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                <div>
                  <img
                    src="images/HDC long grey fonts.png"
                    alt="HD Contractor Logo"
                    style={{ width: "208px", alignItems: "center" }}
                  />
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "8px",
                      fontWeight: "600",
                      fontSize: "18px",
                    }}
                  >
                    HD CONTRACTOR
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    fontSize: "18px",
                    marginBottom: "25px",
                  }}
                >
                  <ul
                    style={{
                      display: "flex",
                      listStyle: "none",
                      padding: 0,
                      margin: 0,
                      gap: "40px",
                    }}
                  >
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Our Services</li>
                    <li>Our Projects</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p
                    style={{
                      color: "#eab308",
                      fontSize: "20px",
                      marginBottom: "12px",
                    }}
                  >
                    09456639939
                  </p>
                  <p style={{ color: "#1d4ed8", fontSize: "24px" }}>
                    enquiry@hdconstractor.co.nz
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                <p style={{ fontSize: "16px" }}>
                  Copyright 2019-2024 | All Rights Reserved | HD Contractor,
                  Website built By Appzgate
                </p>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.821 0-1.358.54-1.358 1.248 0 .694.52 1.248 1.327 1.248h.015zM12.306 8.213c-1.144 0-1.634.627-1.916 1.07v.03h-.013a5.29 5.29 0 0 1 .013-.03V6.169h-2.4c.03.675 0 7.225 0 7.225h2.4V10.3c0-.195.014-.39.072-.527.158-.39.518-.793 1.123-.793.793 0 1.111.597 1.111 1.472v4.153h2.4V9.99c0-2.031-1.083-2.978-2.524-2.978z" />
                  </svg>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
