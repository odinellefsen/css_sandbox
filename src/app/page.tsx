import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Spacer } from "@/components/ui/Spacer";

export default function Home() {
	return (
		<main className="min-h-screen py-12">
			<Container>
				<header>
					<h1 className="text-primary-900 dark:text-primary-100">
						Enterprise TailwindCSS Best Practices
					</h1>
					<p className="mt-2 text-lg text-neutral-600 dark:text-neutral-300">
						A comprehensive example of enterprise-level styling
					</p>
				</header>

				<Spacer size="lg" />

				<section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					<div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
						<h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
							Consistent spacing
						</h3>
						<p className="mt-2 text-neutral-600 dark:text-neutral-300">
							Using a consistent spacing scale across the application
						</p>
						<div className="mt-4 space-y-2">
							<div className="h-4 bg-primary-100 dark:bg-primary-800" />
							<div className="h-8 bg-primary-200 dark:bg-primary-700" />
							<div className="h-12 bg-primary-300 dark:bg-primary-600" />
						</div>
					</div>

					<div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
						<h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
							Color system
						</h3>
						<p className="mt-2 text-neutral-600 dark:text-neutral-300">
							A semantic color system with consistent shades
						</p>
						<div className="mt-4 flex flex-wrap gap-2">
							<div className="h-8 w-8 rounded bg-primary-500" />
							<div className="h-8 w-8 rounded bg-secondary-500" />
							<div className="h-8 w-8 rounded bg-success-500" />
							<div className="h-8 w-8 rounded bg-warning-500" />
							<div className="h-8 w-8 rounded bg-error-500" />
							<div className="h-8 w-8 rounded bg-neutral-500" />
						</div>
					</div>

					<div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
						<h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
							Typography
						</h3>
						<p className="mt-2 text-neutral-600 dark:text-neutral-300">
							Consistent type scale and font weights
						</p>
						<div className="mt-4 space-y-2">
							<p className="text-xs">Text Extra Small</p>
							<p className="text-sm">Text Small</p>
							<p className="text-base">Text Base</p>
							<p className="text-lg">Text Large</p>
							<p className="text-xl">Text Extra Large</p>
						</div>
					</div>
				</section>

				<Spacer size="xl" />

				<section>
					<h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
						Component Library
					</h2>
					<p className="mt-2 text-lg text-neutral-600 dark:text-neutral-300">
						Reusable components with consistent styling
					</p>

					<Spacer size="md" />

					<div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
						<h3 className="mb-4 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
							Buttons
						</h3>

						<div className="flex flex-wrap gap-4">
							<Button>Default Button</Button>
							<Button variant="secondary">Secondary</Button>
							<Button variant="outline">Outline</Button>
							<Button variant="ghost">Ghost</Button>
							<Button variant="destructive">Destructive</Button>
							<Button variant="success">Success</Button>
							<Button variant="warning">Warning</Button>
							<Button variant="link">Link Button</Button>
						</div>

						<Spacer size="md" />

						<div className="flex flex-wrap gap-4">
							<Button size="sm">Small</Button>
							<Button>Default</Button>
							<Button size="lg">Large</Button>
						</div>
					</div>
				</section>
			</Container>
		</main>
	);
}
