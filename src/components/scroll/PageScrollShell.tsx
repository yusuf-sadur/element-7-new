"use client";

import { useRef, type ReactNode } from "react";
import { useHomeScrollEngine } from "@/components/home/parallax/useHomeScrollEngine";

export function SnapSection({ children }: { children: ReactNode }) {
  return <div data-snap-section>{children}</div>;
}

type PageScrollShellProps = {
  children: ReactNode;
  className?: string;
};

export default function PageScrollShell({
  children,
  className = "bg-stone",
}: Readonly<PageScrollShellProps>) {
  const containerRef = useRef<HTMLDivElement>(null);
  useHomeScrollEngine(containerRef);

  return (
    <div
      ref={containerRef}
      className={`home-scroll-experience relative min-h-screen overflow-x-clip ${className}`.trim()}
    >
      {children}
    </div>
  );
}
