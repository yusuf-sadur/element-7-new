import type { FlowType, ParcelStatusCode } from "./types";

/** Base route column from the PP Go customer visibility matrix. */
export type RouteCategory = "PP2PP" | "PP2H" | "H2H" | "H2PP";

export function getRouteCategory(flowType: FlowType): RouteCategory {
  if (flowType.startsWith("PP2PP")) return "PP2PP";
  if (flowType.startsWith("PP2H")) return "PP2H";
  if (flowType.startsWith("H2H")) return "H2H";
  return "H2PP";
}

export const ROUTE_LABELS: Record<RouteCategory, string> = {
  PP2PP: "PP to PP",
  PP2H: "PP to Home",
  H2H: "Home to Home",
  H2PP: "Home to PP",
};

/**
 * PP Go customer visibility matrix.
 * Blue cells = internal only — not shown on the tracking page.
 */
const VISIBLE_TO_CUSTOMER: Record<RouteCategory, ReadonlySet<ParcelStatusCode>> = {
  PP2PP: new Set<ParcelStatusCode>([
    "BOOKED",
    "DROPPED_OFF",
    "PICKED_UP",
    "SORTED",
    "OUT_FOR_DELIVERY",
    "AWAITING_CONSUMER_COLLECTION",
    "COLLECTED",
    "AGED",
    "CANCELLED",
    "DAMAGED",
    "LOST",
    "ON_HOLD",
  ]),
  PP2H: new Set<ParcelStatusCode>([
    "BOOKED",
    "DROPPED_OFF",
    "PICKED_UP",
    "SORTED",
    "OUT_FOR_DELIVERY",
    "DELIVERED_TO_DESTINATION",
    "ATTEMPTED_DELIVERY",
    "AWAITING_CONSUMER_COLLECTION",
    "COLLECTED",
    "AGED",
    "CANCELLED",
    "DAMAGED",
    "LOST",
    "ON_HOLD",
  ]),
  H2H: new Set<ParcelStatusCode>([
    "BOOKED",
    "ATTEMPTED_PICKUP",
    "PICKED_UP",
    "SORTED",
    "OUT_FOR_DELIVERY",
    "DELIVERED_TO_DESTINATION",
    "ATTEMPTED_DELIVERY",
    "AWAITING_CONSUMER_COLLECTION",
    "COLLECTED",
    "AGED",
    "CANCELLED",
    "DAMAGED",
    "LOST",
    "ON_HOLD",
  ]),
  H2PP: new Set<ParcelStatusCode>([
    "BOOKED",
    "ATTEMPTED_PICKUP",
    "PICKED_UP",
    "SORTED",
    "OUT_FOR_DELIVERY",
    "AWAITING_CONSUMER_COLLECTION",
    "COLLECTED",
    "AGED",
    "CANCELLED",
    "DAMAGED",
    "LOST",
    "ON_HOLD",
  ]),
};

/** Internal-only statuses per route (blue cells in the matrix). */
export const INTERNAL_ONLY_STATUSES: Record<RouteCategory, readonly ParcelStatusCode[]> = {
  PP2PP: ["ATTEMPTED_PICKUP", "DELIVERED_TO_DESTINATION", "ATTEMPTED_DELIVERY"],
  PP2H: ["ATTEMPTED_PICKUP"],
  H2H: [],
  H2PP: ["DELIVERED_TO_DESTINATION", "ATTEMPTED_DELIVERY"],
};

export function isStatusVisibleToCustomer(
  status: ParcelStatusCode,
  flowType: FlowType,
): boolean {
  const route = getRouteCategory(flowType);
  return VISIBLE_TO_CUSTOMER[route].has(status);
}
