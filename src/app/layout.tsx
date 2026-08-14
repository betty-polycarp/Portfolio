import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { profile } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name}, ${profile.role}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  applicationName: `${profile.name} portfolio`,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  keywords: [
    "Betty Polycarp",
    "software engineer",
    "full stack developer",
    "Laravel developer",
    "Livewire",
    "React",
    "Next.js",
    "PHP",
    "REST APIs",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: profile.siteUrl,
    siteName: `${profile.name} portfolio`,
    title: `${profile.name}, ${profile.role}`,
    description: profile.summary,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name}, ${profile.role}`,
    description: profile.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
};

/** Structured data so search results can resolve the person behind the site. */
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  url: profile.siteUrl,
  description: profile.summary,
  knowsAbout: [
    "PHP",
    "Laravel",
    "Livewire",
    "JavaScript",
    "React",
    "Next.js",
    "MySQL",
    "REST API design",
    "Software testing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {/* No noscript reveal override needed: content renders visible and the
            reveal script is the only thing that ever hides it. */}
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
