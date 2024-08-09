import { Select } from "antd";
import { useAppDispatch } from "../../../../app/filterSlices/hooks"

interface FilterDropdownProps {
  item: string;
  options: (string | number)[];
  selectedOptions: string | number;
  onFilterChange: (filter: any) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  item, 
  options, 
  selectedOptions, 
  onFilterChange
}) => {
  
  const dispatch = useAppDispatch();

  const handleChange = (selectedOptions: string | number) => {
    dispatch(onFilterChange(selectedOptions));
  };
  
  return (
    <div className="text-center">
      <p className="text-gray-500 ">Select {item}</p>
      <Select
       style={{width: 90}}
       onChange={handleChange}  
       value={selectedOptions}
       placeholder={`select ${item}`}
       options={options.map(option => (
        {
          label: `${option === 0 ? "Any" : option + "+"}`,
          value: option,
        }
       ))}
      />
    </div>
  )
}

export default FilterDropdown
