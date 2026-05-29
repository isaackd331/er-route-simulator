import ErrorMsg from "./ErrorMsg";

import { IFormDataRadio } from "@/interfaces/formdata/interface";

const Radio = ({ label, options, register, error }: IFormDataRadio) => {
  return (
    <div className="space-y-2">
      <label className="block text-xs font-semibold text-[1.6rem] tracking-wider text-slate-400">
        {label}
      </label>
      <div className="flex items-center gap-1.5 text-cyan-400 font-medium text-[1.6rem]">
        {options.map((option) => (
          <label className="cursor-pointer" key={option.value}>
            <input
              className="appearance-none sr-only peer"
              type="radio"
              value={option.value}
              {...register}
            />
            <span
              className="inline-flex items-center gap-2 py-1.5 px-3 rounded-md border border-slate-700 bg-slate-900 text-slate-400 peer-checked:border-cyan-500 peer-checked:bg-cyan-950/30 peer-checked:text-cyan-400
              peer-checked:shadow-[0_0_15px_rgba(34,211,238,0.2)] peer-checked:[&_span:first-child]:border-cyan-400
              peer-checked:[&_span:first-child]:bg-cyan-400"
            >
              <span className="w-3.5 h-3.5 rounded-full border-2 border-slate-600 bg-transparent" />
              <span>{option.label}</span>
            </span>
          </label>
        ))}
      </div>

      <ErrorMsg error={error} />
    </div>
  );
};

export default Radio;
