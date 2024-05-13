"use client";
import { Skeleton } from "antd";

import { NavBar } from "@/components/reusable/navBar";

import { useNavBar } from "./Navigation.hooks";

export const Navigation = () => {
  const { activePath, filteredNavItems, loading } = useNavBar();

  return (
    <div className="Navigation">
      <Skeleton title={false} active loading={loading}>
        <NavBar items={filteredNavItems} activeKey={activePath} />
      </Skeleton>
    </div>
  );
};
