import { cn } from "@/lib/utils/cn"
import { Loader2 } from "lucide-react"
import { type HTMLAttributes, forwardRef } from "react"

type SpinnerSize = "xs" | "sm" | "md" | "lg"

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize
}

const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(({ className, size = "md", ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="status"
      aria-label="Loading"
      className={cn(
        "animate-spin",
        size === "xs" && "w-3 h-3",
        size === "sm" && "w-4 h-4",
        size === "md" && "w-6 h-6",
        size === "lg" && "w-8 h-8",
        className,
      )}
      {...props}
    >
      <Loader2 className="w-full h-full" />
    </div>
  )
})

Spinner.displayName = "Spinner"

interface LoadingOverlayProps extends HTMLAttributes<HTMLDivElement> {
  visible?: boolean
  blur?: boolean
}

const LoadingOverlay = forwardRef<HTMLDivElement, LoadingOverlayProps>(({ className, visible = true, blur = true, ...props }, ref) => {
  if (!visible) return null

  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 z-50 flex items-center justify-center",
        "bg-(--bg)/60 rounded-2xl",
        blur && "backdrop-blur-sm",
        "transition-opacity duration-200",
        className,
      )}
      {...props}
    >
      <Spinner size="lg" className="text-(--heading)" />
    </div>
  )
})

LoadingOverlay.displayName = "LoadingOverlay"

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  width?: string | number
  height?: string | number
  rounded?: "none" | "sm" | "md" | "lg" | "full"
}

const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(({ className, width, height, rounded = "md", style, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "animate-pulse bg-white/10",
        rounded === "none" && "rounded-none",
        rounded === "sm" && "rounded",
        rounded === "md" && "rounded-lg",
        rounded === "lg" && "rounded-xl",
        rounded === "full" && "rounded-full",
        className,
      )}
      style={{ width, height, ...style }}
      {...props}
    />
  )
})

Skeleton.displayName = "Skeleton"

export { LoadingOverlay, Skeleton, Spinner }
export default Spinner
