"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import DemoButton from "./DemoButton";

const navLinks = [
  { href: "/#products", label: "Product" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
  { href: "/#company", label: "Company" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    mq.addEventListener("change", onChange);
    document.addEventListener("keydown", onKey);
    return () => {
      mq.removeEventListener("change", onChange);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/8 backdrop-blur-[14px]"
      style={{ background: "var(--bg-translucent)" }}
    >
      <div className="mx-auto flex max-w-300 items-center justify-between gap-4 px-5 py-3.5 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[18px] font-extrabold tracking-[-0.02em] text-fg sm:text-[19px]"
        >
          <span
            className="h-5.5 w-5.5 flex-none rounded-md bg-accent"
            style={{ boxShadow: "0 0 18px var(--accent-glow)" }}
          />
          Elvoro
          <span className="rounded-full border border-white/[0.14] bg-white/6 px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-fg-faint">
            Demo
          </span>
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center gap-7 text-[14.5px] font-medium text-fg-dim md:flex"
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-inherit">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <DemoButton className="rounded-lg border border-white/[0.14] px-4 py-2.25 text-[14.5px] font-semibold text-fg">
            Book a demo
          </DemoButton>
          <DemoButton className="rounded-lg bg-accent px-4.5 py-2.25 text-[14.5px] font-bold text-ink">
            Start free
          </DemoButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-1 flex h-10 w-10 flex-none items-center justify-center rounded-lg border border-white/[0.14] md:hidden"
        >
          <span className="relative block h-2.25 w-4.5">
            <span
              className="absolute left-0 top-0 block h-0.5 w-full rounded-full bg-fg transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: open ? "translateY(3.5px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="absolute bottom-0 left-0 block h-0.5 w-full rounded-full bg-fg transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: open ? "translateY(-3.5px) rotate(-45deg)" : "none",
              }}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        inert={!open}
        className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0 overflow-hidden">
          <nav
            aria-label="Mobile"
            className="flex flex-col border-t border-white/8 px-5 pb-5 pt-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-[16px] font-medium text-fg-muted"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2.5">
              <DemoButton
                onActivate={() => setOpen(false)}
                className="rounded-lg border border-white/[0.14] px-4 py-3 text-center text-[15px] font-semibold text-fg"
              >
                Book a demo
              </DemoButton>
              <DemoButton
                onActivate={() => setOpen(false)}
                className="rounded-lg bg-accent px-4 py-3 text-center text-[15px] font-bold text-ink"
              >
                Start free
              </DemoButton>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
