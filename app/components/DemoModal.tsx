"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

const inputClass =
  "w-full rounded-lg border border-white/[0.12] bg-panel-dark px-3.5 py-2.5 text-[16px] text-fg outline-none transition-colors placeholder:text-fg-faint focus:border-accent sm:text-[14.5px]";

const labelClass =
  "mb-1.5 block font-mono text-[11.5px] font-medium uppercase tracking-[0.06em] text-fg-faint";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

type DemoModalProps = {
  onClose: () => void;
};

/**
 * Mounted only while open — the provider unmounts it on close, so form state
 * resets for free on the next open.
 */
export default function DemoModal({ onClose }: DemoModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialog.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const items = Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  useEffect(() => {
    if (submitted) dialogRef.current?.focus();
  }, [submitted]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-100 flex items-start justify-center overflow-y-auto overscroll-contain px-4 py-6 sm:items-center sm:px-5 sm:py-8"
      style={{
        background: "var(--overlay)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        animation: "modalFade 0.25s ease both",
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        tabIndex={-1}
        className="relative my-auto w-full max-w-115 rounded-2xl border border-white/10 bg-panel p-5 outline-none sm:p-7"
        style={{
          boxShadow:
            "0 40px 90px -30px oklch(0 0 0 / 0.7), 0 0 0 1px oklch(1 0 0 / 0.02)",
          animation: "modalPop 0.35s cubic-bezier(0.22, 1, 0.36, 1) both",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-[16px] text-fg-muted transition-colors hover:border-white/20 hover:text-fg"
        >
          ✕
        </button>

        {submitted ? (
          <div className="py-6 text-center">
            <div
              className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full text-[22px] font-bold text-ink"
              style={{
                background: "var(--accent)",
                boxShadow: "0 0 30px var(--accent-glow)",
              }}
            >
              ✓
            </div>
            <h2
              id="demo-modal-title"
              className="m-0 mb-2 text-[22px] font-extrabold tracking-[-0.02em]"
            >
              You’re on the list.
            </h2>
            <p className="mx-auto m-0 mb-7 max-w-80 text-[14.5px] leading-[1.55] text-fg-dim">
              Thanks for your interest in Elvoro — someone from our team will
              reach out within one business day to schedule your demo.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg bg-accent px-6 py-2.5 text-[14.5px] font-bold text-ink"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6 pr-8">
              <h2
                id="demo-modal-title"
                className="m-0 mb-2.5 flex items-center gap-2.5 text-[17px] font-extrabold tracking-[-0.02em]"
              >
                <span
                  className="h-4.5 w-4.5 flex-none rounded-md bg-accent"
                  style={{ boxShadow: "0 0 14px var(--accent-glow)" }}
                />
                Book a demo
              </h2>
              <p className="m-0 text-[14.5px] leading-normal text-fg-dim">
                See Elvoro’s agents in action. Tell us a bit about your team and
                we’ll set up a walkthrough.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="demo-name" className={labelClass}>
                  Full name
                </label>
                <input
                  id="demo-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Jordan Rivera"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="demo-email" className={labelClass}>
                  Work email
                </label>
                <input
                  id="demo-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="jordan@company.com"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="demo-company" className={labelClass}>
                  Company
                </label>
                <input
                  id="demo-company"
                  name="company"
                  type="text"
                  required
                  autoComplete="organization"
                  placeholder="Acme Inc."
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="demo-team" className={labelClass}>
                  Team size
                </label>
                <select
                  id="demo-team"
                  name="teamSize"
                  defaultValue=""
                  required
                  className={`${inputClass} appearance-none`}
                >
                  <option value="" disabled>
                    Select team size…
                  </option>
                  <option value="1-10">1–10</option>
                  <option value="11-50">11–50</option>
                  <option value="51-200">51–200</option>
                  <option value="200+">200+</option>
                </select>
              </div>
              <div>
                <label htmlFor="demo-goal" className={labelClass}>
                  What do you want to automate?
                </label>
                <textarea
                  id="demo-goal"
                  name="goal"
                  rows={3}
                  placeholder="Competitor research, social posting, content drafts…"
                  className={`${inputClass} resize-none`}
                />
              </div>
              <button
                type="submit"
                className="mt-1 rounded-lg bg-accent py-3 text-[15px] font-bold text-ink"
                style={{ boxShadow: "0 10px 30px -10px var(--accent-glow)" }}
              >
                Request demo
              </button>
              <p className="m-0 text-center text-[12px] text-fg-faint">
                No spam. We’ll only use this to reach out about your demo.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
