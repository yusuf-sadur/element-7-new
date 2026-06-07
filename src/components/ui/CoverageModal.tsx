"use client";

import { useCallback, useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";

import { BRAND, SERVICE_AREA_REGIONS } from "@/lib/brand";
import { EASE_PREMIUM, staggerContainer, staggerItem } from "@/lib/motion";

type CoverageModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function CoverageModal({ open, onClose }: Readonly<CoverageModalProps>) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const reduceMotion = useReducedMotion();
  const suburbCount = SERVICE_AREA_REGIONS.reduce((total, { suburbs }) => total + suburbs.length, 0);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, handleKeyDown]);

  if (typeof document === "undefined") return null;

  const backdropMotion = reduceMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.3, ease: EASE_PREMIUM },
      };

  const panelMotion = reduceMotion
    ? { initial: false, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0 } }
    : {
        initial: { opacity: 0, y: 28, scale: 0.96 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 20, scale: 0.98 },
        transition: { duration: 0.45, ease: EASE_PREMIUM },
      };

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          key="coverage-modal-backdrop"
          className="coverage-modal"
          onClick={onClose}
          {...backdropMotion}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="coverage-modal__panel"
            onClick={(event) => event.stopPropagation()}
            {...panelMotion}
          >
            <button
              ref={closeRef}
              type="button"
              className="coverage-modal__close"
              onClick={onClose}
              aria-label="Close coverage"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            <header className="coverage-modal__header">
              <p className="section-label !mb-2 !text-ink-faint">Coverage</p>
              <h2 id={titleId} className="coverage-modal__title">
                {BRAND.serviceAreasHeadline}
              </h2>
              <p className="coverage-modal__subline">{BRAND.serviceAreasSubline}</p>
              <p className="coverage-modal__meta">
                {SERVICE_AREA_REGIONS.length} regions · {suburbCount} suburbs · {BRAND.coverage}
              </p>
            </header>

            <motion.ul
              className="coverage-modal__grid"
              initial="hidden"
              animate="visible"
              variants={reduceMotion ? undefined : staggerContainer}
            >
              {SERVICE_AREA_REGIONS.map(({ region, suburbs }, index) => (
                <motion.li
                  key={region}
                  className="coverage-modal__region"
                  variants={reduceMotion ? undefined : staggerItem}
                >
                  <span className="coverage-modal__index" aria-hidden>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="coverage-modal__region-name">{region}</h3>
                    <p className="coverage-modal__suburbs">{suburbs.join(" · ")}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ul>

            <p className="coverage-modal__note">{BRAND.serviceAreasNote}</p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
