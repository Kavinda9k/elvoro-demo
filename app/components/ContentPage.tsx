import Link from "next/link";

type ContentPageProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

export default function ContentPage({
  eyebrow,
  title,
  children,
}: ContentPageProps) {
  return (
    <div className="mx-auto max-w-180 px-5 pb-24 pt-16 sm:px-6 sm:pb-32 sm:pt-24">
      <div className="mb-3 font-mono text-[12px] font-medium uppercase tracking-[0.08em] text-accent sm:text-[12.5px]">
        {eyebrow}
      </div>
      <h1
        className="m-0 mb-8 font-extrabold leading-[1.1] tracking-[-0.02em]"
        style={{ fontSize: "clamp(30px, 6.4vw, 46px)" }}
      >
        {title}
      </h1>

      <div className="flex flex-col gap-5 text-[15.5px] leading-[1.65] text-fg-dim">
        {children}
      </div>

      <Link
        href="/"
        className="mt-10 inline-block text-[15px] font-semibold text-accent"
      >
        ← Back to home
      </Link>
    </div>
  );
}
