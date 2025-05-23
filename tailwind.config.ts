import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			xs: "475px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			colors: {
				primary: {
					50: "#f0f9ff",
					100: "#e0f2fe",
					200: "#bae6fd",
					300: "#7dd3fc",
					400: "#38bdf8",
					500: "#0ea5e9",
					600: "#0284c7",
					700: "#0369a1",
					800: "#075985",
					900: "#0c4a6e",
					950: "#082f49",
				},
				secondary: {
					50: "#f5f3ff",
					100: "#ede9fe",
					200: "#ddd6fe",
					300: "#c4b5fd",
					400: "#a78bfa",
					500: "#8b5cf6",
					600: "#7c3aed",
					700: "#6d28d9",
					800: "#5b21b6",
					900: "#4c1d95",
					950: "#2e1065",
				},
				neutral: {
					50: "#fafafa",
					100: "#f5f5f5",
					200: "#e5e5e5",
					300: "#d4d4d4",
					400: "#a3a3a3",
					500: "#737373",
					600: "#525252",
					700: "#404040",
					800: "#262626",
					900: "#171717",
					950: "#0a0a0a",
				},
				success: {
					50: "#f0fdf4",
					100: "#dcfce7",
					200: "#bbf7d0",
					300: "#86efac",
					400: "#4ade80",
					500: "#22c55e",
					600: "#16a34a",
					700: "#15803d",
					800: "#166534",
					900: "#14532d",
					950: "#052e16",
				},
				warning: {
					50: "#fffbeb",
					100: "#fef3c7",
					200: "#fde68a",
					300: "#fcd34d",
					400: "#fbbf24",
					500: "#f59e0b",
					600: "#d97706",
					700: "#b45309",
					800: "#92400e",
					900: "#78350f",
					950: "#451a03",
				},
				error: {
					50: "#fef2f2",
					100: "#fee2e2",
					200: "#fecaca",
					300: "#fca5a5",
					400: "#f87171",
					500: "#ef4444",
					600: "#dc2626",
					700: "#b91c1c",
					800: "#991b1b",
					900: "#7f1d1d",
					950: "#450a0a",
				},
			},
			spacing: {
				"0": "0",
				"1": "0.25rem",
				"2": "0.5rem",
				"3": "0.75rem",
				"4": "1rem",
				"5": "1.25rem",
				"6": "1.5rem",
				"8": "2rem",
				"10": "2.5rem",
				"12": "3rem",
				"16": "4rem",
				"20": "5rem",
				"24": "6rem",
				"32": "8rem",
				"40": "10rem",
				"48": "12rem",
				"56": "14rem",
				"64": "16rem",
			},
			fontSize: {
				xs: ["0.75rem", { lineHeight: "1rem" }],
				sm: ["0.875rem", { lineHeight: "1.25rem" }],
				base: ["1rem", { lineHeight: "1.5rem" }],
				lg: ["1.125rem", { lineHeight: "1.75rem" }],
				xl: ["1.25rem", { lineHeight: "1.75rem" }],
				"2xl": ["1.5rem", { lineHeight: "2rem" }],
				"3xl": ["1.875rem", { lineHeight: "2.25rem" }],
				"4xl": ["2.25rem", { lineHeight: "2.5rem" }],
				"5xl": ["3rem", { lineHeight: "1" }],
				"6xl": ["3.75rem", { lineHeight: "1" }],
			},
			fontFamily: {
				sans: ["Inter var", "Inter", "system-ui", "sans-serif"],
				serif: ["Georgia", "serif"],
				mono: ["Menlo", "Monaco", "Consolas", "monospace"],
			},
			borderRadius: {
				none: "0",
				sm: "0.125rem",
				DEFAULT: "0.25rem",
				md: "0.375rem",
				lg: "0.5rem",
				xl: "0.75rem",
				"2xl": "1rem",
				full: "9999px",
			},
			boxShadow: {
				sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
				DEFAULT:
					"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)",
				md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)",
				lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)",
				xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
				"2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
				inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
				none: "none",
			},
			animation: {
				spin: "spin 1s linear infinite",
				ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
				pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
				bounce: "bounce 1s infinite",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			transitionProperty: {
				none: "none",
				all: "all",
				DEFAULT:
					"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
				colors: "background-color, border-color, color, fill, stroke",
				opacity: "opacity",
				shadow: "box-shadow",
				transform: "transform",
			},
			transitionTimingFunction: {
				DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
				linear: "linear",
				in: "cubic-bezier(0.4, 0, 1, 1)",
				out: "cubic-bezier(0, 0, 0.2, 1)",
				"in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
			},
			transitionDuration: {
				DEFAULT: "150ms",
				"0": "0ms",
				"75": "75ms",
				"100": "100ms",
				"150": "150ms",
				"200": "200ms",
				"300": "300ms",
				"500": "500ms",
				"700": "700ms",
				"1000": "1000ms",
			},
		},
	},
	plugins: [],
};

export default config;
