import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://projex.studio"; // EDITME: real domain once live

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ProjeX: we build your project and get you viva-ready",
  description:
    "ProjeX builds real academic projects for engineering students and coaches you to defend them in the viva. Working code, a clean report, and viva prep so the project is genuinely yours.",
  applicationName: "ProjeX",
  keywords: [
    "engineering final year project",
    "mini project",
    "major project",
    "viva preparation",
    "academic project help India",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "ProjeX: we build your project and get you viva-ready",
    description:
      "Real working projects for engineering students, plus the prep to defend them calmly in your viva.",
    url: SITE_URL,
    siteName: "ProjeX",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "ProjeX: we build your project and get you viva-ready",
    description:
      "Real working projects for engineering students, plus the prep to defend them in your viva.",
  },
};

export const viewport: Viewport = {
  themeColor: "#FBFAF6",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="min-h-[100dvh] bg-paper text-ink font-body">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
