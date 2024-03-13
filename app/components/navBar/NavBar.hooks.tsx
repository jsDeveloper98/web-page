import { useMemo } from "react";
import Link from "next/link";
import { useShallow } from "zustand/react/shallow";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { usePathname, useRouter } from "next/navigation";

import { useStore } from "@/store/useStore";
import { AuthService } from "@/services/Auth.service";
import { HOME_PATH, LOGIN_PATH, REGISTRATION_PATH } from "@/constants/paths";
import {
  AUTHORIZED_ROUTES_PATHS,
  UNAUTHORIZED_ROUTES_PATHS,
} from "@/constants/paths";

export const useNavBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const {
    loading,
    setUserData,
    userData: { token },
  } = useStore(
    useShallow(({ userData, loading, setUserData }) => ({
      loading,
      userData,
      setUserData,
    }))
  );

  const items = useMemo(
    () => [
      {
        key: REGISTRATION_PATH,
        label: <Link href={REGISTRATION_PATH}>Registration</Link>,
      },
      {
        key: LOGIN_PATH,
        label: <Link href={LOGIN_PATH}>Login</Link>,
      },
      {
        key: HOME_PATH,
        label: <Link href={HOME_PATH}>Home</Link>,
      },
    ],
    []
  );

  const logoutNavItem = useMemo(
    () => ({
      key: "logout",
      label: "Logout",
      className: "logout-button",
      onClick: () => {
        AuthService.logout().then(() => {
          setUserData({
            id: null,
            token: null,
          });
          router.push(LOGIN_PATH);
        });
      },
    }),
    []
  );

  const filteredNavItems: ItemType[] = items.filter((item) => {
    if (token && AUTHORIZED_ROUTES_PATHS.includes(item.key)) {
      return item;
    }

    if (!token && UNAUTHORIZED_ROUTES_PATHS.includes(item.key)) {
      return item;
    }
  });

  return {
    loading,
    activePath: `/${pathname.slice(1)}`,
    filteredNavItems: [
      ...filteredNavItems,
      ...(!!token ? [logoutNavItem] : []),
    ],
  };
};
