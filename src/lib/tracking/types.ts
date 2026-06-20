export type ParcelStatusCode =
  | "BOOKED"
  | "DROPPED_OFF"
  | "ATTEMPTED_PICKUP"
  | "PICKED_UP"
  | "SORTED"
  | "OUT_FOR_DELIVERY"
  | "DELIVERED_TO_DESTINATION"
  | "ATTEMPTED_DELIVERY"
  | "AWAITING_CONSUMER_COLLECTION"
  | "COLLECTED"
  | "AGED"
  | "CANCELLED"
  | "DAMAGED"
  | "LOST"
  | "ON_HOLD";

export type FlowType =
  | "PP2PP"
  | "PP2H"
  | "H2H"
  | "H2PP"
  | "PP2H_MISSED"
  | "PP2H_AGED"
  | "H2H_MISSED"
  | "H2H_AGED"
  | "PP2PP_AGED"
  | "H2PP_AGED";

export type DeliveryOption = "collect_parcelpoint" | "deliver_home";

export type StatusEvent = {
  status: ParcelStatusCode;
  timestamp: string;
  locationName?: string;
};

export type ParcelTracking = {
  trackingNumber: string;
  flowType: FlowType;
  deliveryOption: DeliveryOption;
  origin: string;
  destination: string;
  parcelPointName?: string;
  estimatedDate: string;
  isAged: boolean;
  events: StatusEvent[];
};

export type TimelineStep = {
  status: ParcelStatusCode;
  label: string;
  description?: string;
  reached: boolean;
  timestamp?: string;
  time?: string;
};
