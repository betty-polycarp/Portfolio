import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Stack } from "@/components/stack";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Process } from "@/components/process";
import { TechnicalThinking } from "@/components/technical-thinking";
import { Writing } from "@/components/writing";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

/**
 * Nine sections, nine layout families:
 * hero split, editorial split, bento, timeline, asymmetric showcase,
 * horizontal rail, large type statements, list plus cluster, minimal CTA.
 */
export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:text-accent-ink"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="flex-1">
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Projects />
        <Process />
        <TechnicalThinking />
        <Writing />
        <Contact />
      </main>

      <SiteFooter />
    </>
  );
}
