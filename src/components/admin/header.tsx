import { Link, useLocation, useNavigate } from "react-router-dom"
import Logo from "../logo"
import { GlobalCommandSearch } from "./command"
import { Loader2, LogOut } from "lucide-react"
import { useState } from "react"
import { Button } from "../ui/button"
import { fetchAPI } from "@/lib/utils"

export default function Header() {
	const route = useLocation().pathname
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)

	return (
		<header className="sticky top-0 z-50 w-full border-b backdrop-blur">
			<nav>
				<div className="container mx-auto flex flex-wrap items-center justify-between py-4">
					<Link to="/admin/dashboard" className="flex items-center">
						<Logo />
					</Link>

					<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
						<ul className="flex flex-row gap-2">
							<li className="flex gap-2">
								<GlobalCommandSearch />

								<Button
									onClick={async () => {
										setLoading(true)

										const res = await fetchAPI(
											"/auth/signout"
										)

										if (!res.ok) {
											setLoading(false)
										}

										navigate("/?redirect=" + route)
									}}
									disabled={loading}
								>
									Sign out
									{loading ? (
										<Loader2 className="animate-spin" />
									) : (
										<LogOut />
									)}
								</Button>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}
