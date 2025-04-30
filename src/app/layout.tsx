import ClientConfig from "@/components/client-config"
import Router from "@/app/router"
import React from "react"
import ReactDOM from "react-dom/client"
import "@/app/global.css"
import { ScrollArea } from "@/components/ui/scroll-area"
import Grain from "@/components/grain"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
			<div className="bg-black">
				<ScrollArea className="bg-background w-screen h-screen rounded-md overflow-hidden">
					<Router />
				</ScrollArea>
			</div>

			<ClientConfig />
			<Toaster theme="system" className="select-none" richColors />
			<Grain />
		</ThemeProvider>
	</React.StrictMode>
)
