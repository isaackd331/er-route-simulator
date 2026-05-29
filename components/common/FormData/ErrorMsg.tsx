import { FieldError } from "react-hook-form";

import RedCirclePing from "@/public/icons/redCirclePing.svg";

const ErrorMsg = ({ error }: { error?: FieldError }) => {
  if (!error) return null;
  return (
    <p className="flex items-center gap-1.5 mt-1.5 text-[1rem] font-medium text-red-400 drop-shadow-[0_0_0.6rem_rgba(248,113,113,0.4)]">
      <div className="relative w-4 h-4">
        <RedCirclePing fill="true" />
      </div>
      {error.message}
    </p>
  );
};

export default ErrorMsg;
