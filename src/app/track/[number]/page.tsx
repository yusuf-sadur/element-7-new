import type { Metadata } from "next";
import { notFound } from "next/navigation";

import TrackPageExperience from "@/components/tracking/TrackPageExperience";
import {
  DEMO_TRACKING_NUMBERS,
  getParcelByTrackingNumber,
  toTrackingSlug,
} from "@/lib/tracking/dummy-data";

type TrackParcelPageProps = {
  params: { number: string };
};

export const dynamicParams = true;

export function generateStaticParams() {
  return DEMO_TRACKING_NUMBERS.map((trackingNumber) => ({
    number: toTrackingSlug(trackingNumber),
  }));
}

export function generateMetadata({ params }: TrackParcelPageProps): Metadata {
  return {
    title: `Track ${params.number.toUpperCase()} | PP Go`,
    description: "Track your PP Go parcel status and delivery timeline.",
  };
}

export default function TrackParcelPage({ params }: TrackParcelPageProps) {
  const parcel = getParcelByTrackingNumber(params.number);

  if (!parcel) {
    notFound();
  }

  return <TrackPageExperience parcel={parcel} />;
}
