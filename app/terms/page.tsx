import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of service for the Elvoro platform.",
};

export default function TermsPage() {
  return (
    <ContentPage eyebrow="terms" title="Terms of Service">
      <p className="m-0">
        Elvoro is a portfolio demo, not a real company, so this page is a
        placeholder rather than an enforceable agreement.
      </p>
      <p className="m-0">
        The product, pricing, and customer names shown throughout this site are
        fictional and exist only to demonstrate the front-end build.
      </p>
    </ContentPage>
  );
}
