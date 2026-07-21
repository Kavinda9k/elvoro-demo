"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import DemoModal from "./DemoModal";

type DemoModalContextValue = {
  openDemoModal: () => void;
  closeDemoModal: () => void;
};

const DemoModalContext = createContext<DemoModalContextValue | null>(null);

export function useDemoModal() {
  const ctx = useContext(DemoModalContext);
  if (!ctx) {
    throw new Error("useDemoModal must be used within a <DemoModalProvider>");
  }
  return ctx;
}

export default function DemoModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const openDemoModal = useCallback(() => setOpen(true), []);
  const closeDemoModal = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ openDemoModal, closeDemoModal }),
    [openDemoModal, closeDemoModal],
  );

  return (
    <DemoModalContext value={value}>
      {children}
      {open && <DemoModal onClose={closeDemoModal} />}
    </DemoModalContext>
  );
}
