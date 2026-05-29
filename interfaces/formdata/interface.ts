import {
  RegisterOptions,
  UseFormRegister,
  UseFormRegisterReturn,
  FieldError,
  FieldErrors,
  FieldValues,
  Path,
  Control,
} from "react-hook-form";

/**
 * 공통 Form Input 인터페이스
 *
 * - @required label[string] : Input 요소 주변에 위치하여 해당 Input에 입력받을 요소 지시
 * - @required register[UseFormRegisterReturn] : RHF useForm Hook을 통해 입력받는 Form 요소 관리
 * - error[FieldError] : RHF Validation 등을 활용했을 떄의 에러 검출
 * - labelPosition["side" | "upper"] : label 위치 결정, 기본 upper
 */
export interface IFormDataInput
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  labelPosition?: "side" | "upper";
}

/**
 * 공통 Form Select/Radio Option 인터페이스
 *
 * - @required label[string] : 개별 Option의 표시값
 * - @required value[string] : 개별 Option의 데이터 처리 활용값
 */
interface IOption {
  label: string;
  value: string;
}

/**
 * 공통 Form Select 인터페이스
 *
 * - @required label[string]: Select의 Option이 선택되지 않았을 때 해당 Select에서 입력받을 요소 지시
 * - @required name[Path<TFieldValues>]: 해당 Select가 관리할 RHF 요소
 * - @required control[Control<TFieldValues>]: RHF useForm Hook을 통해 받는 control 객체
 * - @required options[IOption[]]: Select Options
 * - rules[object]: RHF Validation 규칙
 */
export interface IFormDataSelect<TFieldValues extends FieldValues> {
  label: string;
  name: Path<TFieldValues>;
  control: Control<TFieldValues>;
  options: IOption[];
  rules?: object;
}

/**
 * 공통 Form Radio 그룹 인터페이스
 *
 * - @required label[string]: 해당 Radio 그룹에서 입력받을 요소 지시
 * - @required options[IOption[]]: Radio Options
 * - @required register[UseFormRegisterReturn] : RHF useForm Hook을 통해 입력받는 Form 요소 관리
 * - error[FieldError] : RHF Validation 등을 활용했을 떄의 에러 검출
 */
export interface IFormDataRadio {
  label: string;
  options: IOption[];
  register: UseFormRegisterReturn;
  error?: FieldError;
}

/**
 * 공통 Form Checkbox 인터페이스
 *
 * - @required label[string]: Checkbox 요소 주변에 위치하여 해당 Input에 체크받을 요소 지시
 * - @required register[UseFormRegisterReturn] : RHF useForm Hook을 통해 입력받는 Form 요소 관리
 * - error[FieldError] : RHF Validation 등을 활용했을 떄의 에러 검출
 */
export interface IFormDataCheckbox
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}
