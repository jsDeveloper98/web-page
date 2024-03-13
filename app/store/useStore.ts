import { create } from "zustand";
import { devtools, subscribeWithSelector } from "zustand/middleware";

interface IState {
  loading: boolean;
  setLoading: (loading: IState["loading"]) => void;
  setUserData: (userData: IState["userData"]) => void;
  userData: {
    id: string | null;
    token: string | null;
  };
}

export const useStore = create<IState>()(
  subscribeWithSelector(
    devtools((set) => ({
      loading: true,
      setLoading: (loading) => set({ loading }),
      setUserData: (userData) => set({ userData }),
      userData: {
        id: null,
        token: null,
      },
    }))
  )
);
