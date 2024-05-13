"use client";
import { type ReactNode } from "react";
import { ConfigProvider, theme } from "antd";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import { Modal } from "@/components/reusable/modal";
import { Navigation } from "@/components/navigation";
import { useInitialization } from "@/hooks/useInitialization";

export const AppWrapper = ({
  children,
  userData,
}: {
  children: ReactNode;
  userData: IUserData;
}) => {
  useInitialization(userData);

  return (
    <div className="AppWrapper h-screen">
      <ConfigProvider theme={{ algorithm: [theme.darkAlgorithm] }}>
        <AntdRegistry>
          <Navigation />
          <main className="container mx-auto p-10">{children}</main>
          <Modal />
        </AntdRegistry>
      </ConfigProvider>
    </div>
  );
};
