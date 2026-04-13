
export const metadata = {
	title: "Past Events | MST",
};

export default function PastEventsPage() {
	return (
		<main className="min-h-screen bg-white text-slate-900">
			<div className="mx-auto max-w-6xl px-6 py-16">
				<h1 className="text-4xl md:text-5xl font-bold tracking-tight">
					Past <span className="text-red-500">Events</span>
				</h1>
				<p className="mt-4 max-w-2xl text-slate-600">
					Recaps and highlights will appear here.
				</p>
			</div>
		</main>
	);
}
