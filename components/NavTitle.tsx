/*
 *
 * /components/NavTitle.tsx
 *
 */

"use client";

import { SidebarMenu, SidebarMenuItem, } from "@/components/ui/sidebar";

import Image from "next/image";
import logo from "@/public/images/logoAD.png"

export function NavTitle() {


	return (
		
		<SidebarMenu >
			<SidebarMenuItem>
				<div className="flex space-x-2 p-2 space-between">
					<Image src={logo} 
						className="w-auto h-auto"
						width={30} 
						height={20} 
						priority={true} 
						alt="Logo Axcio-Data" />
					<div className="flex flex-col ">
						<span className="text-base text-center font-bold text-white ">Easy Projet V2</span>
						<span className="text-xs text-center text-gray-600">© AXCIO-DATA 2025 ...</span>
					</div>
				</div>		
			</SidebarMenuItem>
		</SidebarMenu>	
	)
}
