import type { Metadata } from "next";
import ContentPage from "../components/ContentPage";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Elvoro handles personal data.",
};

export default function PrivacyPage() {
  return (
    <ContentPage eyebrow="privacy" title="Privacy Policy">
      <p className="m-0">
        Elvoro is a portfolio demo, not a real company, so this page is a
        placeholder rather than a published privacy policy.
      </p>
      <p className="m-0">
        Nothing on this site is transmitted anywhere. The &ldquo;Book a
        demo&rdquo; form is handled entirely in the browser — there is no
        backend, no database, and no analytics or tracking scripts. Whatever you
        type into it is discarded when you close the tab.
      </p>
    </ContentPage>
  );
}
