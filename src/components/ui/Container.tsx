import type React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: "sm" | "md" | "lg" | "xl" | "full";
	as?: React.ElementType;
}

export function Container({
	className,
	children,
	size = "lg",
	as: Component = "div",
	...props
}: ContainerProps) {
	return (
		<Component
			className={cn(
				"mx-auto w-full px-4 sm:px-6 lg:px-8",
				{
					"max-w-screen-sm": size === "sm",
					"max-w-screen-md": size === "md",
					"max-w-screen-lg": size === "lg",
					"max-w-screen-xl": size === "xl",
					"max-w-none": size === "full",
				},
				className,
			)}
			{...props}
		>
			{children}
		</Component>
	);
}
