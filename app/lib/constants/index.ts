const CA = "0x980C93A5A5706Cf9B2cEa8E5f4b88070AF1155AA"

const MINIAPP = {
  title: "mini-app-template",
  description: "mini-app-template description",
  tags: ["mini", "app", "template", "super", "cool"],
  bgColor: "#ffffff",
  requiredCapabilities: ["actions.ready"],
  requiredChains: ["eip155:8453"],
  primaryCategory: "developer-tools",
  // "games, social, finance, utility, productivity, health-fitness, news-media, music, shopping, education, developer-tools, entertainment, art-creativity",
  // webhookUrl: "webhookUrl",
}

const MINIAPP_METADATA = {
  version: "next",
  imageUrl: `https://${process.env.NEXT_PUBLIC_HOST}/images/og/cast.png`,
  aspectRatio: "3:2",
  button: {
    title: "open",
    action: {
      type: "launch_miniapp",
      url: `https://${process.env.NEXT_PUBLIC_HOST}`,
      name: MINIAPP.title,
      splashImageUrl: `https://${process.env.NEXT_PUBLIC_HOST}/images/og/splash.png`,
      splashBackgroundColor: MINIAPP.bgColor,
    },
  },
}

export { CA, MINIAPP, MINIAPP_METADATA }
