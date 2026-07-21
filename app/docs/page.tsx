import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "Developer and operator documentation for Elvoro's Signal, Broadcast and Forge agents.",
};

export default function DocsPage() {
  return (
    <ContentPage eyebrow="docs" title="Documentation">
      <p className="m-0">
        Elvoro is a portfolio demo, so there is no product behind this page yet.
        In the real thing, this is where onboarding guides, agent configuration
        reference, and the API docs for the Scale plan would live.
      </p>
      <p className="m-0">
        The marketing site itself is the deliverable: a Next.js App Router
        project with a design-token-driven Tailwind theme, scroll-reveal
        animation that degrades gracefully without JavaScript, and a fully
        keyboard-navigable demo request dialog.
      </p>
    </ContentPage>
  );
}
