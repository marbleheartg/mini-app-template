"use client"

import { farcasterMiniApp as miniAppConnector } from "@farcaster/miniapp-wagmi-connector"
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi"
import { base } from "@reown/appkit/networks"
import { createAppKit } from "@reown/appkit/react"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { CreateConnectorFn, WagmiProvider } from "wagmi"

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "YOUR_PROJECT_ID"

const connectors: CreateConnectorFn[] = [miniAppConnector()]
const wagmiAdapter = new WagmiAdapter({ networks: [base], projectId, ssr: false, connectors })

createAppKit({
  defaultNetwork: base,
  adapters: [wagmiAdapter],
  networks: [base],
  projectId,
  features: {
    analytics: false,
    swaps: false,
    onramp: false,
    allWallets: false,
    // email: true,
    socials: [
      // "google", "x", "github", "discord", "apple", "facebook", "farcaster"
    ],
    // emailShowWallets: true,
  },
  enableNetworkSwitch: false,
  enableWalletGuide: false,
})

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 30,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
})

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
