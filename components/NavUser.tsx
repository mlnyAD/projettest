/*
 *
 * /components/NavUser.tsx
 *
 */

"use client"

import { BadgeCheck, Bell, ChevronsUpDown, CreditCard, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, 
		 DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
//import { User } from "@supabase/auth-js";
import { globalUpdateEmail, globalUpdateUserNom, globalUpdateUserPrenom,  } from "@/app/sessionStore";
import { getUserByEmail } from "@/utils/functions/UserBD";
//import { PersonneType } from "@/utils/types";
import { redirect } from "next/navigation";
/*
export function NavUser({user1,}: {
	user1: {
		name: string;
		email: string;
		avatar: string;
	};
}) {*/
export function NavUser() {

	//const [ account, setAccount ] = useState<PersonneType>();
	//const [ user, setUser ] = useState<User>();
	const [ userMail, setUserMail ] = useState<string>("");
	const [ avatar, setAvatar ] = useState<string>("");
	const [ initiales, setInitiales ] = useState<string>("");
	const [ fullName, setFullName ] = useState<string>("");

	const { isMobile } = useSidebar();

	const getAuthenticatedUser = async () => {

		const supabase = createClient();
		const {data: { user }, } = await supabase.auth.getUser();
		// console.log("getAuthenticatedUser - user = ", user?.email);
	
		let tmpMail : string = "";
		if (user) {
			if (user.email) {
				tmpMail = user.email;
			} else {
				return;
			}
			const { vw_personne, error } = await getUserByEmail(tmpMail);
			if (vw_personne) {
				//const tmpName: string = vw_personne[0].persPrenom.substring(0, 1) + vw_personne[0].persNom.substring(0, 1);

				globalUpdateEmail(vw_personne[0].persEmail);
				globalUpdateUserNom(vw_personne[0].persNom);
				globalUpdateUserPrenom(vw_personne[0].persPrenom);
				//console.log("NavUser - userEmail = ", vw_personne[0].persEmail);
				//console.log("NavUser - userNom = ", vw_personne[0].persNom);
				//console.log("NavUser - userPrenom = ", vw_personne[0].persPrenom);

				setUserMail(vw_personne[0].persEmail);
				const tmp: string = vw_personne[0].persPrenom.substring(0, 1) + vw_personne[0].persNom.substring(0, 1);
				setAvatar(tmp);
				setInitiales(tmp);
				setFullName( vw_personne[0].persPrenom + ' ' +  vw_personne[0].persNom);
			} else {
				console.log("Erreur getUserByEmail ", error);
				redirect("/error");
			}
		}
	}

	useEffect(() => {
		getAuthenticatedUser();
	}, [ userMail ]);
	
	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
							<Avatar className="w-8 h-8 rounded-lg">
								<AvatarImage src={avatar} alt={initiales} />
								<AvatarFallback className="rounded-lg">{initiales}</AvatarFallback>
							</Avatar>
							<div className="grid flex-1 text-sm leading-tight text-left">
								<span className="font-semibold truncate">{fullName}</span>
								<span className="text-xs truncate">{userMail}</span>
							</div>
							<ChevronsUpDown className="ml-auto size-4" />
						</SidebarMenuButton>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg" side={isMobile ? "bottom" : "right"} align="end" sideOffset={4}>
						<DropdownMenuLabel className="p-0 font-normal">
							<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
								<Avatar className="w-8 h-8 rounded-lg">
									<AvatarImage src={avatar} alt={initiales} />
									<AvatarFallback className="rounded-lg">{initiales}</AvatarFallback>
								</Avatar>
								<div className="grid flex-1 text-sm leading-tight text-left">
									<span className="font-semibold truncate">{fullName}</span>
									<span className="text-xs truncate">{userMail}</span>
								</div>
							</div>
						</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuGroup>
							<DropdownMenuItem>
								<BadgeCheck />
								<a href={`/users/userAccount/${userMail}`}>Mon compte</a>
							</DropdownMenuItem>
							<DropdownMenuItem>
								<CreditCard />
								Licences
							</DropdownMenuItem>
							<DropdownMenuItem>
								<Bell />
								Notifications
							</DropdownMenuItem>
						</DropdownMenuGroup>
						<DropdownMenuSeparator />
						<DropdownMenuItem>
							<LogOut />
							<a href={`/logout`}>Log out</a>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>		
		)
}
