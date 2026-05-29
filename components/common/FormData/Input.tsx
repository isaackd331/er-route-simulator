import classNames from "classnames";

import ErrorMsg from "./ErrorMsg";

import { IFormDataInput } from "@/interfaces/formdata/interface";

const Input = ({
  label,
  register,
  error,
  labelPosition = "upper",
  ...props
}: IFormDataInput) => {
  // labelPosition에 따른 배치 CSS 적용
  const positionClass = classNames(
    "flex",
    labelPosition === "upper" && "flex-col gap-1.5 max-w-sm",
    labelPosition === "side" && "items-center gap-4 max-w-md"
  );

  // labelPosition에 따른 label CSS 적용
  const labelClass = classNames(
    "flex items-center font-semibold tracking-wider text-slate-400",
    labelPosition === "upper" && "text-[1.2rem] gap-1",
    labelPosition === "side" && "text-[1.6rem] shrink-0 justify-between"
  );

  return (
    <div>
      <div className={positionClass}>
        <label className={labelClass}>
          <span>{label}</span>
        </label>
        <input
          className="w-full px-4 py-2 rounded-md border border-cyan-500 bg-slate-900 text-cyan-400 font-medium text-[1.6rem] outline-none focus:ring-1 focus:ring-cyan-500 focus:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          {...props}
          {...register}
        />
      </div>
      <ErrorMsg error={error} />
    </div>
  );
};

export default Input;
