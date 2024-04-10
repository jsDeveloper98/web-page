import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

import { useStore } from "@/store/useStore";
import { AuthService } from "@/services/Auth.service";

export const useInitialization = () => {
  const { setUserData, setLoading } = useStore(
    useShallow(({ setUserData, setLoading }) => ({
      setUserData,
      setLoading,
    }))
  );

  useEffect(() => {
    AuthService.checkAuth().then((res) => {
      if (res.data) {
        setUserData(res.data);
      }
      setLoading(false);
    });
  }, [setLoading, setUserData]);
};
