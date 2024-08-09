import { useAppSelector } from "../../../../app/filterSlices/hooks"
import { setHomeTypeFilter } from "../../../../app/filterSlices/filtersSlice"
import SimpleFilterDropDown from "../Dropdowns/SimpleFilterDropDown";

const HomeTypeFilter: React.FC = () => {

  const homeTypeOptions = ["All", "Houses", "Townhomes", "Multi-family", "Condos", "Lands", "Apartments", "Manufactured"]

  const {homeType} = useAppSelector(state => state.filters);

  return (
    <div className="w-40 h-23 flex flex-col items-center justify-center gap-2">
      <SimpleFilterDropDown 
       item="home type"
       options={homeTypeOptions}
       selectedOptions={homeType}
       onFilterChange={setHomeTypeFilter}
      />
      <p className="pt-2">Select Property Type</p>
    </div>
  )
}

export default HomeTypeFilter
