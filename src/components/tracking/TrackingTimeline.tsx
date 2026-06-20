"use client";

import {
  Box,
  CircleCheck,
  CircleDashed,
  MapPin,
  Package,
  Truck,
} from "lucide-react";

import { FLOW_LABELS } from "@/lib/tracking/flows";
import { getRouteCategory, ROUTE_LABELS } from "@/lib/tracking/visibility";
import { buildTimeline, getLastReachedIndex } from "@/lib/tracking/timeline";
import type { ParcelTracking, TimelineStep } from "@/lib/tracking/types";

type TrackingTimelineProps = {
  parcel: ParcelTracking;
};

function statusIcon(status: TimelineStep["status"], reached: boolean) {
  const className = `h-4 w-4 ${reached ? "text-white" : "text-neutral-400"}`;
  switch (status) {
    case "BOOKED":
      return <Package className={className} />;
    case "OUT_FOR_DELIVERY":
    case "ATTEMPTED_DELIVERY":
    case "ATTEMPTED_PICKUP":
    case "PICKED_UP":
      return <Truck className={className} />;
    case "AWAITING_CONSUMER_COLLECTION":
    case "COLLECTED":
    case "DROPPED_OFF":
      return <MapPin className={className} />;
    default:
      return <Box className={className} />;
  }
}

export default function TrackingTimeline({ parcel }: Readonly<TrackingTimelineProps>) {
  const steps = buildTimeline(parcel);
  const lastReachedIndex = getLastReachedIndex(steps);
  const reachedCount = steps.filter((step) => step.reached).length;
  const progress = steps.length > 0 ? Math.round((reachedCount / steps.length) * 100) : 0;

  return (
    <section
      className="overflow-hidden rounded-2xl border border-neutral-200/80 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
      aria-labelledby="tracking-timeline-heading"
    >
      <div className="border-b border-neutral-100 px-6 py-5 md:px-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2 id="tracking-timeline-heading" className="text-lg font-semibold text-neutral-900">
              Tracking history
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              {ROUTE_LABELS[getRouteCategory(parcel.flowType)]} ·{" "}
              {FLOW_LABELS[parcel.flowType]}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold tabular-nums text-neutral-900">{progress}%</p>
            <p className="text-xs text-neutral-500">
              {reachedCount} of {steps.length} milestones
            </p>
          </div>
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-neutral-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Parcel journey progress"
          />
        </div>
      </div>

      <ol className="px-6 py-6 md:px-8 md:py-7">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          const isCurrent = index === lastReachedIndex;
          const connectorActive = index < lastReachedIndex;

          return (
            <li
              key={`${step.status}-${index}`}
              className={`relative flex gap-4 pb-7 last:pb-0 ${
                isCurrent ? "rounded-xl bg-blue-50/60 px-3 py-3 -mx-3" : ""
              }`}
            >
              {!isLast && (
                <span
                  className={`absolute left-[19px] top-10 h-[calc(100%-28px)] w-0.5 rounded-full ${
                    connectorActive ? "bg-blue-600" : "bg-neutral-200"
                  }`}
                  aria-hidden
                />
              )}

              <span
                className={`relative z-10 mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 shadow-sm ${
                  step.reached
                    ? isCurrent
                      ? "border-blue-600 bg-blue-600 ring-4 ring-blue-100"
                      : "border-neutral-900 bg-neutral-900"
                    : "border-neutral-200 bg-white"
                }`}
              >
                {step.reached ? (
                  statusIcon(step.status, true)
                ) : (
                  <CircleDashed size={18} className="text-neutral-300" aria-hidden />
                )}
              </span>

              <div className="min-w-0 flex-1 pt-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <p
                    className={`text-[15px] font-semibold leading-snug ${
                      step.reached ? "text-neutral-900" : "text-neutral-400"
                    }`}
                  >
                    {step.label}
                  </p>
                  {isCurrent && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      <CircleCheck size={11} />
                      Current
                    </span>
                  )}
                </div>

                {step.reached && step.timestamp && step.time ? (
                  <time
                    dateTime={step.timestamp}
                    className="mt-1 block text-sm font-medium text-neutral-600"
                  >
                    {step.timestamp}
                    <span className="mx-1.5 text-neutral-300" aria-hidden>
                      ·
                    </span>
                    {step.time}
                  </time>
                ) : (
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-neutral-400">
                    Pending
                  </p>
                )}

                {step.reached && step.description ? (
                  <p className="mt-2.5 max-w-prose text-sm leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
