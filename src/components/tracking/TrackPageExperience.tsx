"use client";

import Link from "next/link";
import { Package } from "lucide-react";

import LiveMapView from "@/components/tracking/LiveMapView";
import ParcelDetailsBox from "@/components/tracking/ParcelDetailsBox";
import TrackingTimeline from "@/components/tracking/TrackingTimeline";
import TrackChrome from "@/components/tracking/TrackChrome";
import UpdatePreferences from "@/components/tracking/UpdatePreferences";
import type { ParcelTracking } from "@/lib/tracking/types";

type TrackPageExperienceProps = {
  parcel: ParcelTracking;
};

export default function TrackPageExperience({ parcel }: Readonly<TrackPageExperienceProps>) {
  return (
    <>
      <TrackChrome />
      <div className="ppgo-track min-h-screen bg-[#f4f6f8]">
        <header className="border-b border-neutral-200/80 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white shadow-sm">
                <Package size={18} />
              </span>
              <div>
                <p className="text-sm font-bold tracking-tight text-neutral-900">PP Go</p>
                <p className="text-xs text-neutral-500">Parcel tracking</p>
              </div>
            </div>
            <Link
              href="/track"
              className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
            >
              Track another parcel
            </Link>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10">
          <div className="mb-8 lg:mb-10">
            <h1 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              Track your parcel
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-600">
              One consistent status view — whether the update came from Aramex or HUBBED 2.0
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.85fr)] lg:items-start lg:gap-8">
            <div className="space-y-6">
              <TrackingTimeline parcel={parcel} />
              <LiveMapView parcel={parcel} />
            </div>

            <aside className="space-y-5 lg:sticky lg:top-6">
              <ParcelDetailsBox parcel={parcel} />
              <UpdatePreferences />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
