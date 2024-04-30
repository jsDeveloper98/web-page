import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

import { useStore } from "@/store/useStore";

export const useInitialization = (userData: IUserData) => {
  const { setUserData, setLoading } = useStore(
    useShallow(({ setUserData, setLoading }) => ({
      setUserData,
      setLoading,
    }))
  );

  useEffect(() => {
    if (userData) {
      setUserData(userData);
    }
    setLoading(false);
  }, [setUserData, setLoading, userData]);
};
