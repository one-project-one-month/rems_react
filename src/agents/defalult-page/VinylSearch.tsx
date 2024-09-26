import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { cityData } from "../property-crud/db";
import { setCityFilter } from "../agent-services/propertyFilterSearch";
import { useAppDispatch } from "../../app/hook";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const VinylSearch: React.FC = () => {
  const navigate = useNavigate();

  const city = cityData.map(city => city.TownshipName);

  const [searchTerm, setSearchTerm] = useState("");
  const [options, setOptions] = useState<string[]>([...city]);
  const [filteredOptions, setFilteredOptions] = useState<string[] | []>([]);

  const dispatch = useAppDispatch();

  const handleSearch = () => {
    if (!searchTerm) {
      toast.error("Please type something in the search bar");
      return;
    }
    dispatch(setCityFilter(searchTerm));
    navigate("/agent/property-list");
  };

  // function for when typing the search filtered the dropdown
  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value) {
      const filtered = options.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]);
    }
  };

  const handleOptionClick = (option: string) => {
    setSearchTerm(option);
    setFilteredOptions([]); // Clear options after selection
  };

  return (
    <div
      className={`background-pic bg-[url("/images/agent-estate.jpg")] pb-5 bg-cover object-center bg-no-repeat font-bold w-full text-2xl h-[400px] md:h-[500px] lg:h-[600px] `}
    >
      <div className="pt-[8rem] sm:pt-[10rem] md:pt-[12rem] lg:pt-[15rem] px-4 sm:px-8 md:px-16 lg:px-20 space-y-6 md:space-y-10">
        <h1 className="text-white text-[3rem] md:text-start text-center sm:text-[3rem] md:text-[4rem] lg:text-[5rem] flex flex-col gap-[1rem] md:gap-[2rem] lg:gap-[3rem]">
          <span>Agents.Tours.</span>
          <span>Sells.Homes</span>
        </h1>
        <div className="relative w-full sm:w-[80%] md:w-[60%] lg:w-[40%]">
          <input
            value={searchTerm}
            onChange={handleInputChange}
            className="text-[1rem] w-full rounded-md p-3 hover:border-[0.5px] hover:border-blue-500 focus:outline-blue-500 transition-all ease-in-out duration-75 placeholder:text-[0.8rem] md:placeholder:text-[1rem]"
            placeholder="Enter Township You Want To Search"
          />
          <button
            className="py-4 px-5 hover:bg-blue-500 rounded-r-md absolute hover:border-blue-500 focus:outline-blue-500 active:bg-blue-700 right-0 top-0 cursor-pointer transition-all ease-in-out duration-300 hover:text-white"
            onClick={handleSearch}
          >
            <FaSearch className=" cursor-pointer" />
          </button>
          {filteredOptions.length > 0 && (
            <ul className="absolute p-2 z-10 bg-white shadow-lg w-full rounded-md mt-4 max-h-60 overflow-auto">
              {filteredOptions.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="cursor-pointer text-[1rem] p-2 hover:bg-blue-500 hover:text-white"
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default VinylSearch;