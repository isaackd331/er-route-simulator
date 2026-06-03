"use client";

import { useState, useCallback } from "react";

/**
 * modal 호출 Custom Hook
 */
export const useModal = <T = string | React.ReactNode>() => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<T | null>(null);

  const openModal = useCallback((content?: T) => {
    if (content) setModalContent(content);
    setIsOpen(true);
    console.log("hello openModal");
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setModalContent(null);
  }, []);

  return {
    isOpen,
    modalContent,
    openModal,
    closeModal,
  };
};
