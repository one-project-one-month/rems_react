import { Empty, Pagination } from 'antd';
import {propertyData} from "./data-for-agent/propertyData"
import { useState } from 'react';
import { useAppSelector } from '../../../app/filterSlices/hooks';
import {setCityFilter} from '../../../app/filterSlices/filtersSlice';
import SingleCard from './SingleCard';
import Flyout from './Flyout';
import BaAndBdsFilter from './Filters/BaAndBdsFilter';
import SimpleFilterDropDown from './Dropdowns/SimpleFilterDropDown';
import PriceRangeFilter from './Filters/PriceRangeFilter';
import HomeTypeFilter from './Filters/HomeTypeFilter';
import DetailPage from "./DetailPage";

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

const PropertyList: React.FC = () => {
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
  } = useAppSelector(state => state.filters)
  
  const cityOptions = ['All', 'Yangon', 'Mandalay', 'Bago', 'Mawlamyine', 'Pyay', 'Than Twal'];

  const handleChangePage = (page: number) => {
    setCurrentPage(page)
  }

  const filterdData = propertyData.filter(item => {
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

  const currentItems = filterdData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  
  return (
    <div className='p-0 z-[0]'>  
     {/* Dropdown and Filters */}
      <div className='flex flex-wrap gap-5'>
        <SimpleFilterDropDown 
         item="city"
         options={cityOptions} 
         selectedOptions={cityFilter} 
         onFilterChange={setCityFilter} 
        />
        
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
          <span className='mr-3'>Home Type: {homeType}</span>
        </Flyout>
      </div>
      
      {/* Cards List */}
      <div className='py-5 w-full grid grid-cols-3 gap-3'>
        {
          filterdData.length === 0 ? (
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
       total={filterdData.length}
       onChange={handleChangePage}
      />
    </div>
  )
}

export default PropertyList
