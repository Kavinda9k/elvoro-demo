"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is an agentic marketing platform?",
    a: "It’s marketing software with autonomous agents that plan and act on their own — researching your market, drafting posts, and writing content continuously, instead of waiting for you to prompt each task.",
  },
  {
    q: "Does content auto-publish without me?",
    a: "No. Every agent stops at a human approval step. Nothing goes live — a post, a reply, an article — until someone on your team signs off.",
  },
  {
    q: "How is this different from ChatGPT or a scheduler?",
    a: "ChatGPT waits for a prompt and a scheduler waits for a calendar slot. Elvoro’s agents run continuously in the background, deciding what to research, draft, and queue on their own.",
  },
  {
    q: "What does Elvoro integrate with?",
    a: "Native integrations with the major social platforms, CRMs, and CMSs, plus an API and webhooks on the Scale plan for custom pipelines.",
  },
  {
    q: "How do you keep brand voice safe?",
    a: "Every agent is calibrated against your brand guidelines, style examples, and approved messaging during onboarding, and every output still passes through your approval layer before publishing.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div className="flex flex-col">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={item.q} className="border-t border-white/[0.08]">
            <button
              type="button"
              id={buttonId}
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full cursor-pointer items-center justify-between gap-4 px-1 py-5 text-left sm:gap-5 sm:py-5.5"
            >
              <span className="text-[15.5px] font-semibold leading-[1.4] sm:text-[16.5px]">{item.q}</span>
              <span
                className="flex-none font-mono text-[18px] font-normal text-accent transition-transform duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
              >
                +
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!isOpen}
              className="grid overflow-hidden transition-[grid-template-rows] duration-450 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr", willChange: "grid-template-rows" }}
            >
              <div className="min-h-0 overflow-hidden">
                <p
                  className="max-w-165 px-1 pb-5 text-[14.5px] leading-[1.6] text-fg-dim transition-opacity duration-450 ease-out sm:pb-6 sm:text-[15px]"
                  style={{ opacity: isOpen ? 1 : 0 }}
                >
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
