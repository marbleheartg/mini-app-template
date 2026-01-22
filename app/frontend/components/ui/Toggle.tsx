import sdk from "@farcaster/miniapp-sdk"
import { cn } from "@/lib/utils/cn"
import { type InputHTMLAttributes, forwardRef } from "react"

interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "onChange" | "size"> {
  checked?: boolean
  onChange?: (checked: boolean) => void
  size?: "sm" | "md"
  haptic?: boolean
}

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ className, checked = false, onChange, size = "md", haptic = true, disabled, ...props }, ref) => {
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
          "relative inline-flex items-center cursor-pointer",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          {...props}
        />
        <div
          className={cn(
            "rounded-full transition-colors duration-200 ease-out border",
            "peer-focus-visible:ring-2 peer-focus-visible:ring-(--heading)/50",
            
            // Size variants
            size === "sm" && "h-5 w-9",
            size === "md" && "h-6 w-11",

            // State colors
            checked 
              ? "bg-(--heading)/80 border-transparent" 
              : "bg-white/15 border-(--border)"
          )}
        >
          <span
            className={cn(
              "absolute top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md",
              "transition-transform duration-200 ease-out",

              // Size variants
              size === "sm" && "h-4 w-4 left-0.5",
              size === "md" && "h-5 w-5 left-0.5",

              // Horizontal position
              checked && (size === "sm" ? "translate-x-4" : "translate-x-5")
            )}
          />
        </div>
      </label>
    )
  },
)

Toggle.displayName = "Toggle"

export default Toggle
