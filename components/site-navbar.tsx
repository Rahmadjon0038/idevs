"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import type { Content, Locale } from "@/lib/i18n";
import { localeLabels, localeNames, locales } from "@/lib/i18n";

export function SiteNavbar({
  locale,
  nav,
  ctaLabel,
}: {
  locale: Locale;
  nav: Content["nav"];
  ctaLabel: string;
}) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: nav.about },
    { href: "#projects", label: nav.projects },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6 sm:px-6">
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border px-3 py-2.5 backdrop-blur-xl transition-all duration-300 supports-[backdrop-filter]:bg-background/60 ${
          scrolled
            ? "border-border/60 bg-background/75 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            : "border-border/30 bg-background/40 shadow-sm"
        }`}
      >
        <Link
          href={`/${locale}#home`}
          onClick={() => setMobileOpen(false)}
          className="flex shrink-0 items-center pl-2"
        >
          <Logo height={26} />
        </Link>

        <nav
          className="hidden items-center gap-2 md:flex"
          aria-label="Primary"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <nav
            aria-label="Language switcher"
            className="hidden items-center gap-0.5 rounded-full border border-border/40 bg-background/50 px-1 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:flex"
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
          <Button
            asChild
            size="sm"
            className="hidden rounded-full sm:inline-flex"
          >
            <a href="#contact">{ctaLabel}</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl border border-border/60 bg-background/95 p-3 shadow-lg backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-2 flex items-center justify-between gap-2 border-t border-border/60 px-2 pt-3">
            <nav
              aria-label="Language switcher"
              className="flex items-center gap-0.5 rounded-full border border-border/40 bg-background/50 px-1 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"
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
            <Button
              asChild
              size="sm"
              className="rounded-full"
              onClick={() => setMobileOpen(false)}
            >
              <a href="#contact">{ctaLabel}</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
