import { Button } from "./ui/button"
import { FileText } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import Logo from "./logo"

const NAV_LINKS = [
	{ href: "/", label: "Home" },
	{ href: "/blogs", label: "Blog" },
	{ href: "/projects", label: "Projects" },
]

export default function Header() {
	const { pathname } = useLocation()

	return (
		<header className="sticky top-0 z-50 w-full border-b backdrop-blur">
			<nav>
				<div className="container py-4 px-8 mx-auto flex flex-wrap items-center justify-between">
					<Link to="/">
						<Logo />
					</Link>

					<ul className="hidden md:flex flex-row gap-4">
						{NAV_LINKS.map((link) => (
							<li key={link.label}>
								<Button
									asChild
									variant={
										pathname === link.href
											? "secondary"
											: "ghost"
									}
								>
									<Link to={link.href}>{link.label}</Link>
								</Button>
							</li>
						))}
					</ul>

					<div className="flex gap-3 items-center">
						<Button asChild>
							<a
								target="_blank"
								className="flex"
								href="/resume.pdf"
							>
								Resume
								<FileText className="size-5" />
							</a>
						</Button>
					</div>
				</div>
			</nav>
		</header>
	)
}
