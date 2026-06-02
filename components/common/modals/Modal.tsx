"use client";

import { useEffect } from "react";

import ModalWrapper from "./ModalWrapper";

import { IModal } from "@/interfaces/modals/interface";

const Modal = ({ isOpen, onClose, children, title }: IModal) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (evt: KeyboardEvent) => {
      if (evt.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ModalWrapper>
      {/* Modal Backdrop */}
      <div
        className="fixed inset-0 z-1000 flex justify-center items-center bg-black/50 backdrop-blur-sm p-4"
        onClick={onClose}
      />

      <div
        className="w-full max-w-md overflow-hidden rounded-2xl bg-white p-4 text-left align-middle shadow-xl"
        onClick={(evt) => {
          evt.stopPropagation();
        }}
      >
        {/* Title */}
        <section className="flex justify-between items-center p-3 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <button onClick={onClose} className="text-gray-900">
            ✕
          </button>
        </section>

        {/* Content */}
        <article>{children}</article>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
