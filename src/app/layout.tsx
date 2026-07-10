import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

// "Bierika" requested — not available on Google Fonts (commercial font).
// Using "Bricolage Grotesque" as the closest modern geometric sans-serif alternative.
// If user supplies an actual Bierika font file, swap this for next/font/local.
const bierika = Bricolage_Grotesque({
  variable: "--font-bierika",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Combite — Expert Digital Solutions for Every Business",
  description: "Combite delivers expert digital solutions — web development, digital marketing, branding & design. Trusted by 4,050+ clients with 99% satisfaction.",
  keywords: ["Combite", "digital agency", "web development", "digital marketing", "branding", "n8n", "React", "Vue", "Node.js"],
  authors: [{ name: "Combite" }],
  openGraph: {
    title: "Combite — Expert Digital Solutions",
    description: "Real progress starts with smart execution. We deliver results through expert strategy.",
    siteName: "Combite",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bierika.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
