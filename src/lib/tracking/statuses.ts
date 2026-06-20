import type { ParcelStatusCode } from "./types";

export const STATUS_LABELS: Record<ParcelStatusCode, string> = {
  BOOKED: "Booked",
  DROPPED_OFF: "Dropped Off",
  ATTEMPTED_PICKUP: "Attempted Pickup",
  PICKED_UP: "Picked Up",
  SORTED: "Sorted",
  OUT_FOR_DELIVERY: "Out for Delivery",
  DELIVERED_TO_DESTINATION: "Delivered to Destination",
  ATTEMPTED_DELIVERY: "Attempted Delivery",
  AWAITING_CONSUMER_COLLECTION: "Awaiting Consumer Collection",
  COLLECTED: "Collected",
  AGED: "Aged",
  CANCELLED: "Cancelled",
  DAMAGED: "Damaged",
  LOST: "Lost",
  ON_HOLD: "On Hold",
};

export function getStatusDescription(
  status: ParcelStatusCode,
  locationName = "Your PARCELPOINT",
): string {
  const descriptions: Record<ParcelStatusCode, string> = {
    BOOKED: "We've got your parcel details! You're booked in with PARCELPOINT.",
    DROPPED_OFF: `${locationName} has received your parcel and the courier has been scheduled to collect it.`,
    ATTEMPTED_PICKUP:
      "Our courier couldn't collect your parcel this time. Please get in touch to arrange another attempt.",
    PICKED_UP: "The courier has collected your parcel - it's now on its way!",
    SORTED: "Your parcel has been received and processed at the carrier depot.",
    OUT_FOR_DELIVERY: "Your parcel is out for delivery today.",
    DELIVERED_TO_DESTINATION: "Your parcel has been delivered.",
    ATTEMPTED_DELIVERY:
      "The courier attempted to deliver your parcel. We'll email you with next steps.",
    AWAITING_CONSUMER_COLLECTION: `${locationName} has received your parcel and it's ready for collection.`,
    COLLECTED: "Your parcel has been collected from a PARCELPOINT.",
    AGED: "Your parcel wasn't collected in time and is no longer available at a PARCELPOINT.",
    CANCELLED: "Your parcel has been cancelled. Please contact us if you need more information.",
    DAMAGED:
      "There has been an issue with your parcel. We are investigating and will keep you updated.",
    LOST: "There has been an issue with your parcel. We are investigating and will keep you updated.",
    ON_HOLD:
      "There has been an issue with your parcel. We are investigating and will keep you updated.",
  };

  return descriptions[status];
}

export const EXCEPTIONAL_STATUSES: ParcelStatusCode[] = [
  "CANCELLED",
  "DAMAGED",
  "LOST",
  "ON_HOLD",
];
