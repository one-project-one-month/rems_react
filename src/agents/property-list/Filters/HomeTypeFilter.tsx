import { useAppSelector } from "../../../app/hook"
import { setHomeTypeFilter } from "../../agent-services/propertyFilterSearch"
import SimpleFilterDropDown from "../Dropdowns/SimpleFilterDropDown";

const HomeTypeFilter: React.FC = () => {

  const homeTypeOptions = ["All", "Houses", "Townhomes", "Multi-family", "Condominium", "Lands", "Apartments", "Manufactured", "Single Family Home"]

  const {homeType} = useAppSelector(state => state.agentPropertyFilters);

  return (
    <div className="w-40 h-23 flex flex-col items-center justify-center gap-2">
      <SimpleFilterDropDown 
       item="home type"
       options={homeTypeOptions}
       selectedOptions={homeType}
       onFilterChange={setHomeTypeFilter}
      />
      <p className="pt-2 font-bold">Select Property Type</p>
    </div>
  )
}

export default HomeTypeFilter