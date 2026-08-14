import { footer, profile, socialLinks } from "@/lib/content";
import { Container } from "@/components/ui/primitives";

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-10">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-ink">{profile.name}</p>
            <p className="mt-1 text-sm text-faint">{profile.role}</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-sm text-muted transition-colors duration-200 hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-muted transition-colors duration-200 hover:text-ink"
            >
              Email
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-1 border-t border-line pt-6 sm:flex-row sm:justify-between">
          <p className="font-mono text-xs text-faint">{footer.copyright}</p>
          <p className="font-mono text-xs text-faint">{footer.note}</p>
        </div>
      </Container>
    </footer>
  );
}
