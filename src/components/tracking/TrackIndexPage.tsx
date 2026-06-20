"use client";

import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";

import TrackChrome from "@/components/tracking/TrackChrome";
import TrackSearchForm from "@/components/tracking/TrackSearchForm";
import { RECENT_SHIPMENTS } from "@/lib/tracking/dummy-data";

export default function TrackIndexPage() {
  return (
    <>
      <TrackChrome />
      <div className="ppgo-track min-h-screen bg-[#f4f6f8]">
        <header className="border-b border-neutral-200/80 bg-white">
          <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
                <Package size={18} />
              </span>
              <div>
                <p className="text-sm font-bold tracking-tight text-neutral-900">PP Go</p>
                <p className="text-xs text-neutral-500">Parcel tracking</p>
              </div>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-12">
          <h1 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
            Track your parcel
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">
            Enter your tracking number or select a recent shipment below
          </p>

          <TrackSearchForm />

          <section className="mt-10" aria-labelledby="recent-shipments-heading">
            <h2
              id="recent-shipments-heading"
              className="text-sm font-semibold uppercase tracking-wide text-neutral-500"
            >
              Recent shipments
            </h2>
            <ul className="mt-4 space-y-2.5">
              {RECENT_SHIPMENTS.map((shipment) => (
                <li key={shipment.slug}>
                  <Link
                    href={`/track/${shipment.slug}`}
                    className="group flex items-center gap-4 rounded-xl border border-neutral-200/80 bg-white p-4 shadow-sm transition-all hover:border-blue-200 hover:shadow-md"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                      <Package size={18} />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-sm font-semibold text-neutral-900">
                        {shipment.trackingNumber}
                      </span>
                      <span className="mt-0.5 block text-xs text-neutral-500">
                        {shipment.origin} → {shipment.destination}
                      </span>
                      <span className="mt-1.5 flex flex-wrap gap-2">
                        <span className="inline-flex rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-700">
                          {shipment.statusLabel}
                        </span>
                        <span className="inline-flex rounded-full bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-blue-700">
                          {shipment.routeLabel}
                        </span>
                      </span>
                    </span>

                    <ArrowRight
                      size={18}
                      className="shrink-0 text-neutral-300 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-600"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
