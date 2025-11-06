import FormInputProps from '../../types/global';

const InputField = ({
  name,
  label,
  placeholder,
  type = 'text',
  register,
  error,
  validation,
  disabled,
  value,
}: FormInputProps) => (
  <div>
    <label
      htmlFor={name}
      className="block text-xs font-medium text-neutral-300 mb-1.5"
    >
      {label}
    </label>

    <input
      type={type}
      id={name}
      placeholder={placeholder}
      disabled={disabled}
      defaultValue={value}
      className="w-full px-3 py-2 text-sm bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder:text-neutral-500 focus:outline-none  focus:border-transparent transition-all"
      {...register(name, validation)}
    />

    <div className="min-h-[20px]">
      {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
    </div>
  </div>
);

export default InputField;