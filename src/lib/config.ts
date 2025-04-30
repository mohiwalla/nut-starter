export const name = "Sweetwork"
export const description = "The ultimate employee management system"

export const website = "sweetwork.org"
export const email = "support@" + website

export const DEV = true
export const API_ENDPOINT = "http://localhost:3000"

export const NAV_LINKS = [
	{
		name: "Dashboard",
		href: "/admin/dashboard",
	},
	{
		name: "Employees",
		href: "/admin/employees",
	},
	{
		name: "Attendance",
		href: "/admin/attendance",
		new: true,
	},
	{
		name: "Payrolls",
		href: "/admin/payrolls",
	},
	{
		name: "Reports",
		items: [
			{
				name: "Breaks",
				href: "/admin/reports/breaks",
			},
			{
				name: "Productivity",
				href: "/admin/reports/productivity",
				new: true,
			},
			{
				name: "Attendance",
				href: "/admin/reports/attendance",
			},
		],
	},
	{
		name: "Settings",
		href: "/admin/settings",
	},
]
