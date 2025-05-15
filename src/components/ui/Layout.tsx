import type React from "react";
import { cn } from "@/lib/utils";

interface LayoutProps {
	children: React.ReactNode;
	header?: React.ReactNode;
	sidebar?: React.ReactNode;
	sidebarWidth?: string;
	headerHeight?: string;
	className?: string;
}

export function Layout({
	children,
	header,
	sidebar,
	sidebarWidth = "16rem",
	headerHeight = "4rem",
	className,
}: LayoutProps) {
	return (
		<div
			className={cn(
				"grid h-screen w-full overflow-hidden",
				{
					"grid-cols-[auto_1fr]": sidebar,
					"grid-rows-[auto_1fr]": header,
				},
				className,
			)}
			style={{
				gridTemplateColumns: sidebar ? `${sidebarWidth} 1fr` : "1fr",
				gridTemplateRows: header ? `${headerHeight} 1fr` : "1fr",
			}}
		>
			{header && (
				<header
					className="col-span-full row-start-1 flex items-center border-b border-neutral-200 bg-white px-4 dark:border-neutral-800 dark:bg-neutral-900"
					style={{ height: headerHeight }}
				>
					{header}
				</header>
			)}

			{sidebar && (
				<aside
					className="row-start-2 overflow-y-auto border-r border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
					style={{ width: sidebarWidth }}
				>
					{sidebar}
				</aside>
			)}

			<main className="overflow-y-auto">{children}</main>
		</div>
	);
}
