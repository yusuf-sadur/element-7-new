import type { Metadata } from "next";

import TrackIndexPage from "@/components/tracking/TrackIndexPage";

export const metadata: Metadata = {
  title: "Track Parcel | PP Go",
  description: "Track your PP Go parcel with a single, consistent status view.",
};

export default function TrackIndexRoute() {
  return <TrackIndexPage />;
}
