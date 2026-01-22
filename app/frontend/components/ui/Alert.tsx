import { cn } from "@/lib/utils/cn"
import { AlertTriangle, CheckCircle, Info, X, XCircle } from "lucide-react"
import { forwardRef, type HTMLAttributes, type ReactNode } from "react"

type AlertVariant = "info" | "success" | "warning" | "danger"

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant
  title?: string
  icon?: ReactNode
  onClose?: () => void
  closable?: boolean
}

const icons: Record<AlertVariant, ReactNode> = {
  info: <Info className="w-4.5 h-4.5" />,
  success: <CheckCircle className="w-4.5 h-4.5" />,
  warning: <AlertTriangle className="w-4.5 h-4.5" />,
  danger: <XCircle className="w-4.5 h-4.5" />,
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "info", title, icon, onClose, closable = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "relative flex gap-3 p-3 rounded-xl",
          "animate-in fade-in slide-in-from-top-2 duration-300",

          variant === "info" && "bg-sky-500/15 border border-sky-500/25 text-sky-200",
          variant === "success" && "bg-emerald-500/15 border border-emerald-500/25 text-emerald-200",
          variant === "warning" && "bg-amber-500/15 border border-amber-500/25 text-amber-200",
          variant === "danger" && "bg-red-500/15 border border-red-500/25 text-red-200",

          className,
        )}
        {...props}
      >
        <div
          className={cn(
            "shrink-0 mt-0.5",
            variant === "info" && "text-sky-400",
            variant === "success" && "text-emerald-400",
            variant === "warning" && "text-amber-400",
            variant === "danger" && "text-red-400",
          )}
        >
          {icon || icons[variant]}
        </div>
        <div className="flex-1 min-w-0">
          {title && <div className="font-bold text-xs mb-0.5">{title}</div>}
          <div className="text-[11px] leading-relaxed opacity-90">{children}</div>
        </div>
        {closable && onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close alert"
            className={cn("shrink-0 p-1 rounded-lg border-0", "transition-colors duration-150", "hover:bg-white/10 cursor-pointer")}
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    )
  },
)

Alert.displayName = "Alert"

export default Alert
