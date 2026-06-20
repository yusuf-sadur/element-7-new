import type { ParcelTracking } from "./types";
import { FLOW_LABELS } from "./flows";
import { getCurrentCustomerStatus } from "./timeline";
import { STATUS_LABELS } from "./statuses";
import { ROUTE_LABELS, getRouteCategory } from "./visibility";

export const DUMMY_PARCELS: Record<string, ParcelTracking> = {
  "PPGO-PP2PP-001": {
    trackingNumber: "PPGO-PP2PP-001",
    flowType: "PP2PP",
    deliveryOption: "collect_parcelpoint",
    origin: "Melbourne VIC",
    destination: "Brunswick VIC",
    parcelPointName: "Brunswick ParcelPoint",
    estimatedDate: "2026-06-20T00:00:00+10:00",
    isAged: false,
    events: [
      { status: "BOOKED", timestamp: "2026-06-14T09:15:00+10:00" },
      {
        status: "DROPPED_OFF",
        timestamp: "2026-06-15T11:42:00+10:00",
        locationName: "Collingwood ParcelPoint",
      },
      { status: "PICKED_UP", timestamp: "2026-06-16T08:05:00+10:00" },
      { status: "SORTED", timestamp: "2026-06-16T14:30:00+10:00" },
    ],
  },
  "PPGO-PP2H-001": {
    trackingNumber: "PPGO-PP2H-001",
    flowType: "PP2H",
    deliveryOption: "deliver_home",
    origin: "Sydney NSW",
    destination: "Parramatta NSW",
    estimatedDate: "2026-06-18T00:00:00+10:00",
    isAged: false,
    events: [
      { status: "BOOKED", timestamp: "2026-06-10T10:00:00+10:00" },
      {
        status: "DROPPED_OFF",
        timestamp: "2026-06-11T16:20:00+10:00",
        locationName: "Pyrmont ParcelPoint",
      },
      { status: "PICKED_UP", timestamp: "2026-06-12T07:45:00+10:00" },
      { status: "SORTED", timestamp: "2026-06-12T13:10:00+10:00" },
      { status: "OUT_FOR_DELIVERY", timestamp: "2026-06-13T06:30:00+10:00" },
      { status: "DELIVERED_TO_DESTINATION", timestamp: "2026-06-13T11:55:00+10:00" },
    ],
  },
  "PPGO-H2H-001": {
    trackingNumber: "PPGO-H2H-001",
    flowType: "H2H",
    deliveryOption: "deliver_home",
    origin: "Hobart TAS",
    destination: "Sandy Bay TAS",
    estimatedDate: "2026-06-19T00:00:00+10:00",
    isAged: false,
    events: [
      { status: "BOOKED", timestamp: "2026-06-11T08:00:00+10:00" },
      { status: "ATTEMPTED_PICKUP", timestamp: "2026-06-12T09:00:00+10:00" },
      { status: "PICKED_UP", timestamp: "2026-06-13T10:30:00+10:00" },
      { status: "SORTED", timestamp: "2026-06-13T16:00:00+10:00" },
      { status: "OUT_FOR_DELIVERY", timestamp: "2026-06-14T07:15:00+10:00" },
      { status: "DELIVERED_TO_DESTINATION", timestamp: "2026-06-14T12:40:00+10:00" },
    ],
  },
  "PPGO-H2PP-001": {
    trackingNumber: "PPGO-H2PP-001",
    flowType: "H2PP",
    deliveryOption: "collect_parcelpoint",
    origin: "Adelaide SA",
    destination: "Glenelg SA",
    parcelPointName: "Glenelg ParcelPoint",
    estimatedDate: "2026-06-22T00:00:00+10:00",
    isAged: false,
    events: [
      { status: "BOOKED", timestamp: "2026-06-15T08:00:00+10:00" },
      { status: "ATTEMPTED_PICKUP", timestamp: "2026-06-16T09:30:00+10:00" },
      { status: "PICKED_UP", timestamp: "2026-06-17T10:15:00+10:00" },
      { status: "SORTED", timestamp: "2026-06-17T18:00:00+10:00" },
      { status: "OUT_FOR_DELIVERY", timestamp: "2026-06-18T07:00:00+10:00" },
    ],
  },
  "PPGO-PP2H-MISSED": {
    trackingNumber: "PPGO-PP2H-MISSED",
    flowType: "PP2H_MISSED",
    deliveryOption: "collect_parcelpoint",
    origin: "Brisbane QLD",
    destination: "Fortitude Valley QLD",
    parcelPointName: "Fortitude Valley ParcelPoint",
    estimatedDate: "2026-06-21T00:00:00+10:00",
    isAged: false,
    events: [
      { status: "BOOKED", timestamp: "2026-06-12T09:00:00+10:00" },
      {
        status: "DROPPED_OFF",
        timestamp: "2026-06-13T12:00:00+10:00",
        locationName: "West End ParcelPoint",
      },
      { status: "PICKED_UP", timestamp: "2026-06-14T08:30:00+10:00" },
      { status: "SORTED", timestamp: "2026-06-14T15:45:00+10:00" },
      { status: "OUT_FOR_DELIVERY", timestamp: "2026-06-15T06:00:00+10:00" },
      { status: "ATTEMPTED_DELIVERY", timestamp: "2026-06-15T14:20:00+10:00" },
      {
        status: "AWAITING_CONSUMER_COLLECTION",
        timestamp: "2026-06-16T09:00:00+10:00",
        locationName: "Fortitude Valley ParcelPoint",
      },
    ],
  },
  "PPGO-H2H-MISSED": {
    trackingNumber: "PPGO-H2H-MISSED",
    flowType: "H2H_MISSED",
    deliveryOption: "collect_parcelpoint",
    origin: "Darwin NT",
    destination: "Palmerston NT",
    parcelPointName: "Palmerston ParcelPoint",
    estimatedDate: "2026-06-23T00:00:00+10:00",
    isAged: false,
    events: [
      { status: "BOOKED", timestamp: "2026-06-13T08:00:00+10:00" },
      { status: "ATTEMPTED_PICKUP", timestamp: "2026-06-14T09:00:00+10:00" },
      { status: "PICKED_UP", timestamp: "2026-06-15T11:00:00+10:00" },
      { status: "SORTED", timestamp: "2026-06-15T17:00:00+10:00" },
      { status: "OUT_FOR_DELIVERY", timestamp: "2026-06-16T06:30:00+10:00" },
      { status: "ATTEMPTED_DELIVERY", timestamp: "2026-06-16T13:00:00+10:00" },
      {
        status: "AWAITING_CONSUMER_COLLECTION",
        timestamp: "2026-06-17T09:30:00+10:00",
        locationName: "Palmerston ParcelPoint",
      },
    ],
  },
  "PPGO-PP2PP-AGED": {
    trackingNumber: "PPGO-PP2PP-AGED",
    flowType: "PP2PP_AGED",
    deliveryOption: "collect_parcelpoint",
    origin: "Perth WA",
    destination: "Fremantle WA",
    parcelPointName: "Fremantle ParcelPoint",
    estimatedDate: "2026-06-10T00:00:00+10:00",
    isAged: true,
    events: [
      { status: "BOOKED", timestamp: "2026-05-28T10:00:00+10:00" },
      {
        status: "DROPPED_OFF",
        timestamp: "2026-05-29T11:30:00+10:00",
        locationName: "Perth CBD ParcelPoint",
      },
      { status: "PICKED_UP", timestamp: "2026-05-30T07:00:00+10:00" },
      { status: "SORTED", timestamp: "2026-05-30T14:00:00+10:00" },
      { status: "OUT_FOR_DELIVERY", timestamp: "2026-05-31T06:30:00+10:00" },
      {
        status: "AWAITING_CONSUMER_COLLECTION",
        timestamp: "2026-06-01T10:00:00+10:00",
        locationName: "Fremantle ParcelPoint",
      },
      { status: "AGED", timestamp: "2026-06-10T23:59:00+10:00" },
    ],
  },
  "PPGO-PP2H-AGED": {
    trackingNumber: "PPGO-PP2H-AGED",
    flowType: "PP2H_AGED",
    deliveryOption: "collect_parcelpoint",
    origin: "Newcastle NSW",
    destination: "Hamilton NSW",
    parcelPointName: "Hamilton ParcelPoint",
    estimatedDate: "2026-06-08T00:00:00+10:00",
    isAged: true,
    events: [
      { status: "BOOKED", timestamp: "2026-05-25T09:00:00+10:00" },
      {
        status: "DROPPED_OFF",
        timestamp: "2026-05-26T10:00:00+10:00",
        locationName: "Newcastle ParcelPoint",
      },
      { status: "PICKED_UP", timestamp: "2026-05-27T08:00:00+10:00" },
      { status: "SORTED", timestamp: "2026-05-27T14:00:00+10:00" },
      { status: "OUT_FOR_DELIVERY", timestamp: "2026-05-28T07:00:00+10:00" },
      { status: "ATTEMPTED_DELIVERY", timestamp: "2026-05-28T15:00:00+10:00" },
      {
        status: "AWAITING_CONSUMER_COLLECTION",
        timestamp: "2026-05-29T09:00:00+10:00",
        locationName: "Hamilton ParcelPoint",
      },
      { status: "AGED", timestamp: "2026-06-08T23:59:00+10:00" },
    ],
  },
  "PPGO-H2H-AGED": {
    trackingNumber: "PPGO-H2H-AGED",
    flowType: "H2H_AGED",
    deliveryOption: "collect_parcelpoint",
    origin: "Geelong VIC",
    destination: "Lara VIC",
    parcelPointName: "Lara ParcelPoint",
    estimatedDate: "2026-06-07T00:00:00+10:00",
    isAged: true,
    events: [
      { status: "BOOKED", timestamp: "2026-05-24T08:00:00+10:00" },
      { status: "ATTEMPTED_PICKUP", timestamp: "2026-05-25T09:00:00+10:00" },
      { status: "PICKED_UP", timestamp: "2026-05-26T10:00:00+10:00" },
      { status: "SORTED", timestamp: "2026-05-26T16:00:00+10:00" },
      { status: "OUT_FOR_DELIVERY", timestamp: "2026-05-27T07:00:00+10:00" },
      { status: "ATTEMPTED_DELIVERY", timestamp: "2026-05-27T14:00:00+10:00" },
      {
        status: "AWAITING_CONSUMER_COLLECTION",
        timestamp: "2026-05-28T09:00:00+10:00",
        locationName: "Lara ParcelPoint",
      },
      { status: "AGED", timestamp: "2026-06-07T23:59:00+10:00" },
    ],
  },
  "PPGO-H2PP-AGED": {
    trackingNumber: "PPGO-H2PP-AGED",
    flowType: "H2PP_AGED",
    deliveryOption: "collect_parcelpoint",
    origin: "Gold Coast QLD",
    destination: "Surfers Paradise QLD",
    parcelPointName: "Surfers Paradise ParcelPoint",
    estimatedDate: "2026-06-09T00:00:00+10:00",
    isAged: true,
    events: [
      { status: "BOOKED", timestamp: "2026-05-26T08:00:00+10:00" },
      { status: "ATTEMPTED_PICKUP", timestamp: "2026-05-27T09:00:00+10:00" },
      { status: "PICKED_UP", timestamp: "2026-05-28T10:00:00+10:00" },
      { status: "SORTED", timestamp: "2026-05-28T16:00:00+10:00" },
      { status: "OUT_FOR_DELIVERY", timestamp: "2026-05-29T07:00:00+10:00" },
      {
        status: "AWAITING_CONSUMER_COLLECTION",
        timestamp: "2026-05-30T09:00:00+10:00",
        locationName: "Surfers Paradise ParcelPoint",
      },
      { status: "AGED", timestamp: "2026-06-09T23:59:00+10:00" },
    ],
  },
  "PPGO-ON-HOLD": {
    trackingNumber: "PPGO-ON-HOLD",
    flowType: "H2H",
    deliveryOption: "deliver_home",
    origin: "Canberra ACT",
    destination: "Kingston ACT",
    estimatedDate: "2026-06-25T00:00:00+10:00",
    isAged: false,
    events: [
      { status: "BOOKED", timestamp: "2026-06-14T08:00:00+10:00" },
      { status: "PICKED_UP", timestamp: "2026-06-15T11:00:00+10:00" },
      { status: "SORTED", timestamp: "2026-06-15T17:30:00+10:00" },
      { status: "ON_HOLD", timestamp: "2026-06-16T09:00:00+10:00" },
    ],
  },
  "PPGO-CANCELLED": {
    trackingNumber: "PPGO-CANCELLED",
    flowType: "PP2PP",
    deliveryOption: "collect_parcelpoint",
    origin: "Wollongong NSW",
    destination: "Kiama NSW",
    parcelPointName: "Kiama ParcelPoint",
    estimatedDate: "2026-06-20T00:00:00+10:00",
    isAged: false,
    events: [
      { status: "BOOKED", timestamp: "2026-06-14T09:00:00+10:00" },
      {
        status: "DROPPED_OFF",
        timestamp: "2026-06-15T11:00:00+10:00",
        locationName: "Wollongong ParcelPoint",
      },
      { status: "CANCELLED", timestamp: "2026-06-15T16:00:00+10:00" },
    ],
  },
  "PPGO-INTERNAL-H2PP": {
    trackingNumber: "PPGO-INTERNAL-H2PP",
    flowType: "H2PP",
    deliveryOption: "collect_parcelpoint",
    origin: "Sunshine Coast QLD",
    destination: "Noosa QLD",
    parcelPointName: "Noosa ParcelPoint",
    estimatedDate: "2026-06-24T00:00:00+10:00",
    isAged: false,
    events: [
      { status: "BOOKED", timestamp: "2026-06-14T08:00:00+10:00" },
      { status: "ATTEMPTED_PICKUP", timestamp: "2026-06-15T09:00:00+10:00" },
      { status: "PICKED_UP", timestamp: "2026-06-16T10:00:00+10:00" },
      { status: "SORTED", timestamp: "2026-06-16T16:00:00+10:00" },
      { status: "OUT_FOR_DELIVERY", timestamp: "2026-06-17T07:00:00+10:00" },
      { status: "ATTEMPTED_DELIVERY", timestamp: "2026-06-17T13:00:00+10:00" },
      { status: "DELIVERED_TO_DESTINATION", timestamp: "2026-06-17T14:00:00+10:00" },
      {
        status: "AWAITING_CONSUMER_COLLECTION",
        timestamp: "2026-06-17T15:30:00+10:00",
        locationName: "Noosa ParcelPoint",
      },
    ],
  },
  "PPGO-INTERNAL-PP2PP": {
    trackingNumber: "PPGO-INTERNAL-PP2PP",
    flowType: "PP2PP",
    deliveryOption: "collect_parcelpoint",
    origin: "Ballarat VIC",
    destination: "Bendigo VIC",
    parcelPointName: "Bendigo ParcelPoint",
    estimatedDate: "2026-06-22T00:00:00+10:00",
    isAged: false,
    events: [
      { status: "BOOKED", timestamp: "2026-06-14T09:00:00+10:00" },
      {
        status: "DROPPED_OFF",
        timestamp: "2026-06-15T11:00:00+10:00",
        locationName: "Ballarat ParcelPoint",
      },
      { status: "ATTEMPTED_PICKUP", timestamp: "2026-06-15T14:00:00+10:00" },
      { status: "PICKED_UP", timestamp: "2026-06-16T08:00:00+10:00" },
      { status: "SORTED", timestamp: "2026-06-16T14:00:00+10:00" },
      { status: "OUT_FOR_DELIVERY", timestamp: "2026-06-17T06:30:00+10:00" },
      { status: "ATTEMPTED_DELIVERY", timestamp: "2026-06-17T12:00:00+10:00" },
      { status: "DELIVERED_TO_DESTINATION", timestamp: "2026-06-17T13:00:00+10:00" },
    ],
  },
};

