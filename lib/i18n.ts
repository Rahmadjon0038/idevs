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

export type Experience = {
  period: string;
  role: string;
  company: string;
  href: string;
  summary: string;
};

export type Project = {
  title: string;
  href: string;
  description: string;
  details: string;
  image: string;
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
    jobTitle: string;
    knowsAbout: string[];
  };
  hero: {
    name: string;
    role: string;
    intro: string;
    ctaCv: string;
  };
  nav: {
    about: string;
    experience: string;
    projects: string;
  };
  sections: {
    about: string;
    experience: string;
    projects: string;
    stacks: string;
  };
  labels: {
    stack: string;
  };
  about: {
    paragraphs: string[];
  };
  stacks: Stack[];
  experiences: Experience[];
  projects: Project[];
};

const icon = {
  javascript: "https://cdn.simpleicons.org/javascript/F7DF1E",
  typescript: "https://cdn.simpleicons.org/typescript/3178C6",
  react: "https://cdn.simpleicons.org/react/61DAFB",
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
      title: "Hojiakbar Murodillayev | MERN Stack va Mobile Developer",
      description:
        "Hojiakbar Murodillayev — 4+ yillik tajribaga ega MERN Stack va Mobile Developer. Web va mobil ilovalarni JavaScript ekotizimi asosida ishlab chiqaman.",
      siteName: "Hojiakbar Murodillayev — MERN & Mobile Developer",
      ogDescription:
        "Web va mobil ilovalarni MERN stack asosida ishlab chiqaman. Real loyihalar, freelance tajriba va production-ready yechimlar.",
      twitterDescription:
        "MERN Stack va React Native asosida web va mobil ilovalar ishlab chiqaman.",
      ogImageAlt: "Hojiakbar Murodillayev portfolio",
      jobTitle: "MERN Stack va Mobile Developer",
      knowsAbout: [
        "MERN stack",
        "Web dasturlash",
        "Mobil ilovalar",
        "React",
        "React Native",
        "Next.js",
        "Node.js",
        "TypeScript",
        "REST API",
        "MongoDB",
        "PostgreSQL",
        "DevOps",
      ],
      keywords: [
        "Hojiakbar",
        "Murodillayev",
        "Hojiakbar Murodillayev",
        "Hojiakbar Murodillayev portfolio",
        "MERN stack dasturchi",
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
        "Node.js dasturchi",
        "TypeScript dasturchi",
        "JavaScript dasturchi",
        "REST API",
        "API integratsiya",
        "MongoDB",
        "PostgreSQL",
        "UI/UX",
        "web va mobil ilovalar",
        "Docker",
        "Nginx",
        "PM2",
        "VPS deploy",
      ],
    },
    hero: {
      name: "Hojiakbar Murodillayev",
      role: "MERN Stack va Mobile Developer",
      intro:
        "Zamonaviy web va mobil ilovalarni JavaScript ekotizimi asosida ishlab chiqaman. Frontend, backend va mobil tajribalarni yagona tizim sifatida loyihalayman.",
      ctaCv: "CV Yuklab Olish",
    },
    nav: {
      about: "Men haqimda",
      experience: "Tajriba",
      projects: "Loyihalar",
    },
    sections: {
      about: "Men haqimda",
      experience: "Tajriba",
      projects: "Loyihalar",
      stacks: "Texnologiyalar stacki",
    },
    labels: {
      stack: "Stack",
    },
    about: {
      paragraphs: [
        "Men real loyihalarda ishlagan MERN stack dasturchiman. React va React Native yordamida web va mobil interfeyslar, Node.js orqali esa barqaror backend yechimlar yarataman.",
        "Oxirgi yillarda korporativ va startap loyihalarda ishladim: tezkor MVP, masshtablanuvchi arxitektura va biznes ehtiyojlariga mos texnik yechimlarni taqdim etaman. Maqsadim — tez, ishonchli va foydalanuvchi uchun qulay ilovalar ishlab chiqish.",
      ],
    },
    stacks: [
      {
        title: "Frontend (Web)",
        summary: "Zamonaviy UI/UX, ishlash va qo'llanish qulayligi.",
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
        summary: "Barqaror API'lar va xavfsiz autentifikatsiya.",
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
        summary: "Web bilan uyg'un ishlovchi mobil tajribalar.",
        tools: [
          { name: "React Native", icon: icon.react },
          { name: "Expo", icon: icon.expo },
          { name: "Android & iOS build", icon: icon.android },
          { name: "API integratsiya", icon: icon.swift },
          { name: "Push notification (basic)", icon: icon.firebase },
        ],
      },
      {
        title: "Tools & DevOps",
        summary: "Jo'natish, kuzatuv va avtomatlashtirish.",
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
    experiences: [
      {
        period: "2025 — HOZIRDA",
        role: "Full Stack Developer",
        company: "IT Loyihalar",
        href: "https://it-loyihalar.uz/",
        summary:
          "Web va mobil ilovalar uchun yagona MERN arxitektura asosida ishlash. React va React Native yordamida foydalanuvchi interfeyslari, Node.js orqali backend xizmatlarini ishlab chiqish. Loyihalarni production muhitga joylash va barqaror ishlashini ta'minlash. Biznes jarayonlarini raqamlashtirish va texnik qarorlarni optimallashtirishga e'tibor qarataman.",
      },
      {
        period: "2021 — HOZIRDA",
        role: "MERN Stack (Freelance)",
        company: "Independent / Freelance",
        href: "https://t.me/murodillayev_hojiakbar",
        summary:
          "So'nggi 4 yil davomida mustaqil dasturchi sifatida web va mobil ilovalar ishlab chiqish. Turli mijozlar uchun loyihalarni noldan yaratish, mavjud tizimlarni rivojlantirish va texnik yechimlarni real biznes ehtiyojlariga moslash. Mijozlar bilan to'g'ridan-to'g'ri kommunikatsiya va talablarni aniq texnik topshiriqqa aylantirish tajribasi mavjud.",
      },
      {
        period: "2025 — HOZIRDA",
        role: "Frontend Developer (Part-time)",
        company: "Abexlab",
        href: "https://www.linkedin.com/company/abexlab/",
        summary:
          "Zamonaviy web interfeyslar ishlab chiqish va mavjud sahifalarni optimizatsiya qilish. Foydalanuvchi tajribasini yaxshilash va dizaynni funksional yechimlarga aylantirish. UI komponentlarni qayta ishlatish va tezkor yetkazib berishga e'tibor qarataman.",
      },
      {
        period: "2024 — 2025",
        role: "Frontend Developer",
        company: "Etamin IT Solutions",
        href: "https://etamin.digital/",
        summary:
          "Korxona darajasidagi web platformalar ustida ishlash. CRUD va real-time funksiyalarni joriy etish, tizim barqarorligi va performance'ni yaxshilash. Dizayn va backend jamoalari bilan muvofiqlikda ishlash tajribasi.",
      },
      {
        period: "2023 — 2025",
        role: "Frontend Mentor",
        company: "Webbrain IT Academy",
        href: "https://t.me/webbrain_academy",
        summary:
          "Frontend yo'nalishida talabalarga mentorlik qilish. Real loyihalar orqali amaliy bilim berish, kod sifati va to'g'ri yondashuvni shakllantirish. O'quvchilarni portfolio va ishga tayyorlashga ko'maklashish.",
      },
      {
        period: "2022 — 2023",
        role: "Junior Frontend Developer",
        company: "Mahsulot.com",
        href: "https://mahsulot.com/",
        summary:
          "E-commerce yo'nalishidagi web loyihalarda ishtirok etish. Foydalanuvchi interfeyslarini ishlab chiqish va jamoa bilan hamkorlikda funksional yechimlar yaratish. UX yaxshilash va konversiyani oshirishga xizmat qiluvchi o'zgarishlar kiritish.",
      },
    ],
    projects: [
      {
        title: "Darmon Servis",
        href: "https://darmonservis.uz",
        description:
          "Xususiy klinika uchun landing page. Xizmatlar, yo'nalishlar va kompaniya haqida to'liq ma'lumot beruvchi rasmiy veb-sahifa. (IT Loyihalar tomonidan ishlab chiqilgan)",
        details:
          "Fokus: xizmatlar katalogi, tezkor aloqa va mobil moslashuv.",
        image: "/projects/darmonservis.png",
      },
      {
        title: "Makro",
        href: "https://makromarket.uz/",
        description:
          "Makro marketi uchun rasmiy veb-sahifa. Brend va xizmatlar haqida umumiy ma'lumot beruvchi web loyiha. (Abexlab jamoasi bilan hamkorlikda)",
        details:
          "Fokus: brend taqdimoti, kontent boshqaruvi va ishlash tezligi.",
        image: "/projects/makro.png",
      },
      {
        title: "Hacknow.uz",
        href: "https://hacknow.uz/",
        description:
          "Kiberxavfsizlik va dasturlash bo'yicha amaliy bilim berishga yo'naltirilgan ta'lim platformasi. (Mustaqil loyiha)",
        details:
          "Fokus: kurslar, blog va ro'yxatdan o'tish oqimlari.",
        image: "/projects/hacknow.png",
      },
      {
        title: "EVOS Tasting Platform",
        href: "https://tasting.evos.uz",
        description:
          "Supplier uchun mo'ljallangan ichki platforma. Mahsulotlar va jarayonlarni boshqarish uchun maxsus web yechim. (Abexlab jamoasi bilan hamkorlikda)",
        details:
          "Fokus: role-based kirish va boshqaruv paneli.",
        image: "/projects/ETS.png",
      },
      {
        title: "Rano AI",
        href: "https://rano.animall.uz/",
        description:
          "Huquqiy hujjatlar asosida o'qitilgan sun'iy intellekt tizimi. Foydalanuvchilarga maslahat va izohlar berish uchun mo'ljallangan. (U2S jamoasi bilan hamkorlikda)",
        details:
          "Fokus: hujjat qidiruvi va AI asosidagi izohlar.",
        image: "/projects/ranoAI.png",
      },
      {
        title: "WM (NDA)",
        href: "#",
        description:
          "Tijoriy web loyihasi. Mijoz va loyiha tafsilotlari maxfiylik shartnomasi (NDA) asosida oshkor etilmaydi.",
        details:
          "Fokus: maxfiy biznes jarayonlari va admin panel.",
        image: "/projects/NDA.webp",
      },
      {
        title: "COST (NDA)",
        href: "#",
        description:
          "Ichki boshqaruv tizimi. Loyiha tafsilotlari va biznes logikasi NDA sababli ochiqlanmaydi.",
        details:
          "Fokus: ichki workflow va ma'lumotlar boshqaruvi.",
        image: "/projects/NDA.webp",
      },
      {
        title: "Animall.uz",
        href: "https://animall.uz",
        description:
          "Hayvonlar savdosi va e'lonlari uchun mo'ljallangan onlayn platforma. (Mustaqil loyiha)",
        details:
          "Fokus: e'lonlar, filtrlash va xavfsiz aloqa.",
        image: "/projects/animall.png",
      },
      {
        title: "Qutqaruvchi.uz",
        href: "https://qutqaruvchi.uz",
        description:
          "Favqulodda vaziyatlarda tezkor yordam chaqirish uchun mo'ljallangan veb-platforma. (Mustaqil loyiha)",
        details:
          "Fokus: tezkor chaqiruv, lokatsiya va xabarnoma.",
        image: "/projects/qutqaruvchi.png",
      },
      {
        title: "ComicCon Tashkent",
        href: "#",
        description:
          "ComicCon tadbiri uchun maxsus tayyorlangan rasmiy promo veb-sahifa. (Abexlab jamoasi bilan hamkorlikda)",
        details:
          "Fokus: event promo, jadval va ro'yxatdan o'tish.",
        image: "/projects/comiccon.png",
      },
      {
        title: "T-Cats",
        href: "https://comica.tcats.uz",
        description:
          "Komikslarni onlayn o'qish va ko'rish uchun mo'ljallangan web platforma. (Abexlab jamoasi bilan hamkorlikda)",
        details:
          "Fokus: media ko'rish, katalog va foydalanuvchi tajribasi.",
        image: "/projects/tcats.png",
      },
    ],
  },
  ru: {
    meta: {
      title: "Hojiakbar Murodillayev | MERN Stack и Mobile Developer",
      description:
        "Hojiakbar Murodillayev — MERN Stack и Mobile Developer с 4+ годами опыта. Разрабатываю веб и мобильные приложения в экосистеме JavaScript.",
      siteName: "Hojiakbar Murodillayev — MERN & Mobile Developer",
      ogDescription:
        "Разрабатываю веб и мобильные приложения на MERN stack. Реальные проекты, фриланс и production-ready решения.",
      twitterDescription:
        "Разрабатываю веб и мобильные приложения на MERN Stack и React Native.",
      ogImageAlt: "Портфолио Hojiakbar Murodillayev",
      jobTitle: "MERN Stack и Mobile Developer",
      knowsAbout: [
        "MERN stack",
        "веб-разработка",
        "мобильные приложения",
        "React",
        "React Native",
        "Next.js",
        "Node.js",
        "TypeScript",
        "REST API",
        "MongoDB",
        "PostgreSQL",
        "DevOps",
      ],
      keywords: [
        "Hojiakbar Murodillayev",
        "MERN разработчик",
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
        "Docker",
        "Nginx",
        "PM2",
        "VPS deploy",
      ],
    },
    hero: {
      name: "Hojiakbar Murodillayev",
      role: "MERN Stack и Mobile Developer",
      intro:
        "Разрабатываю современные веб и мобильные приложения в экосистеме JavaScript. Проектирую фронтенд, бэкенд и мобильный опыт как единую систему.",
      ctaCv: "Скачать CV",
    },
    nav: {
      about: "Обо мне",
      experience: "Опыт",
      projects: "Проекты",
    },
    sections: {
      about: "Обо мне",
      experience: "Опыт",
      projects: "Проекты",
      stacks: "Технологический стек",
    },
    labels: {
      stack: "Стек",
    },
    about: {
      paragraphs: [
        "Я MERN-разработчик с опытом в реальных проектах. Создаю веб и мобильные интерфейсы на React и React Native, а также надежные backend-решения на Node.js.",
        "Работал над корпоративными и стартап-проектами: быстрые MVP, масштабируемая архитектура и решения под бизнес-задачи. Моя цель — быстрые, надежные и удобные для пользователя приложения.",
      ],
    },
    stacks: [
      {
        title: "Frontend (Web)",
        summary: "Современный UI/UX, скорость и удобство использования.",
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
        summary: "Надежные API и безопасная аутентификация.",
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
        summary: "Мобильные приложения, интегрированные с вебом.",
        tools: [
          { name: "React Native", icon: icon.react },
          { name: "Expo", icon: icon.expo },
          { name: "Сборка Android и iOS", icon: icon.android },
          { name: "Интеграция API", icon: icon.swift },
          { name: "Push-уведомления (базовые)", icon: icon.firebase },
        ],
      },
      {
        title: "Tools & DevOps",
        summary: "Деплой, мониторинг и автоматизация.",
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
    experiences: [
      {
        period: "2025 — НАСТОЯЩЕЕ",
        role: "Full Stack Developer",
        company: "IT Loyihalar",
        href: "https://it-loyihalar.uz/",
        summary:
          "Работа над веб и мобильными приложениями на единой MERN-архитектуре. Разработка пользовательских интерфейсов на React и React Native, серверной логики на Node.js. Развертывание проектов в production и обеспечение стабильной работы. Уделяю внимание цифровизации бизнес-процессов и оптимизации технических решений.",
      },
      {
        period: "2021 — НАСТОЯЩЕЕ",
        role: "MERN Stack (Freelance)",
        company: "Independent / Freelance",
        href: "https://t.me/murodillayev_hojiakbar",
        summary:
          "Более 4 лет разрабатываю веб и мобильные приложения как независимый разработчик. Создаю проекты с нуля, развиваю существующие системы и подбираю решения под реальные бизнес-задачи. Есть опыт прямой коммуникации с заказчиками и формализации требований.",
      },
      {
        period: "2025 — НАСТОЯЩЕЕ",
        role: "Frontend Developer (Part-time)",
        company: "Abexlab",
        href: "https://www.linkedin.com/company/abexlab/",
        summary:
          "Разработка современных веб-интерфейсов и оптимизация существующих страниц. Улучшение пользовательского опыта и превращение дизайна в функциональные решения. Фокус на переиспользуемые компоненты и быстрые поставки.",
      },
      {
        period: "2024 — 2025",
        role: "Frontend Developer",
        company: "Etamin IT Solutions",
        href: "https://etamin.digital/",
        summary:
          "Работа над корпоративными веб-платформами. Внедрение CRUD и real-time функций, повышение стабильности и производительности. Взаимодействие с дизайн- и backend-командами.",
      },
      {
        period: "2023 — 2025",
        role: "Frontend Mentor",
        company: "Webbrain IT Academy",
        href: "https://t.me/webbrain_academy",
        summary:
          "Менторство студентов по frontend. Практика на реальных проектах, формирование качества кода и правильного подхода. Помощь в подготовке портфолио и трудоустройству.",
      },
      {
        period: "2022 — 2023",
        role: "Junior Frontend Developer",
        company: "Mahsulot.com",
        href: "https://mahsulot.com/",
        summary:
          "Участие в e-commerce проектах. Разработка пользовательских интерфейсов и создание функциональных решений совместно с командой. Улучшение UX и влияния на конверсию.",
      },
    ],
    projects: [
      {
        title: "Darmon Servis",
        href: "https://darmonservis.uz",
        description:
          "Лендинг для частной клиники. Официальная веб-страница с услугами, направлениями и информацией о компании. (Разработано IT Loyihalar)",
        details: "Фокус: каталог услуг, быстрый контакт и адаптивность.",
        image: "/projects/darmonservis.png",
      },
      {
        title: "Makro",
        href: "https://makromarket.uz/",
        description:
          "Официальная веб-страница сети Makro. Проект для презентации бренда и услуг. (В сотрудничестве с Abexlab)",
        details: "Фокус: презентация бренда, контент и скорость загрузки.",
        image: "/projects/makro.png",
      },
      {
        title: "Hacknow.uz",
        href: "https://hacknow.uz/",
        description:
          "Образовательная платформа по кибербезопасности и программированию. (Независимый проект)",
        details: "Фокус: курсы, блог и сценарии регистрации.",
        image: "/projects/hacknow.png",
      },
      {
        title: "EVOS Tasting Platform",
        href: "https://tasting.evos.uz",
        description:
          "Внутренняя платформа для supplier. Специальное веб-решение для управления продуктами и процессами. (В сотрудничестве с Abexlab)",
        details: "Фокус: role-based доступ и панель управления.",
        image: "/projects/ETS.png",
      },
      {
        title: "Rano AI",
        href: "https://rano.animall.uz/",
        description:
          "Система ИИ, обученная на юридических документах. Предназначена для консультаций и пояснений пользователям. (В сотрудничестве с U2S)",
        details: "Фокус: поиск документов и AI-объяснения.",
        image: "/projects/ranoAI.png",
      },
      {
        title: "WM (NDA)",
        href: "#",
        description:
          "Коммерческий веб-проект. Детали скрыты из-за NDA.",
        details: "Фокус: конфиденциальные бизнес-процессы и админ-панель.",
        image: "/projects/NDA.webp",
      },
      {
        title: "COST (NDA)",
        href: "#",
        description:
          "Внутренняя система управления. Детали и бизнес-логика не раскрываются.",
        details: "Фокус: внутренние workflow и управление данными.",
        image: "/projects/NDA.webp",
      },
      {
        title: "Animall.uz",
        href: "https://animall.uz",
        description:
          "Онлайн-платформа для продажи животных и объявлений. (Независимый проект)",
        details: "Фокус: объявления, фильтры и безопасная связь.",
        image: "/projects/animall.png",
      },
      {
        title: "Qutqaruvchi.uz",
        href: "https://qutqaruvchi.uz",
        description:
          "Веб-платформа для вызова экстренной помощи. (Независимый проект)",
        details: "Фокус: быстрый вызов, геолокация и уведомления.",
        image: "/projects/qutqaruvchi.png",
      },
      {
        title: "ComicCon Tashkent",
        href: "#",
        description:
          "Официальная промо-страница для ComicCon. (В сотрудничестве с Abexlab)",
        details: "Фокус: event promo, расписание и регистрация.",
        image: "/projects/comiccon.png",
      },
      {
        title: "T-Cats",
        href: "https://comica.tcats.uz",
        description:
          "Веб-платформа для онлайн-чтения и просмотра комиксов. (В сотрудничестве с Abexlab)",
        details: "Фокус: медиапросмотр, каталог и UX.",
        image: "/projects/tcats.png",
      },
    ],
  },
  en: {
    meta: {
      title: "Hojiakbar Murodillayev | MERN Stack & Mobile Developer",
      description:
        "Hojiakbar Murodillayev — MERN Stack & Mobile Developer with 4+ years of experience. I build web and mobile apps in the JavaScript ecosystem.",
      siteName: "Hojiakbar Murodillayev — MERN & Mobile Developer",
      ogDescription:
        "I build web and mobile applications on the MERN stack. Real projects, freelance experience, and production-ready solutions.",
      twitterDescription:
        "Building web and mobile applications with MERN Stack and React Native.",
      ogImageAlt: "Hojiakbar Murodillayev portfolio",
      jobTitle: "MERN Stack & Mobile Developer",
      knowsAbout: [
        "MERN stack",
        "Web development",
        "Mobile apps",
        "React",
        "React Native",
        "Next.js",
        "Node.js",
        "TypeScript",
        "REST API",
        "MongoDB",
        "PostgreSQL",
        "DevOps",
      ],
      keywords: [
        "Hojiakbar Murodillayev",
        "MERN Stack Developer",
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
        "Docker",
        "Nginx",
        "PM2",
        "VPS deployment",
      ],
    },
    hero: {
      name: "Hojiakbar Murodillayev",
      role: "MERN Stack & Mobile Developer",
      intro:
        "I build modern web and mobile applications in the JavaScript ecosystem. I design frontend, backend, and mobile experiences as a single system.",
      ctaCv: "Download CV",
    },
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
    },
    sections: {
      about: "About",
      experience: "Experience",
      projects: "Projects",
      stacks: "Technology stack",
    },
    labels: {
      stack: "Stack",
    },
    about: {
      paragraphs: [
        "I'm a MERN stack developer with hands-on experience in real projects. I build web and mobile interfaces with React and React Native, and reliable backend solutions with Node.js.",
        "Recently I've worked on corporate and startup projects: fast MVPs, scalable architectures, and solutions aligned with business goals. My focus is delivering fast, reliable, and user-friendly applications.",
      ],
    },
    stacks: [
      {
        title: "Frontend (Web)",
        summary: "Modern UI/UX, performance, and usability.",
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
        summary: "Mobile experiences aligned with the web.",
        tools: [
          { name: "React Native", icon: icon.react },
          { name: "Expo", icon: icon.expo },
          { name: "Android & iOS build", icon: icon.android },
          { name: "API integration", icon: icon.swift },
          { name: "Push notifications (basic)", icon: icon.firebase },
        ],
      },
      {
        title: "Tools & DevOps",
        summary: "Deployment, monitoring, and automation.",
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
    experiences: [
      {
        period: "2025 — Present",
        role: "Full Stack Developer",
        company: "IT Loyihalar",
        href: "https://it-loyihalar.uz/",
        summary:
          "Working on web and mobile applications on a unified MERN architecture. Building user interfaces with React and React Native and backend services with Node.js. Deploying projects to production and ensuring stability. Focused on digitizing business processes and optimizing technical decisions.",
      },
      {
        period: "2021 — Present",
        role: "MERN Stack (Freelance)",
        company: "Independent / Freelance",
        href: "https://t.me/murodillayev_hojiakbar",
        summary:
          "Over the last 4 years, I have delivered web and mobile apps as an independent developer. Building projects from scratch, evolving existing systems, and tailoring technical solutions to business needs. Experienced in direct client communication and requirement formalization.",
      },
      {
        period: "2025 — Present",
        role: "Frontend Developer (Part-time)",
        company: "Abexlab",
        href: "https://www.linkedin.com/company/abexlab/",
        summary:
          "Developing modern web interfaces and optimizing existing pages. Improving user experience and converting design into functional solutions. Focus on reusable UI components and fast delivery.",
      },
      {
        period: "2024 — 2025",
        role: "Frontend Developer",
        company: "Etamin IT Solutions",
        href: "https://etamin.digital/",
        summary:
          "Worked on enterprise-grade web platforms. Implemented CRUD and real-time features, improved stability and performance. Collaborated closely with design and backend teams.",
      },
      {
        period: "2023 — 2025",
        role: "Frontend Mentor",
        company: "Webbrain IT Academy",
        href: "https://t.me/webbrain_academy",
        summary:
          "Mentored students in frontend development. Provided hands-on training with real projects, code quality practices, and problem-solving. Helped students build portfolios and get job-ready.",
      },
      {
        period: "2022 — 2023",
        role: "Junior Frontend Developer",
        company: "Mahsulot.com",
        href: "https://mahsulot.com/",
        summary:
          "Participated in e-commerce web projects. Built user interfaces and delivered functional solutions with the team. Improved UX and conversion-focused flows.",
      },
    ],
    projects: [
      {
        title: "Darmon Servis",
        href: "https://darmonservis.uz",
        description:
          "Landing page for a private clinic. Official website with services, directions, and company information. (Built by IT Loyihalar)",
        details: "Focus: services catalog, quick contact, and mobile layout.",
        image: "/projects/darmonservis.png",
      },
      {
        title: "Makro",
        href: "https://makromarket.uz/",
        description:
          "Official website for Makro market. A web project presenting brand and services. (In collaboration with Abexlab)",
        details: "Focus: brand presentation, content management, performance.",
        image: "/projects/makro.png",
      },
      {
        title: "Hacknow.uz",
        href: "https://hacknow.uz/",
        description:
          "Educational platform for cybersecurity and programming with hands-on learning. (Independent project)",
        details: "Focus: courses, blog, and registration flows.",
        image: "/projects/hacknow.png",
      },
      {
        title: "EVOS Tasting Platform",
        href: "https://tasting.evos.uz",
        description:
          "Internal platform for suppliers. A custom web solution for product and process management. (In collaboration with Abexlab)",
        details: "Focus: role-based access and management dashboard.",
        image: "/projects/ETS.png",
      },
      {
        title: "Rano AI",
        href: "https://rano.animall.uz/",
        description:
          "AI system trained on legal documents to provide guidance and explanations. (In collaboration with U2S)",
        details: "Focus: document search and AI-based explanations.",
        image: "/projects/ranoAI.png",
      },
      {
        title: "WM (NDA)",
        href: "#",
        description:
          "Commercial web project. Client and project details are confidential under NDA.",
        details: "Focus: confidential business processes and admin panel.",
        image: "/projects/NDA.webp",
      },
      {
        title: "COST (NDA)",
        href: "#",
        description:
          "Internal management system. Project details and business logic are confidential.",
        details: "Focus: internal workflows and data management.",
        image: "/projects/NDA.webp",
      },
      {
        title: "Animall.uz",
        href: "https://animall.uz",
        description:
          "Online platform for animal listings and sales. (Independent project)",
        details: "Focus: listings, filters, and safe communication.",
        image: "/projects/animall.png",
      },
      {
        title: "Qutqaruvchi.uz",
        href: "https://qutqaruvchi.uz",
        description:
          "Web platform for requesting emergency assistance. (Independent project)",
        details: "Focus: quick request, location, and notifications.",
        image: "/projects/qutqaruvchi.png",
      },
      {
        title: "ComicCon Tashkent",
        href: "#",
        description:
          "Official promo website for ComicCon event. (In collaboration with Abexlab)",
        details: "Focus: event promo, schedule, and registration.",
        image: "/projects/comiccon.png",
      },
      {
        title: "T-Cats",
        href: "https://comica.tcats.uz",
        description:
          "Web platform for reading and viewing comics online. (In collaboration with Abexlab)",
        details: "Focus: media viewing, catalog, and UX.",
        image: "/projects/tcats.png",
      },
    ],
  },
};

export function getContent(locale: Locale): Content {
  return contentByLocale[locale];
}
