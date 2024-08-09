import { Select } from "antd";
import { useAppDispatch } from "../../../../app/filterSlices/hooks"

interface FilterDropdownProps {
  item: string;
  options: (string | number)[]  ;
  selectedOptions: string | number;
  onFilterChange: (filter: any) => void;
}

const SimpleFilterDropDown: React.FC<FilterDropdownProps> = ({
  item, 
  options, 
  selectedOptions, 
  onFilterChange, 
}) => {
  
  const dispatch = useAppDispatch();

  const handleChange = (selectedOptions: string | number) => {
    dispatch(onFilterChange(selectedOptions));
  };
  
  return (
    <>
      <Select
       style={{width: 120}}
       onChange={handleChange}  
       value={selectedOptions}
       placeholder={`select ${item}`}
       className="border-black border-[0.3px] rounded-md"
       options={options.map(option => (
        {
          label: option,
          value: option,
        }
       ))}
      />
    </>
  )
}

export default SimpleFilterDropDown;