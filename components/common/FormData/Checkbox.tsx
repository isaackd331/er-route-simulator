import ErrorMsg from "./ErrorMsg";

import { IFormDataCheckbox } from "@/interfaces/formdata/interface";

const Checkbox = ({ label, register, error }: IFormDataCheckbox) => {
  return (
    <div className="relative space-y-2">
      <label className="inline-flex items-center gap-2 cursor-pointer group select-none">
        <input
          type="checkbox"
          className="appearance-none sr-only peer"
          {...register}
        />

        <span className="w-5 h-5 rounded-sm bg-slate-900 border border-slate-700 shrink-0 peer-checked:border-cyan-500 peer-checked:bg-cyan-950/40 peer-checked:text-cyan-400 peer-checked:shadow-[0_0_10px_rgba(34,211,238,0.3)]" />

        <span className="absolute left-2 w-1.5 h-2.5 border-r-2 border-b-2 border-transparent rotate-45 pointer-events-none peer-checked:border-cyan-400" />

        <span className="text-[1.6rem] font-medium text-slate-400 transition-colors peer-checked:text-cyan-400">
          {label}
        </span>
      </label>

      <ErrorMsg error={error} />
    </div>
  );
};

export default Checkbox;
