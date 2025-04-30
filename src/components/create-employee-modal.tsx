"use client"

import {
	AlertDialog,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { UserRoundPlus, Loader2, AlertCircle } from "lucide-react"
import { useEffect, useState } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { CreateEmployeeSchema } from "@/schemas/create-employee"
import { zodResolver } from "@hookform/resolvers/zod"
import type { z } from "zod"
import { fetchAPI } from "@/lib/utils"
import { toast } from "sonner"

type FormValues = z.infer<typeof CreateEmployeeSchema>

export default function CreateEmployeeModal({
	refreshEmployeesTable,
}: {
	refreshEmployeesTable: () => void
}) {
	const [searchParams] = useSearchParams()
	const navigate = useNavigate()
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const formFields: {
		name: keyof FormValues
		label: string
		type: "text" | "email" | "password" | "tel"
		placeholder?: string
	}[] = [
		{
			name: "name",
			label: "Full Name",
			type: "text",
			placeholder: "John Doe",
		},
		{
			name: "email",
			label: "Email Address",
			type: "text",
			placeholder: "john.doe@example.com",
		},
		{
			name: "phone",
			label: "Phone Number",
			type: "tel",
			placeholder: "+1 (555) 123-4567",
		},
		{
			name: "password",
			label: "Password",
			type: "password",
			placeholder: "••••••••",
		},
		{
			name: "position",
			label: "Position",
			type: "text",
			placeholder: "Software Engineer",
		},
		{
			name: "department",
			label: "Department",
			type: "text",
			placeholder: "Engineering",
		},
		{
			name: "ip",
			label: "IP address",
			type: "text",
			placeholder: "203.xx.xx.xx7",
		},
		{
			name: "macAddress",
			label: "MAC address",
			type: "text",
			placeholder: "00:1A:2B:3C:4D:5E",
		},
	]

	useEffect(() => {
		setOpen(searchParams.get("action") === "new-employee")
	}, [searchParams])

	useEffect(() => {
		function preventClosing(e: BeforeUnloadEvent) {
			e.preventDefault()
			return "wait"
		}

		if (loading) {
			window.addEventListener("beforeunload", preventClosing)
		} else {
			window.removeEventListener("beforeunload", preventClosing)
		}

		return () => {
			window.removeEventListener("beforeunload", preventClosing)
		}
	}, [loading])

	const form = useForm<FormValues>({
		resolver: zodResolver(CreateEmployeeSchema),
		defaultValues: {
			name: "",
			phone: "",
			email: "",
			password: "",
			position: "",
			department: "",
			ip: "",
			macAddress: "",
		},
	})

	async function onSubmit(values: FormValues) {
		setLoading(true)
		setError(null)

		const res = await fetchAPI("/employees", {
			method: "POST",
			body: JSON.stringify(values),
		})

		if (!res.ok) {
			setLoading(false)
			return setError(res.text)
		}

		form.reset()
		setLoading(false)
		refreshEmployeesTable()

		toast.success(res.text)
		navigate("/admin/employees", { replace: true })
	}

	return (
		<AlertDialog
			open={loading || open}
			onOpenChange={(v) => {
				if (!loading) {
					setOpen(v)
					if (!v) navigate("/admin/employees", { replace: true })
				}
			}}
		>
			<AlertDialogTrigger asChild>
				<Button
					onClick={() => navigate("?action=new-employee")}
					className="flex items-center gap-2"
				>
					<span>Employee</span>
					<UserRoundPlus />
				</Button>
			</AlertDialogTrigger>

			<AlertDialogContent className="w-[420px] max-h-[90%] overflow-auto">
				<AlertDialogHeader>
					<AlertDialogTitle className="text-xl">
						Create Employee
					</AlertDialogTitle>
					<AlertDialogDescription>
						Fill in the details to add a new employee to the system
					</AlertDialogDescription>
				</AlertDialogHeader>

				<Form {...form}>
					<fieldset disabled={loading}>
						<form
							autoComplete="off"
							onSubmit={form.handleSubmit(onSubmit)}
							className="space-y-5 mt-4"
						>
							<div className="grid gap-5">
								{formFields.map((field) => (
									<FormField
										key={field.name}
										control={form.control}
										name={field.name}
										render={({ field: formField }) => (
											<FormItem>
												<FormLabel className="font-medium">
													{field.label}
												</FormLabel>

												<FormControl>
													<Input
														{...formField}
														type={field.type}
														placeholder={
															field.placeholder
														}
														autoFocus={
															field.name ===
															"name"
														}
														className="focus:ring-2 focus:ring-offset-1"
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>
								))}
							</div>

							{error && (
								<div className="bg-destructive/10 text-destructive rounded-md px-3 py-2 border border-transparent flex gap-2 items-center text-sm">
									<AlertCircle className="w-4 h-4 flex-shrink-0" />
									<span>{error}</span>
								</div>
							)}

							<AlertDialogFooter className="gap-2">
								<AlertDialogCancel
									type="button"
									disabled={loading}
									className="mt-0"
								>
									Cancel
								</AlertDialogCancel>
								<Button type="submit" className="gap-2">
									{loading && (
										<Loader2 className="animate-spin w-4 h-4" />
									)}
									{loading
										? "Creating..."
										: "Create Employee"}
								</Button>
							</AlertDialogFooter>
						</form>
					</fieldset>
				</Form>
			</AlertDialogContent>
		</AlertDialog>
	)
}
