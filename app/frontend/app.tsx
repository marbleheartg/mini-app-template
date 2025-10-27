import clientErrorHandling from "@/lib/clientErrorsReporting"
import Providers from "@/lib/providers"
import { updateStore } from "@/lib/store"
import sdk from "@farcaster/miniapp-sdk"
import { useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import Header from "./components/Header"
import Menu from "./components/Menu"
import Claim from "./pages/Claim"
import Home from "./pages/Home"
import Promote from "./pages/Promote"

export default function App() {
  useEffect(() => {
    clientErrorHandling()
    ;(async function () {
      try {
        const { user, client } = await sdk.context
        const capabilities = await sdk.getCapabilities()
        updateStore({ user, client, capabilities })

        // const preloadImage = new Image()
        // preloadImage.src = "/images/global/bg.svg"
        // preloadImage.onload = async () => await sdk.actions.ready({ disableNativeGestures: true }).catch(() => { })
        // preloadImage.onerror = async () => await sdk.actions.ready({ disableNativeGestures: true }).catch(() => { })
      } catch (error) {}

      await sdk.actions.ready({ disableNativeGestures: true }).catch(() => {})

      const { token: session } = await sdk.quickAuth.getToken()
      updateStore({ session })
    })()
  }, [])

  return (
    <div onDragStart={e => e.preventDefault()}>
      <Providers>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/promote" element={<Promote />} />
            <Route path="/claim" element={<Claim />} />
          </Routes>
          <Menu />
        </BrowserRouter>
        {/* <img
          src="/images/global/bg.svg"
          alt="bg"
          className={clsx("fixed top-0 left-0 w-screen h-screen object-fill -z-10")}
        /> */}
      </Providers>
    </div>
  )
}
