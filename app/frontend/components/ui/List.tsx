import { cn } from "@/lib/utils/cn"
import sdk from "@farcaster/miniapp-sdk"
import { forwardRef, type HTMLAttributes, type ReactNode } from "react"

type ListProps = HTMLAttributes<HTMLDivElement>

const List = forwardRef<HTMLDivElement, ListProps>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("flex flex-col", className)} {...props}>
      {children}
    </div>
  )
})

List.displayName = "List"

interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  leftContent?: ReactNode
  rightContent?: ReactNode
  title: string
  subtitle?: string
  clickable?: boolean
  haptic?: boolean
  divider?: boolean
}

const ListItem = forwardRef<HTMLDivElement, ListItemProps>(
  ({ className, leftContent, rightContent, title, subtitle, clickable = false, haptic = true, divider = true, onClick, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (clickable && haptic) {
        sdk.haptics.selectionChanged()
      }
      onClick?.(e)
    }

    return (
      <div
        ref={ref}
        onClick={handleClick}
        className={cn(
          "flex items-center gap-3 py-3 px-1",
          divider && "border-b border-(--border)/30 last:border-b-0",
          clickable && "cursor-pointer active:bg-white/5 transition-colors duration-150",
          className,
        )}
        {...props}
      >
        {leftContent && <div className="shrink-0">{leftContent}</div>}
        <div className="flex-1 min-w-0">
          <div className="text-(--heading) font-semibold truncate">{title}</div>
          {subtitle && <div className="text-[10px] text-(--text)/70 truncate">{subtitle}</div>}
        </div>
        {rightContent && <div className="shrink-0">{rightContent}</div>}
      </div>
    )
  },
)

ListItem.displayName = "ListItem"

export { List, ListItem }
export default List
