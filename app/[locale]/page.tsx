import { Apple, ExternalLink, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedStat } from "@/components/animated-stat";
import { ContactForm } from "@/components/contact-form";
import { SiteNavbar } from "@/components/site-navbar";
import { Button } from "@/components/ui/button";
import { defaultLocale, getContent, isLocale } from "@/lib/i18n";

function ProjectLink({
  href,
  className,
  children,
}: {
  href?: string;
  className: string;
  children: React.ReactNode;
}) {
  if (!href) {
    return <div className={className}>{children}</div>;
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </Link>
  );
}

export default async function PortfolioPage({
  params,
}: {
  params: { locale: string } | Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;

  if (!isLocale(resolvedParams.locale)) {
    notFound();
  }

  const locale = resolvedParams.locale ?? defaultLocale;
  const content = getContent(locale);
  const { hero, nav, sections, labels, stacks, projects, about, contact, footer } =
    content;

  return (
    <>
      <SiteNavbar locale={locale} nav={nav} ctaLabel={hero.ctaPrimary} />

      <main className="mx-auto max-w-6xl px-6">
        {/* Hero / Header */}
        <section
          id="home"
          className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
          >
            <div className="absolute -top-24 left-1/2 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/25 via-violet-500/15 to-transparent blur-3xl sm:h-[480px] sm:w-[480px]" />
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {hero.title}{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                {hero.titleHighlight}
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full">
                <a href="#contact">{hero.ctaPrimary}</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent"
              >
                <a href="#projects">{hero.ctaSecondary}</a>
              </Button>
            </div>

            <dl className="mx-auto mt-16 grid max-w-xl grid-cols-3 gap-4 border-t border-border/60 pt-8">
              {hero.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-bold text-foreground sm:text-3xl">
                    <AnimatedStat value={stat.value} />
                  </dd>
                  <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* About + Stack */}
        <section
          id="about"
          className="scroll-mt-28 border-t border-border/60 py-20"
          aria-label={sections.about}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
            {sections.about}
          </h2>

          <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
            <div>
              {about.paragraphs.map((paragraph, index) => (
                <p
                  key={`${paragraph}-${index}`}
                  className="mb-4 leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div>
              <h3 className="mb-5 text-sm font-bold uppercase tracking-widest text-foreground">
                {sections.stacks}
              </h3>
              <div className="grid gap-5 sm:grid-cols-2">
                {stacks.map((stack) => (
                  <div
                    key={stack.title}
                    className="relative overflow-hidden rounded-2xl border border-primary/10 bg-secondary/40 p-5 shadow-sm transition-all hover:border-primary/30 hover:bg-secondary/60"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                      {labels.stack}
                    </p>
                    <p className="mt-1 text-lg font-semibold leading-tight text-foreground">
                      {stack.title}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {stack.summary}
                    </p>
                    <div className="mt-5 grid gap-2">
                      {stack.tools.map((tool) => (
                        <span
                          key={tool.name}
                          className="inline-flex items-center justify-between rounded-xl border border-primary/15 bg-background/60 px-3 py-2 text-xs font-medium text-foreground/90 shadow-[0_1px_0_rgba(255,255,255,0.04)]"
                        >
                          <span className="flex items-center gap-2">
                            <Image
                              src={tool.icon}
                              alt={tool.name}
                              width={18}
                              height={18}
                              sizes="16px"
                              className="h-4 w-4 object-contain"
                              loading="lazy"
                              decoding="async"
                            />
                            {tool.name}
                          </span>
                          <span
                            className="h-2 w-2 rounded-full bg-primary/60"
                            aria-hidden
                          />
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="scroll-mt-28 border-t border-border/60 py-20"
          aria-label={sections.projects}
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">
            {sections.projects}
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const webPlatform = project.platforms.find(
                (platform) => platform.type === "web",
              );
              const webHref = webPlatform?.href;

              const platformMeta = {
                web: { icon: Globe, label: labels.platformWeb },
                android: { icon: null, label: labels.platformAndroid },
                ios: { icon: Apple, label: labels.platformIos },
              } as const;

              return (
                <div
                  key={project.title}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-secondary/20 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
                >
                  <ProjectLink
                    href={webHref}
                    className="relative h-48 w-full overflow-hidden bg-secondary/40"
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </ProjectLink>
                  <div className="flex flex-1 flex-col p-6">
                    <ProjectLink
                      href={webHref}
                      className="flex items-center gap-1.5 text-lg font-semibold text-foreground transition-colors group-hover:text-primary"
                    >
                      {project.title}
                      {webHref && (
                        <ExternalLink className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      )}
                    </ProjectLink>
                    <p className="mt-2 text-sm leading-normal text-muted-foreground">
                      {project.description}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-foreground/70">
                      {project.details}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.platforms.map((platform) => {
                        const meta = platformMeta[platform.type];
                        const Icon = meta.icon;
                        const content = (
                          <>
                            {Icon ? (
                              <Icon className="h-3.5 w-3.5" />
                            ) : (
                              <Image
                                src="https://cdn.simpleicons.org/android/3DDC84"
                                alt=""
                                width={14}
                                height={14}
                                className="h-3.5 w-3.5 object-contain"
                              />
                            )}
                            {meta.label}
                          </>
                        );

                        return platform.href ? (
                          <a
                            key={platform.type}
                            href={platform.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                          >
                            {content}
                          </a>
                        ) : (
                          <span
                            key={platform.type}
                            className="inline-flex cursor-default items-center gap-1.5 rounded-full bg-secondary/50 px-3 py-1.5 text-xs font-medium text-muted-foreground"
                          >
                            {content}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-28 border-t border-border/60 py-20"
          aria-label={sections.contact}
        >
          <div className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-secondary/20 p-6 sm:p-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-semibold text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {contact.availability}
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {contact.title}
            </h2>
            <p className="mt-2 max-w-xl text-muted-foreground">
              {contact.description}
            </p>

            <div className="mt-8">
              <ContactForm content={contact} locale={locale} />
            </div>
          </div>
        </section>

        <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} iDevs. {footer.rights}
          </p>
        </footer>
      </main>
    </>
  );
}
