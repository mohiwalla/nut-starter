import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Link, useLocation } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { NAV_LINKS } from "@/lib/config"
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion"
import { cn } from "@/lib/utils"

export default function Sidebar() {
	const route = useLocation().pathname

	return (
		<aside className="fixed top-[69px] z-30 hidden h-[calc(100vh-70px)] w-full shrink-0 md:sticky md:block">
			<ScrollArea className="h-full pr-2 lg:pb-9 pt-2 lg:pt-4">
				<div className="h-full w-full overflow-x-hidden font-medium text-muted-foreground space-y-1">
					{NAV_LINKS.map((link) => {
						if (link.items) {
							const hasActiveSubURI = link.items.some(
								(item) => route === item.href
							)

							return (
								<Accordion
									collapsible
									type="single"
									key={link.name}
									{...(hasActiveSubURI
										? { value: link.name }
										: {})}
								>
									<AccordionItem
										value={link.name}
										className="border-none"
										data-state={route === link.href}
									>
										<AccordionTrigger
											className={cn(
												"!py-1.5 pr-2.5 underline-offset-4 hover:text-primary hover:no-underline hover:bg-muted/50 pl-3 mb-1 h-[33px] text-sm",
												hasActiveSubURI &&
													"text-primary"
											)}
										>
											{link.name}
										</AccordionTrigger>

										<AccordionContent className="text-base pb-0 pl-3 space-y-1">
											{link.items.map((subLink) => {
												return (
													<SidebarLink
														key={subLink.name}
														href={subLink.href}
														name={subLink.name}
														new={subLink.new}
														route={route}
													/>
												)
											})}
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							)
						}

						return (
							<SidebarLink
								key={link.name}
								href={link.href}
								name={link.name}
								new={link?.new}
								route={route}
							/>
						)
					})}
				</div>

				<ScrollBar orientation="vertical" />
			</ScrollArea>
		</aside>
	)
}

function SidebarLink({
	href,
	name,
	new: isNew,
	route,
}: {
	href: string
	name: string
	new?: boolean
	route: string
}) {
	return (
		<Link
			to={href}
			className={cn(
				"!py-1.5 flex items-center gap-2 pl-3 rounded-md text-sm",
				route === href ? "text-primary bg-card" : "hover:bg-card"
			)}
		>
			{name}
			{isNew && <Badge variant="default">New</Badge>}
		</Link>
	)
}
