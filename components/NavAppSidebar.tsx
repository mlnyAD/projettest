/*
*
*	components/app-sidebar.tsx
*
*/

"use client";

import * as React from "react";
import {
	BookOpen,
	Bot,
	ListTodo,
	PieChart,
	SquareTerminal,
} from "lucide-react";
import { NavActions } from "@/components/NavActions";
import { NavTitle } from "@/components/NavTitle";
import { NavSupport } from "@/components/NavSupport";
import { NavUser } from "@/components/NavUser";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/NavThemeToggle";
import { NavNotif } from "@/components/NavNotif";

// This is sample data.
const data = {
	user: {
		name: "Michel LENOURRY",
		email: "contact@axcio-data.com",
		avatar: "#",
	},
	navMain: [
		{
			title: "Projets",
			url: "#",
			icon: SquareTerminal,
			isActive: true,
			items: [
				{
					title: "Tableau de bord société",
					url: "/dashBoardSociete",
				},
				{
					title: "Projets actifs",
					url: "/projects/projectList",
				},
				{
					title: "Affectation personnels/projets",
					url: "/projects/dossierPers",
				},
				{
					title: "Projets terminés",
					url: "/projects/projectList",
				},
			],
		},
		{
			title: "Outils",
			url: "#",
			icon: Bot,
			items: [
				{
					title: "Todolist",
					icon: ListTodo,
					url: "/todoList/todoList",
				},
				{
					title: "Calendrier",
					url: "calendar-days",
				},
				{
					title: "Reminder",
					url: "sticky-note",
				},
				{
					title: "Planning",
					url: "chart-gantt",
				},
			],
		},
		{
			title: "Configuration",
			url: "#",
			icon: BookOpen,
			items: [
				{
					title: "Configuration",
					url: "/configs/configList",
				},
				{
					title: "Sociétés",
					url: "/societes/societeList",
				},
				{
					title: "Utilisateurs",
					url: "/users/userList",
				},
				{
					title: "Activités",
					url: "/activites/activiteList",
				},
				{
					title: "Critères de GED",
					url: "/critGed/critGedList",
				},
				{
					title: "Bibliothèque",
					url: "/biblTech/biblTechList",
				},
				{
					title: "DOE types",
					url: "/doeTypes/doeTypesList",
				},
				{
					title: "essais",
					url: "/test",
				},
			],
		},
	],
	support: [
		{
			name: "Doc. utilisateur",
			url: "#",
			icon: BookOpen,
		},
		{
			name: "Mail support",
			url: "#",
			icon: PieChart,
		},
		{
			name: "About",
			url: "/about",
			icon: PieChart,
		},
	],
};

export function NavAppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader className=" h-16 bg-wallpaper-color dark:bg-black border-gray-200 border-2 rounded-md">
				<NavTitle />
			</SidebarHeader>

			<SidebarHeader className=" h-16 bg-wallpaper-color dark:bg-black border-2 border-gray-200 rounded-md">
			{/*	<NavUser user={data.user} /> */}
				<NavUser />
			</SidebarHeader>
			
			<SidebarHeader className=" h-16 bg-wallpaper-color dark:bg-black border-2 border-gray-200 rounded-md">
				<ThemeToggle />
			</SidebarHeader>

			<SidebarContent className="bg-wallpaper-color dark:bg-black border-gray-200 border-2 rounded-md">
				<NavActions items={data.navMain} />
			</SidebarContent>

			<SidebarFooter  className="bg-wallpaper-color dark:bg-black border-gray-200 border-2 rounded-md">
				<NavNotif />
			</SidebarFooter>

			<SidebarFooter  className="bg-wallpaper-color dark:bg-black border-gray-200 border-2 rounded-md">
				<NavSupport support={data.support} />
			</SidebarFooter>
			
			<SidebarRail />

		</Sidebar>
	);
}
