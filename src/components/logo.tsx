import { name } from "@/lib/config"
import { cn } from "@/lib/utils"

export default function Logo({
	className = "",
	...props
}: React.HTMLAttributes<HTMLSpanElement>) {
	return (
		<span {...props} className={cn("font-[cursive] font-bold text-xl", className)}>
			{name}
		</span>
	)
}
