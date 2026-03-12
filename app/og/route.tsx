import { ImageResponse } from "next/og";
import { defaultLocale, getContent, isLocale } from "@/lib/i18n";

export const runtime = "edge";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const langParam = searchParams.get("lang");
  const locale = isLocale(langParam) ? langParam : defaultLocale;
  const content = getContent(locale);

  return new ImageResponse(
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "64px",
        color: "#F8FAFC",
        backgroundColor: "#0B1020",
        backgroundImage:
          "radial-gradient(circle at 15% 15%, rgba(59,130,246,0.35), transparent 55%), radial-gradient(circle at 85% 10%, rgba(236,72,153,0.25), transparent 60%), radial-gradient(circle at 50% 120%, rgba(16,185,129,0.2), transparent 60%)",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div
          style={{
            fontSize: 20,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "rgba(248,250,252,0.7)",
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            fontSize: 18,
            padding: "8px 16px",
            borderRadius: 999,
            border: "1px solid rgba(248,250,252,0.3)",
            color: "rgba(248,250,252,0.85)",
          }}
        >
          {locale.toUpperCase()}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
          {content.hero.name}
        </div>
        <div
          style={{
            fontSize: 30,
            fontWeight: 500,
            color: "rgba(248,250,252,0.85)",
          }}
        >
          {content.hero.role}
        </div>
        <div
          style={{
            fontSize: 22,
            maxWidth: 760,
            lineHeight: 1.4,
            color: "rgba(248,250,252,0.75)",
          }}
        >
          {content.meta.ogDescription}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 18,
          color: "rgba(248,250,252,0.65)",
        }}
      >
        <div>{content.meta.siteName}</div>
        <div>murodillayev.uz · idevs.uz</div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
