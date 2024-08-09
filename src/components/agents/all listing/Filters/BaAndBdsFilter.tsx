import FilterDropdown from '../Dropdowns/FilterDropdown';
import { useAppSelector } from '../../../../app/filterSlices/hooks';
import { 
  setBathRoomFilter,
  setBedRoomFilter 
} from '../../../../app/filterSlices/filtersSlice';

const BaAndBdsFilter = () => {
  const {bedRoomFilter, bathRoomFilter} = useAppSelector(state => state.filters);

  const bedRoomsOptions = [0,1,2,3,4,5,6,7];
  const bathRoomsOptions = [0,1,2,3,4,5,6,7];
  return (
    <div className='w-45 h-[10rem] rounded-full  '>
      <div className='flex gap-2'>
        <FilterDropdown
         item="bathroom" 
         options={bathRoomsOptions} 
         selectedOptions={bathRoomFilter}
         onFilterChange={setBathRoomFilter}   
        />

        <FilterDropdown
          item="bedroom" 
          options={bedRoomsOptions} 
          selectedOptions={bedRoomFilter}
          onFilterChange={setBedRoomFilter}    
        />
      </div>
      <p className='mt-5'> Select some values for bed rooms and bathrooms, you will get the exact value or above.</p>
    </div>
  )
}

export default BaAndBdsFilter
