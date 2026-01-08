import clsx from "clsx"
import { useConnection } from "wagmi"

export default function Page() {
  const { address: userAddress } = useConnection()

  return (
    <main
      className={clsx(
        "fixed top-30 bottom-30 inset-x-1/12 px-1 pt-3.5 pb-3 z-30",
        "flex flex-col items-center",
        "bg-white/10 glass text-(--accent) rounded-4xl",
      )}
    >
      <h1>Page</h1>
    </main>
  )
}
