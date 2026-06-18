/**
 * 아이템 역할군
 * - weapon: 무기
 * - chest: 옷
 * - head: 머리
 * - arm: 팔
 * - leg: 다리
 * - consume: 소모품
 */
type TRole = "weapon" | "chest" | "head" | "arm" | "leg" | "consume";

/**
 * 아이템 희귀도
 * - epic: 영웅
 * - legendary: 전설
 * - mythic: 신화
 * - 영웅 미만 등급은 따로 기재하지 않음
 */
type TRarity = "epic" | "legendary" | "mythic";

/**
 * 아이템 재료
 * - treeOfLife: 생명의나무
 * - meteorite: 운석
 * - mithril: 미스릴
 * - forceCore: 포스코어
 * - vfBloodSample: VF혈액샘플
 */
type TMaterial =
  | "treeOfLife"
  | "meteorite"
  | "mithril"
  | "forceCore"
  | "vfBloodSample";

/**
 * 아이템 고유효과 이름
 * - skillAmplification: 스킬 증폭
 * - blazeUp: 예열
 * - blazeUpAmplified: 예열-증강
 * - blazeUpEnhanced: 예열-강화
 * - blazeUpOutburst: 예열-격앙
 * - blazeUpEndurance: 예열-인내
 * - debilitaion: 부패
 * - deferral: 유예
 * - bloticInfusion: 의념
 * - healingReduction: 치유 감소
 * - extendedFury: 연장 총열
 * - master: 달인
 * - blazeOfGlory: 광휘
 * - tenacity: 방해 효과 저항
 * - pulverization: 분쇄
 * - combatInstinct: 개시
 * - debilitatingFog: 쇠약의 안개
 * - taserGun: 테이저 건
 * - taserGunSurge: 테이저 건-도약
 * - burdenMagneticMidnight: 충전-섬광
 * - burdenLeadShell: 충전-철환
 * - lichsGrasp: 한파
 * - verdict: 선고
 * - vigor: 열정
 * - vigorCirculation: 열정-순환
 * - vigorRush: 열정-환희
 * - flameBarrier: 불꽃 결계
 * - vanguard: 선봉장
 * - electricShock: 전자기 충격
 * - tailwind: 순풍
 * - convergence: 응집
 * - manaSeed: 마력 씨앗
 * - turbulence: 격동
 * - heavyweight: 묵직함
 * - secondWindColossal: 세컨드 윈드-거인
 * - secondWindBloodPact: 세컨드 윈드-핏빛 계약
 * - streamlined: 신속
 * - streamlinedChargeCarrier: 신속-플라즈마
 * - streamlinedRudraEmbodied: 신속-루드라의 단검
 * - streamlinedZephyr: 신속-산들바람
 * - thunderRuling: 뇌명 집행
 * - photonLauncher: 포톤 런처
 * - vitalityStrike: 재생의 일격
 * - quickstep: 현란함
 * - spotOn: 명중
 * - swiftStrides: 가벼운 발걸음
 * - punishment: 징벌
 * - punishmentTracking: 징벌-추적
 * - rebellion: 반항
 * - dimensionalRift: 차원 균열
 * - awakening: 각성
 * - resonance: 후속타
 * - securityProtocol: 보호 프로토콜
 * - gustOfWind: 돌풍
 * - gustOfWindRally: 돌풍-결집
 * - timeEdge: 타임 엣지
 * - primordialHex: 저주
 * - iteration: 반복 기동
 * - smolder: 발화
 * - reflection: 리플렉션
 * - criticalBlow: 크리티컬 블로우
 * - ultraFocus: 초집중
 * - heartOfBurst: 겁화의 심장
 * - tranquility: 명경지수
 * - crushingBlow: 파쇄타
 * - gap: 간격
 * - echoingStrike: 블래스터 탄환
 * - twoSides: 두 개의 가면
 * - magicBullet: 마탄
 * - predation: 포식
 * - cataclasm: 파열
 * - inFullBloom: 만개
 * - empowerment: 격려
 * - targetingPod: 타겟팅 포드
 * - guardPunch: 가드 펀치
 * - fafnirsScales: 파프니르의 비늘
 * - prayerForTheDead: 죽음을 위한 기도
 * - spiritHarvest: 영혼 수확
 * - vfControlEnhancement: VF제어 강화
 * - necrosis: 독사의 맹독
 * - bruteEnforce: 집행자
 */
