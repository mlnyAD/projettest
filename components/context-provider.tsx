
import React from "react";

import { ThemeProvider } from "next-themes";

export default function ContextProvider({
	children,
}:{
		children: React.ReactNode;
}) {

	return (
		<ThemeProvider
			attribute="class"
			defaultTheme="light"
			enableSystem
			disableTransitionOnChange>
				{children}
		</ThemeProvider>
	);
}