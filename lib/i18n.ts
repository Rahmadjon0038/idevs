export const locales = ["uz", "ru", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "uz";

export const localeLabels: Record<Locale, string> = {
  uz: "UZ",
  ru: "RU",
  en: "EN",
};

export const localeNames: Record<Locale, string> = {
  uz: "O'zbek",
  ru: "Русский",
  en: "English",
};

export const localeOgMap: Record<Locale, string> = {
  uz: "uz_UZ",
  ru: "ru_RU",
  en: "en_US",
};

export function isLocale(value?: string | null): value is Locale {
  return Boolean(value && locales.includes(value as Locale));
}

export type StackTool = {
  name: string;
  icon: string;
};

export type Stack = {
  title: string;
  summary: string;
  tools: StackTool[];
};

export type ProjectPlatform = {
  type: "web" | "android" | "ios";
  href?: string;
};

export type Project = {
  title: string;
  href: string;
  description: string;
  details: string;
  image: string;
  imageFit?: "cover" | "contain";
  platforms: ProjectPlatform[];
};

export type Content = {
  meta: {
    title: string;
    description: string;
    siteName: string;
    ogDescription: string;
    twitterDescription: string;
    keywords: string[];
    ogImageAlt: string;
    knowsAbout: string[];
  };
  hero: {
    name: string;
    role: string;
    title: string;
    titleHighlight: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  nav: {
    about: string;
    projects: string;
    contact: string;
  };
  sections: {
    about: string;
    projects: string;
    contact: string;
    stacks: string;
  };
  labels: {
    stack: string;
    platformWeb: string;
    platformAndroid: string;
    platformIos: string;
  };
  about: {
    paragraphs: string[];
  };
  stacks: Stack[];
  projects: Project[];
  contact: {
    title: string;
    description: string;
    availability: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      companyLabel: string;
      companyPlaceholder: string;
      projectLabel: string;
      projectPlaceholder: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successDescription: string;
      errorTitle: string;
      errorDescription: string;
      validation: {
        nameRequired: string;
        nameMin: string;
        phoneRequired: string;
        phoneInvalid: string;
        projectRequired: string;
      };
    };
  };
  footer: {
    rights: string;
  };
};

const icon = {
  javascript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  typescript: "https://cdn.simpleicons.org/typescript/3178C6",
  react: "https://cdn.simpleicons.org/react/61DAFB",
  flutter: "https://cdn.simpleicons.org/flutter/02569B",
  nextjs: "https://cdn.simpleicons.org/nextdotjs/7E7E7E",
  tailwind: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
  vite: "https://cdn.simpleicons.org/vite/646CFF",
  node: "https://cdn.simpleicons.org/nodedotjs/339933",
  nest: "https://cdn.simpleicons.org/nestjs/E0234E/white",
  mongo: "https://cdn.simpleicons.org/mongodb/47A248",
  postgres: "https://cdn.simpleicons.org/postgresql/4169E1",
  postman: "https://cdn.simpleicons.org/postman/FF6C37",
  expo: "https://cdn.simpleicons.org/expo/000020/white",
  android: "https://cdn.simpleicons.org/android/3DDC84",
  swift: "https://cdn.simpleicons.org/swift/FA7343",
  firebase: "https://cdn.simpleicons.org/firebase/FFCA28",
  docker: "https://cdn.simpleicons.org/docker/2496ED",
  nginx: "https://cdn.simpleicons.org/nginx/009639/white",
  pm2: "https://cdn.simpleicons.org/pm2/8B5CF6",
  git: "https://cdn.simpleicons.org/git/F05032",
  ubuntu: "https://cdn.simpleicons.org/ubuntu/E95420",
  digitalocean: "https://cdn.simpleicons.org/digitalocean/0080FF",
};

const contentByLocale: Record<Locale, Content> = {
  uz: {
    meta: {
      title: "iDevs | Web va Mobil Ilovalar Ishlab Chiqish Jamoasi",
      description:
        "iDevs — full-stack dasturchilar jamoasi: frontend, backend, mobil (Flutter) va VPS serverga joylashgacha bo'lgan barcha bosqichlarni o'zimiz qilamiz. G'oyangizni production-ready mahsulotga aylantiramiz.",
      siteName: "iDevs — Dasturlash Jamoasi",
      ogDescription:
        "Frontend, backend, mobil (Flutter/React Native) va VPS serverga joylashtirish — barchasini o'zimiz qilamiz. Real loyihalar, ishonchli arxitektura va production-ready yechimlar.",
      twitterDescription:
        "Frontend, backend, mobil (Flutter) va serverga joylashtirishgacha — to'liq siklli full-stack dasturchilar jamoasi.",
      ogImageAlt: "iDevs jamoasi portfoliosi",
      knowsAbout: [
        "Full Stack dasturlash",
        "Web dasturlash",
        "Mobil ilovalar",
        "React",
        "React Native",
        "Flutter",
        "Next.js",
        "Node.js",
        "TypeScript",
        "REST API",
        "MongoDB",
        "PostgreSQL",
        "DevOps",
      ],
      keywords: [
        "iDevs",
        "iDevs jamoasi",
        "iDevs dasturchilar jamoasi",
        "iDevs portfolio",
        "dasturchilar jamoasi",
        "IT jamoa O'zbekiston",

        "full stack dasturchi",
        "veb dasturchi",
        "mobil dasturchi",
        "freelance dasturchi",

        "O'zbekiston dasturchi",
        "Toshkent dasturchi",

        "frontend dasturchi",
        "backend dasturchi",

        "React dasturchi",
        "Next.js dasturchi",
        "React Native dasturchi",
        "Flutter dasturchi",
        "Node.js dasturchi",

        "TypeScript dasturchi",
        "JavaScript dasturchi",

        "REST API",
        "API integratsiya",

        "MongoDB",
        "PostgreSQL",

        "UI/UX",

        "web va mobil ilovalar",
        "sayt buyurtma qilish",
        "mobil ilova buyurtma qilish",
        "CRM tizim yaratish",

        "Docker",
        "Nginx",
        "PM2",
        "VPS deploy",
      ],
    },
    hero: {
      name: "iDevs",
      role: "Web va Mobil Ilovalar Ishlab Chiqish Jamoasi",
      title: "G'oyangizni ishlaydigan",
      titleHighlight: "mahsulotga aylantiramiz",
      description:
        "iDevs — frontend, backend va mobil (Flutter) yo'nalishlarini qamrab oluvchi full-stack dasturchilar jamoasi. Loyihani ishlab chiqishdan tortib VPS serverga joylashgacha — butun yo'lni birga bosib o'tamiz.",
      ctaPrimary: "Loyihani boshlash",
      ctaSecondary: "Loyihalarni ko'rish",
    },
    nav: {
      about: "Biz haqimizda",
      projects: "Loyihalar",
      contact: "Bog'lanish",
    },
    sections: {
      about: "Biz haqimizda",
      projects: "Loyihalar",
      contact: "Bog'lanish",
      stacks: "Texnologiyalar stacki",
    },
    labels: {
      stack: "Yo'nalish",
      platformWeb: "Webda ko'rish",
      platformAndroid: "Android'da ko'rish",
      platformIos: "iOS'da ko'rish",
    },
    about: {
      paragraphs: [
        "iDevs — zamonaviy texnologiyalar asosida web va mobil ilovalar yaratuvchi natijaga yo'naltirilgan dasturchilar jamoasi. Next.js, React, React Native, Flutter, Node.js, PostgreSQL va boshqa ko'plab texnologiyalar asosida ishlaymiz.",
        "Har birimiz frontend, backend yoki mobil (Flutter) yo'nalishida alohida holda ham kuchli mutaxassismiz. Birgalikda esa loyihani g'oyadan tortib frontend, backend, mobil ilova va VPS serverga joylashgacha — to'liq siklda yakunlaymiz.",
        "Ta'lim platformalari, CRM tizimlari va biznesni raqamlashtirishga oid real loyihalarni ishga tushirgan tajribamiz bor. Har bir loyihada toza kod, masshtablanuvchi arxitektura va foydalanuvchi uchun qulay interfeysga alohida e'tibor qaratamiz.",
        "Maqsadimiz — mijozning g'oyasini tez, ishonchli va biznes ehtiyojlariga mos dasturiy mahsulotga aylantirish.",
      ],
    },
    stacks: [
      {
        title: "Frontend (Web)",
        summary: "Zamonaviy, tez va qulay foydalanuvchi interfeyslari.",
        tools: [
          { name: "JavaScript (ES6+)", icon: icon.javascript },
          { name: "TypeScript", icon: icon.typescript },
          { name: "React", icon: icon.react },
          { name: "Next.js", icon: icon.nextjs },
          { name: "Tailwind CSS", icon: icon.tailwind },
          { name: "Vite", icon: icon.vite },
        ],
      },
      {
        title: "Backend",
        summary: "Barqaror API'lar va xavfsiz autentifikatsiya tizimlari.",
        tools: [
          { name: "Node.js", icon: icon.node },
          { name: "Express.js / NestJS", icon: icon.nest },
          { name: "MongoDB", icon: icon.mongo },
          { name: "PostgreSQL", icon: icon.postgres },
          { name: "REST API", icon: icon.postman },
        ],
      },
      {
        title: "Mobile",
        summary: "iOS va Android uchun yagona kod bazasidan tajriba.",
        tools: [
          { name: "React Native", icon: icon.react },
          { name: "Flutter", icon: icon.flutter },
          { name: "Expo", icon: icon.expo },
          { name: "Android & iOS build", icon: icon.android },
          { name: "API integratsiya", icon: icon.swift },
          { name: "Push notification (basic)", icon: icon.firebase },
        ],
      },
      {
        title: "Tools & DevOps",
        summary: "Joylash, kuzatuv va avtomatlashtirilgan ish jarayonlari.",
        tools: [
          { name: "Docker", icon: icon.docker },
          { name: "Nginx", icon: icon.nginx },
          { name: "PM2", icon: icon.pm2 },
          { name: "Git / GitHub", icon: icon.git },
          { name: "Linux (Ubuntu)", icon: icon.ubuntu },
          { name: "VPS deploy", icon: icon.digitalocean },
        ],
      },
    ],
    projects: [
      {
        title: "HackNow",
        href: "https://hacknow.uz/",
        description:
          "Innovatsion mahsulotlar, ta'lim platformasi va professional kiberxavfsizlik xizmatlari.",
        details:
          "Fokus: kiberxavfsizlik xizmatlari, ta'lim va innovatsion IT mahsulotlari.",
        image: "/projects/hacknow.png",
        platforms: [{ type: "web", href: "https://hacknow.uz/" }],
      },
      {
        title: "ComicCon Tashkent",
        href: "https://comiccon.uz/",
        description:
          "ComicCon tadbiri uchun maxsus tayyorlangan rasmiy promo veb-sahifa.",
        details: "Fokus: tadbir haqida ma'lumot va promo taqdimot.",
        image: "/projects/comiccon.png",
        platforms: [{ type: "web", href: "https://comiccon.uz/" }],
      },
      {
        title: "Evos Tasting Platform",
        href: "https://tasting.evos.uz/",
        description:
          "Supplier uchun mo'ljallangan ichki platforma. Mahsulotlar va jarayonlarni boshqarish uchun maxsus web yechim.",
        details:
          "Fokus: yetkazib beruvchilarni ro'yxatdan o'tkazish va sinovdan o'tkazish jarayoni. IT Loyihalar kompaniyasi bilan hamkorlikda ishlab chiqilgan.",
        image: "/projects/ETS.png",
        platforms: [{ type: "web", href: "https://tasting.evos.uz/" }],
      },
      {
        title: "Makro",
        href: "https://makromarket.uz/",
        description:
          "Makro marketi uchun rasmiy veb-sahifa. Brend va xizmatlar haqida umumiy ma'lumot beruvchi web loyiha.",
        details:
          "Fokus: brend taqdimoti va mobil ilovalar. Abexlab kompaniyasi bilan hamkorlikda ishlab chiqilgan.",
        image: "/projects/makro.png",
        platforms: [
          { type: "web", href: "https://makromarket.uz/" },
          {
            type: "ios",
            href: "https://apps.apple.com/uz/app/makro-app/id6443717445",
          },
          {
            type: "android",
            href: "https://play.google.com/store/apps/details?id=com.makro.hive_dart",
          },
        ],
      },
      {
        title: "Darmon Servis",
        href: "https://darmonservis.uz/",
        description: "Zamonaviy ko'p tarmoqli tibbiyot markazi.",
        details:
          "Fokus: klinika xizmatlari va shifoxona haqida ma'lumot. IT Loyihalar kompaniyasi bilan hamkorlikda ishlab chiqilgan.",
        image: "/projects/darmonservis.png",
        platforms: [{ type: "web", href: "https://darmonservis.uz/" }],
      },
      {
        title: "Usuliya",
        href: "https://usuliya.uz/",
        description: "Arab tilini o'rganish uchun platforma.",
        details:
          "Fokus: darslar, mashqlar va mobil ilovadagi qulay o'quv tajribasi.",
        image: "/projects/usuliya.png",
        imageFit: "contain",
        platforms: [
          { type: "web", href: "https://usuliya.uz/" },
          {
            type: "android",
            href: "https://play.google.com/store/apps/details?id=com.usuliya.app",
          },
          {
            type: "ios",
            href: "https://apps.apple.com/pk/app/usuliya/id6775377699",
          },
        ],
      },
      {
        title: "Akbayr",
        href: "https://akbayr.idevs.uz/",
        description: "Onlayn sotuv platformasi.",
        details:
          "Fokus: mahsulotlar katalogi va onlayn buyurtma berish. Abexlab kompaniyasi bilan hamkorlikda ishlab chiqilgan.",
        image: "/projects/akbayr.png",
        imageFit: "contain",
        platforms: [{ type: "web", href: "https://akbayr.idevs.uz/" }],
      },
      {
        title: "DS Lab & DS Lab Kids",
        href: "https://dslab.uz/",
        description: "DS Lab laboratoriyasi uchun qilingan veb-sahifa.",
        details:
          "Fokus: laboratoriya xizmatlari haqida ma'lumot. IT Loyihalar kompaniyasi bilan hamkorlikda ishlab chiqilgan.",
        image: "/projects/dslab.jpg",
        imageFit: "contain",
        platforms: [{ type: "web", href: "https://dslab.uz/" }],
      },
      {
        title: "ProeCom",
        href: "https://proecom.uz/",
        description: "ProeCom jamoasi uchun qilingan veb-sahifa.",
        details: "Fokus: jamoa va xizmatlar haqida umumiy ma'lumot.",
        image: "/projects/proecom.png",
        imageFit: "contain",
        platforms: [{ type: "web", href: "https://proecom.uz/" }],
      },
      {
        title: "«O'zinvestloyiha»",
        href: "https://uzinvestproject.uz/",
        description: "«O'zinvestloyiha» uchun tayyorlangan veb-sahifa.",
        details:
          "Fokus: kompaniya va xizmatlar haqida ma'lumot. Abexlab kompaniyasi bilan hamkorlikda ishlab chiqilgan.",
        image: "/projects/uzinvestloyiha.png",
        imageFit: "contain",
        platforms: [{ type: "web", href: "https://uzinvestproject.uz/" }],
      },
      {
        title: "Animall.uz",
        href: "https://animall.uz",
        description:
          "Hayvonlar savdosi va e'lonlari uchun mo'ljallangan onlayn platforma.",
        details: "Fokus: e'lonlar, filtrlash va xavfsiz aloqa.",
        image: "/projects/animall.png",
        platforms: [
          { type: "web", href: "https://animall.uz" },
          {
            type: "android",
            href: "https://play.google.com/store/apps/details?id=uz.animall.app&pcampaignid=web_share",
          },
          {
            type: "ios",
            href: "https://apps.apple.com/us/app/animall-uz/id6755634058",
          },
        ],
      },
      {
        title: "Oilago.uz",
        href: "https://oilago.uz/",
        description:
          "Sayt va mobil ilovadan iborat loyiha. Next.js, React Native, Expo, Node.js, Express va PostgreSQL asosida qurilgan.",
        details: "Fokus: chat, maxfiylik va qulay mobil tajriba.",
        image: "/projects/oilago.png",
        imageFit: "contain",
        platforms: [
          { type: "web", href: "https://oilago.uz/" },
          { type: "android" },
          { type: "ios" },
        ],
      },
      {
        title: "Topshirdi",
        href: "https://topshirdi.uz/",
        description:
          "Haydovchilik guvohnomasi imtihoniga tayyorlanish uchun yaratilgan web platforma va mobil ilova. iOS va Android ilovalari mavjud.",
        details:
          "Fokus: darsliklar, testlar, biletlar, video darslar va natijalarni kuzatish.",
        image: "/projects/topshirdi.png",
        platforms: [
          { type: "web", href: "https://topshirdi.uz/" },
          {
            type: "android",
            href: "https://play.google.com/store/apps/details?id=uz.roadtest.app&hl=en",
          },
          {
            type: "ios",
            href: "https://apps.apple.com/us/app/topshirdi/id6781198005",
          },
        ],
      },
      {
        title: "SmartTest",
        href: "https://smarttest.idevs.uz/",
        description:
          "O'qituvchilar va o'quvchilar uchun onlayn testlar va imtihonlar tashkil qilish platformasi.",
        details:
          "Fokus: Telegram orqali kirish, testlar va natijalarni boshqarish.",
        image: "/projects/smarttest.png",
        platforms: [{ type: "web", href: "https://smarttest.idevs.uz/" }],
      },
      {
        title: "NDA Loyihalar (10+)",
        href: "#",
        description:
          "Mijozlar bilan tuzilgan maxfiylik shartnomalari (NDA) asosida ishlab chiqilgan 10 dan ortiq loyiha.",
        details: "Bu loyihalar oshkor qilinmaydigan loyihalar.",
        image: "/projects/NDA.webp",
        platforms: [
          { type: "web" },
          { type: "android" },
          { type: "ios" },
        ],
      },
    ],
    contact: {
      title: "Loyihangizni muhokama qilaylik",
      description:
        "Formani to'ldiring — tez orada siz bilan bog'lanamiz va loyihangiz bo'yicha bepul konsultatsiya beramiz.",
      availability: "Yangi loyihalar uchun ochiqmiz",
      form: {
        nameLabel: "Ism familiya",
        namePlaceholder: "Ism Familiya",
        phoneLabel: "Telefon raqam",
        phonePlaceholder: "+998 90 123 45 67",
        companyLabel: "Kompaniya nomi (ixtiyoriy)",
        companyPlaceholder: "Kompaniyangiz nomi",
        projectLabel: "Loyiha nomi",
        projectPlaceholder: "Loyihangiz nomi yoki qisqacha g'oyasi",
        submit: "Yuborish",
        submitting: "Yuborilmoqda...",
        successTitle: "Rahmat!",
        successDescription:
          "Arizangiz qabul qilindi. Tez orada siz bilan bog'lanamiz.",
        errorTitle: "Xatolik yuz berdi",
        errorDescription:
          "Iltimos, birozdan so'ng qayta urinib ko'ring yoki Telegram orqali yozing.",
        validation: {
          nameRequired: "Ism familiyangizni kiriting",
          nameMin: "Kamida 2 ta belgi kiriting",
          phoneRequired: "Telefon raqamingizni kiriting",
          phoneInvalid: "Telefon raqami noto'g'ri formatda",
          projectRequired: "Loyiha nomini kiriting",
        },
      },
    },
    footer: {
      rights: "Barcha huquqlar himoyalangan.",
    },
  },
  ru: {
    meta: {
      title: "iDevs | Команда разработки веб и мобильных приложений",
      description:
        "iDevs — full-stack команда разработчиков: frontend, backend, мобильная разработка (Flutter) и развёртывание на VPS-сервере — всё в одних руках. Превращаем вашу идею в готовый продукт.",
      siteName: "iDevs — Команда разработки",
      ogDescription:
        "Frontend, backend, мобильная разработка (Flutter/React Native) и развёртывание на VPS — делаем всё сами. Реальные проекты, надёжная архитектура и production-ready решения.",
      twitterDescription:
        "Full-stack команда: frontend, backend, мобильная разработка и деплой на сервер.",
      ogImageAlt: "Портфолио команды iDevs",
      knowsAbout: [
        "Full Stack разработка",
        "веб-разработка",
        "мобильные приложения",
        "React",
        "React Native",
        "Flutter",
        "Next.js",
        "Node.js",
        "TypeScript",
        "REST API",
        "MongoDB",
        "PostgreSQL",
        "DevOps",
      ],
      keywords: [
        "iDevs",
        "команда iDevs",
        "iDevs разработчики",
        "iDevs портфолио",
        "команда разработчиков",
        "IT команда Узбекистан",

        "Full Stack разработчик",
        "Веб разработчик",
        "Мобильный разработчик",
        "Фриланс разработчик",

        "Узбекистан разработчик",
        "Ташкент разработчик",

        "Frontend разработчик",
        "Backend разработчик",

        "React разработчик",
        "Next.js разработчик",
        "React Native разработчик",
        "Node.js разработчик",

        "TypeScript разработчик",
        "JavaScript разработчик",

        "REST API",
        "API интеграция",

        "MongoDB",
        "PostgreSQL",

        "UI/UX",

        "веб и мобильные приложения",
        "заказать сайт",
        "заказать мобильное приложение",
        "разработка CRM",

        "Docker",
        "Nginx",
        "PM2",
        "VPS deploy",
      ],
    },
    hero: {
      name: "iDevs",
      role: "Команда разработки веб и мобильных приложений",
      title: "Превращаем вашу идею в",
      titleHighlight: "готовый продукт",
      description:
        "iDevs — full-stack команда, охватывающая frontend, backend и мобильную разработку (Flutter). Проходим весь путь — от идеи до развёртывания на VPS-сервере — вместе с вами.",
      ctaPrimary: "Начать проект",
      ctaSecondary: "Смотреть проекты",
    },
    nav: {
      about: "О нас",
      projects: "Проекты",
      contact: "Контакты",
    },
    sections: {
      about: "О нас",
      projects: "Проекты",
      contact: "Контакты",
      stacks: "Технологический стек",
    },
    labels: {
      stack: "Направление",
      platformWeb: "Смотреть на Web",
      platformAndroid: "Смотреть на Android",
      platformIos: "Смотреть на iOS",
    },
    about: {
      paragraphs: [
        "iDevs — ориентированная на результат команда разработчиков веб и мобильных приложений на современных технологиях. Работаем с Next.js, React, React Native, Flutter, Node.js, PostgreSQL и множеством других технологий.",
        "Каждый из нас — сильный специалист в своём направлении: frontend, backend или мобильная разработка (Flutter). А вместе мы закрываем проект полностью — от идеи до frontend, backend, мобильного приложения и развёртывания на VPS-сервере.",
        "У нас есть опыт запуска реальных проектов — образовательных платформ, CRM-систем и решений для автоматизации бизнеса. В каждом проекте уделяем особое внимание чистому коду, масштабируемой архитектуре и удобному интерфейсу.",
        "Наша цель — быстро и надёжно превращать идею клиента в программный продукт, соответствующий бизнес-задачам.",
      ],
    },
    stacks: [
      {
        title: "Frontend (Web)",
        summary: "Современные, быстрые и удобные пользовательские интерфейсы.",
        tools: [
          { name: "JavaScript (ES6+)", icon: icon.javascript },
          { name: "TypeScript", icon: icon.typescript },
          { name: "React", icon: icon.react },
          { name: "Next.js", icon: icon.nextjs },
          { name: "Tailwind CSS", icon: icon.tailwind },
          { name: "Vite", icon: icon.vite },
        ],
      },
      {
        title: "Backend",
        summary: "Надёжные API и безопасная аутентификация.",
        tools: [
          { name: "Node.js", icon: icon.node },
          { name: "Express.js / NestJS", icon: icon.nest },
          { name: "MongoDB", icon: icon.mongo },
          { name: "PostgreSQL", icon: icon.postgres },
          { name: "REST API", icon: icon.postman },
        ],
      },
      {
        title: "Mobile",
        summary: "Единая кодовая база для iOS и Android.",
        tools: [
          { name: "React Native", icon: icon.react },
          { name: "Flutter", icon: icon.flutter },
          { name: "Expo", icon: icon.expo },
          { name: "Сборка Android и iOS", icon: icon.android },
          { name: "Интеграция API", icon: icon.swift },
          { name: "Push-уведомления (базовые)", icon: icon.firebase },
        ],
      },
      {
        title: "Tools & DevOps",
        summary: "Деплой, мониторинг и автоматизация процессов.",
        tools: [
          { name: "Docker", icon: icon.docker },
          { name: "Nginx", icon: icon.nginx },
          { name: "PM2", icon: icon.pm2 },
          { name: "Git / GitHub", icon: icon.git },
          { name: "Linux (Ubuntu)", icon: icon.ubuntu },
          { name: "VPS deploy", icon: icon.digitalocean },
        ],
      },
    ],
    projects: [
      {
        title: "HackNow",
        href: "https://hacknow.uz/",
        description:
          "Инновационные продукты, образовательная платформа и профессиональные услуги в области кибербезопасности.",
        details:
          "Фокус: услуги кибербезопасности, обучение и инновационные IT-продукты.",
        image: "/projects/hacknow.png",
        platforms: [{ type: "web", href: "https://hacknow.uz/" }],
      },
      {
        title: "ComicCon Tashkent",
        href: "https://comiccon.uz/",
        description:
          "Официальная промо-страница, специально созданная для мероприятия ComicCon.",
        details: "Фокус: информация о мероприятии и промо-презентация.",
        image: "/projects/comiccon.png",
        platforms: [{ type: "web", href: "https://comiccon.uz/" }],
      },
      {
        title: "Evos Tasting Platform",
        href: "https://tasting.evos.uz/",
        description:
          "Внутренняя платформа для поставщиков. Специальное веб-решение для управления продуктами и процессами.",
        details:
          "Фокус: регистрация и тестирование поставщиков. Разработано в сотрудничестве с компанией IT Loyihalar.",
        image: "/projects/ETS.png",
        platforms: [{ type: "web", href: "https://tasting.evos.uz/" }],
      },
      {
        title: "Makro",
        href: "https://makromarket.uz/",
        description:
          "Официальная веб-страница сети Makro. Веб-проект с общей информацией о бренде и услугах.",
        details:
          "Фокус: презентация бренда и мобильные приложения. Разработано в сотрудничестве с компанией Abexlab.",
        image: "/projects/makro.png",
        platforms: [
          { type: "web", href: "https://makromarket.uz/" },
          {
            type: "ios",
            href: "https://apps.apple.com/uz/app/makro-app/id6443717445",
          },
          {
            type: "android",
            href: "https://play.google.com/store/apps/details?id=com.makro.hive_dart",
          },
        ],
      },
      {
        title: "Darmon Servis",
        href: "https://darmonservis.uz/",
        description: "Современный многопрофильный медицинский центр.",
        details:
          "Фокус: услуги клиники и информация о медицинском центре. Разработано в сотрудничестве с компанией IT Loyihalar.",
        image: "/projects/darmonservis.png",
        platforms: [{ type: "web", href: "https://darmonservis.uz/" }],
      },
      {
        title: "Usuliya",
        href: "https://usuliya.uz/",
        description: "Платформа для изучения арабского языка.",
        details:
          "Фокус: уроки, упражнения и удобный учебный опыт в мобильном приложении.",
        image: "/projects/usuliya.png",
        imageFit: "contain",
        platforms: [
          { type: "web", href: "https://usuliya.uz/" },
          {
            type: "android",
            href: "https://play.google.com/store/apps/details?id=com.usuliya.app",
          },
          {
            type: "ios",
            href: "https://apps.apple.com/pk/app/usuliya/id6775377699",
          },
        ],
      },
      {
        title: "Akbayr",
        href: "https://akbayr.idevs.uz/",
        description: "Платформа онлайн-продаж.",
        details:
          "Фокус: каталог товаров и оформление заказов онлайн. Разработано в сотрудничестве с компанией Abexlab.",
        image: "/projects/akbayr.png",
        imageFit: "contain",
        platforms: [{ type: "web", href: "https://akbayr.idevs.uz/" }],
      },
      {
        title: "DS Lab & DS Lab Kids",
        href: "https://dslab.uz/",
        description: "Веб-страница для лаборатории DS Lab.",
        details:
          "Фокус: информация об услугах лаборатории. Разработано в сотрудничестве с компанией IT Loyihalar.",
        image: "/projects/dslab.jpg",
        imageFit: "contain",
        platforms: [{ type: "web", href: "https://dslab.uz/" }],
      },
      {
        title: "ProeCom",
        href: "https://proecom.uz/",
        description: "Веб-страница для команды ProeCom.",
        details: "Фокус: общая информация о команде и услугах.",
        image: "/projects/proecom.png",
        imageFit: "contain",
        platforms: [{ type: "web", href: "https://proecom.uz/" }],
      },
      {
        title: "«O'zinvestloyiha»",
        href: "https://uzinvestproject.uz/",
        description: "Веб-страница, подготовленная для «O'zinvestloyiha».",
        details:
          "Фокус: информация о компании и услугах. Разработано в сотрудничестве с компанией Abexlab.",
        image: "/projects/uzinvestloyiha.png",
        imageFit: "contain",
        platforms: [{ type: "web", href: "https://uzinvestproject.uz/" }],
      },
      {
        title: "Animall.uz",
        href: "https://animall.uz",
        description:
          "Онлайн-платформа для продажи животных и объявлений.",
        details: "Фокус: объявления, фильтры и безопасная связь.",
        image: "/projects/animall.png",
        platforms: [
          { type: "web", href: "https://animall.uz" },
          {
            type: "android",
            href: "https://play.google.com/store/apps/details?id=uz.animall.app&pcampaignid=web_share",
          },
          {
            type: "ios",
            href: "https://apps.apple.com/us/app/animall-uz/id6755634058",
          },
        ],
      },
      {
        title: "Oilago.uz",
        href: "https://oilago.uz/",
        description:
          "Проект, включающий сайт и мобильное приложение. Построен на Next.js, React Native, Expo, Node.js, Express и PostgreSQL.",
        details: "Фокус: чат, конфиденциальность и удобный мобильный опыт.",
        image: "/projects/oilago.png",
        imageFit: "contain",
        platforms: [
          { type: "web", href: "https://oilago.uz/" },
          { type: "android" },
          { type: "ios" },
        ],
      },
      {
        title: "Topshirdi",
        href: "https://topshirdi.uz/",
        description:
          "Веб-платформа и мобильное приложение для подготовки к экзамену на водительское удостоверение. Есть приложения для iOS и Android.",
        details:
          "Фокус: учебники, тесты, билеты, видеоуроки и отслеживание результатов.",
        image: "/projects/topshirdi.png",
        platforms: [
          { type: "web", href: "https://topshirdi.uz/" },
          {
            type: "android",
            href: "https://play.google.com/store/apps/details?id=uz.roadtest.app&hl=en",
          },
          {
            type: "ios",
            href: "https://apps.apple.com/us/app/topshirdi/id6781198005",
          },
        ],
      },
      {
        title: "SmartTest",
        href: "https://smarttest.idevs.uz/",
        description:
          "Онлайн-платформа для организации тестов и экзаменов для преподавателей и учеников.",
        details:
          "Фокус: вход через Telegram, управление тестами и результатами.",
        image: "/projects/smarttest.png",
        platforms: [{ type: "web", href: "https://smarttest.idevs.uz/" }],
      },
      {
        title: "NDA Проекты (10+)",
        href: "#",
        description:
          "Более 10 проектов, разработанных в рамках соглашений о неразглашении (NDA) с клиентами.",
        details: "Это проекты, детали которых не подлежат разглашению.",
        image: "/projects/NDA.webp",
        platforms: [
          { type: "web" },
          { type: "android" },
          { type: "ios" },
        ],
      },
    ],
    contact: {
      title: "Обсудим ваш проект",
      description:
        "Заполните форму — мы скоро свяжемся с вами и проведём бесплатную консультацию по проекту.",
      availability: "Открыты для новых проектов",
      form: {
        nameLabel: "Имя и фамилия",
        namePlaceholder: "Имя Фамилия",
        phoneLabel: "Номер телефона",
        phonePlaceholder: "+998 90 123 45 67",
        companyLabel: "Название компании (необязательно)",
        companyPlaceholder: "Название вашей компании",
        projectLabel: "Название проекта",
        projectPlaceholder: "Название проекта или краткая идея",
        submit: "Отправить",
        submitting: "Отправка...",
        successTitle: "Спасибо!",
        successDescription: "Заявка принята. Мы скоро свяжемся с вами.",
        errorTitle: "Произошла ошибка",
        errorDescription:
          "Пожалуйста, попробуйте снова позже или напишите нам в Telegram.",
        validation: {
          nameRequired: "Введите имя и фамилию",
          nameMin: "Минимум 2 символа",
          phoneRequired: "Введите номер телефона",
          phoneInvalid: "Неверный формат номера телефона",
          projectRequired: "Введите название проекта",
        },
      },
    },
    footer: {
      rights: "Все права защищены.",
    },
  },
  en: {
    meta: {
      title: "iDevs | Web & Mobile App Development Team",
      description:
        "iDevs is a full-stack development team — frontend, backend, mobile (Flutter), and VPS server deployment, all handled in-house. We turn your idea into a production-ready product.",
      siteName: "iDevs — Development Team",
      ogDescription:
        "Frontend, backend, mobile (Flutter/React Native), and VPS deployment — we handle it all ourselves. Real projects, reliable architecture, and production-ready solutions.",
      twitterDescription:
        "A full-stack team covering frontend, backend, mobile development, and server deployment.",
      ogImageAlt: "iDevs team portfolio",
      knowsAbout: [
        "Full Stack Development",
        "Web development",
        "Mobile apps",
        "React",
        "React Native",
        "Flutter",
        "Next.js",
        "Node.js",
        "TypeScript",
        "REST API",
        "MongoDB",
        "PostgreSQL",
        "DevOps",
      ],
      keywords: [
        "iDevs",
        "iDevs team",
        "iDevs developers",
        "iDevs portfolio",
        "development team",
        "IT team Uzbekistan",

        "Full Stack Developer",
        "Web Developer",
        "Mobile Developer",
        "Freelance Developer",

        "Uzbekistan Developer",
        "Tashkent Developer",

        "Frontend Developer",
        "Backend Developer",

        "React Developer",
        "Next.js Developer",
        "React Native Developer",
        "Node.js Developer",

        "TypeScript Developer",
        "JavaScript Developer",

        "REST API",
        "API Integration",

        "MongoDB",
        "PostgreSQL",

        "UI/UX",

        "Web and mobile applications",
        "hire a web developer",
        "hire a mobile app developer",
        "CRM development",

        "Docker",
        "Nginx",
        "PM2",
        "VPS deployment",
      ],
    },
    hero: {
      name: "iDevs",
      role: "Web & Mobile App Development Team",
      title: "We turn your idea into a",
      titleHighlight: "real, working product",
      description:
        "iDevs is a full-stack development team covering frontend, backend, and mobile (Flutter) development. We go all the way — from idea to deployment on a VPS server — together with you.",
      ctaPrimary: "Start a project",
      ctaSecondary: "View projects",
    },
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
    },
    sections: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      stacks: "Technology stack",
    },
    labels: {
      stack: "Focus",
      platformWeb: "View on Web",
      platformAndroid: "View on Android",
      platformIos: "View on iOS",
    },
    about: {
      paragraphs: [
        "iDevs is a results-driven team building web and mobile applications with modern technologies. We work with Next.js, React, React Native, Flutter, Node.js, PostgreSQL, and many other technologies.",
        "Each of us is a strong specialist in our own direction — frontend, backend, or mobile (Flutter). Together, we cover a project end-to-end: frontend, backend, the mobile app, and deployment on a VPS server.",
        "We've shipped real projects — educational platforms, CRM systems, and business automation tools. On every project we pay close attention to clean code, scalable architecture, and a user-friendly interface.",
        "Our goal is to turn your idea into a fast, reliable product that fits your business needs.",
      ],
    },
    stacks: [
      {
        title: "Frontend (Web)",
        summary: "Modern, fast, and user-friendly interfaces.",
        tools: [
          { name: "JavaScript (ES6+)", icon: icon.javascript },
          { name: "TypeScript", icon: icon.typescript },
          { name: "React", icon: icon.react },
          { name: "Next.js", icon: icon.nextjs },
          { name: "Tailwind CSS", icon: icon.tailwind },
          { name: "Vite", icon: icon.vite },
        ],
      },
      {
        title: "Backend",
        summary: "Reliable APIs and secure authentication.",
        tools: [
          { name: "Node.js", icon: icon.node },
          { name: "Express.js / NestJS", icon: icon.nest },
          { name: "MongoDB", icon: icon.mongo },
          { name: "PostgreSQL", icon: icon.postgres },
          { name: "REST API", icon: icon.postman },
        ],
      },
      {
        title: "Mobile",
        summary: "One codebase for iOS and Android.",
        tools: [
          { name: "React Native", icon: icon.react },
          { name: "Flutter", icon: icon.flutter },
          { name: "Expo", icon: icon.expo },
          { name: "Android & iOS build", icon: icon.android },
          { name: "API integration", icon: icon.swift },
          { name: "Push notifications (basic)", icon: icon.firebase },
        ],
      },
      {
        title: "Tools & DevOps",
        summary: "Deployment, monitoring, and automated workflows.",
        tools: [
          { name: "Docker", icon: icon.docker },
          { name: "Nginx", icon: icon.nginx },
          { name: "PM2", icon: icon.pm2 },
          { name: "Git / GitHub", icon: icon.git },
          { name: "Linux (Ubuntu)", icon: icon.ubuntu },
          { name: "VPS deploy", icon: icon.digitalocean },
        ],
      },
    ],
    projects: [
      {
        title: "HackNow",
        href: "https://hacknow.uz/",
        description:
          "Innovative products, an educational platform, and professional cybersecurity services.",
        details:
          "Focus: cybersecurity services, education, and innovative IT products.",
        image: "/projects/hacknow.png",
        platforms: [{ type: "web", href: "https://hacknow.uz/" }],
      },
      {
        title: "ComicCon Tashkent",
        href: "https://comiccon.uz/",
        description:
          "An official promo web page created specifically for the ComicCon event.",
        details: "Focus: event information and a promotional presentation.",
        image: "/projects/comiccon.png",
        platforms: [{ type: "web", href: "https://comiccon.uz/" }],
      },
      {
        title: "Evos Tasting Platform",
        href: "https://tasting.evos.uz/",
        description:
          "An internal platform for suppliers. A dedicated web solution for managing products and processes.",
        details:
          "Focus: supplier registration and testing workflow. Built in partnership with IT Loyihalar.",
        image: "/projects/ETS.png",
        platforms: [{ type: "web", href: "https://tasting.evos.uz/" }],
      },
      {
        title: "Makro",
        href: "https://makromarket.uz/",
        description:
          "The official web page for the Makro market chain. A web project presenting the brand and its services.",
        details:
          "Focus: brand presentation and mobile apps. Built in partnership with Abexlab.",
        image: "/projects/makro.png",
        platforms: [
          { type: "web", href: "https://makromarket.uz/" },
          {
            type: "ios",
            href: "https://apps.apple.com/uz/app/makro-app/id6443717445",
          },
          {
            type: "android",
            href: "https://play.google.com/store/apps/details?id=com.makro.hive_dart",
          },
        ],
      },
      {
        title: "Darmon Servis",
        href: "https://darmonservis.uz/",
        description: "A modern multidisciplinary medical center.",
        details:
          "Focus: clinic services and medical center information. Built in partnership with IT Loyihalar.",
        image: "/projects/darmonservis.png",
        platforms: [{ type: "web", href: "https://darmonservis.uz/" }],
      },
      {
        title: "Usuliya",
        href: "https://usuliya.uz/",
        description: "A platform for learning Arabic.",
        details: "Focus: lessons, exercises, and a smooth mobile app experience.",
        image: "/projects/usuliya.png",
        imageFit: "contain",
        platforms: [
          { type: "web", href: "https://usuliya.uz/" },
          {
            type: "android",
            href: "https://play.google.com/store/apps/details?id=com.usuliya.app",
          },
          {
            type: "ios",
            href: "https://apps.apple.com/pk/app/usuliya/id6775377699",
          },
        ],
      },
      {
        title: "Akbayr",
        href: "https://akbayr.idevs.uz/",
        description: "An online sales platform.",
        details:
          "Focus: product catalog and online ordering. Built in partnership with Abexlab.",
        image: "/projects/akbayr.png",
        imageFit: "contain",
        platforms: [{ type: "web", href: "https://akbayr.idevs.uz/" }],
      },
      {
        title: "DS Lab & DS Lab Kids",
        href: "https://dslab.uz/",
        description: "A web page built for the DS Lab laboratory.",
        details:
          "Focus: information about lab services. Built in partnership with IT Loyihalar.",
        image: "/projects/dslab.jpg",
        imageFit: "contain",
        platforms: [{ type: "web", href: "https://dslab.uz/" }],
      },
      {
        title: "ProeCom",
        href: "https://proecom.uz/",
        description: "A web page built for the ProeCom team.",
        details: "Focus: general information about the team and services.",
        image: "/projects/proecom.png",
        imageFit: "contain",
        platforms: [{ type: "web", href: "https://proecom.uz/" }],
      },
      {
        title: "«O'zinvestloyiha»",
        href: "https://uzinvestproject.uz/",
        description: "A web page built for «O'zinvestloyiha».",
        details:
          "Focus: information about the company and its services. Built in partnership with Abexlab.",
        image: "/projects/uzinvestloyiha.png",
        imageFit: "contain",
        platforms: [{ type: "web", href: "https://uzinvestproject.uz/" }],
      },
      {
        title: "Animall.uz",
        href: "https://animall.uz",
        description:
          "An online platform for animal listings and sales.",
        details: "Focus: listings, filters, and safe communication.",
        image: "/projects/animall.png",
        platforms: [
          { type: "web", href: "https://animall.uz" },
          {
            type: "android",
            href: "https://play.google.com/store/apps/details?id=uz.animall.app&pcampaignid=web_share",
          },
          {
            type: "ios",
            href: "https://apps.apple.com/us/app/animall-uz/id6755634058",
          },
        ],
      },
      {
        title: "Oilago.uz",
        href: "https://oilago.uz/",
        description:
          "A project that includes both a website and a mobile app. Built with Next.js, React Native, Expo, Node.js, Express, and PostgreSQL.",
        details: "Focus: chat, privacy, and a smooth mobile experience.",
        image: "/projects/oilago.png",
        imageFit: "contain",
        platforms: [
          { type: "web", href: "https://oilago.uz/" },
          { type: "android" },
          { type: "ios" },
        ],
      },
      {
        title: "Topshirdi",
        href: "https://topshirdi.uz/",
        description:
          "A web platform and mobile app for preparing for the driving license exam. iOS and Android apps are available.",
        details:
          "Focus: lessons, tests, tickets, video classes, and progress tracking.",
        image: "/projects/topshirdi.png",
        platforms: [
          { type: "web", href: "https://topshirdi.uz/" },
          {
            type: "android",
            href: "https://play.google.com/store/apps/details?id=uz.roadtest.app&hl=en",
          },
          {
            type: "ios",
            href: "https://apps.apple.com/us/app/topshirdi/id6781198005",
          },
        ],
      },
      {
        title: "SmartTest",
        href: "https://smarttest.idevs.uz/",
        description:
          "An online platform for teachers and students to organize tests and exams.",
        details:
          "Focus: Telegram login, and managing tests and results.",
        image: "/projects/smarttest.png",
        platforms: [{ type: "web", href: "https://smarttest.idevs.uz/" }],
      },
      {
        title: "NDA Projects (10+)",
        href: "#",
        description:
          "More than 10 projects built under non-disclosure agreements (NDA) with clients.",
        details: "These are projects whose details cannot be disclosed.",
        image: "/projects/NDA.webp",
        platforms: [
          { type: "web" },
          { type: "android" },
          { type: "ios" },
        ],
      },
    ],
    contact: {
      title: "Let's discuss your project",
      description:
        "Fill out the form and we'll get back to you shortly with a free consultation.",
      availability: "Open for new projects",
      form: {
        nameLabel: "Full name",
        namePlaceholder: "Full name",
        phoneLabel: "Phone number",
        phonePlaceholder: "+998 90 123 45 67",
        companyLabel: "Company name (optional)",
        companyPlaceholder: "Your company name",
        projectLabel: "Project name",
        projectPlaceholder: "Your project name or a short idea",
        submit: "Send",
        submitting: "Sending...",
        successTitle: "Thank you!",
        successDescription:
          "Your request has been received. We'll contact you shortly.",
        errorTitle: "Something went wrong",
        errorDescription:
          "Please try again shortly or message us on Telegram.",
        validation: {
          nameRequired: "Please enter your full name",
          nameMin: "At least 2 characters",
          phoneRequired: "Please enter your phone number",
          phoneInvalid: "Invalid phone number format",
          projectRequired: "Please enter your project name",
        },
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};

export function getContent(locale: Locale): Content {
  return contentByLocale[locale];
}
