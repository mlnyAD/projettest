"use client";

import {
	BellPlus,
} from "lucide-react";


import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export function NavNotif() {

	//const { isMobile } = useSidebar();

	return (
		<SidebarGroup>
			<SidebarGroupLabel className="text-bold text-sm">
				Notifications ...
			</SidebarGroupLabel>
			<SidebarMenu>
			<BellPlus
              className={cn(
                'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 ',
              )}
            />
 			</SidebarMenu>
		</SidebarGroup>
	);
}
