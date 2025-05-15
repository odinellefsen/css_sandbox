import { Button } from "./ui/Button";

export function Header() {
	return (
		<div className="flex h-full w-full items-center justify-between">
			<div className="flex items-center gap-2">
				<span className="text-xl font-bold text-primary-600">AppName</span>
			</div>
			<div className="flex items-center gap-4">
				<Button variant="ghost" size="sm">
					Dashboard
				</Button>
				<Button variant="ghost" size="sm">
					Settings
				</Button>
				<Button variant="primary" size="sm">
					Profile
				</Button>
			</div>
		</div>
	);
}
