"use client";

import {
	type LucideIcon,
} from "lucide-react";

import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,

	SidebarMenuButton,
	SidebarMenuItem,

} from "@/components/ui/sidebar";

export function NavSupport({
	support,
}: {
	support: { name: string; url: string; icon: LucideIcon }[];
}) {
	//const { isMobile } = useSidebar();

	return (
		<SidebarGroup>
			<SidebarGroupLabel className="text-bold text-sm">
				Support ...
			</SidebarGroupLabel>
			<SidebarMenu>
				{support.map((item) => (
					<SidebarMenuItem key={item.name}>
						<SidebarMenuButton asChild>
							<a href={item.url}>
								<item.icon />
								<span>{item.name}</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
