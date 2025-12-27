import { Github, Linkedin, ExternalLink, FileText, Send } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hojiakbar Murodillayev",
  jobTitle: "Middle MERN Stack Developer",
  url: "https://hojiakbar.dev",
  sameAs: [
    "https://github.com/hojiakbar",
    "https://linkedin.com/in/hojiakbar",
    "https://t.me/hojiakbar",
    "https://instagram.com/hojiakbar",
  ],
  description:
    "Middle MERN Stack developer building modern web va mobil ilovalar JavaScript ekotizimi asosida.",
};

export default function PortfolioPage() {
  const stacks = [
    {
      title: "Frontend (Web)",
      summary: "Zamonaviy UI/UX, ishlash va qo‘llanish qulayligi.",
      tools: [
        {
          name: "JavaScript (ES6+)",
          icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
        },
        {
          name: "TypeScript",
          icon: "https://cdn.simpleicons.org/typescript/3178C6",
        },
        { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
        {
          name: "Next.js",
          icon: "https://cdn.simpleicons.org/nextdotjs/7E7E7E",
        },
        {
          name: "Tailwind CSS",
          icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
        },
        { name: "Vite", icon: "https://cdn.simpleicons.org/vite/646CFF" },
      ],
    },
    {
      title: "Backend",
      summary: "Barqaror API’lar va xavfsiz autentifikatsiya.",
      tools: [
        {
          name: "Node.js",
          icon: "https://cdn.simpleicons.org/nodedotjs/339933",
        },
        {
          name: "Express.js / NestJS",
          icon: "https://cdn.simpleicons.org/nestjs/E0234E/white",
        },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
        {
          name: "PostgreSQL",
          icon: "https://cdn.simpleicons.org/postgresql/4169E1",
        },
        {
          name: "REST API",
          icon: "https://cdn.simpleicons.org/postman/FF6C37",
        },
      ],
    },
    {
      title: "Mobile",
      summary: "Web bilan uyg‘un ishlovchi mobil tajribalar.",
      tools: [
        {
          name: "React Native",
          icon: "https://cdn.simpleicons.org/react/61DAFB",
        },
        { name: "Expo", icon: "https://cdn.simpleicons.org/expo/000020/white" },
        {
          name: "Android & iOS build",
          icon: "https://cdn.simpleicons.org/android/3DDC84",
        },
        {
          name: "API integration",
          icon: "https://cdn.simpleicons.org/swift/FA7343",
        },
        {
          name: "Push notification (basic)",
          icon: "https://cdn.simpleicons.org/firebase/FFCA28",
        },
      ],
    },
    {
      title: "Tools & DevOps",
      summary: "Jo‘natish, kuzatuv va avtomatlashtirish.",
      tools: [
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
        {
          name: "Nginx",
          icon: "https://cdn.simpleicons.org/nginx/009639/white",
        },
        { name: "PM2", icon: "https://cdn.simpleicons.org/pm2/8B5CF6" },
        {
          name: "Git / GitHub",
          icon: "https://cdn.simpleicons.org/git/F05032",
        },
        {
          name: "Linux (Ubuntu)",
          icon: "https://cdn.simpleicons.org/ubuntu/E95420",
        },
        {
          name: "VPS deploy",
          icon: "https://cdn.simpleicons.org/digitalocean/0080FF",
        },
      ],
    },
  ];

  const experiences = [
    {
      period: "2025 — HOZIRDA",
      role: "Full Stack Developer",
      company: "IT Loyihalar",
      href: "https://it-loyihalar.uz/",
      summary:
        "Web va mobil ilovalar uchun yagona MERN arxitektura asosida ishlash. React va React Native yordamida foydalanuvchi interfeyslari, Node.js orqali backend xizmatlarini ishlab chiqish. Loyihalarni production muhitga joylash va barqaror ishlashini ta’minlash.",
    },
    {
      period: "2021 — HOZIRDA",
      role: "MERN Stack (Freelance)",
      company: "Independent / Freelance",
      href: "https://t.me/murodillayev_hojiakbar",
      summary:
        "So‘nggi 4 yil davomida mustaqil dasturchi sifatida web va mobil ilovalar ishlab chiqish. Turli mijozlar uchun loyihalarni noldan yaratish, mavjud tizimlarni rivojlantirish va texnik yechimlarni real biznes ehtiyojlariga moslash.",
    },
    {
      period: "2025 — HOZIRDA",
      role: "Frontend Developer (Part-time)",
      company: "Abexlab",
      href: "https://www.linkedin.com/company/abexlab/",
      summary:
        "Zamonaviy web interfeyslar ishlab chiqish va mavjud sahifalarni optimizatsiya qilish. Foydalanuvchi tajribasini yaxshilash va dizaynni funksional yechimlarga aylantirish.",
    },
    {
      period: "2024 — 2025",
      role: "Frontend Developer",
      company: "Etamin IT Solutions",
      href: "https://etamin.digital/",
      summary:
        "Korxona darajasidagi web platformalar ustida ishlash. CRUD va real-time funksiyalarni joriy etish, tizim barqarorligi va performance’ni yaxshilash.",
    },
    {
      period: "2023 — 2025",
      role: "Frontend Mentor",
      company: "Webbrain IT Academy",
      href: "https://t.me/webbrain_academy",
      summary:
        "Frontend yo‘nalishida talabalarga mentorlik qilish. Real loyihalar orqali amaliy bilim berish, kod sifati va to‘g‘ri yondashuvni shakllantirish.",
    },
    {
      period: "2022 — 2023",
      role: "Junior Frontend Developer",
      company: "Mahsulot.com",
      href: "https://mahsulot.com/",
      summary:
        "E-commerce yo‘nalishidagi web loyihalarda ishtirok etish. Foydalanuvchi interfeyslarini ishlab chiqish va jamoa bilan hamkorlikda funksional yechimlar yaratish.",
    },
  ];

  const projects = [
    {
      title: "Darmon Servis",
      href: "https://darmonservis.uz",
      description:
        "Xususiy klinika uchun landing page. Xizmatlar, yo‘nalishlar va kompaniya haqida to‘liq ma’lumot beruvchi rasmiy veb-sahifa. (IT Loyihalar tomonidan ishlab chiqilgan)",
      image: "/projects/darmonservis.png",
    },
    {
      title: "Makro",
      href: "https://makromarket.uz/",
      description:
        "Makro marketi uchun rasmiy veb-sahifa. Brend va xizmatlar haqida umumiy ma’lumot beruvchi web loyiha. (Abexlab jamoasi bilan hamkorlikda)",
      image: "/projects/makro.png",
    },
    {
      title: "Hacknow.uz",
      href: "https://hacknow.uz/",
      description:
        "Kiberxavfsizlik va dasturlash bo‘yicha amaliy bilim berishga yo‘naltirilgan ta’lim platformasi. (Mustaqil loyiha)",
      image: "/projects/hacknow.png",
    },
    {
      title: "EVOS Tasting Platform",
      href: "https://tasting.evos.uz",
      description:
        "Supplier uchun mo‘ljallangan ichki platforma. Mahsulotlar va jarayonlarni boshqarish uchun maxsus web yechim. (Abexlab jamoasi bilan hamkorlikda)",
      image: "/projects/ETS.png",
    },
    {
      title: "Rano AI",
      href: "https://rano.animall.uz/",
      description:
        "Huquqiy hujjatlar asosida o‘qitilgan sun’iy intellekt tizimi. Foydalanuvchilarga maslahat va izohlar berish uchun mo‘ljallangan. (U2S jamoasi bilan hamkorlikda)",
      image: "/projects/ranoAI.png",
    },
    {
      title: "WM (NDA)",
      href: "#",
      description:
        "Tijoriy web loyihasi. Mijoz va loyiha tafsilotlari maxfiylik shartnomasi (NDA) asosida oshkor etilmaydi.",
      image: "/projects/NDA.webp",
    },
    {
      title: "COST (NDA)",
      href: "#",
      description:
        "Ichki boshqaruv tizimi. Loyiha tafsilotlari va biznes logikasi NDA sababli ochiqlanmaydi.",
      image: "/projects/NDA.webp",
    },
    {
      title: "Animall.uz",
      href: "https://animall.uz",
      description:
        "Hayvonlar savdosi va e’lonlari uchun mo‘ljallangan onlayn platforma. (Mustaqil loyiha)",
      image: "/projects/animall.png",
    },
    {
      title: "Qutqaruvchi.uz",
      href: "https://qutqaruvchi.uz",
      description:
        "Favqulodda vaziyatlarda tezkor yordam chaqirish uchun mo‘ljallangan veb-platforma. (Mustaqil loyiha)",
      image: "/projects/qutqaruvchi.png",
    },
    {
      title: "ComicCon Tashkent",
      href: "#",
      description:
        "ComicCon tadbiri uchun maxsus tayyorlangan rasmiy promo veb-sahifa. (Abexlab jamoasi bilan hamkorlikda)",
      image: "/projects/comiccon.png",
    },
    {
      title: "T-Cats",
      href: "https://comica.tcats.uz",
      description:
        "Komikslarni onlayn o‘qish va ko‘rish uchun mo‘ljallangan web platforma. (Abexlab jamoasi bilan hamkorlikda)",
      image: "/projects/tcats.png",
    },
  ];

  return (
    <main className="min-h-screen max-w-screen-xl mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="fixed top-6 right-6 z-50 md:top-12 md:right-12 lg:top-20 lg:right-24">
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
                    alt="Hojiakbar Murodillayev"
                    width={96}
                    height={96}
                    className="h-full w-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              <Link href="/">Hojiakbar Murodillayev</Link>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-foreground sm:text-xl">
              Middle MERN Stack Developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-muted-foreground">
              Zamonaviy web va mobil ilovalarni JavaScript ekotizimi asosida
              ishlab chiqaman. Frontend, backend va mobil ilovalarni bitta
              mantiqiy tizim sifatida loyihalayman.
            </p>

            <div className="mt-8">
              <Button
                asChild
                variant="outline"
                className="group rounded-full border-primary/20 hover:border-primary/50 transition-all bg-transparent"
              >
                <Link href="/resume.pdf" download>
                  <FileText className="mr-2 h-4 w-4" />
                  CV Yuklab Olish
                </Link>
              </Button>
            </div>

            <nav
              className="nav hidden lg:block"
              aria-label="In-page jump links"
            >
              <ul className="mt-16 w-max">
                <li>
                  <a
                    className="group flex items-center py-3 active"
                    href="#about"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground group-focus-visible:text-foreground">
                      Men haqimda
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    className="group flex items-center py-3"
                    href="#experience"
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground group-focus-visible:text-foreground">
                      Tajriba
                    </span>
                  </a>
                </li>
                <li>
                  <a className="group flex items-center py-3" href="#projects">
                    <span className="nav-indicator mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground group-focus-visible:w-16 group-focus-visible:bg-foreground motion-reduce:transition-none"></span>
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground group-focus-visible:text-foreground">
                      Loyihalar
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
            aria-label="About me"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
                Men haqimda
              </h2>
            </div>
            <div>
              <p className="mb-4">
                Men real loyihalarda ishlagan Middle MERN stack dasturchiman.
                React va React Native yordamida web va mobil interfeyslar,
                Node.js orqali esa barqaror backend yechimlar yarataman.
                Maqsadim — tez, ishonchli va foydalanuvchi uchun qulay ilovalar
                ishlab chiqish.
              </p>
              {/* <p className="mb-4">
                Robototexnika bilan amaliy ishlaganman: sensor ma'lumotlarini
                yig‘ish, boshqaruv algoritmlari va monitoring interfeyslari.
                Hozir esa AI ni chuqurroq o‘rganib, modellardan mahsulot
                darajasida foydalanish bo‘yicha tajriba to‘plamoqdaman.
              </p> */}

              <div className="mt-12">
                <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">
                  Texnologiyalar stacki (to‘g‘ri)
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
                            Stack
                          </p>
                          <p className="text-lg font-semibold text-foreground leading-tight">
                            {stack.title}
                          </p>
                        </div>
                        {/* <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary shadow-sm">
                          Fokus
                        </span> */}
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
                                className="h-4 w-4 object-contain"
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
            aria-label="Work experience"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
                Tajriba
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
                        {/* <ul
                          className="mt-4 flex flex-wrap"
                          aria-label="Technologies used"
                        >
                          {experience?.tech?.map((tech) => (
                            <li key={tech} className="mr-1.5 mt-2">
                              <div className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium leading-5 text-primary">
                                {tech}
                              </div>
                            </li>
                          ))}
                        </ul> */}
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
            aria-label="Selected projects"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">
                Loyihalar
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
                      </div>
                      <Image
                        alt={project.title}
                        width={200}
                        height={120}
                        className="z-10 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1 object-cover"
                        src={project.image}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* <footer className="max-w-md pb-16 text-sm text-muted-foreground sm:pb-0">
            <p>
              Ushbu portfolio <span className="text-foreground">Next.js</span>{" "}
              va <span className="text-foreground">Tailwind CSS</span> yordamida
              yaratilgan. Dizayn Brittany Chiang'ning mashhur portfoliosi
              asosida ishlab chiqilgan.
            </p>
          </footer> */}
        </div>
      </div>
    </main>
  );
}
