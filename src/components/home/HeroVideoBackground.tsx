"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { useReducedMotion } from "framer-motion";

const DEFAULT_MP4 = "/videos/hero.mp4";

type Props = {
  poster: StaticImageData;
  mp4Src?: string;
  webmSrc?: string;
};

export default function HeroVideoBackground({
  poster,
  mp4Src,
  webmSrc,
}: Props) {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useVideo, setUseVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  const mp4 =
    mp4Src ?? process.env.NEXT_PUBLIC_HERO_VIDEO_MP4 ?? DEFAULT_MP4;
  const webm = webmSrc ?? process.env.NEXT_PUBLIC_HERO_VIDEO_WEBM;

  useEffect(() => {
    if (reduceMotion) {
      setUseVideo(false);
      return;
    }

    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    if (connection?.saveData) {
      setUseVideo(false);
      return;
    }

    setUseVideo(true);
  }, [reduceMotion]);

  useEffect(() => {
    if (!useVideo) return;
    const video = videoRef.current;
    if (!video) return;

    const onReady = () => {
      setVideoReady(true);
      void video.play().catch(() => {
        setVideoReady(false);
      });
    };

    const onError = () => {
      setUseVideo(false);
      setVideoReady(false);
    };

    video.addEventListener("loadeddata", onReady);
    video.addEventListener("canplay", onReady);
    video.addEventListener("error", onError);
    if (video.readyState >= 2) onReady();

    return () => {
      video.removeEventListener("loadeddata", onReady);
      video.removeEventListener("canplay", onReady);
      video.removeEventListener("error", onError);
      video.pause();
    };
  }, [useVideo, mp4, webm]);

  return (
    <div className="absolute inset-0 z-0" aria-hidden>
      <Image
        src={poster}
        alt=""
        fill
        priority
        className={`object-cover transition-opacity duration-1000 ${
          videoReady ? "opacity-0" : "opacity-100"
        }`}
        sizes="100vw"
      />

      {useVideo && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1.4s] ease-out ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          poster={poster.src}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
        >
          <source src={mp4} type="video/mp4" />
          {webm ? <source src={webm} type="video/webm" /> : null}
        </video>
      )}

      <div className="hero-video-scrim" />
      <div className="hero-video-vignette" />
    </div>
  );
}
