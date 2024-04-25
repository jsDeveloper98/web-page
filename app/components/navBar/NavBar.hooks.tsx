import { useMemo } from "react";
import Link from "next/link";
import compact from "lodash/compact";
import { useShallow } from "zustand/react/shallow";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { usePathname, useRouter } from "next/navigation";

import { useStore } from "@/store/useStore";
import { AuthService } from "@/services/Auth.service";
import {
  HOME_PATH,
  LOGIN_PATH,
  MY_PRODUCTS_PATH,
  REGISTRATION_PATH,
  AUTHORIZED_ROUTES_PATHS,
  UNAUTHORIZED_ROUTES_PATHS,
} from "@/constants/paths";

export const useNavBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const {
    loading,
    setUserData,
    userData: { token, role },
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
      {
        key: MY_PRODUCTS_PATH,
        label: <Link href={MY_PRODUCTS_PATH}>My Products</Link>,
        permissionType: "admin",
      },
    ],
    []
  );

  const logoutNavItem = useMemo(
    () => ({
      key: "logout",
      label: "Logout",
      className: "!ml-auto",
      onClick: () => {
        AuthService.logout().then(() => {
          setUserData({
            role: null,
            token: null,
          });
          router.push(LOGIN_PATH);
        });
      },
    }),
    [router, setUserData]
  );

  const filteredNavItems: ItemType[] = useMemo(
    () =>
      compact(
        items.map(({ permissionType, ...item }) => {
          const isAuthorizedRoute =
            token && AUTHORIZED_ROUTES_PATHS.includes(item.key);
          const isUnauthorizedRoute =
            !token && UNAUTHORIZED_ROUTES_PATHS.includes(item.key);

          if (
            isAuthorizedRoute &&
            (!permissionType || permissionType === role)
          ) {
            return item;
          }

          if (isUnauthorizedRoute) {
            return item;
          }
        })
      ),
    [items, role, token]
  );

  return {
    loading,
    activePath: `/${pathname.slice(1)}`,
    filteredNavItems: [
      ...filteredNavItems,
      ...(!!token ? [logoutNavItem] : []),
    ],
  };
};
