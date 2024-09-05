import { 
  setMinPriceFilter, 
  setMaxPriceFilter 
} from '../../agent-services/propertyFilterSearch'
import { useAppSelector } from '../../../app/hook'
import PriceDropDown from '../Dropdowns/PriceDropDown'

const PriceRangeFilter: React.FC = () => {

  const {minPrice, maxPrice} = useAppSelector(state => state.agentPropertyFilters)

  const priceOptions = [
    {value: null, label: "Any"},
    {value: 90000000, label: "90M"},
    {value: 100000000, label: "100M"},
    {value: 200000000, label: "200M"},
    {value: 300000000, label: "300M"},
    {value: 400000000, label: "400M"},
    {value: 500000000, label: "500M"},
    {value: 600000000, label: "600M"},
    {value: 700000000, label: "700M"},
    {value: 800000000, label: "800M"},
    {value: 900000000, label: "900M"},
    {value: 1000000000, label: "1B"},
    {value: 2000000000, label: "2B"},
    {value: 3000000000, label: "3B"},
    {value: 4000000000, label: "4B"},
    {value: 5000000000, label: "5B"},
    {value: 6000000000, label: "6B"},
    {value: 7000000000, label: "7B"},
    {value: 8000000000, label: "8B"},
    {value: 9000000000, label: "9B"},
    {value: 10000000000, label: "10B"},
    {value: 11000000000, label: "11B"},
    {value: 12000000000, label: "12B"},
    {value: 13000000000, label: "13B"},
    {value: 14000000000, label: "14B"},
    {value: 15000000000, label: "15B"},
  ]
  return (
    <div className='w-[15.45rem] h-27 text-center'>
      <div className='flex gap-5'>
        <PriceDropDown 
        item={"min"} 
        options={priceOptions} 
        onFilterChange={setMinPriceFilter} 
        selectedOptions={minPrice}
        />
        <PriceDropDown
        item={"max"} 
        options={priceOptions} 
        onFilterChange={setMaxPriceFilter} 
        selectedOptions={maxPrice}
        />
      </div>
      <p className='pt-5 font-bold'>Please, select some values of minimum price and maximum price</p>
    </div>
  )
}

export default PriceRangeFilter