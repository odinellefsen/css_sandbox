import { Container } from "@/components/ui/Container";
import { Spacer } from "@/components/ui/Spacer";

export default function LayoutDocs() {
	return (
		<Container className="py-12">
			<h1 className="text-3xl font-bold text-primary-900 dark:text-primary-100">
				Layout Implementation Documentation
			</h1>
			<p className="mt-2 text-xl text-neutral-600 dark:text-neutral-300">
				How to properly implement fixed headers and sidebars without calc()
				hacks
			</p>

			<Spacer size="xl" />

			<div className="prose prose-neutral max-w-none dark:prose-invert">
				<section>
					<h2>The Problem</h2>
					<p>
						Implementing fixed headers and sidebars often leads to scrolling
						issues where:
					</p>
					<ul>
						<li>
							The page content becomes taller than the viewport by exactly the
							header height
						</li>
						<li>
							You resort to using <code>calc(100vh - [header-height]px)</code>{" "}
							which is brittle
						</li>
						<li>Mobile layouts become problematic</li>
						<li>Nested scrollable areas conflict with each other</li>
					</ul>
				</section>

				<Spacer size="lg" />

				<section>
					<h2>The Solution: CSS Grid Layout</h2>
					<p>
						Our approach uses CSS Grid to create a fixed-position layout where:
					</p>
					<ol>
						<li>
							The entire layout container is set to exactly viewport height (
							<code>h-screen</code>)
						</li>
						<li>
							We define explicit grid template rows and columns for header and
							sidebar
						</li>
						<li>Each section handles its own overflow independently</li>
						<li>No calc() functions are needed</li>
					</ol>

					<pre className="mt-4 rounded-md bg-neutral-100 p-4 dark:bg-neutral-800">
						{`<div
  className="grid h-screen w-full overflow-hidden"
  style={{
    gridTemplateColumns: sidebar ? \`\${sidebarWidth} 1fr\` : "1fr",
    gridTemplateRows: header ? \`\${headerHeight} 1fr\` : "1fr",
  }}
>
  {header && <header {...}>...</header>}
  {sidebar && <aside className="overflow-y-auto">...</aside>}
  <main className="overflow-y-auto">
    {children}
  </main>
</div>`}
					</pre>
				</section>

				<Spacer size="lg" />

				<section>
					<h2>Key CSS Properties</h2>
					<ul>
						<li>
							<code>h-screen</code>: Sets the container height to 100% of
							viewport height
						</li>
						<li>
							<code>overflow-hidden</code>: Prevents the entire layout from
							scrolling
						</li>
						<li>
							<code>grid</code>: Uses CSS Grid for layout
						</li>
						<li>
							<code>gridTemplateRows/Columns</code>: Explicitly defines sizes
						</li>
						<li>
							<code>overflow-y-auto</code>: Allows content areas to scroll
							independently
						</li>
					</ul>
				</section>

				<Spacer size="lg" />

				<section>
					<h2>Benefits</h2>
					<ul>
						<li>
							<strong>No Magic Numbers</strong>: No hardcoded pixel values or
							calc()
						</li>
						<li>
							<strong>Flexible</strong>: Header and sidebar are optional
						</li>
						<li>
							<strong>Proper Overflow</strong>: Content scrolls exactly as
							expected
						</li>
						<li>
							<strong>Clean Structure</strong>: Clean DOM with semantic elements
						</li>
					</ul>
				</section>
			</div>
		</Container>
	);
}
