"use client";

import type { ReactNode } from "react";

export function SnapSection({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

type PageScrollShellProps = {
  children: ReactNode;
  className?: string;
  snap?: boolean;
  smoothScroll?: boolean;
};

export default function PageScrollShell({
  children,
  className = "bg-stone",
}: Readonly<PageScrollShellProps>) {
  return (
    <div
      className={`home-scroll-experience relative min-h-screen overflow-x-clip ${className}`.trim()}
    >
      {children}
    </div>
  );
}
