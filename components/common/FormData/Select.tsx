import { Controller, FieldValues } from "react-hook-form";

import ErrorMsg from "./ErrorMsg";

import { IFormDataSelect } from "@/interfaces/formdata/interface";

const Select = <TFieldValues extends FieldValues>({
  label,
  name,
  control,
  options,
  rules,
}: IFormDataSelect<TFieldValues>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <div className="relative">
          <select
            className="w-full px-4 py-2 rounded-md border border-cyan-500 bg-slate-900 text-cyan-400 font-medium text-[1.6rem] appearance-none outline-none focus:ring-1 focus:ring-cyan-500 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
            {...field}
          >
            <option value="">{label}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          {error && <ErrorMsg error={error} />}
        </div>
      )}
    />
  );
};

export default Select;
