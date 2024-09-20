import React, { ChangeEvent, useState } from 'react';

type InputFieldProps = {
  label?: string;
  type: 'text' | 'checkbox' | 'multiselect'; // Input types
  value?: string | string[] | boolean;       // Value based on input type
  options?: string[];                        // For multiselect dropdown
  onChange: (value: string | string[] | boolean) => void; // Change handler
  style: string,
  disabled:boolean,
  placeholder?:string

};

const InputField = (props:InputFieldProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (props.type === 'text') {
      props.onChange(e.currentTarget.value);
    } else if (props.type === 'checkbox') {
      props.onChange(!props.value as boolean);
    }
  };

  const handleMultiSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    setSelectedOptions(selected);
    props.onChange(selected);
  };

  return (
    <div className="w-full flex flex-col gap-2 ">
        

      {props.type === 'text' && (
        <input
          type="text"
          placeholder={props.placeholder || ''}
          value={props.value as string || ''}
          onChange={handleInputChange}
          className={props.style}
          disabled={props.disabled}
        />
      )}

      {props.type === 'checkbox' && (
        <div className="flex flex-row gap-2 items-center">  
        <input
          type="checkbox"
          checked={props.value as boolean || false}
          onChange={handleInputChange}
          className={props.style}
          disabled={props.disabled}
        />
        {props.label &&
      <label className="text-md font-medium">{props.label}</label>}
        </div>
      )}

      {props.type === 'multiselect' && (
        <select
          multiple
          value={selectedOptions}
          onChange={handleMultiSelectChange}
          disabled={props.disabled}
          className="border border-gray-300 rounded p-2 h-24"
        >
          {props.options?.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      
    </div>
  );
};

export default InputField;
