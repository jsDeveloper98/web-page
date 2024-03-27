"use client";
import { Menu, Skeleton } from "antd";

import { useNavBar } from "./NavBar.hooks";

export const NavBar = () => {
  const { activePath, filteredNavItems, loading } = useNavBar();

  return (
    <div className="NavBar overflow-hidden">
      <Skeleton title={false} active loading={loading}>
        <Menu
          mode="horizontal"
          activeKey={activePath}
          items={filteredNavItems}
        />
      </Skeleton>
    </div>
  );
};
