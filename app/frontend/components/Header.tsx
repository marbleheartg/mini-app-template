import sdk from "@farcaster/miniapp-sdk"
import clsx from "clsx"
import NextImage from "next/image"
import { useEffect } from "react"
import { NavLink } from "react-router"
import { base } from "viem/chains"
import { useConnect, useConnectors, useSwitchChain } from "wagmi"
import { store } from "../../lib/store"

const Header = () => {
  const { user } = store()

  const { mutate: connect } = useConnect()
  const connectors = useConnectors()
  const { mutate: switchChain } = useSwitchChain()
  const session = store.getState().session

  useEffect(() => {
    connect({ connector: connectors[0] })
    switchChain({ chainId: base.id })

    setTimeout(() => {
      connect({ connector: connectors[0] })
      switchChain({ chainId: base.id })
    }, 2000)
  }, [session])

  return (
    <header className={clsx("fixed top-10 inset-x-9", "flex justify-between items-center")}>
      <div className="w-12">
        <NextImage className="rounded-full" src={"/images/og/icon.png"} alt="logo" width={32} height={32} priority />
      </div>

      <NavLink to="/home" className={clsx("flex justify-end w-12")} onClick={() => sdk.haptics.impactOccurred("medium")}>
        <div className={clsx("relative aspect-square w-8", "border-2 border-(--bg-border) rounded-full", "cursor-pointer")}>
          <NextImage src={user?.pfpUrl || "https://placehold.co/32x32"} fill alt="pfp" className="rounded-full" priority />
        </div>
      </NavLink>
    </header>
  )
}

export default Header
