import { cn } from "@/lib/utils/cn"
import { type HTMLAttributes, type ReactNode, forwardRef } from "react"

interface BannerCardProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  imageUrl: string
  title?: ReactNode
  description?: ReactNode
  footer?: ReactNode
  overlayOpacity?: number
  aspectRatio?: string
  imageBrightness?: number
}

const BannerCard = forwardRef<HTMLDivElement, BannerCardProps>(
  ({ className, imageUrl, title, description, footer, children, aspectRatio = "16/9", overlayOpacity = 0.1, imageBrightness = 1, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative rounded-2xl overflow-hidden isolate", "border border-(--border)/30", className)}
        style={{ aspectRatio: aspectRatio }}
        {...props}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: `brightness(${imageBrightness})`,
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 -z-10 bg-black" style={{ opacity: overlayOpacity }} />

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-5 text-white">
          <div className="space-y-1">
            {title && <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-md">{title}</h3>}
            {description && <p className="text-sm text-white/90 font-medium drop-shadow-sm line-clamp-2">{description}</p>}
          </div>

          {children}

          {footer && <div className="mt-3 pt-3 border-t border-white/20">{footer}</div>}
        </div>
      </div>
    )
  },
)

BannerCard.displayName = "BannerCard"

export { BannerCard }
export default BannerCard
