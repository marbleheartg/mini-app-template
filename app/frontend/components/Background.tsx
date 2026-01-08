import clsx from "clsx"
// import NextImage from "next/image"

const Background = () => {
  return (
    <div>
      <div className="fixed inset-0 opacity-10 -z-10 pointer-events-none">{/* <NextImage src={"/images/bg.svg"} fill alt="bg" priority /> */}</div>
      <div className={clsx("fixed inset-0 -z-20", "bg-linear-to-br from-(--bg) to-(--bg)/70", "pointer-events-none")}></div>
    </div>
  )
}

export default Background
