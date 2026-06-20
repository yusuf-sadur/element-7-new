"use client";

import { MapPin, Navigation } from "lucide-react";

import { STATUS_LABELS } from "@/lib/tracking/statuses";
import { getCurrentCustomerStatus } from "@/lib/tracking/timeline";
import type { ParcelTracking } from "@/lib/tracking/types";

type LiveMapViewProps = {
  parcel: ParcelTracking;
};

export default function LiveMapView({ parcel }: Readonly<LiveMapViewProps>) {
  const currentStatus = STATUS_LABELS[getCurrentCustomerStatus(parcel).status];

  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm md:p-8" aria-labelledby="live-map-heading">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 id="live-map-heading" className="text-lg font-semibold text-neutral-900">
            Live map view
          </h2>
          <p className="mt-1 text-sm text-neutral-500">Dummy map — carrier location preview</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
          Live
        </span>
      </div>

      <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-sky-100 via-emerald-50 to-neutral-100">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          aria-hidden
        />

        <div className="absolute left-[18%] top-[62%] flex flex-col items-center gap-1">
          <span className="rounded-md bg-white px-2 py-1 text-[10px] font-medium shadow-sm">
            Origin
          </span>
          <MapPin size={20} className="text-blue-600" />
        </div>

        <div className="absolute right-[16%] top-[28%] flex flex-col items-center gap-1">
          <span className="rounded-md bg-white px-2 py-1 text-[10px] font-medium shadow-sm">
            Destination
          </span>
          <MapPin size={20} className="text-rose-600" />
        </div>

        <div className="absolute left-[48%] top-[44%] flex flex-col items-center gap-1">
          <span className="rounded-md bg-neutral-900 px-2 py-1 text-[10px] font-medium text-white shadow-sm">
            Parcel
          </span>
          <Navigation size={22} className="text-neutral-900" fill="currentColor" />
        </div>

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 to-transparent p-4">
          <p className="text-sm font-medium text-neutral-800">{currentStatus}</p>
          <p className="text-xs text-neutral-500">
            {parcel.origin} → {parcel.destination}
          </p>
        </div>
      </div>
    </section>
  );
}
