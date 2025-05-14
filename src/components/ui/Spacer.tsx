import React from "react";
import { cn } from "@/lib/utils";

interface SpacerProps {
	size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
	className?: string;
}

const sizeMap = {
	xs: "h-2",
	sm: "h-4",
	md: "h-8",
	lg: "h-12",
	xl: "h-16",
	"2xl": "h-24",
	"3xl": "h-32",
};

export function Spacer({ size = "md", className }: SpacerProps) {
	return <div className={cn(sizeMap[size], className)} aria-hidden="true" />;
}
