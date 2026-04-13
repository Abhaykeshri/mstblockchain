
export const metadata = {
	title: "Upcoming Events | MST",
};

export default function UpcomingEventsPage() {
	return (
		<main className="min-h-screen bg-white text-slate-900">
			<div className="mx-auto max-w-6xl px-6 py-16">
				<h1 className="text-4xl md:text-5xl font-bold tracking-tight">
					Upcoming <span className="text-red-500">Events</span>
				</h1>
				<p className="mt-4 max-w-2xl text-slate-600">
					New events will be listed here as they are announced.
				</p>
			</div>
		</main>
	);
}
