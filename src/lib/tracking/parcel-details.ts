import { isAgedFlow, isCollectionFlow, isDeliveryFlow } from "./flows";
import { formatTrackingDate } from "./format";
import type { FlowType, ParcelTracking } from "./types";
import { getCurrentCustomerStatus } from "./timeline";
import { STATUS_LABELS } from "./statuses";

export function getDeliveryOptionLabel(option: ParcelTracking["deliveryOption"]): string {
  return option === "collect_parcelpoint" ? "Collect from parcelpoint" : "Delivered to home";
}

export function getEstimatedLabel(parcel: ParcelTracking): string {
  if (parcel.isAged || isAgedFlow(parcel.flowType)) {
    return "Your parcel has aged.";
  }

  const formatted = formatTrackingDate(parcel.estimatedDate);

  if (isCollectionFlow(parcel.flowType)) {
    return `Estimated Collection ${formatted}`;
  }

  if (isDeliveryFlow(parcel.flowType)) {
    return `Estimated Delivery ${formatted}`;
  }

  return `Estimated ${formatted}`;
}

export function getCurrentStatusLabel(parcel: ParcelTracking): string {
  const current = getCurrentCustomerStatus(parcel);
  return STATUS_LABELS[current.status];
}

export function getFlowTypeLabel(flowType: FlowType): string {
  return flowType.replace(/_/g, " ");
}
