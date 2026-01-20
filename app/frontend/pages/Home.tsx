import clsx from "clsx"
import { useConnection } from "wagmi"

export default function Home() {
  const { address: userAddress } = useConnection()

  return <main className={clsx("flex flex-col gap-5", "px-5 pt-20 pb-26", "overflow-y-scroll overflow-x-hidden")}></main>
}
