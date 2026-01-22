import { cn } from "@/lib/utils/cn"
import { type HTMLAttributes, forwardRef } from "react"

interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical"
  label?: string
}

const Divider = forwardRef<HTMLDivElement, DividerProps>(({ className, orientation = "horizontal", label, ...props }, ref) => {
  if (orientation === "vertical") {
    return <div ref={ref} className={cn("w-px h-full bg-(--border)/50", className)} {...props} />
  }

  if (label) {
    return (
      <div ref={ref} className={cn("flex items-center gap-3", className)} {...props}>
        <div className="flex-1 h-px bg-(--border)/50" />
        <span className="text-[10px] text-(--text)/60 font-medium lowercase tracking-wide">{label}</span>
        <div className="flex-1 h-px bg-(--border)/50" />
      </div>
    )
  }

  return <div ref={ref} className={cn("w-full h-px bg-(--border)/50", className)} {...props} />
})

Divider.displayName = "Divider"

export default Divider
