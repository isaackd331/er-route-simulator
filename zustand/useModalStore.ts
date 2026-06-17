import { create } from "zustand";

import { IModalStore } from "@/interfaces/modals/interface";

export const useModalStore = create<IModalStore>((set) => ({
  isOpen: false,
  content: null,
  openModal: ({ title, content }) => {
    set({
      isOpen: true,
      title: title || "",
      content,
    });
  },
  closeModal: () => {
    set({
      isOpen: false,
      title: "",
      content: null,
    });
  },
  title: "",
}));
