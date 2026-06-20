"use client";

import { useEffect } from "react";

export default function TrackChrome() {
  useEffect(() => {
    document.body.classList.add("ppgo-track-page");
    return () => document.body.classList.remove("ppgo-track-page");
  }, []);

  return null;
}
