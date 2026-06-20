import type { FlowType, ParcelStatusCode } from "./types";

/**
 * Customer-facing timeline steps per flow (user story delivery flows),
 * excluding internal-only statuses from the visibility matrix.
 */
export const FLOW_STATUSES: Record<FlowType, ParcelStatusCode[]> = {
  PP2PP: [
    "BOOKED",
    "DROPPED_OFF",
    "PICKED_UP",
    "SORTED",
    "OUT_FOR_DELIVERY",
    "AWAITING_CONSUMER_COLLECTION",
    "COLLECTED",
  ],
  PP2H: [
    "BOOKED",
    "DROPPED_OFF",
    "PICKED_UP",
    "SORTED",
    "OUT_FOR_DELIVERY",
    "DELIVERED_TO_DESTINATION",
  ],
  H2H: [
    "BOOKED",
    "ATTEMPTED_PICKUP",
    "PICKED_UP",
    "SORTED",
    "OUT_FOR_DELIVERY",
    "DELIVERED_TO_DESTINATION",
  ],
  H2PP: [
    "BOOKED",
    "ATTEMPTED_PICKUP",
    "PICKED_UP",
    "SORTED",
    "OUT_FOR_DELIVERY",
    "AWAITING_CONSUMER_COLLECTION",
    "COLLECTED",
  ],
  PP2H_MISSED: [
    "BOOKED",
    "DROPPED_OFF",
    "PICKED_UP",
    "SORTED",
    "OUT_FOR_DELIVERY",
    "ATTEMPTED_DELIVERY",
    "AWAITING_CONSUMER_COLLECTION",
    "COLLECTED",
  ],
  PP2H_AGED: [
    "BOOKED",
    "DROPPED_OFF",
    "PICKED_UP",
    "SORTED",
    "OUT_FOR_DELIVERY",
    "ATTEMPTED_DELIVERY",
    "AWAITING_CONSUMER_COLLECTION",
    "AGED",
  ],
  H2H_MISSED: [
    "BOOKED",
    "ATTEMPTED_PICKUP",
    "PICKED_UP",
    "SORTED",
    "OUT_FOR_DELIVERY",
    "ATTEMPTED_DELIVERY",
    "AWAITING_CONSUMER_COLLECTION",
    "COLLECTED",
  ],
  H2H_AGED: [
    "BOOKED",
    "ATTEMPTED_PICKUP",
    "PICKED_UP",
    "SORTED",
    "OUT_FOR_DELIVERY",
    "ATTEMPTED_DELIVERY",
    "AWAITING_CONSUMER_COLLECTION",
    "AGED",
  ],
  PP2PP_AGED: [
    "BOOKED",
    "DROPPED_OFF",
    "PICKED_UP",
    "SORTED",
    "OUT_FOR_DELIVERY",
    "AWAITING_CONSUMER_COLLECTION",
    "AGED",
  ],
  H2PP_AGED: [
    "BOOKED",
    "ATTEMPTED_PICKUP",
    "PICKED_UP",
    "SORTED",
    "OUT_FOR_DELIVERY",
    "AWAITING_CONSUMER_COLLECTION",
    "AGED",
  ],
};

export const FLOW_LABELS: Record<FlowType, string> = {
  PP2PP: "PP2PP",
  PP2H: "PP2H",
  H2H: "H2H",
  H2PP: "H2PP",
  PP2H_MISSED: "PP2H Missed Delivery",
  PP2H_AGED: "PP2H Aged",
  H2H_MISSED: "H2H Missed Delivery",
  H2H_AGED: "H2H Aged",
  PP2PP_AGED: "PP2PP Aged",
  H2PP_AGED: "H2PP Aged",
};

const COLLECTION_FLOWS: FlowType[] = [
  "H2PP",
  "PP2PP",
  "PP2H_MISSED",
  "H2H_MISSED",
  "PP2PP_AGED",
  "H2PP_AGED",
  "PP2H_AGED",
  "H2H_AGED",
];

const DELIVERY_FLOWS: FlowType[] = ["PP2H", "H2H"];

export function isCollectionFlow(flowType: FlowType): boolean {
  return COLLECTION_FLOWS.includes(flowType);
}

export function isDeliveryFlow(flowType: FlowType): boolean {
  return DELIVERY_FLOWS.includes(flowType);
}

export function isAgedFlow(flowType: FlowType): boolean {
  return flowType.endsWith("_AGED");
}