export type TUniqueName =
  | "skillAmplification"
  | "blazeUp"
  | "blazeUpAmplified"
  | "blazeUpEnhanced"
  | "blazeUpOutburst"
  | "blazeUpEndurance"
  | "debilitaion"
  | "deferral"
  | "bloticInfusion"
  | "healingReduction"
  | "extendedFury"
  | "master"
  | "blazeOfGlory"
  | "tenacity"
  | "pulverization"
  | "combatInstinct"
  | "debilitatingFog"
  | "taserGun"
  | "taserGunSurge"
  | "burdenMagneticMidnight"
  | "burdenLeadShell"
  | "lichsGrasp"
  | "verdict"
  | "vigor"
  | "vigorCirculation"
  | "vigorRush"
  | "flameBarrier"
  | "vanguard"
  | "electricShock"
  | "tailwind"
  | "convergence"
  | "manaSeed"
  | "turbulence"
  | "heavyweight"
  | "secondWindColossal"
  | "secondWindBloodPact"
  | "streamlined"
  | "streamlinedChargeCarrier"
  | "streamlinedRudraEmbodied"
  | "streamlinedZephyr"
  | "thunderRuling"
  | "photonLauncher"
  | "vitalityStrike"
  | "quickstep"
  | "spotOn"
  | "swiftStrides"
  | "punishment"
  | "punishmentTracking"
  | "rebellion"
  | "dimensionalRift"
  | "awakening"
  | "resonance"
  | "securityProtocol"
  | "gustOfWind"
  | "gustOfWindRally"
  | "timeEdge"
  | "primordialHex"
  | "iteration"
  | "smolder"
  | "reflection"
  | "criticalBlow"
  | "ultraFocus"
  | "heartOfBurst"
  | "tranquility"
  | "crushingBlow"
  | "gap"
  | "echoingStrike"
  | "twoSides"
  | "magicBullet"
  | "predation"
  | "cataclasm"
  | "inFullBloom"
  | "empowerment"
  | "targetingPod"
  | "guardPunch"
  | "fafnirsScales"
  | "prayerForTheDead"
  | "spiritHarvest"
  | "vfControlEnhancement"
  | "necrosis";

/**
 * 아이템 고유효과 인터페이스
 * - @required name[TUniqueName]: 고유효과 영문명
 * - @required desc[string]: 고유효과 설명
 * - @required values[number[]]: 고유효과 효과 수치
 */
interface IUnique {
  name: TUniqueName;
  desc: string;
  values: number[];
}

/**
 * 아이템 스텟 인터페이스
 * - atkPower[number]: 공격력
 * - atkPowerLvl[number]: 레벨별 공격력
 * - atkAmpLvl[number]: 레벨별 기본공격증폭
 * - atkSpd[number]: 공격속도
 * - critChance[number]: 치명타확률
 * - critDmg[number]: 치명타피해
 * - skAmp[number]: 고정 스킬증폭
 * - skAmpPrcnt[number]: 비율 스킬증폭
 * - skAmpLvl[number]: 레벨별 스킬증폭
 * - healingPower[number]: 주는회복증가
 * - armorPenet[number]: 고정 방어관통
 * - armorPenetPrcnt[number]: 비율 방어관통
 * - coolReduc[number]: 스킬가속
 * - ultCoolReduc[number]: 궁극기 스킬가속
 * - tacCoolReduc[number]: 전술 스킬가속
 * - def[number]: 방어력
 * - maxHp[number]: 최대체력
 * - maxHpLvl[number]: 레벨별 최대체력
 * - moveSpd[number]: 고정 이동속도
 * - moveSpdPrcnt[number]: 비율 이동속도
 * - visRng[number]: 시야
 * - hpRegen[number]: 체력재생
 * - lifeSteal[number]: 생명력흡수
 * - omnisyphon[number]: 모든피해흡혈
 * - slowResistance[number]: 둔화효과저항
 * - unique[IUnique[]]: 고유능력
 */
interface IStat {
  atkPower?: number;
  atkPowerLvl?: number;
  atkAmpLvl?: number;
  atkSpd?: number;
  critChange?: number;
  critDmg?: number;
  skAmp?: number;
  skAmpPrcnt?: number;
  skAmpLvl?: number;
  healingPower?: number;
  armorPenet?: number;
  armorPenetPrcnt?: number;
  coolReduc?: number;
  ultCoolReduc?: number;
  tacCoolReduc?: number;
  def?: number;
  maxHp?: number;
  maxHpLvl?: number;
  moveSpd?: number;
  moveSpdPrcnt?: number;
  visRng?: number;
  hpRegen?: number;
  lifeSteal?: number;
  omnisyphon?: number;
  slowResistance?: number;
  unique?: IUnique[];
}

/**
 * 아이템 인터페이스
 * - @required enName[string]: 아이템 영문명
 * - @required krName[string]: 아이템 한글명
 * - @required role[TRole]: 아이템 역할군
 * - @required rarity[TRarity]: 아이템 희귀도
 * - @required material[TMaterial]: 아이템 재료
 * - @required stat[IStat]: 아이템 스탯
 */
export interface IItem {
  enName: string;
  krName: string;
  role: TRole;
  rarity: TRarity;
  material: TMaterial;
  stat: IStat;
}
