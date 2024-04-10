"use client";
import { type ReactNode } from "react";
import { ConfigProvider, theme } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { NavBar } from "@/components/navBar";
import { useInitialization } from "@/hooks/useInitialization";

export const AppWrapper = ({ children }: { children: ReactNode }) => {
  useInitialization();

  return (
    <div className="AppWrapper h-screen">
      <ConfigProvider theme={{ algorithm: [theme.darkAlgorithm] }}>
        <AntdRegistry>
          <NavBar />
          <main className="container mx-auto p-10">{children}</main>
        </AntdRegistry>
      </ConfigProvider>
    </div>
  );
};
