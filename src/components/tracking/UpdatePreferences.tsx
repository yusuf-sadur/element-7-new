"use client";

import { useState } from "react";
import { Bell, Mail } from "lucide-react";

export default function UpdatePreferences() {
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [smsUpdates, setSmsUpdates] = useState(false);

  return (
    <section
      className="rounded-2xl border border-neutral-200/80 bg-white p-5 shadow-[0_4px_20px_rgba(15,23,42,0.04)]"
      aria-labelledby="update-preferences-heading"
    >
      <h2 id="update-preferences-heading" className="text-sm font-semibold text-neutral-900">
        Update preferences
      </h2>
      <p className="mt-1 text-xs text-neutral-500">How you&apos;d like to be notified</p>

      <div className="mt-4 space-y-2.5">
        <label className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-neutral-100 bg-neutral-50/80 px-3.5 py-3 transition-colors hover:bg-neutral-50">
          <span className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <Mail size={16} />
            </span>
            <span>
              <span className="block text-sm font-medium text-neutral-900">Email</span>
              <span className="block text-[11px] text-neutral-500">Status &amp; delivery alerts</span>
            </span>
          </span>
          <input
            type="checkbox"
            checked={emailUpdates}
            onChange={(e) => setEmailUpdates(e.target.checked)}
            className="h-4 w-4 rounded border-neutral-300 text-blue-600 focus:ring-blue-500"
          />
        </label>

        <label className="flex cursor-pointer items-center justify-between gap-3 rounded-xl border border-neutral-100 bg-neutral-50/80 px-3.5 py-3 transition-colors hover:bg-neutral-50">
          <span className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
              <Bell size={16} />
            </span>
            <span>
              <span className="block text-sm font-medium text-neutral-900">SMS</span>
              <span className="block text-[11px] text-neutral-500">Key milestones only</span>
            </span>
          </span>
          <input
            type="checkbox"
            checked={smsUpdates}
            onChange={(e) => setSmsUpdates(e.target.checked)}
            className="h-4 w-4 rounded border-neutral-300 text-blue-600 focus:ring-blue-500"
          />
        </label>
      </div>
    </section>
  );
}
