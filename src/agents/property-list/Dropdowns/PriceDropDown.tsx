import { Select } from "antd";
import { useAppDispatch, useAppSelector } from "../../../app/hook"

interface FilterDropdownProps {
  item: string;
  options: {value: number | null; label: string}[]  ;
  selectedOptions:  number;
  onFilterChange: (filter: any) => void;  
}

const PriceDropDown: React.FC<FilterDropdownProps> = ({
  item, 
  options, 
  selectedOptions, 
  onFilterChange
}) => {

  const dispatch = useAppDispatch();
  const {minPrice, maxPrice} = useAppSelector(state => state.agentPropertyFilters)

  const handlePriceChange = (value: number) => {
    if (value === minPrice) {
      dispatch(onFilterChange(value));

      if (value > maxPrice) {
        dispatch(onFilterChange(null))
      }  
    }

    dispatch(onFilterChange(value));
  };
  
  return (
    <div className="text-center">
      <p className="pb-3 text-blue-500">Select {item}</p>
      <Select
       style={{width: 120}}
       onChange={handlePriceChange}  
       value={selectedOptions}
       placeholder={`select ${item}`}
       className="border-black border-[0.3px] rounded-md"
       options={
        options.map(option => (
          {
            label: `${option.label === "Any" ? "Any" : option.label }`,
            value:  option.value,
          }
       )).filter(option => selectedOptions === maxPrice
          ? 
        (option.value !== null ? option.value >= minPrice : option) 
          : 
        option)}
      />
    </div>
  )
}

export default PriceDropDown;