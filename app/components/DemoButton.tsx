"use client";

import type { CSSProperties } from "react";
import { useDemoModal } from "./DemoModalProvider";

type DemoButtonProps = {
  children: React.ReactNode;
  className?: string;
  style?: CSSProperties;
  /** Fired in addition to opening the modal — e.g. to close the mobile nav. */
  onActivate?: () => void;
};

/**
 * Every "Book a demo" / "Start free" call to action. It opens a dialog rather
 * than navigating, so it is a button, not a link.
 */
export default function DemoButton({
  children,
  className,
  style,
  onActivate,
}: DemoButtonProps) {
  const { openDemoModal } = useDemoModal();

  return (
    <button
      type="button"
      onClick={() => {
        onActivate?.();
        openDemoModal();
      }}
      className={className}
      style={style}
    >
      {children}
    </button>
  );
}
