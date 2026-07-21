import Link from "next/link";

const footerNav = [
  {
    heading: "Product",
    links: [
      { href: "/#products", label: "Signal" },
      { href: "/#products", label: "Broadcast" },
      { href: "/#products", label: "Forge" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/#pricing", label: "Pricing" },
      { href: "/docs", label: "Docs" },
      { href: "/#company", label: "Company" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer id="company">
      <div className="mx-auto grid max-w-300 grid-cols-2 gap-10 px-5 pb-10 pt-12 sm:px-6 sm:pb-12 sm:pt-16 md:flex md:flex-wrap md:justify-between md:gap-14">
        <div className="col-span-2 md:min-w-50 md:flex-[1_1_220px]">
          <div className="mb-3 flex items-center gap-2.5 text-[18px] font-extrabold tracking-[-0.02em]">
            <span className="h-5 w-5 rounded-md bg-accent" />
            Elvoro
            <span className="rounded-full border border-white/[0.14] bg-white/6 px-1.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-fg-faint">
              Demo
            </span>
          </div>
          <p className="m-0 max-w-60 text-[14px] leading-normal text-fg-faint">
            Agentic marketing for B2B teams that move fast.
          </p>
        </div>

        {footerNav.map((group) => (
          <nav
            key={group.heading}
            aria-label={group.heading}
            className="md:min-w-35 md:flex-[1_1_140px]"
          >
            <h2 className="m-0 mb-4 font-mono text-[12px] font-medium uppercase tracking-[0.06em] text-fg-faint">
              {group.heading}
            </h2>
            <div className="flex flex-col gap-2.75 text-[14.5px]">
              {group.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-fg-muted"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        ))}
      </div>

      <div className="mx-auto max-w-300 border-t border-white/8 px-5 pb-10 pt-6 text-[13px] text-fg-faint sm:px-6">
        © {new Date().getFullYear()} Elvoro, Inc.
      </div>
    </footer>
  );
}
