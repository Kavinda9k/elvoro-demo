import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import DemoModalProvider from "./components/DemoModalProvider";
import SiteNav from "./components/SiteNav";
import SiteFooter from "./components/SiteFooter";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const title = "Elvoro — Marketing that runs itself";
const description =
  "Elvoro deploys AI agents across market research, social media, and content — working in the background, on your brand, at a scale no human team can match.";

export const metadata: Metadata = {
  metadataBase: new URL("https://elvoro.example.com"),
  title: {
    default: title,
    template: "%s — Elvoro",
  },
  description,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Elvoro",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "oklch(0.15 0.016 260)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        {/* Scroll-reveal starts at opacity 0 and is un-hidden by JS. Without
            this, a no-JS visitor would see an empty page. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <DemoModalProvider>
          <SiteNav />
          <main>{children}</main>
          <SiteFooter />
        </DemoModalProvider>
      </body>
    </html>
  );
}
