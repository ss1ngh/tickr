'use client'

import { Controller } from 'react-hook-form';

const SelectField = ({
  name,
  label,
  placeholder,
  options,
  control,
  error,
  required = false,
}: SelectFieldProps) => (
  <div>
    <label
      htmlFor={name}
      className="block text-xs font-medium text-neutral-300 mb-1.5"
    >
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>

    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <select
          id={name}
          {...field}
          className="w-full px-3 py-2 text-sm bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none focus:border-transparent transition-all appearance-none cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: 'right 0.5rem center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1.5em 1.5em',
            paddingRight: '2.5rem',
          }}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    />

    {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
  </div>
);

export default SelectField;
