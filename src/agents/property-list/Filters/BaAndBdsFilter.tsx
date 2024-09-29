import FilterDropdown from '../Dropdowns/FilterDropdown';
import { useAppSelector } from '../../../app/hook';
import { 
  setBathRoomFilter,
  setBedRoomFilter 
} from '../../agent-services/propertyFilterSearch';

const BaAndBdsFilter = () => {
  const {bedRoomFilter, bathRoomFilter} = useAppSelector(state => state.agentPropertyFilters);

  const bedRoomsOptions = [0,1,2,3,4,5,6,7];
  const bathRoomsOptions = [0,1,2,3,4,5,6,7];
  return (
    <div className='w-45 h-auto rounded-full  '>
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
      <p className='mt-5 font-bold'> Select some values for bed rooms and bathrooms, you will get the exact value or above.</p>
    </div>
  )
}

export default BaAndBdsFilter