import sdk from "@farcaster/miniapp-sdk"
import { cn } from "@/lib/utils/cn"
import { Check } from "lucide-react"
import { type InputHTMLAttributes, forwardRef, type ReactNode } from "react"

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "size"> {
  checked?: boolean
  onChange?: (checked: boolean) => void
  label?: ReactNode
  description?: string
  size?: "sm" | "md"
  haptic?: boolean
  indeterminate?: boolean
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      checked = false,
      onChange,
      label,
      description,
      size = "md",
      haptic = true,
      indeterminate = false,
      disabled,
      ...props
    },
    ref
  ) => {
    const handleChange = () => {
      if (disabled) return
      if (haptic) {
        try {
          sdk.haptics.impactOccurred("light")
        } catch {
          // Ignore
        }
      }
      onChange?.(!checked)
    }

    return (
      <label
        className={cn(
          "inline-flex gap-2.5 cursor-pointer",
          "select-none",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        <div className="relative shrink-0 flex items-center justify-center">
          <input
            ref={ref}
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            disabled={disabled}
            className="sr-only peer"
            {...props}
          />
          <div
            className={cn(
              "flex items-center justify-center",
              "rounded-md border-2 transition-all duration-200",
              size === "sm" && "w-4 h-4",
              size === "md" && "w-5 h-5",
              checked || indeterminate
                ? "bg-(--heading)/90 border-(--heading)/30"
                : "bg-white/5 border-(--border) hover:border-(--heading)/50"
            )}
          >
            {checked && !indeterminate && (
              <Check
                className={cn(
                  "text-(--bg) animate-in zoom-in duration-150",
                  size === "sm" ? "w-2.5 h-2.5" : "w-3 h-3"
                )}
                strokeWidth={3}
              />
            )}
            {indeterminate && !checked && (
              <div
                className={cn(
                  "bg-(--bg) rounded-sm",
                  size === "sm" && "w-2 h-0.5",
                  size === "md" && "w-2.5 h-0.5"
                )}
              />
            )}
          </div>
        </div>
        {(label || description) && (
          <div className="flex flex-col gap-0.5 pt-0.5">
            {label && (
              <span
                className={cn(
                  "font-medium text-(--text)",
                  size === "sm" && "text-[10px]",
                  size === "md" && "text-xs"
                )}
              >
                {label}
              </span>
            )}
            {description && <span className="text-[10px] text-(--text)/60">{description}</span>}
          </div>
        )}
      </label>
    )
  }
)

Checkbox.displayName = "Checkbox"

export default Checkbox
