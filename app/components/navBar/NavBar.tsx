"use client";

import Link from "next/link";
import { Menu, type MenuProps } from "antd";
import { usePathname } from "next/navigation";

const items: MenuProps["items"] = [
  {
    label: <Link href="/registration">Registration</Link>,
    key: "registration",
  },
  {
    label: <Link href="/login">Login</Link>,
    key: "login",
  },
];

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="NavBar">
      <Menu
        items={items}
        mode="horizontal"
        selectedKeys={[pathname.slice(1)]}
      />
    </div>
  );
};
