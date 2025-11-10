"use client";

import { ReactNode } from "react";
import { LoadingScreen } from "./loading-screen";

interface PageWrapperProps {
  children: ReactNode;
}

export function PageWrapper({ children }: PageWrapperProps) {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen">{children}</div>
    </>
  );
}

