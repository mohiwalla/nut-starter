import FadeUp from "@/animations/fade-up"
import { GlobalCommandSearch } from "@/components/admin/command"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function HomePage() {
	return (
		<FadeUp>
			<GlobalCommandSearch />

			<div className="p-6 space-y-2">
				<h1 className="text-3xl font-bold">Home</h1>

				<Button asChild>
					<Link to="/about">Go to about</Link>
				</Button>
			</div>
		</FadeUp>
	)
}
