import { Empty, Pagination } from 'antd';
import {propertyData} from "./data-for-agent/propertyData"
import { useEffect, useMemo, useState } from 'react';
import { useAppSelector } from '../../app/hook';
import {setCityFilter} from '../agent-services/propertyFilterSearch';
import SingleCard from './SingleCard';
import Flyout from './Flyout';
import BaAndBdsFilter from './Filters/BaAndBdsFilter';
import SimpleFilterDropDown from './Dropdowns/SimpleFilterDropDown';
import PriceRangeFilter from './Filters/PriceRangeFilter';
import HomeTypeFilter from './Filters/HomeTypeFilter';
import DetailPage from "./DetailPage";
import { cityData } from '../property-crud/db';
import CityFilter from './Filters/CityFilter';

const itemsPerPage = 6;// Number of items per page

// function to convert large numbers into a more readable short form
export const formatNumber = (num: number) => {
  if (num >= 1_000_000_000) {
    return Math.floor(num / 1_000_000_000) + 'B';
  } else if (num >= 1_000_000) {
    return Math.floor(num / 1_000_000) + 'M';
  } else {
    return num;
  }
}

const AgentPropertyList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [modal, setModal] = useState<boolean>(false);

  const toggleModal = () => {
    setModal(!modal)
  }

  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const {
    cityFilter,
    bedRoomFilter,
    bathRoomFilter,
    minPrice,
    maxPrice,
    homeType
  } = useAppSelector(state => state.agentPropertyFilters);

  const city = cityData.map(city => city.TownshipName)
  
  const cityOptions = ['All', ...city];

  
  // Memoized filtered data for performance optimization
  const filteredData = useMemo(() => {
    return propertyData.filter(item => {
      return (
        (cityFilter === "All" || item.city.toLowerCase().includes(cityFilter.toLowerCase())) &&
        (bedRoomFilter === 0 || item.numberOfBedrooms >= bedRoomFilter) &&
        (bathRoomFilter === 0 || item.numberOfBathrooms >= bathRoomFilter) &&
        (
          (minPrice === null || item.price >= minPrice)
            &&
          (maxPrice === null || item.price <= maxPrice)  
        ) &&
        (homeType === "All" || item.availiablityType.toLowerCase().includes(homeType.toLowerCase()))
    )
    }); 
  }, [cityFilter, bedRoomFilter, bathRoomFilter, minPrice, maxPrice, homeType]);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };

  // Adjust the current page if it's out of range
  useEffect(() => {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1); // Reset to last available page or 1 if no data
    }
  }, [filteredData, currentPage, itemsPerPage]);

  // Scroll to the top whenever the page changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [currentPage]);

  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  return (
    <div className='p-0 z-[0]'>  
     {/* Dropdown and Filters */}
      <h1 className='text-center mb-5 mt-0 text-[1.3rem] text-lato font-bold'>Explore Some Market Values</h1>
      <div className='flex flex-wrap gap-5'>
        <Flyout FlyoutContent={CityFilter}>
          <span className='mr-3'>
            {cityFilter === 'All' ? "Select City" : cityFilter}
          </span>
        </Flyout>
        
        <Flyout FlyoutContent={BaAndBdsFilter}>
          <span className='mr-3 lg:mr-0 cursor-pointer'>
            Bas: {bathRoomFilter === 0 ? "Any" : bathRoomFilter + "+"}, 
            Bds: {bedRoomFilter === 0 ? "Any" : bedRoomFilter + "+"}
          </span>
        </Flyout>

        <Flyout FlyoutContent={PriceRangeFilter}>
          <span className='transition-all ease-in duration-200 mr-3'>
            {
              (minPrice !== null && maxPrice !== null) ?
              `Min: ${formatNumber(minPrice)}, Max: ${formatNumber(maxPrice)}` :
              "Price Range"
            } 
          </span>
        </Flyout>

        <Flyout FlyoutContent={HomeTypeFilter}>
          <span className='mr-3'>
            {homeType === "All" ? "Home Type" : homeType}
          </span>
        </Flyout>
      </div>
      
      {/* Cards List */}
      <div className='py-5 w-full grid grid-cols-2 gap-1'>
        
        {
          filteredData.length === 0 ? (
            <Empty style={{
              width: "100%",
              height: "50vh",
            }} />
          ) : (
            currentItems.map((item, index) => (
              <SingleCard 
               item={item}
               key={index}
               toggle={toggleModal}
              />
            ))
          )
        }

        {modal && <DetailPage toggle={toggleModal} />}
      </div>   

      <Pagination
       current={currentPage}
       pageSize={itemsPerPage}
       total={filteredData.length}
       onChange={handleChangePage}
      />
    </div>
  )
}

export default AgentPropertyList