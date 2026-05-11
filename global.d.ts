import { FieldValues, RegisterOptions } from "react-hook-form";

export {};

declare global {
  type BuildArrayMinLength<
    T,
    L extends number,
    Current extends T[]
  > = Current["length"] extends L
    ? [...Current, ...T[]]
    : BuildArrayMinLength<T, L, [...Current, T]>;

  type BuildArrayMaxLength<
    T,
    L extends number,
    Current extends T[] = []
  > = Current["length"] extends L
    ? Current
    : Current | BuildArrayMaxLength<T, L, [...Current, T]>;

  type ArrayLengthMutationKeys =
    | "splice"
    | "push"
    | "pop"
    | "shift"
    | "unshift";

  /**
   * RHF Validation 전용 타입
   */
  type TRules = Omit<
    RegisterOptions<FieldValues, string>,
    "valuseAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;

  /**
   * 최소 그 length 이상이 있어야 허용하는 배열 타입
   * ex) LeastLengthArray<string, 3> = 최소 3의 길이를 가지고 string만 들어올 수 있는 배열 타입 선언
   */
  type LeastLengthArray<T, L extends number> = BuildArrayMinLength<T, L, []>;

  /**
   * 최대 그 length를 넘을 수 없는 배열 타입
   * ex) MaxLengthArray<string, 3> = 최대 3의 길이를 가지고 string만 들어올 수 있는 배열 타입 선언
   */
  type MaxLengthArray<T, L extends number> = BuildArrayMaxLength<T, L>;

  /**
   * 특정 length만 허용하는 배열 타입
   * ex) FixedLengthArray<striing, 3> = 3의 길이를 가지고 string만 들어올 수 있는 배열 타입
   */
  type FixedLengthArray<T, L extends number, TObj = [T, ...Array<T>]> = Pick<
    TObj,
    Exclude<keyof TObj, ArrayLengthMutationKeys>
  > & {
    readonly length: L;
    [I: number]: T;
    [Symbol.iterator]: () => IterableIterator<T>;
  };

  /**
   * RHF 전용 인터페이스
   */
  interface IUseForm {
    name: string;
    rules?: TRules;
  }
}
