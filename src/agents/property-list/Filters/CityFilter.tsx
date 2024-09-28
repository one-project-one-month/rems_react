import React from 'react'
import SimpleFilterDropDown from '../Dropdowns/SimpleFilterDropDown'
import { useAppSelector } from '../../../app/hook';
import { cityData } from '../../property-crud/db';
import { setCityFilter } from '../../agent-services/propertyFilterSearch';

const CityFilter:React.FC = () => {
 
  const city = cityData.map(city => city.TownshipName)
  
  const cityOptions = ["All", ...city];

  const {cityFilter} = useAppSelector(state => state.agentPropertyFilters)

  return (
    <div className='w-30 h-23 flex flex-col items-center justify-center gap-2'>
      <p className='mb-2 font-bold'>Select Place</p>
      <SimpleFilterDropDown
        item="city"
        options={cityOptions}
        selectedOptions={cityFilter}
        onFilterChange={setCityFilter}
      />
    </div>
  )
}

export default CityFilter
