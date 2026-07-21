import type { Metadata } from "next";
import ContentPage from "./components/ContentPage";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <ContentPage eyebrow="404" title="This page ran off.">
      <p className="m-0">
        The page you were looking for doesn&rsquo;t exist. Try the product,
        pricing, or FAQ sections on the home page instead.
      </p>
    </ContentPage>
  );
}
