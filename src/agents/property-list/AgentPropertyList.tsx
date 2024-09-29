import { Empty, Pagination } from 'antd';
import { useEffect, useMemo, useState } from 'react';
import { useAppSelector } from '../../app/hook';
import SingleCard from './SingleCard';
import Flyout from './Flyout';
import BaAndBdsFilter from './Filters/BaAndBdsFilter';
import PriceRangeFilter from './Filters/PriceRangeFilter';
import HomeTypeFilter from './Filters/HomeTypeFilter';
import DetailPage from './DetailPage';
import CityFilter from './Filters/CityFilter';
import { useGetPropertiesQuery } from '../../services/agent/api/propertyApiSlice';
import { LoadingOutlined } from '@ant-design/icons';

const itemsPerPage = 6;

export const formatNumber = (num: number) => {
  if (num >= 1_000_000_000) return Math.floor(num / 1_000_000_000) + 'B';
  if (num >= 1_000_000) return Math.floor(num / 1_000_000) + 'M';
  return num;
};

const AgentPropertyList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  const { data, error, isLoading } = useGetPropertiesQuery({ 
    page: 1, 
    limit: 100,
    city: ""
  }) ;

  if (modal) {
    document.body.classList.add('active-modal');
  } else {
    document.body.classList.remove('active-modal');
  }

  const { cityFilter, bedRoomFilter, bathRoomFilter, minPrice, maxPrice, homeType } = useAppSelector(
    (state) => state.agentPropertyFilters
  );


  const filteredData = useMemo(() => {
    if (!data?.data.properties) return []; 
    return data?.data.properties?.filter((item) => {
      return (
        (cityFilter === "All" || item.property.city.toLowerCase().includes(cityFilter.toLowerCase())) &&
        (bedRoomFilter === 0 || item.property.numberOfBedrooms >= bedRoomFilter) &&
        (bathRoomFilter === 0 || item.property.numberOfBathrooms >= bathRoomFilter) &&
        (
          (minPrice === 0 || item.property.price >= minPrice)
            &&
          (maxPrice === 0 || item.property.price <= maxPrice) 
        ) &&
        (homeType === "All" || item.property.propertyType.toLowerCase().includes(homeType.toLowerCase()))
      );
    });
  }, [cityFilter, bedRoomFilter, bathRoomFilter, minPrice, maxPrice, homeType, data]);

  const handleChangePage = (page: number) => setCurrentPage(page);

  useEffect(() => {
    const totalPages = Math.ceil(filteredData?.length / itemsPerPage);
    if (currentPage > totalPages) {
      setCurrentPage(totalPages || 1);
    }
  }, [filteredData, currentPage, itemsPerPage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const currentItems = filteredData?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="p-5 z-[0] w-[95%] mx-auto">
      <h1 className="text-center mb-5 mt-0 text-[1.3rem] text-lato font-bold">Explore Some Market Values</h1>
      <div className="flex flex-wrap gap-5">
        <Flyout FlyoutContent={CityFilter}>
          <span className="mr-3">{cityFilter === 'All' ? "Select City" : cityFilter}</span>
        </Flyout>
        <Flyout FlyoutContent={BaAndBdsFilter}>
          <span className="mr-3 lg:mr-0 cursor-pointer">
            Bas: {bathRoomFilter === 0 ? "Any" : bathRoomFilter + "+"}, Bds: {bedRoomFilter === 0 ? "Any" : bedRoomFilter + "+"}
          </span>
        </Flyout>
        <Flyout FlyoutContent={PriceRangeFilter}>
          <span className="transition-all ease-in duration-200 mr-3">
            {(minPrice !== 0 && maxPrice !== 0) ? `Min: ${formatNumber(minPrice)}, Max: ${formatNumber(maxPrice)}` : "Price Range"}
          </span>
        </Flyout>
        <Flyout FlyoutContent={HomeTypeFilter}>
          <span className="mr-3">{homeType === "All" ? "Home Type" : homeType}</span>
        </Flyout>
      </div>

      <div className="py-5 w-full grid grid-cols-2 gap-1">
        {isLoading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <LoadingOutlined className="text-4xl" spin />
          </div>
        ) : error ? (
          <div style={{ textAlign: 'center', color: 'red' }}>Error</div>
        ) : filteredData?.length === 0 ? (
          <Empty style={{ 
            width: "100%", 
            height: "50vh" 
          }} 
          />
        ) : (
          currentItems?.map((item, index) => 
          <SingleCard 
            item={item} 
            key={index} 
            toggle={toggleModal} />)
        )}

        {modal && <DetailPage toggle={toggleModal} />}
      </div>

      <Pagination current={currentPage} pageSize={itemsPerPage} total={filteredData?.length} onChange={handleChangePage} />
    </div>
  );
};

export default AgentPropertyList;