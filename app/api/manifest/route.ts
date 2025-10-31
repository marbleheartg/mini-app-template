import { MINIAPP_DESCRIPTION, MINIAPP_TITLE } from "@/lib/constants"
import { NextResponse } from "next/server"

const { NEXT_PUBLIC_HOST } = process.env
if (!NEXT_PUBLIC_HOST) throw new Error("ManifestCredentialsNotConfigured")

export async function GET() {
  return NextResponse.json({
    miniapp: {
      version: "1",
      name: MINIAPP_TITLE,
      iconUrl: `https://${NEXT_PUBLIC_HOST}/images/og/icon.png`,
      homeUrl: `https://${NEXT_PUBLIC_HOST}`,
      splashImageUrl: `https://${NEXT_PUBLIC_HOST}/images/og/splash.png`,
      splashBackgroundColor: "#ffffff",
      subtitle: MINIAPP_DESCRIPTION,
      description: MINIAPP_DESCRIPTION,
      primaryCategory:
        "games, social, finance, utility, productivity, health-fitness, news-media, music, shopping, education, developer-tools, entertainment, art-creativity",
      tagline: "TAGLINE",
      ogTitle: MINIAPP_TITLE,
      ogDescription: MINIAPP_DESCRIPTION,
      ogImageUrl: `https://${NEXT_PUBLIC_HOST}/images/og/og.png`,
      castShareUrl: `https://${NEXT_PUBLIC_HOST}`,
      heroImageUrl: `https://${NEXT_PUBLIC_HOST}/images/og/og.png`,
      canonicalDomain: NEXT_PUBLIC_HOST,
      screenshotUrls: [
        `https://${NEXT_PUBLIC_HOST}/images/og/screenshots/1.jpg`,
        `https://${NEXT_PUBLIC_HOST}/images/og/screenshots/2.jpg`,
        `https://${NEXT_PUBLIC_HOST}/images/og/screenshots/3.jpg`,
      ],
      requiredChains: ["eip155:8453"],
      requiredCapabilities: ["actions.viewProfile", "actions.composeCast", "actions.ready", "actions.close"],
      tags: ["1", "2", "3", "4", "5"],

      webhookUrl: "NEYNAR_WEBHOOK_URL",
    },
  })
}
