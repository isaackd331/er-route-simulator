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
 * 무기 카테고리
 * - arcana: 아르카나
 * - assaultRifle: 돌격소총
 * - axe: 도끼
 * - bat: 방망이
 * - bow: 활
 * - camera: 카메라
 * - crossbow: 석궁 (오타 수정)
 * - dagger: 단검
 * - dualSwords: 쌍검
 * - glove: 글러브
 * - guitar: 기타
 * - hammer: 망치
 * - nunchaku: 쌍절곤
 * - pistol: 권총
 * - rapier: 레이피어
 * - shuriken: 암기
 * - sniperRifle: 저격총 (오타 수정)
 * - spear: 창
 * - tonfa: 톤파
 * - twoHandedSword: 양손검
 * - vfProsthetic: VF의수
 * - whip: 채찍
 */
type TCategory =
  | "arcana"
  | "assaultRifle"
  | "axe"
  | "bat"
  | "bow"
  | "camera"
  | "crossbow"
  | "dagger"
  | "dualSwords"
  | "glove"
  | "guitar"
  | "hammer"
  | "nunchaku"
  | "pistol"
  | "rapier"
  | "shuriken"
  | "sniperRifle"
  | "spear"
  | "tonfa"
  | "twoHandedSword"
  | "vfProsthetic"
  | "whip";

/**
 * 아이템 희귀도
 * - rare: 희귀
 * - epic: 영웅
 * - legendary: 전설
 * - mythic: 신화
 */
type TRarity = "rare" | "epic" | "legendary" | "mythic";

/**
 * 에키온/프리야 전용 아이템 희귀도
 */

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
 * - awakening: 각성
 * - bioticInfusion: 의념
 * - blazeOfGlory: 광휘
 * - blazeUp: 예열
 * - blazeUpAmplified: 예열-증강
 * - blazeUpEndurance: 예열-인내
 * - blazeUpEnhanced: 예열-강화
 * - blazeUpOutburst: 예열-격앙
 * - bruteEnforce: 집행자
 * - burdenLeadShell: 충전-철환
 * - burdenMagneticMidnight: 충전-섬광
 * - cataclasm: 파열
 * - combatInstinct: 개시
 * - convergence: 응집
 * - criticalBlow: 크리티컬 블로우
 * - crushingBlow: 파쇄타
 * - debilitatingFog: 쇠약의 안개
 * - debilitation: 부패
 * - deferral: 유예
 * - dimensionalRift: 차원 균열
 * - echoingStrike: 블래스터 탄환
 * - electricShock: 전자기 충격
 * - empowerment: 격려
 * - extendedFury: 연장 총열
 * - fafnirsScales: 파프니르의 비늘
 * - flameBarrier: 불꽃 결계
 * - gap: 간격
 * - guardPunch: 가드 펀치
 * - gustOfWind: 돌풍
 * - gustOfWindRally: 돌풍-결집
 * - healingReduction: 치유 감소
 * - heartOfBurst: 겁화의 심장
 * - heavyweight: 묵직함
 * - inFullBloom: 만개
 * - iteration: 반복 기동
 * - lichsGrasp: 한파
 * - magicBullet: 마탄
 * - manaSeed: 마력 씨앗
 * - master: 달인
 * - necrosis: 독사의 맹독
 * - photonLauncher: 포톤 런처
 * - predation: 포식
 * - prayerForTheDead: 죽음을 위한 기도
 * - primordialHex: 저주
 * - pulverization: 분쇄
 * - punishment: 징벌
 * - punishmentTracking: 징벌-추적
 * - quickstep: 현란함
 * - rebellion: 반항
 * - resonance: 후속타
 * - secondWindBloodPact: 세컨드 윈드-핏빛 계약
 * - secondWindColossal: 세컨드 윈드-거인
 * - securityProtocol: 보호 프로토콜
 * - skillAmplification: 스킬 증폭
 * - smolder: 발화
 * - spotOn: 명중
 * - streamlined: 신속
 * - streamlinedChargeCarrier: 신속-플라즈마
 * - streamlinedRudraEmbodied: 신속-루드라의 단검
 * - streamlinedZephyr: 신속-산들바람
 * - swiftStrides: 가벼운 발걸음
 * - tailwind: 순풍
 * - taserGun: 테이저 건
 * - taserGunSurge: 테이저 건-도약
 * - tenacity: 방해 효과 저항
 * - thunderRuling: 뇌명 집행
 * - timeEdge: 타임 엣지
 * - tranquility: 명경지수
 * - turbulence: 격동
 * - twoSides: 두 개의 가면
 * - ultraFocus: 초집중
 * - vanguard: 선봉장
 * - verdict: 선고
 * - vfControlEnhancement: VF제어 강화
 * - vigor: 열정
 * - vigorCirculation: 열정-순환
 * - vigorRush: 열정-환희
 * - vitalityStrike: 재생의 일격
 */
