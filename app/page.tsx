import Reveal from "./components/Reveal";
import Faq from "./components/Faq";
import DemoButton from "./components/DemoButton";

const heroRows = [
  { letter: "S", title: "Signal", detail: "Scanning 12 competitors…" },
  { letter: "B", title: "Broadcast", detail: "4 posts queued for review" },
  { letter: "F", title: "Forge", detail: "Drafted: “Q3 GTM playbook”" },
];

const logos = ["Northwind", "Ackerly", "Loambox", "Vireo", "Palo Systems"];

const products = [
  {
    key: "signal",
    icon: "signal" as const,
    name: "Signal",
    tagline: "Agentic industry analysis",
    dir: "row" as const,
    bullets: [
      "Always-on competitor monitoring",
      "Funding, hiring, and launch alerts",
      "Weekly sourced market brief",
    ],
    panelLines: ["85%", "60%", "72%"],
  },
  {
    key: "broadcast",
    icon: "broadcast" as const,
    name: "Broadcast",
    tagline: "B2B social management",
    dir: "row-reverse" as const,
    bullets: [
      "On-brand posts drafted and queued",
      "Self-adjusting posting cadence",
      "Reply triage across channels",
    ],
    panelLines: ["65%", "80%", "50%"],
  },
  {
    key: "forge",
    icon: "forge" as const,
    name: "Forge",
    tagline: "AI content at scale",
    dir: "row" as const,
    bullets: [
      "SEO/AEO-structured drafts with schema",
      "Brand voice locked to your guidelines",
      "Human approval before anything publishes",
    ],
    panelLines: ["90%", "55%", "68%"],
  },
];

const steps = [
  {
    num: "01",
    title: "Connect",
    body: "Link your socials, CRM, and content stack in minutes — no migration required.",
  },
  {
    num: "02",
    title: "Calibrate",
    body: "Teach your agents your brand voice, audience, and competitive set.",
  },
  {
    num: "03",
    title: "Deploy",
    body: "Agents start researching, drafting, and queuing — you approve, they ship.",
  },
];

const pricing = [
  {
    name: "Starter",
    price: "$99",
    period: "/mo",
    description: "One agent, single workspace.",
    features: [
      "One agent of your choice",
      "Single workspace",
      "Weekly briefs",
      "Email support",
    ],
    cta: "Start free",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$399",
    period: "/mo",
    description: "All three agents, full approval workflows.",
    features: [
      "Signal, Broadcast & Forge",
      "Human approval workflows",
      "3 seats",
      "Priority chat support",
    ],
    cta: "Start free",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "",
    description: "Multi-brand, API access, priority support.",
    features: [
      "Multi-brand workspaces",
      "Full API access",
      "Priority support & SLA",
      "Dedicated onboarding",
    ],
    cta: "Book a demo",
    highlighted: false,
  },
];

