import sdk from "@farcaster/miniapp-sdk"
import clsx from "clsx"
import { useState, useRef, useEffect, type ReactNode } from "react"

interface SelectOption {
  value: string
  label: string
  icon?: ReactNode
  disabled?: boolean
}

interface SelectProps {
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  label?: string
  error?: string
  disabled?: boolean
  className?: string
  haptic?: boolean
}

export function Select({
  options,
  value,
  onChange,
  placeholder = "select...",
  label,
  error,
  disabled = false,
  className,
  haptic = true,
}: SelectProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const selectedOption = options.find(opt => opt.value === value)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [open])

  const handleSelect = (option: SelectOption) => {
    if (option.disabled) return
    if (haptic) {
      sdk.haptics.selectionChanged()
    }
    onChange?.(option.value)
    setOpen(false)
  }

  const handleToggle = () => {
    if (disabled) return
    if (haptic) {
      sdk.haptics.impactOccurred("light")
    }
    setOpen(!open)
  }

  return (
    <div className={clsx("flex flex-col gap-1.5", className)}>
      {label && <label className="text-[10px] font-bold text-(--text)/80 lowercase tracking-wide">{label}</label>}
      <div ref={containerRef} className="relative">
        <button
          type="button"
          onClick={handleToggle}
          disabled={disabled}
          className={clsx(
            "w-full flex items-center justify-between gap-2",
            "bg-(--surface)/10 text-(--text) border rounded-lg",
            "p-2 pt-1.5 text-left",
            "transition-all duration-200",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            open && "border-(--heading)/50",
            error ? "border-red-500/50" : "border-(--border)",
            !disabled && "hover:border-(--heading)/30"
          )}
        >
          <span className={clsx("flex items-center gap-2 truncate", !selectedOption && "text-(--text)/50")}>
            {selectedOption?.icon}
            {selectedOption?.label || placeholder}
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className={clsx("shrink-0 transition-transform duration-200 text-(--text)/50", open && "rotate-180")}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {open && (
          <div
            className={clsx(
              "absolute z-50 w-full mt-1",
              "bg-white/10 glass rounded-xl overflow-hidden",
              "animate-in fade-in slide-in-from-top-2 duration-200",
              "max-h-48 overflow-y-auto"
            )}
          >
            {options.map(option => (
              <div
                key={option.value}
                onClick={() => handleSelect(option)}
                className={clsx(
                  "flex items-center gap-2 px-3 py-2",
                  "transition-colors duration-150",
                  option.disabled
                    ? "opacity-40 cursor-not-allowed"
                    : "cursor-pointer hover:bg-white/10",
                  option.value === value && "bg-white/10 text-(--heading)"
                )}
              >
                {option.icon}
                <span className="truncate">{option.label}</span>
                {option.value === value && (
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="ml-auto shrink-0 text-(--heading)"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && <span className="text-[10px] text-red-400">{error}</span>}
    </div>
  )
}

export default Select
