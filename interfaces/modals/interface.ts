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

/**
 * openModal 인터페이스
 * - @required content[ReactNode]: 모달 내용 구성을 위한 컨텐츠
 * - title: 모달 제목
 */
interface IOpenModal {
  content: React.ReactNode;
  title?: string;
}

/**
 * ModalStore 인터페이스
 * - @required isOpen[boolean]: 모달 Open 여부 체크
 * - @required content[ReactNode]: 모달 내용 구성을 위한 컨텐츠
 * - @required openModal[(params: IOpenModal) => void]: 모달 열기 함수
 * - @required closeModal[() => void]: 모달 닫기 함수
 * - title[string]: 제목
 */
export interface IModalStore {
  isOpen: boolean;
  content: React.ReactNode;
  openModal: (params: IOpenModal) => void;
  closeModal: () => void;
  title?: string;
}
