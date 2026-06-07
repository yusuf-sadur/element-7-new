import type { ReactNode } from "react";

type ParallaxMediaProps = {
  children: ReactNode;
  speed?: number;
  className?: string;
};

export default function ParallaxMedia({
  children,
  className = "",
}: Readonly<ParallaxMediaProps>) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`.trim()}>
      {children}
    </div>
  );
}
