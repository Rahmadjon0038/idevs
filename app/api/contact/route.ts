import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const payloadSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  phone: z.string().trim().min(5).max(30),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  projectName: z.string().trim().min(1).max(200),
  locale: z.string().max(5).optional(),
});

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  const parsed = payloadSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "invalid_payload" },
      { status: 400 },
    );
  }

  const { fullName, phone, company, projectName, locale } = parsed.data;

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    console.error(
      "Contact form: TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not configured",
    );
    return NextResponse.json(
      { ok: false, error: "not_configured" },
      { status: 500 },
    );
  }

  const lines = [
    "🆕 Yangi murojaat — iDevs",
    `👤 Ism: ${fullName}`,
    `📞 Telefon: ${phone}`,
    company ? `🏢 Kompaniya: ${company}` : null,
    `📌 Loyiha: ${projectName}`,
    locale ? `🌐 Til: ${locale}` : null,
  ].filter(Boolean);

  try {
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: lines.join("\n"),
        }),
      },
    );

    if (!telegramResponse.ok) {
      const errorBody = await telegramResponse.text();
      console.error("Contact form: Telegram sendMessage failed", errorBody);
      return NextResponse.json(
        { ok: false, error: "telegram_error" },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Contact form: failed to reach Telegram", error);
    return NextResponse.json(
      { ok: false, error: "telegram_unreachable" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
