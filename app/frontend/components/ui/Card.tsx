import clsx from "clsx"
import { type HTMLAttributes, forwardRef } from "react"

type CardVariant = "default" | "elevated" | "flat"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  padding?: "none" | "sm" | "md" | "lg"
  hoverable?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, variant = "default", padding = "md", hoverable = false, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx(
        "rounded-2xl overflow-hidden",
        "transition-all duration-300 ease-out",

        // Padding variants
        padding === "none" && "",
        padding === "sm" && "p-3 pt-2.5",
        padding === "md" && "p-4 pt-[15px]",
        padding === "lg" && "p-5 pt-4",

        // Style variants
        variant === "default" && ["bg-white/10 glass"],
        variant === "elevated" && ["bg-white/12 glass", "shadow-xl shadow-black/20"],
        variant === "flat" && ["bg-(--surface)/20", "border border-(--border)"],

        // Hover effect
        hoverable && "hover:bg-white/15 hover:scale-[1.01] cursor-pointer",

        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
})

Card.displayName = "Card"

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={clsx("mb-3", className)} {...props}>
      {children}
    </div>
  )
})

CardHeader.displayName = "CardHeader"

interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(({ className, children, ...props }, ref) => {
  return (
    <h1 ref={ref} className={clsx(className)} {...props}>
      {children}
    </h1>
  )
})

CardTitle.displayName = "CardTitle"

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={clsx("text-(--text)", className)} {...props}>
      {children}
    </div>
  )
})

CardContent.displayName = "CardContent"

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={clsx("mt-4 pt-3 border-t border-(--border)/50", "flex items-center gap-2", className)} {...props}>
      {children}
    </div>
  )
})

CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardTitle, CardContent, CardFooter }
export default Card
