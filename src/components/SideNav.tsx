export function SideNav() {
	return (
		<nav className="flex h-full w-full flex-col p-4">
			<div className="py-2">
				<h3 className="mb-2 px-2 text-sm font-medium text-neutral-500">Main</h3>
				<ul className="space-y-1">
					<li>
						<a
							href="#"
							className="flex items-center rounded-md px-2 py-2 text-neutral-900 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-800"
						>
							<span className="mr-3 text-neutral-500">🏠</span>
							Dashboard
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex items-center rounded-md px-2 py-2 text-neutral-900 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-800"
						>
							<span className="mr-3 text-neutral-500">📊</span>
							Analytics
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex items-center rounded-md px-2 py-2 text-neutral-900 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-800"
						>
							<span className="mr-3 text-neutral-500">🔔</span>
							Notifications
						</a>
					</li>
				</ul>
			</div>
			<div className="py-2">
				<h3 className="mb-2 px-2 text-sm font-medium text-neutral-500">
					Settings
				</h3>
				<ul className="space-y-1">
					<li>
						<a
							href="#"
							className="flex items-center rounded-md px-2 py-2 text-neutral-900 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-800"
						>
							<span className="mr-3 text-neutral-500">👤</span>
							Profile
						</a>
					</li>
					<li>
						<a
							href="#"
							className="flex items-center rounded-md px-2 py-2 text-neutral-900 hover:bg-neutral-100 dark:text-neutral-100 dark:hover:bg-neutral-800"
						>
							<span className="mr-3 text-neutral-500">⚙️</span>
							Settings
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
