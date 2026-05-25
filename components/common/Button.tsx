import classNames from "classnames";

import { IButton, ESize, EVariant } from "@/interfaces/button/interface";

/**
 * 커스텀 공통 버튼 컴포넌트
 * IButton 참조
 */
const Button = ({ label, size, variant, ...props }: IButton) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className={classNames(
        ESize[size],
        EVariant[variant],
        "px-6 py-2.5 rounded-md font-medium tracking-wide transition-all duration-200"
      )}
    >
      {label}
    </button>
  );
};

export default Button;
