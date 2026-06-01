/**
 * Modal 인터페이스
 * - @required isOpen[boolean]: 모달 열림 감지를 위한 boolean값
 * - @required onClose[() => void]: 모달 닫기 함수
 * - @required children[ReactNode]: 모달 내 컨텐츠
 * - title[string]: 모달 상단 제목
 */
export interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}
