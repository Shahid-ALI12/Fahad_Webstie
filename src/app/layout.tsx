import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maxobiz — Expert Digital Solutions for Every Business",
  description: "Maxobiz delivers expert digital solutions — web development, digital marketing, branding & design. Trusted by 4,050+ clients with 99% satisfaction.",
  keywords: ["Maxobiz", "digital agency", "web development", "digital marketing", "branding", "n8n", "React", "Vue", "Node.js"],
  authors: [{ name: "Maxobiz" }],
  openGraph: {
    title: "Maxobiz — Expert Digital Solutions",
    description: "Real progress starts with smart execution. We deliver results through expert strategy.",
    siteName: "Maxobiz",
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
        className={`${inter.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
