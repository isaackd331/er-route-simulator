/**
 * 사이즈 이넘, 각 key는 해당 조건에 맞는 Tailwind Class를 호출
 * full: w-full
 * half: w-1/2
 * fit: w-fit
 */
export const ESize = {
  full: "w-full",
  half: "w-1/2",
  fit: "w-fit",
} as const;
type ESize = (typeof ESize)[keyof typeof ESize];

/**
 * 버튼 스타일 이넘, 각 key를 해당 조건에 맞는 Tailwind Class를 호출
 * primary: border-cyan-500 bg-slate-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_0_1.5rem_rgba(34,211,238,0.5)] focus:outline-none focus:ring-2 focus:ring-cyan-400 active:scale-95
 * orange: bg-orange-600 text-white hover:bg-orange-500 hover:shadow-[0_0_1.5rem_rgba(234,88,12,0.4)] focus:outline-none focus:ring-2 focus:ring-orange-4000 active:scale-95
 */
export const EVariant = {
  primary:
    "border-cyan-500 bg-slate-500 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_0_1.5rem_rgba(34,211,238,0.5)] focus:outline-none focus:ring-2 focus:ring-cyan-400 active:scale-95",
  orange:
    "bg-orange-600 text-white hover:bg-orange-500 hover:shadow-[0_0_1.5rem_rgba(234,88,12,0.4)] focus:outline-none focus:ring-2 focus:ring-orange-4000 active:scale-95",
} as const;
type EVariant = (typeof EVariant)[keyof typeof EVariant];

/**
 * 버튼 컴포넌트 인터페이스
 * @required label[string]: 버튼 라벨
 * @required size[keyof typeof ESize]: 사이즈 이넘에 따른 버튼 width
 * @required variant[keyof tpyoef EVariant]: 바리언트 이넘에 따른 버튼 스타일
 */
export interface IButton extends React.ComponentPropsWithoutRef<"button"> {
  label: string;
  size: keyof typeof ESize;
  variant: keyof typeof EVariant;
}
