import { Link } from "react-router-dom"

export default function Footer() {
	return (
		<footer className="container mx-auto p-8 mt-8">
			<div className="flex items-center sm:justify-end">
				<ul className="flex flex-wrap items-center text-sm font-medium text-muted-foreground gap-4 md:gap-6">
					<li>
						<Link to="#" className="hover:underline underline-offset-4 hover:text-primary">
							About
						</Link>
					</li>

					<li>
						<Link to="#" className="hover:underline underline-offset-4 hover:text-primary">
							Privacy Policy
						</Link>
					</li>

					<li>
						<Link to="#" className="hover:underline underline-offset-4 hover:text-primary">
							Licensing
						</Link>
					</li>

					<li>
						<Link to="#" className="hover:underline underline-offset-4 hover:text-primary">
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	)
}