export const DEFAULT_TRACKING_NUMBER = "PPGO-PP2PP-001";

export function toTrackingSlug(trackingNumber: string): string {
  return trackingNumber.trim().toLowerCase();
}

export function toTrackingPath(trackingNumber: string): string {
  return `/track/${toTrackingSlug(trackingNumber)}`;
}

export function getParcelByTrackingNumber(trackingNumber: string): ParcelTracking | null {
  const normalized = trackingNumber.trim().toUpperCase();
  return DUMMY_PARCELS[normalized] ?? null;
}

export const DEMO_TRACKING_NUMBERS = Object.keys(DUMMY_PARCELS);

export type RecentShipment = {
  slug: string;
  trackingNumber: string;
  statusLabel: string;
  routeLabel: string;
  flowLabel: string;
  origin: string;
  destination: string;
};

export const RECENT_SHIPMENTS: RecentShipment[] = DEMO_TRACKING_NUMBERS.map((trackingNumber) => {
  const parcel = DUMMY_PARCELS[trackingNumber];
  const status = getCurrentCustomerStatus(parcel);

  return {
    slug: toTrackingSlug(trackingNumber),
    trackingNumber,
    statusLabel: STATUS_LABELS[status.status],
    routeLabel: ROUTE_LABELS[getRouteCategory(parcel.flowType)],
    flowLabel: FLOW_LABELS[parcel.flowType],
    origin: parcel.origin,
    destination: parcel.destination,
  };
});