function ProductIcon({ type }: { type: "signal" | "broadcast" | "forge" }) {
  if (type === "signal") {
    return (
      <div className="flex items-end gap-0.75">
        <div className="h-2.5 w-1 rounded-[1px] bg-accent" />
        <div className="h-4 w-1 rounded-[1px] bg-accent" />
        <div className="h-5.5 w-1 rounded-[1px] bg-accent" />
      </div>
    );
  }
  if (type === "broadcast") {
    return (
      <div className="relative h-6 w-6">
        <div className="absolute inset-0 rounded-full border-2 border-accent opacity-35" />
        <div className="absolute inset-1.25 rounded-full border-2 border-accent opacity-65" />
        <div className="absolute inset-2.25 rounded-full bg-accent" />
      </div>
    );
  }
  return (
    <div className="relative h-5.5 w-6">
      <div
        className="absolute left-0.5 top-0 h-4 w-4.5 rounded bg-panel-dark opacity-40"
        style={{ border: "2px solid var(--accent)" }}
      />
      <div
        className="absolute bottom-0 right-0.5 h-4 w-4.5 rounded bg-panel-dark"
        style={{ border: "2px solid var(--accent)" }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        aria-labelledby="hero-title"
        className="relative overflow-hidden"
      >
        <div
          className="absolute -left-30 -top-40 h-130 w-130 rounded-full"
          style={{
            background: "var(--aurora-a)",
            filter: "blur(90px)",
            animation: "auroraA 16s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -right-40 -top-15 h-120 w-120 rounded-full"
          style={{
            background: "var(--aurora-b)",
            filter: "blur(90px)",
            animation: "auroraB 18s ease-in-out infinite",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(oklch(1 0 0 / 0.05) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />

        <div className="relative mx-auto flex max-w-300 flex-wrap items-center gap-12 px-5 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-27.5 lg:gap-14">
          <div
            className="w-full min-w-0 flex-[1_1_460px]"
            style={{
              animation: "fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
            }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-white/4 px-3 py-1.5 text-[12.5px] font-semibold text-fg-muted sm:mb-6 sm:text-[13px]">
              <div
                className="h-1.5 w-1.5 rounded-full bg-accent"
                style={{ animation: "pulseDot 2s ease-in-out infinite" }}
              />
              Now booking Q3 onboarding
            </div>
            <h1
              id="hero-title"
              className="m-0 mb-5 font-extrabold leading-[1.05] tracking-[-0.03em] sm:mb-6 sm:leading-[1.03]"
              style={{ fontSize: "clamp(34px, 8vw, 66px)" }}
            >
              Marketing that{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, var(--accent), var(--accent-alt))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                runs itself.
              </span>
            </h1>
            <p className="m-0 mb-8 max-w-130 text-[16.5px] leading-[1.55] text-fg-dim sm:mb-9 sm:text-[19px]">
              Elvoro deploys AI agents across market research, social media, and
              content — working in the background, on your brand, at a scale no
              human team can match.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <DemoButton
                className="w-full rounded-[9px] bg-accent px-6 py-3.25 text-center text-[15.5px] font-bold text-ink sm:w-auto"
                style={{
                  boxShadow:
                    "0 0 0 1px oklch(1 0 0 / 0.1) inset, 0 10px 30px -8px var(--accent-glow)",
                }}
              >
                Start free
              </DemoButton>
              <DemoButton className="w-full rounded-[9px] border border-white/16 px-6 py-3.25 text-center text-[15.5px] font-semibold text-fg sm:w-auto">
                Book a demo
              </DemoButton>
            </div>
          </div>

          <div className="flex w-full min-w-0 flex-[1_1_420px] justify-center">
            <div
              className="relative w-full max-w-110"
              style={{ animation: "floatY 6s ease-in-out infinite" }}
            >
              <div className="pointer-events-none absolute -left-7.5 top-3.5 hidden h-30 w-30 sm:block">
                <div
                  className="absolute h-full w-full rounded-full border border-dashed border-white/15"
                  style={{ animation: "spinSlow 22s linear infinite" }}
                />
                <div className="absolute left-1.5 top-1.5 h-2 w-2 rounded-full bg-accent" />
                <div
                  className="absolute bottom-2.5 right-0.5 h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--accent-alt)" }}
                />
              </div>
              <div
                className="relative rounded-2xl border border-white/10 bg-panel p-4 sm:p-5.5"
                style={{
                  boxShadow:
                    "0 40px 80px -30px oklch(0 0 0 / 0.6), 0 0 0 1px oklch(1 0 0 / 0.02)",
                }}
              >
                <div className="mb-4.5 flex items-center justify-between">
                  <div className="text-[13.5px] font-bold text-fg-soft">
                    Agent activity
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] font-semibold text-accent">
                    <div
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                      style={{
                        animation: "pulseDot 1.6s ease-in-out infinite",
                      }}
                    />
                    Live
                  </div>
                </div>
                {heroRows.map((row) => (
                  <div
                    key={row.letter}
                    className="flex items-center gap-3 border-t border-white/[0.07] py-3"
                  >
                    <div
                      className="flex h-8 w-8 flex-none items-center justify-center rounded-[9px] text-[13px] font-bold text-accent"
                      style={{ background: "var(--accent-soft)" }}
                    >
                      {row.letter}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[13.5px] font-semibold text-fg">
                        {row.title}
                      </div>
                      <div className="text-[12.5px] text-fg-faint">
                        {row.detail}
                      </div>
                    </div>
                    <div className="flex h-5 flex-none items-end gap-0.5">
                      <div className="h-2 w-0.75 rounded-xs bg-white/12" />
                      <div className="h-3.5 w-0.75 rounded-xs bg-white/12" />
                      <div className="h-5 w-0.75 rounded-xs bg-accent" />
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="absolute -bottom-4.5 right-1 flex items-center gap-2 rounded-xl border border-white/12 bg-panel px-3 py-2.5 sm:-right-3.5 sm:px-4 sm:py-3"
                style={{ boxShadow: "0 16px 30px -14px oklch(0 0 0 / 0.6)" }}
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[12px] font-bold text-ink">
                  ✓
                </div>
                <div className="text-[12.5px] font-semibold text-fg-soft">
                  Approved by Jordan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO STRIP */}
      <section
        aria-label="Customers"
        className="mx-auto max-w-300 px-5 pb-16 sm:px-6 sm:pb-22"
      >
        <Reveal className="mb-7 text-center font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-fg-faint sm:text-[12.5px]">
          {"Trusted by fast-moving B2B teams"}
        </Reveal>
        <div
          className="overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
            WebkitMaskImage:
              "linear-gradient(90deg, transparent, black 12%, black 88%, transparent)",
          }}
        >
          <div
            className="flex w-max items-center gap-10 sm:gap-16"
            style={{ animation: "marquee 22s linear infinite" }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo}-${i}`}
                className="whitespace-nowrap text-[17px] font-bold tracking-[-0.01em] text-fg-faint sm:text-[19px]"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        aria-labelledby="products-title"
        className="mx-auto max-w-300 px-5 py-10 sm:px-6 sm:py-15"
      >
        <div className="mx-auto mb-12 max-w-160 text-center sm:mb-18">
          <div className="mb-3 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-accent sm:text-[12.5px]">
            {"product"}
          </div>
          <h2
            id="products-title"
            className="m-0 font-extrabold leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(26px, 6vw, 42px)" }}
          >
            Three agents. One team.
          </h2>
        </div>

        {products.map((p, i) => (
          <Reveal
            key={p.key}
            delay={i * 0.05}
            className={`flex flex-col gap-8 border-t border-white/8 py-10 md:flex-wrap md:items-center md:gap-14 md:py-13 ${
              p.dir === "row-reverse" ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <div className="w-full min-w-0 md:min-w-75 md:flex-[1_1_420px]">
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 sm:mb-5.5"
                style={{ background: "var(--accent-soft)" }}
              >
                <ProductIcon type={p.icon} />
              </div>
              <h3 className="m-0 mb-1.5 text-[23px] font-extrabold tracking-[-0.02em] sm:text-[26px]">
                {p.name}
              </h3>
              <div className="mb-4 text-[15px] font-semibold text-fg-dim sm:mb-4.5 sm:text-[16px]">
                {p.tagline}
              </div>
              <div className="flex flex-col gap-3">
                {p.bullets.map((b) => (
                  <div
                    key={b}
                    className="flex items-start gap-2.5 text-[14.5px] leading-normal text-fg-soft sm:text-[15px]"
                  >
                    <div className="mt-2 h-1.25 w-1.25 flex-none rounded-full bg-accent" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full min-w-0 md:min-w-75 md:flex-[1_1_380px]">
              <div
                className="flex min-h-42.5 flex-col justify-center gap-3.5 rounded-lg border border-white/10 p-5 sm:min-h-55 sm:p-7"
                style={{
                  background: "var(--panel-dark)",
                  backgroundImage:
                    "radial-gradient(oklch(1 0 0 / 0.08) 1px, transparent 1px)",
                  backgroundSize: "16px 16px",
                }}
              >
                <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.06em] text-fg-faint">
                  {p.key}.log
                </div>
                {p.panelLines.map((line, li) => (
                  <div
                    key={li}
                    className="h-2.5 rounded-xs"
                    style={{ width: line, background: "var(--accent-soft)" }}
                  />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      {/* HOW IT WORKS */}
      <section
        aria-labelledby="how-title"
        className="relative overflow-hidden bg-panel-dark px-5 py-16 sm:px-6 sm:py-22"
      >
        <div className="relative mx-auto max-w-300">
          <Reveal className="mx-auto mb-10 max-w-150 text-center sm:mb-16">
            <div className="mb-3 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-accent-light sm:text-[12.5px]">
              {"how it works"}
            </div>
            <h2
              id="how-title"
              className="m-0 font-extrabold leading-[1.1] tracking-[-0.02em]"
              style={{ fontSize: "clamp(26px, 6vw, 42px)" }}
            >
              Live in an afternoon.
            </h2>
          </Reveal>
          <div className="relative flex flex-col overflow-hidden rounded-lg border border-white/10 sm:flex-row sm:flex-wrap">
            {steps.map((s, i) => (
              <Reveal
                key={s.num}
                delay={i * 0.05}
                className="border-t border-white/10 px-6 py-7 first:border-t-0 sm:min-w-65 sm:flex-[1_1_280px] sm:border-l sm:border-t-0 sm:px-7 sm:py-8"
              >
                <div className="mb-4 font-mono text-[13px] font-semibold text-accent-light sm:mb-4.5">
                  {s.num}
                </div>
                <h3 className="m-0 mb-2 text-[18px] font-bold tracking-[-0.01em] text-fg sm:text-[19px]">
                  {s.title}
                </h3>
                <p className="m-0 text-[14.5px] leading-[1.55] text-fg-dim">
                  {s.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIATOR */}
      <Reveal
        as="section"
        aria-labelledby="why-title"
        className="mx-auto max-w-240 px-5 py-16 text-center sm:px-6 sm:py-27.5"
      >
        <h2
          id="why-title"
          className="m-0 mb-8 font-extrabold leading-[1.12] tracking-[-0.02em] sm:mb-11"
          style={{ fontSize: "clamp(26px, 6.4vw, 44px)" }}
        >
          Not another AI tool.
          <br />A team of agents.
        </h2>
        <div className="mb-8 flex sm:min-w-120 sm:max-w-170 mx-auto flex-col justify-center overflow-hidden rounded-lg border border-white/10 sm:mb-9 sm:flex-row sm:flex-wrap">
          <div className="w-full p-5 text-left  sm:flex-[1_1_260px] sm:p-6">
            <div className="mb-3 font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-fg-faint">
              point tools
            </div>
            <div className="text-[14.5px] leading-[1.55] text-fg-dim sm:text-[15px]">
              Wait for a prompt. One task at a time, on your schedule.
            </div>
          </div>
          <div
            className="w-full border-t border-accent p-5 text-left  sm:flex-[1_1_260px] sm:border-l sm:border-t-0 sm:p-6"
            style={{ background: "var(--accent-soft)" }}
          >
            <div className="mb-3 font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-accent-light">
              elvoro agents
            </div>
            <div className="text-[14.5px] leading-[1.55] text-fg-soft sm:text-[15px]">
              Work continuously — researching, drafting, queuing — and pause
              only for your approval.
            </div>
          </div>
        </div>
        <p className="mx-auto m-0 max-w-140 text-[15px] leading-[1.6] text-fg-faint sm:text-[16px]">
          Every agent ships through a human approval layer, so autonomy never
          means losing control of your brand.
        </p>
      </Reveal>

      {/* PRICING */}
      <section
        id="pricing"
        aria-labelledby="pricing-title"
        className="mx-auto max-w-300 px-5 pb-16 pt-10 sm:px-6 sm:pb-25 sm:pt-15"
      >
        <div className="mx-auto mb-10 max-w-150 text-center sm:mb-15">
          <div className="mb-3 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-accent sm:text-[12.5px]">
            {" pricing"}
          </div>
          <h2
            id="pricing-title"
            className="m-0 font-extrabold leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(26px, 6vw, 42px)" }}
          >
            Simple, agent-based pricing.
          </h2>
        </div>
        <div className="flex flex-col items-stretch overflow-hidden rounded-lg border border-white/10 md:flex-row md:flex-wrap">
          {pricing.map((tier, i) => (
            <Reveal
              key={tier.name}
              delay={i * 0.05}
              className="relative flex flex-col border-t border-white/10 p-6 first:border-t-0 sm:p-8 md:min-w-70 md:flex-[1_1_300px] md:border-l md:border-t-0"
              style={{
                background: tier.highlighted
                  ? "var(--panel-accent)"
                  : "var(--panel)",
              }}
            >
              {tier.highlighted && (
                <div className="absolute inset-x-0 top-0 h-0.5 bg-accent" />
              )}
              <div className="mb-2 font-mono text-[14px] font-semibold uppercase tracking-[0.04em] text-fg">
                {tier.name}
              </div>
              <div className="mb-1.5 flex items-baseline gap-1.5">
                <div className="font-mono text-[34px] font-bold tracking-[-0.01em] text-fg">
                  {tier.price}
                </div>
                <div className="text-[14px] text-fg-faint">{tier.period}</div>
              </div>
              <div className="mb-6 text-[14.5px] text-fg-faint">
                {tier.description}
              </div>
              <div className="mb-7 flex flex-1 flex-col gap-3">
                {tier.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-start gap-2.5 text-[14.5px] text-fg"
                  >
                    <div
                      className="font-bold"
                      style={{
                        color: tier.highlighted
                          ? "var(--accent-light)"
                          : "var(--accent)",
                      }}
                    >
                      ✓
                    </div>
                    {f}
                  </div>
                ))}
              </div>
              <DemoButton
                className="rounded-md py-3 text-center text-[15px] font-bold"
                style={
                  tier.highlighted
                    ? { background: "var(--accent)", color: "var(--ink)" }
                    : {
                        background: "oklch(1 0 0 / 0.08)",
                        color: "var(--fg)",
                        border: "1px solid oklch(1 0 0 / 0.14)",
                      }
                }
              >
                {tier.cta}
              </DemoButton>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-title"
        className="mx-auto max-w-190 px-5 pb-16 pt-6 sm:px-6 sm:pb-25 sm:pt-10"
      >
        <div className="mb-8 text-center sm:mb-14">
          <h2
            id="faq-title"
            className="m-0 font-extrabold leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(26px, 6vw, 42px)" }}
          >
            Questions, answered.
          </h2>
        </div>
        <Faq />
      </section>

      {/* FINAL CTA */}
      <section
        aria-labelledby="cta-title"
        className="relative overflow-hidden bg-panel-dark px-5 py-16 text-center sm:px-6 sm:py-27.5"
      >
        <div
          className="absolute -top-25 left-1/2 h-75 w-150 max-w-[140vw] -translate-x-1/2 rounded-full bg-accent opacity-18"
          style={{ filter: "blur(100px)" }}
        />
        <div className="relative">
          <h2
            id="cta-title"
            className="m-0 mb-7 font-extrabold leading-[1.08] tracking-[-0.02em] text-fg sm:mb-8"
            style={{ fontSize: "clamp(28px, 7vw, 48px)" }}
          >
            Ship like a team ten times your size.
          </h2>
          <div className="mx-auto flex max-w-80 flex-col justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap">
            <DemoButton
              className="rounded-[9px] bg-accent px-6.5 py-3.5 text-[15.5px] font-bold text-ink"
              style={{ boxShadow: "0 10px 30px -8px var(--accent-glow)" }}
            >
              Start free
            </DemoButton>
            <DemoButton className="rounded-[9px] border border-white/20 px-6.5 py-3.5 text-[15.5px] font-semibold text-fg">
              Book a demo
            </DemoButton>
          </div>
        </div>
      </section>
    </>
  );
}
