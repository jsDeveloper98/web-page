import { useRouter } from "next/navigation";

import { useStore } from "@/store/useStore";
import { AuthService } from "@/services/Auth.service";

export const useRegistrationForm = () => {
  const setUserData = useStore((store) => store.setUserData);
  const router = useRouter();

  const handleSubmit = (data: IAuthValues) => {
    return AuthService.register(data).then((res) => {
      setUserData(res.data);
      router.push("/");
    });
  };

  return { handleSubmit };
};
