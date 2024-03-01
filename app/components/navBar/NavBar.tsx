"use client";
import Link from "next/link";
import { Menu, type MenuProps } from "antd";
import { usePathname } from "next/navigation";

const items: MenuProps["items"] = [
  {
    key: "registration",
    label: <Link href="/registration">Registration</Link>,
  },
  {
    key: "login",
    label: <Link href="/login">Login</Link>,
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
