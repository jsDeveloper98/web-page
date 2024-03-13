"use client";
import { Menu, Skeleton } from "antd";

import { useNavBar } from "./NavBar.hooks";

export const NavBar = () => {
  const { activePath, filteredNavItems, loading } = useNavBar();

  return (
    <div className="NavBar">
      {loading ? (
        <Skeleton active title={false} loading={true} />
      ) : (
        <Menu
          mode="horizontal"
          activeKey={activePath}
          items={filteredNavItems}
        />
      )}
    </div>
  );
};
