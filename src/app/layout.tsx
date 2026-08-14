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

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})()`;

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
      // The theme script below writes data-theme before React hydrates.
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        {/* Applies a saved theme choice before the first paint, so an override
            never flashes the other theme. Deliberately the first thing in the
            body and deliberately not a module: it must run synchronously.
            With no stored choice the attribute stays unset and CSS falls back
            to the system preference, so this failing is harmless. */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />

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
