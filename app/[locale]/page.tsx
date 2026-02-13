import { ExternalLink, FileText, Github, Linkedin, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  defaultLocale,
  getContent,
  isLocale,
  localeLabels,
  localeNames,
  locales,
} from "@/lib/i18n";

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
  const { hero, nav, sections, labels, stacks, experiences, projects, about } =
    content;

  return (
    <main className="min-h-screen max-w-screen-xl mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3 md:top-12 md:right-12 lg:top-20 lg:right-24">
        <nav
          aria-label="Language switcher"
          className="flex items-center gap-1 rounded-full border border-primary/15 bg-background/80 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground shadow-sm backdrop-blur"
        >
          {locales.map((itemLocale) => {
            const isActive = itemLocale === locale;
            return (
              <Link
                key={itemLocale}
                href={`/${itemLocale}`}
                className={`rounded-full px-2 py-1 transition-all hover:text-foreground ${
                  isActive
                    ? "bg-primary/10 text-foreground"
                    : "text-muted-foreground"
                }`}
                aria-current={isActive ? "page" : undefined}
                title={localeNames[itemLocale]}
              >
                {localeLabels[itemLocale]}
              </Link>
            );
          })}
        </nav>
        <ThemeToggle />
      </div>

      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Left Column: Fixed Header */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/35 via-primary/10 to-transparent" />
                <div className="relative h-24 w-24 overflow-hidden rounded-full border border-primary/30 bg-secondary/70">
                  <Image
                    src="/profile.jpg"
                    alt={hero.name}
                    width={96}
                    height={96}
                    sizes="96px"
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              <Link href={`/${locale}`}>{hero.name}</Link>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
              {hero.role}
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
              {hero.intro}
            </p>

            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                className="group rounded-full border-primary/20 hover:border-primary/50 transition-all bg-transparent"
              >
                <Link href="/resume.pdf" download>
                  <FileText className="mr-2 h-4 w-4" />
                  {hero.ctaCv}
                </Link>
              </Button>
            </div>

            <nav className="nav hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                <li>
                  <a className="group flex items-center py-3 active" href="#about">
                    <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground group-focus-visible:text-foreground">
                      {nav.about}
                    </span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#experience">
                    <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground group-focus-visible:text-foreground">
                      {nav.experience}
                    </span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#projects">
                    <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground group-focus-visible:text-foreground">
                      {nav.projects}
                    </span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
            <li className="mr-5 text-xs shrink-0">
              <Link
                href="https://github.com/uzhojiakbar"
                className="block transition-all hover:text-primary hover:-translate-y-0.5"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </li>
            <li className="mr-5 text-xs shrink-0">
              <Link
                href="https://www.linkedin.com/in/hojiakbar-murodillayev/"
                className="block transition-all hover:text-primary hover:-translate-y-0.5"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </li>
            <li className="mr-5 text-xs shrink-0">
              <Link
                href="https://t.me/texnologik_sayohatchi"
                className="block transition-all hover:text-primary hover:-translate-y-0.5"
              >
                <Send className="h-6 w-6" />
                <span className="sr-only">Telegram</span>
              </Link>
            </li>
          </ul>
        </header>

        {/* Right Column: Scrollable Content */}
        <div className="pt-24 lg:w-1/2 lg:py-24">
          <section
            id="about"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label={sections.about}
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
                {sections.about}
              </h2>
            </div>
            <div>
              {about.paragraphs.map((paragraph, index) => (
                <p key={`${paragraph}-${index}`} className="mb-4">
                  {paragraph}
                </p>
              ))}

              <div className="mt-12">
                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">
                  {sections.stacks}
                </h3>
                <div className="grid gap-5 sm:grid-cols-2">
                  {stacks.map((stack) => (
                    <div
                      key={stack.title}
                      className="relative overflow-hidden rounded-2xl border border-primary/10 bg-secondary/40 p-5 shadow-sm transition-all hover:border-primary/30 hover:bg-secondary/60"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex flex-col gap-1">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                            {labels.stack}
                          </p>
                          <p className="text-lg font-semibold text-foreground leading-tight">
                            {stack.title}
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
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

          <section
            id="experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label={sections.experience}
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
                {sections.experience}
              </h2>
            </div>
            <div>
              <ol className="group/list">
                {experiences.map((experience) => (
                  <li
                    key={`${experience.company}-${experience.period}`}
                    className="mb-12"
                  >
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2"
                        aria-label={experience.period}
                      >
                        {experience.period}
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-foreground">
                          <div>
                            <Link
                              href={experience.href}
                              className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                {experience.role} · {experience.company}{" "}
                                <ExternalLink className="inline-block h-4 w-4 ml-1 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                              </span>
                            </Link>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-muted-foreground">
                          {experience.summary}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label={sections.projects}
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
                {sections.projects}
              </h2>
            </div>
            <div>
              <ul className="group/list">
                {projects.map((project) => (
                  <li key={project.title} className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-foreground">
                          <div>
                            <Link
                              href={project.href}
                              className="inline-flex items-baseline font-medium leading-tight text-foreground hover:text-primary focus-visible:text-primary group/link text-base"
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                {project.title}{" "}
                                <ExternalLink className="inline-block h-4 w-4 ml-1 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                              </span>
                            </Link>
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal text-muted-foreground">
                          {project.description}
                        </p>
                        <p className="mt-2 text-xs leading-relaxed text-foreground/80">
                          {project.details}
                        </p>
                      </div>
                      <Image
                        alt={project.title}
                        width={200}
                        height={120}
                        sizes="(min-width: 1024px) 12rem, (min-width: 640px) 30vw, 80vw"
                        className="z-10 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 object-cover"
                        src={project.image}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
