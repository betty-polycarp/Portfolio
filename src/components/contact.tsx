import { contact, cta, profile, socialLinks } from "@/lib/content";
import { ButtonLink, Container } from "@/components/ui/primitives";
import { CopyEmail } from "@/components/copy-email";
import { Reveal } from "@/components/ui/reveal";

/**
 * Layout family: minimal CTA.
 * One statement, one action, one address. No form, so there is nothing here
 * that can silently fail to send.
 */
export function Contact() {
  return (
    <section id="contact" className="border-t border-line py-24 md:py-32 lg:py-40">
      <Container>
        <Reveal>
          <h2 className="max-w-[15ch] text-4xl font-medium tracking-tight text-ink md:text-6xl lg:text-7xl lg:leading-[1.02]">
            {contact.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.06}>
          <p className="mt-7 max-w-[52ch] text-base leading-relaxed text-muted md:text-lg">
            {contact.body}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 flex flex-col gap-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={`mailto:${profile.email}`}>
                {cta.contact}
              </ButtonLink>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 sm:pl-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-muted underline decoration-line underline-offset-4 transition-colors duration-200 hover:text-ink hover:decoration-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <CopyEmail />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
