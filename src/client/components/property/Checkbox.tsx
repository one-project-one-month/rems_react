import React, { ChangeEvent } from 'react';

interface CheckboxOption {
    label: string;
    value: string;
  }
  
  interface CheckBoxProps {
    name: string;
    index: number;
    checked: boolean;
    option: CheckboxOption;
    onChange: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
    selectedValues: string[];
  }


const CheckBox: React.FC<CheckBoxProps> = ({
    name,
    index,
    checked,
    option,
    onChange,
    selectedValues
  }) => {
  return (
    <div className="flex items-center gap-2">
        <input type="checkbox" name={name} id={`${name}-${index}`} value={option.value} onChange={(e) => onChange(e, option.value)} checked={selectedValues.includes(option.value)}  />
        <label htmlFor={`${name}-${index}`} className="text-gray-700">
         {option.label}
      </label>
    </div>
  );
};

export default CheckBox;


