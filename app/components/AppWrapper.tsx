"use client";
import { type ReactNode } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { NavBar } from "@/components/navBar";
import { useInitialization } from "@/hooks/useInitialization";

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  useInitialization();

  return (
    <div className="AppWrapper h-screen">
      <AntdRegistry>
        <NavBar />
        <main>{children}</main>
      </AntdRegistry>
    </div>
  );
};
