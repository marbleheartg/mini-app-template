import { cn } from "@/lib/utils/cn"
import { Eye, EyeOff } from "lucide-react"
import { forwardRef, type InputHTMLAttributes, type ReactNode, type TextareaHTMLAttributes, useId, useState } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  leftIcon?: ReactNode
  rightIcon?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, label, error, hint, leftIcon, rightIcon, type = "text", id, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false)
  const generatedId = useId()
  const inputId = id || generatedId
  const errorId = `${inputId}-error`
  const hintId = `${inputId}-hint`

  const isPassword = type === "password"
  const inputType =
    isPassword ?
      showPassword ? "text"
      : "password"
    : type

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-[10px] font-bold text-(--text)/80 lowercase tracking-wide">
          {label}
        </label>
      )}
      <div className="relative">
        {leftIcon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text)/50 pointer-events-none">{leftIcon}</div>}
        <input
          ref={ref}
          id={inputId}
          type={inputType}
          aria-invalid={!!error}
          aria-describedby={
            error ? errorId
            : hint ?
              hintId
            : undefined
          }
          className={cn(
            "w-full bg-(--surface)/10 text-(--text) border border-(--border) rounded-lg outline-none p-2",
            "transition-colors duration-200",
            "focus:border-(--heading)/50",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            leftIcon && "pl-8.5",
            (rightIcon || isPassword) && "pr-10",
            error && "border-red-500/50 focus:border-red-500",
            className,
          )}
          {...props}
        />
        {isPassword ?
          <button
            type="button"
            onClick={handleTogglePassword}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-(--text)/50 hover:text-(--text) transition-colors focus:outline-none cursor-pointer"
          >
            {showPassword ?
              <EyeOff className="w-4 h-4" />
            : <Eye className="w-4 h-4" />}
          </button>
        : rightIcon && <div className="absolute right-3 top-1/2 -translate-y-1/2 text-(--text)/50 pointer-events-none">{rightIcon}</div>}
      </div>
      {error && (
        <span id={errorId} className="text-[10px] text-red-400">
          {error}
        </span>
      )}
      {hint && !error && (
        <span id={hintId} className="text-[10px] text-(--text)/50">
          {hint}
        </span>
      )}
    </div>
  )
})

Input.displayName = "Input"

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  hint?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, label, error, hint, id, ...props }, ref) => {
  const generatedId = useId()
  const textareaId = id || generatedId
  const errorId = `${textareaId}-error`
  const hintId = `${textareaId}-hint`

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={textareaId} className="text-[10px] font-bold text-(--text)/80 lowercase tracking-wide">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        aria-invalid={!!error}
        aria-describedby={
          error ? errorId
          : hint ?
            hintId
          : undefined
        }
        className={cn(
          "min-h-[80px] w-full bg-(--surface)/10 text-(--text) border border-(--border) rounded-lg outline-none p-2 pt-1.5 resize-none",
          "transition-colors duration-200",
          "focus:border-(--heading)/50",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          error && "border-red-500/50 focus:border-red-500",
          className,
        )}
        {...props}
      />
      {error && (
        <span id={errorId} className="text-[10px] text-red-400">
          {error}
        </span>
      )}
      {hint && !error && (
        <span id={hintId} className="text-[10px] text-(--text)/50">
          {hint}
        </span>
      )}
    </div>
  )
})

Textarea.displayName = "Textarea"

export { Input, Textarea }
export default Input
