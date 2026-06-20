import { FLOW_STATUSES } from "./flows";
import { formatTrackingDate, formatTrackingTime } from "./format";
import { EXCEPTIONAL_STATUSES, getStatusDescription, STATUS_LABELS } from "./statuses";
import { isStatusVisibleToCustomer } from "./visibility";
import type { ParcelStatusCode, ParcelTracking, StatusEvent, TimelineStep } from "./types";

export function getCurrentStatus(parcel: ParcelTracking): StatusEvent {
  const sorted = [...parcel.events].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
  );
  return sorted[sorted.length - 1];
}

/** Latest event that is visible to the customer on the tracking page. */
export function getCurrentCustomerStatus(parcel: ParcelTracking): StatusEvent {
  const sorted = [...parcel.events].sort(
    (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
  );

  const visibleEvents = sorted.filter((event) =>
    isStatusVisibleToCustomer(event.status, parcel.flowType),
  );

  if (visibleEvents.length > 0) {
    return visibleEvents[visibleEvents.length - 1];
  }

  return sorted[0] ?? { status: "BOOKED", timestamp: new Date().toISOString() };
}

function locationForEvent(event: StatusEvent | undefined, parcel: ParcelTracking): string {
  return event?.locationName ?? parcel.parcelPointName ?? "Your PARCELPOINT";
}

function createTimelineStep(
  status: ParcelStatusCode,
  event: StatusEvent | undefined,
  parcel: ParcelTracking,
): TimelineStep {
  const reached = Boolean(event);
  const location = locationForEvent(event, parcel);

  return {
    status,
    label: STATUS_LABELS[status],
    description: reached ? getStatusDescription(status, location) : undefined,
    reached,
    timestamp: event ? formatTrackingDate(event.timestamp) : undefined,
    time: event ? formatTrackingTime(event.timestamp) : undefined,
  };
}

export function buildTimeline(parcel: ParcelTracking): TimelineStep[] {
  const flowSteps = FLOW_STATUSES[parcel.flowType].filter((status) =>
    isStatusVisibleToCustomer(status, parcel.flowType),
  );

  const eventsByStatus = new Map(
    parcel.events
      .filter((event) => isStatusVisibleToCustomer(event.status, parcel.flowType))
      .map((event) => [event.status, event] as const),
  );

  const timeline: TimelineStep[] = flowSteps.map((status) =>
    createTimelineStep(status, eventsByStatus.get(status), parcel),
  );

  const exceptionals = [...parcel.events]
    .filter(
      (event) =>
        EXCEPTIONAL_STATUSES.includes(event.status) &&
        isStatusVisibleToCustomer(event.status, parcel.flowType),
    )
    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

  for (const excEvent of exceptionals) {
    if (timeline.some((step) => step.status === excEvent.status)) continue;

    const excTime = new Date(excEvent.timestamp).getTime();
    let insertAt = 0;

    for (let i = 0; i < timeline.length; i++) {
      const stepEvent = eventsByStatus.get(timeline[i].status);
      if (stepEvent && new Date(stepEvent.timestamp).getTime() <= excTime) {
        insertAt = i + 1;
      }
    }

    timeline.splice(insertAt, 0, createTimelineStep(excEvent.status, excEvent, parcel));
  }

  return timeline;
}

export function getLastReachedIndex(steps: TimelineStep[]): number {
  return steps.reduce((last, step, index) => (step.reached ? index : last), -1);
}
