import Header from "./header"
import Sidebar from "./sidebar"

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header />

			<div className="border-b">
				<div className="container mx-auto flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
					<Sidebar />
					<main className="py-5">{children}</main>
				</div>
			</div>
		</>
	)
}
