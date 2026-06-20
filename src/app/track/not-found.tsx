import Link from "next/link";
import { Package } from "lucide-react";

import TrackChrome from "@/components/tracking/TrackChrome";

export default function TrackNotFound() {
  return (
    <>
      <TrackChrome />
      <div className="ppgo-track flex min-h-screen items-center justify-center bg-[#f4f6f8] px-4">
        <div className="max-w-md rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-sm">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-500">
            <Package size={22} />
          </span>
          <h1 className="mt-4 text-xl font-bold text-neutral-900">Shipment not found</h1>
          <p className="mt-2 text-sm text-neutral-600">
            We couldn&apos;t find a parcel with that tracking number. Check the number and try
            again, or pick from recent shipments.
          </p>
          <Link
            href="/track"
            className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Back to tracking
          </Link>
        </div>
      </div>
    </>
  );
}
