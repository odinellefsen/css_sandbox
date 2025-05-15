import { Container } from "@/components/ui/Container";
import { Spacer } from "@/components/ui/Spacer";
import { Layout } from "@/components/ui/Layout";
import { Header } from "@/components/Header";
import { SideNav } from "@/components/SideNav";
import { Button } from "@/components/ui/Button";

export default function Home() {
	return (
		<Layout
			header={<Header />}
			sidebar={<SideNav />}
			headerHeight="4rem"
			sidebarWidth="16rem"
		>
			<Container className="py-8">
				<header>
					<h1 className="text-primary-900 dark:text-primary-100">
						Fixed Layout Solution
					</h1>
					<p className="mt-2 text-lg text-neutral-600 dark:text-neutral-300">
						A CSS Grid-based layout with fixed header and sidebar
					</p>
				</header>

				<Spacer size="lg" />

				<section className="space-y-6">
					<div className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
						<h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
							Proper Layout Management
						</h2>
						<p className="mt-2 text-neutral-600 dark:text-neutral-300">
							This layout correctly handles fixed headers and sidebars without
							using calc() or creating scrolling issues.
						</p>
						<div className="mt-4">
							<h3 className="font-medium">Key Features:</h3>
							<ul className="mt-2 list-inside list-disc">
								<li>Uses CSS Grid for perfect positioning</li>
								<li>No calc() required for content areas</li>
								<li>Proper overflow handling in each section</li>
								<li>Responsive and adaptive</li>
								<li>Dark mode compatible</li>
							</ul>
						</div>
						<div className="mt-6">
							<Button>Learn More</Button>
						</div>
					</div>

					{/* Creating additional content to demonstrate scrolling */}
					{Array.from({ length: 10 }).map((_, index) => (
						<div
							key={index}
							className="rounded-lg border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
						>
							<h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
								Content Block {index + 1}
							</h3>
							<p className="mt-2 text-neutral-600 dark:text-neutral-300">
								This additional content demonstrates how scrolling works
								properly in the main content area, while the header and sidebar
								remain fixed in place.
							</p>
						</div>
					))}
				</section>
			</Container>
		</Layout>
	);
}
