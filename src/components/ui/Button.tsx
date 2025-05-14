import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary-600 text-white hover:bg-primary-700",
				secondary: "bg-secondary-600 text-white hover:bg-secondary-700",
				outline:
					"border border-neutral-300 bg-transparent hover:bg-neutral-100 text-neutral-900",
				ghost: "hover:bg-neutral-100 text-neutral-900",
				destructive: "bg-error-600 text-white hover:bg-error-700",
				success: "bg-success-600 text-white hover:bg-success-700",
				warning: "bg-warning-600 text-white hover:bg-warning-700",
				link: "text-primary-600 underline-offset-4 hover:underline",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-8 rounded-md px-3 text-xs",
				lg: "h-12 rounded-md px-8 text-base",
				icon: "h-10 w-10",
			},
			fullWidth: {
				true: "w-full",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
			fullWidth: false,
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, fullWidth, asChild = false, ...props }, ref) => {
		const Comp = asChild ? ("button" as React.ElementType) : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, fullWidth, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
