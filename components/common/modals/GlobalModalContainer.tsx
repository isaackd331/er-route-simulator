"use client";

import Modal from "./Modal";

import { useModalStore } from "@/zustand/useModalStore";

const GlobalModalContainer = () => {
  const { isOpen, content, closeModal, title } = useModalStore();

  return (
    <Modal isOpen={isOpen} onClose={closeModal} title={title}>
      {content}
    </Modal>
  );
};

export default GlobalModalContainer;
