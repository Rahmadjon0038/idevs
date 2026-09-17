"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import * as React from "react";

export function Logo({
  className,
  height = 28,
}: {
  className?: string;
  height?: number;
}) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const src =
    mounted && resolvedTheme === "dark" ? "/dark-logo.svg" : "/light-logo.svg";

  return (
    <Image
      src={src}
      alt="iDevs"
      width={1000}
      height={400.7}
      priority
      className={className}
      style={{ height, width: "auto" }}
    />
  );
}
