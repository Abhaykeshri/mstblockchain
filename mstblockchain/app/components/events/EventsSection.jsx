"use client";

import EventCard from "./EventCard";

export default function EventsSection({ title, events }) {
  return (
    <section className="py-16 px-6 md:px-12 bg-black">
      
      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
        {title.split(" ")[0]}{" "}
        <span className="text-red-500">
          {title.split(" ").slice(1).join(" ")}
        </span>
      </h2>

      {/* GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {events.map((event, i) => (
          <EventCard key={i} event={event} />
        ))}
      </div>

    </section>
  );
}