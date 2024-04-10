import { useState } from "react";
import { useRouter } from "next/navigation";

import { handleError } from "@/utils";
import { useStore } from "@/store/useStore";
import { AuthService } from "@/services/Auth.service";

export const useLoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const setUserData = useStore((store) => store.setUserData);

  const handleSubmit = (data: IAuthValues) => {
    setLoading(true);
    return AuthService.login(data)
      .then((res) => {
        setUserData(res.data);
        router.push("/");
      })
      .catch(handleError)
      .finally(() => setLoading(false));
  };

  return { handleSubmit, loading };
};
