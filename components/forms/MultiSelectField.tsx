'use client'

import { Controller } from 'react-hook-form';
import { useState, useRef, useEffect } from 'react';

type MultiSelectFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  options: readonly Option[];
  control: any;
  error?: any;
  required?: boolean;
  maxSelections?: number;
};

const MultiSelectField = ({
  name,
  label,
  placeholder,
  options,
  control,
  error,
  required = false,
  maxSelections = 5,
}: MultiSelectFieldProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-medium text-neutral-300 mb-1.5"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
        <span className="text-neutral-500 text-xs ml-1.5">(Select 1-{maxSelections})</span>
      </label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          const selectedValues = field.value || [];
          const selectedLabels = options
            .filter(opt => selectedValues.includes(opt.value))
            .map(opt => opt.label);

          const handleToggle = (value: string) => {
            const newValues = selectedValues.includes(value)
              ? selectedValues.filter((v: string) => v !== value)
              : selectedValues.length < maxSelections
              ? [...selectedValues, value]
              : selectedValues;
            
            field.onChange(newValues);
          };

          return (
            <div ref={dropdownRef} className="relative">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-3 py-2 text-sm bg-neutral-900 border border-neutral-800 rounded-lg text-left text-white placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:border-transparent transition-all flex items-center justify-between"
              >
                <span className={selectedLabels.length === 0 ? 'text-neutral-500 text-sm' : 'text-sm'}>
                  {selectedLabels.length === 0
                    ? placeholder
                    : selectedLabels.join(', ')}
                </span>
                <svg
                  className={`w-4 h-4 text-neutral-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-neutral-900 border border-neutral-800 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                  {options.map((option) => {
                    const isSelected = selectedValues.includes(option.value);
                    const isDisabled = !isSelected && selectedValues.length >= maxSelections;

                    return (
                      <label
                        key={option.value}
                        className={`flex items-center px-3 py-2 cursor-pointer transition-colors ${
                          isDisabled
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:bg-neutral-800'
                        } ${isSelected ? 'bg-brand-primary/10 text-brand-primary' : 'text-neutral-300'}`}
                      >
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => !isDisabled && handleToggle(option.value)}
                          disabled={isDisabled}
                          className="w-3.5 h-3.5 rounded border-neutral-700 bg-neutral-900 text-brand-primary focus:ring-brand-primary focus:ring-offset-0 mr-2"
                        />
                        <span className="text-xs">{option.label}</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>
          );
        }}
      />

      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  );
};

export default MultiSelectField;
