"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  Copy,
  Home,
  MapPin,
  Package,
  Truck,
} from "lucide-react";

import { FLOW_LABELS } from "@/lib/tracking/flows";
import {
  getCurrentStatusLabel,
  getDeliveryOptionLabel,
  getEstimatedLabel,
} from "@/lib/tracking/parcel-details";
import { getRouteCategory, ROUTE_LABELS } from "@/lib/tracking/visibility";
import type { ParcelTracking } from "@/lib/tracking/types";

type ParcelDetailsBoxProps = {
  parcel: ParcelTracking;
};

export default function ParcelDetailsBox({ parcel }: Readonly<ParcelDetailsBoxProps>) {
  const [copied, setCopied] = useState(false);
  const currentStatus = getCurrentStatusLabel(parcel);
  const isAged = parcel.isAged;

  const copyTrackingNumber = async () => {
    await navigator.clipboard.writeText(parcel.trackingNumber);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
      aria-labelledby="parcel-details-heading"
    >
      <div className="border-b border-neutral-100 bg-gradient-to-br from-blue-600 to-blue-700 px-6 py-5 text-white">
        <h2 id="parcel-details-heading" className="sr-only">
          Parcel details
        </h2>
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-100">
          Tracking number
        </p>
        <div className="mt-2 flex items-start justify-between gap-3">
          <p className="font-mono text-lg font-bold tracking-wide sm:text-xl">
            {parcel.trackingNumber}
          </p>
          <button
            type="button"
            onClick={copyTrackingNumber}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-white/25 bg-white/10 px-2.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white/20"
            aria-label="Copy tracking number"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>

      <div className="px-6 py-5">
        <div
          className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold ${
            isAged
              ? "bg-amber-50 text-amber-900 ring-1 ring-amber-200"
              : "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${isAged ? "bg-amber-500" : "bg-emerald-500"}`}
            aria-hidden
          />
          {currentStatus}
        </div>

        <p
          className={`mt-4 text-sm leading-relaxed ${
            isAged ? "font-medium text-amber-900" : "text-neutral-700"
          }`}
        >
          {getEstimatedLabel(parcel)}
        </p>
      </div>

      <div className="mx-6 flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50 px-4 py-3.5">
        <div className="min-w-0 flex-1">
          <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-neutral-400">
            <MapPin size={12} />
            Origin
          </p>
          <p className="mt-0.5 truncate text-sm font-medium text-neutral-900">{parcel.origin}</p>
        </div>
        <ArrowRight size={16} className="shrink-0 text-neutral-300" aria-hidden />
        <div className="min-w-0 flex-1 text-right">
          <p className="flex items-center justify-end gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-neutral-400">
            Destination
            <MapPin size={12} />
          </p>
          <p className="mt-0.5 truncate text-sm font-medium text-neutral-900">
            {parcel.destination}
          </p>
        </div>
      </div>

      <dl className="mt-5 space-y-0 divide-y divide-neutral-100 px-6 pb-6">
        <div className="flex items-center justify-between gap-4 py-3.5">
          <dt className="flex items-center gap-2 text-sm text-neutral-500">
            <Truck size={15} className="text-neutral-400" />
            Delivery option
          </dt>
          <dd className="text-right text-sm font-medium text-neutral-900">
            {getDeliveryOptionLabel(parcel.deliveryOption)}
          </dd>
        </div>

        <div className="flex items-center justify-between gap-4 py-3.5">
          <dt className="flex items-center gap-2 text-sm text-neutral-500">
            <Package size={15} className="text-neutral-400" />
            Route
          </dt>
          <dd className="text-right text-sm font-medium text-neutral-900">
            {ROUTE_LABELS[getRouteCategory(parcel.flowType)]}
          </dd>
        </div>

        <div className="flex items-center justify-between gap-4 py-3.5">
          <dt className="flex items-center gap-2 text-sm text-neutral-500">
            <Home size={15} className="text-neutral-400" />
            Flow
          </dt>
          <dd className="text-right text-sm font-medium text-neutral-900">
            {FLOW_LABELS[parcel.flowType]}
          </dd>
        </div>
      </dl>
    </section>
  );
}
