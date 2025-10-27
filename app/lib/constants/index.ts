// import { contractAbi } from "../../../artifacts/contracts/Contract.sol/generated"

// const ABI = contractAbi

const CA = ""

const MINIAPP_TITLE = "MINIAPP_TITLE"

const MINIAPP_DESCRIPTION = "MINIAPP_DESCRIPTION"

const MINIAPP = {
  version: "next",
  imageUrl: `https://${process.env.NEXT_PUBLIC_HOST}/images/og/cast/image.jpg`,
  aspectRatio: "3:2",
  button: {
    title: "open",
    action: {
      type: "launch_miniapp",
      url: `https://${process.env.NEXT_PUBLIC_HOST}`,
      name: MINIAPP_TITLE,
      splashImageUrl: `https://${process.env.NEXT_PUBLIC_HOST}/images/og/splash.png`,
      splashBackgroundColor: "#ffffff",
    },
  },
}

export { ABI, CA, MINIAPP, MINIAPP_DESCRIPTION, MINIAPP_TITLE }
