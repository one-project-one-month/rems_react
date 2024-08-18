import React, { ChangeEvent } from "react";
import CheckBox from "./Checkbox";

// Define types for the props
interface CheckboxOption {
  label: string;
  value: string;
}

interface CheckboxGroupProps {
  label: string;
  name: string;
  options: CheckboxOption[];
  selectedValues: string[]; // Update to array of strings
  error?: string;
  optional?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>, value: string) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  name,
  options,
  selectedValues,
  checked,
  optional = false,
  onChange,
}) => {
  return (
    <div className="py-5 border-b border-primary">
      <div>
        <p className="mb-4 text-[16px] font-medium">
          {label}
          {optional && <span className="text-red-600"> *</span>}
        </p>

        {options.map((option, index) => (
          <CheckBox
            key={index}
            name={name}
            index={index}
            option={option}
            selectedValues={selectedValues}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
