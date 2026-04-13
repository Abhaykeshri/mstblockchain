"use client";

import Link from "next/link";

export default function EventCard({ event }) {
  return (
    <div className="rounded-2xl border border-red-500/20 bg-[#0b0b0b] overflow-hidden shadow-lg hover:shadow-red-500/20 transition duration-300">
      
      {/* IMAGE */}
      <div className="relative">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />

        {/* TAG */}
        <span
          className={`absolute top-3 left-3 px-3 py-1 text-xs rounded-full font-semibold ${
            event.type === "upcoming"
              ? "bg-red-600 text-white"
              : "bg-gray-600 text-white"
          }`}
        >
          {event.type === "upcoming" ? "UPCOMING" : "PAST"}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5 space-y-3">
        <p className="text-xs text-gray-400">
          {event.date} • {event.time}
        </p>

        <h3 className="text-lg font-semibold text-white">
          {event.title}
        </h3>

        <p className="text-sm text-gray-400 line-clamp-2">
          {event.description}
        </p>

        {/* BUTTONS */}
        <div className="flex gap-3 pt-2">
          
          {event.type === "upcoming" ? (
            <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-white text-sm">
              Join Now
            </button>
          ) : (
            <button className="bg-gray-700 px-4 py-2 rounded-full text-sm text-white">
              View Recap
            </button>
          )}

          {/* EXPLORE BUTTON */}
          <Link
            href={
              event.type === "upcoming"
                ? "/events/upcoming"
                : "/events/past"
            }
          >
            <button className="border border-red-500 text-red-400 hover:bg-red-500 hover:text-white px-4 py-2 rounded-full text-sm transition">
              Explore
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}