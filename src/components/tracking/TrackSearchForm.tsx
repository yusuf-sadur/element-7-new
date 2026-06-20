"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Search } from "lucide-react";

import { DEFAULT_TRACKING_NUMBER, toTrackingPath } from "@/lib/tracking/dummy-data";

export default function TrackSearchForm() {
  const router = useRouter();
  const [value, setValue] = useState(DEFAULT_TRACKING_NUMBER);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id = value.trim();
    if (id) router.push(toTrackingPath(id));
  };

  return (
    <form onSubmit={onSubmit} className="mt-8">
      <label htmlFor="tracking-search" className="sr-only">
        Tracking number
      </label>
      <div className="flex gap-2">
        <input
          id="tracking-search"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="e.g. ppgo-pp2pp-001"
          className="min-w-0 flex-1 rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 outline-none ring-blue-500 focus:ring-2"
        />
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          <Search size={16} />
          Track
        </button>
      </div>
    </form>
  );
}
