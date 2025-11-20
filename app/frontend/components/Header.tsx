import clsx from "clsx"
// import Image from "next/image"
import { useAppKit, useAppKitAccount } from "@reown/appkit/react"
import { store } from "../../lib/store"

const Header = () => {
  const { user } = store()

  const { address, isConnected } = useAppKitAccount()
  const { open } = useAppKit()

  return (
    <header className={clsx("fixed top-10 inset-x-8", "flex justify-between items-center")}>
      <div className={clsx("text-xl p-1 px-2.5 pb-1.5 mb-0.5")}>Logo</div>

      {/* <Image src={"/images/global/logo.svg"} fill alt="logo" /> */}
      {/* <Image
        src={user?.pfpUrl || "/images/global/user.svg"}
        width={19}
        height={19}
        alt="pfp"
        className={clsx("absolute top-0 right-0", "rounded-full")}
      /> */}

      <button className={clsx("text-sm", "p-1 px-2.5", "border rounded-full", "cursor-pointer")} onClick={() => open({ view: "Connect" })}>
        {isConnected ? address?.slice(0, 6) : "connect"}
      </button>
    </header>
  )
}

export default Header
