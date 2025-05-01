import { Link } from "react-router-dom"
import Logo from "./logo"
import { GlobalCommandSearch } from "./command"

export default function Header() {
	return (
		<header className="w-full border-b border-b-white/20 backdrop-blur">
			<nav>
				<div className="container mx-auto flex flex-wrap items-center justify-between py-4">
					<Link to="/" className="flex items-center">
						<Logo />
					</Link>

					<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
						<ul className="flex flex-row gap-2">
							<li>
								<GlobalCommandSearch />
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	)
}
