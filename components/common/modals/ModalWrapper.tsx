"use client";

import { createPortal } from "react-dom";

const ModalWrapper = ({ children }: { children: React.ReactNode }) => {
  const modalPortal = document.getElementById("modalPortal");

  if (typeof window === "undefined" || !modalPortal) return null;

  return createPortal(children, modalPortal);
};

export default ModalWrapper;