export type TUniqueName =
  | "awakening"
  | "bioticInfusion"
  | "blazeOfGlory"
  | "blazeUp"
  | "blazeUpAmplified"
  | "blazeUpEndurance"
  | "blazeUpEnhanced"
  | "blazeUpOutburst"
  | "bruteEnforce"
  | "burdenLeadShell"
  | "burdenMagneticMidnight"
  | "cataclasm"
  | "combatInstinct"
  | "convergence"
  | "criticalBlow"
  | "crushingBlow"
  | "debilitatingFog"
  | "debilitation"
  | "deferral"
  | "dimensionalRift"
  | "echoingStrike"
  | "electricShock"
  | "empowerment"
  | "extendedFury"
  | "fafnirsScales"
  | "flameBarrier"
  | "gap"
  | "guardPunch"
  | "gustOfWind"
  | "gustOfWindRally"
  | "healingReduction"
  | "heartOfBurst"
  | "heavyweight"
  | "inFullBloom"
  | "iteration"
  | "lichsGrasp"
  | "magicBullet"
  | "manaSeed"
  | "master"
  | "necrosis"
  | "photonLauncher"
  | "predation"
  | "prayerForTheDead"
  | "primordialHex"
  | "pulverization"
  | "punishment"
  | "punishmentTracking"
  | "quickstep"
  | "rebellion"
  | "resonance"
  | "secondWindBloodPact"
  | "secondWindColossal"
  | "securityProtocol"
  | "skillAmplification"
  | "smolder"
  | "spotOn"
  | "streamlined"
  | "streamlinedChargeCarrier"
  | "streamlinedRudraEmbodied"
  | "streamlinedZephyr"
  | "swiftStrides"
  | "tailwind"
  | "taserGun"
  | "taserGunSurge"
  | "tenacity"
  | "thunderRuling"
  | "timeEdge"
  | "tranquility"
  | "turbulence"
  | "twoSides"
  | "ultraFocus"
  | "vanguard"
  | "verdict"
  | "vfControlEnhancement"
  | "vigor"
  | "vigorCirculation"
  | "vigorRush"
  | "vitalityStrike";

/**
 * 아이템 고유효과 인터페이스
 * - @required name[TUniqueName]: 고유효과 영문명
 * - @required desc[string]: 고유효과 설명
 * - @required values[number[]]: 고유효과 효과 수치
 */
export interface IUnique {
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
 * public/items/TRole/###.png or public/items/weapon/TCategory/###.png 형태의 string만 들어오도록 강제
 */
type TImgPath =
  | `/items/${TRole}/${string}.png`
  | `/items/weapon/${TCategory}/${string}.png`;

/**
 * 아이템 인터페이스
 * - @required imgPath[TImgPath]: 아이템 아이콘 경로
 * - @required enName[string]: 아이템 영문명
 * - @required krName[string]: 아이템 한글명
 * - @required role[TRole]: 아이템 역할군
 * - @required rarity[TRarity]: 아이템 희귀도
 * - @required material[TMaterial]: 아이템 재료
 * - @required stat[IStat]: 아이템 스탯
 */
export interface IItem {
  imgPath: TImgPath;
  enName: string;
  krName: string;
  role: TRole;
  rarity: TRarity;
  material: TMaterial;
  stat: IStat;
}
