/*
 *
 * /app/layout.tsx
 *
 */

/* layout suite à installation*/
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { createClient } from "@/utils/supabase/server";
import "./globals.css";
import { NavAppSidebar } from "@/components/NavAppSidebar";
import { Separator } from "@/components/ui/separator";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import ContextProvider from "@/components/context-provider";
import { NavInfo } from "@/components/NavInfo";
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Easy Projet",
	description: "Outil de gestion des projets",
};

export default async function RootLayout({ children }: { children: never }) {
	
	const supabase = createClient();
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { data: { user }, error, } = await supabase.auth.getUser();

	//console.log("RootLayout Passage dans layout user = ", user?.email)

	if (user == null) {
		return (
			<html lang="fr" className={GeistSans.className} suppressHydrationWarning={true}>
				<head>
					<title>Easy Project</title>
					<meta charSet="utf-8"></meta>
				</head>
				<body className={inter.className}>{children}</body>
			</html>
		);
	} else {
		return (
			<html lang="fr" className={GeistSans.className} suppressHydrationWarning={true}>
				<body className={inter.className}>
					<ContextProvider> 
						<SidebarProvider>
							<NavAppSidebar />
							<SidebarInset >
								{/*	<Header />  */}
								<header className="flex bg-wallpaper-color dark:bg-black dark:border-2 dark:border-gray-200 
											h-16 shrink-0 items-center gap-4 p-4 transition-[width,height] 
											ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 rounded-md 
											border-gray-200 border-2 ">
									<div className="flex items-center gap-4 px-4 ">
										<SidebarTrigger className="-ml-1 " />
										<Separator
											orientation="vertical"
											className="mr-2 h-4"
										/>
										<NavInfo/>
									</div>
								</header>
								<div className="flex justify-center gap-4 px-4 
												bg-wallpaper-color size-full h-full border-gray-200 border-2 
												w-auto rounded-md dark:bg-black dark:border-2 dark:border-gray-200"
										id="children">
										{children}
								</div>
							</SidebarInset>
						</SidebarProvider>
					</ContextProvider>
					<Toaster />
				</body>
			</html>
		);
	}
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function auth() {
	throw new Error("Function not implemented.");
}
