import { create } from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";

interface IModalData {
  title: string;
  isOpen: boolean;
  onConfirm: () => void;
}

interface IState {
  loading: boolean;
  data: IModalData;
  closeModal: () => void;
  setLoading: (loading: IState["loading"]) => void;
  openModal: (data: Omit<IModalData, "isOpen">) => void;
}

export const useModalStore = create<IState>()(
  subscribeWithSelector(
    devtools((set) => ({
      loading: false,
      setLoading: (loading) => set({ loading }),
      data: {
        title: "",
        isOpen: false,
        onConfirm: () => {},
      },
      openModal: (data) =>
        set({
          data: {
            ...data,
            isOpen: true,
          },
        }),
      closeModal: () =>
        set({
          data: {
            title: "",
            isOpen: false,
            onConfirm: () => {},
          },
        }),
    }))
  )
);
