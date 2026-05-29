"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import PageScrollShell, { SnapSection } from "@/components/scroll/PageScrollShell";
import Reveal from "@/components/ui/Reveal";

export default function ThankYouPage() {
  return (
    <PageScrollShell className="bg-cream">
      <SnapSection>
        <div className="flex min-h-[100svh] items-center justify-center px-4">
          <Reveal variant="up" className="max-w-lg text-center">
            <motion.div
              className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-sage/20 text-olive"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <CheckCircle size={32} strokeWidth={1.25} />
            </motion.div>

            <p className="section-label justify-center">Received</p>
            <h1 className="display-lg mt-4">
              We&apos;ll be in <span className="italic text-olive">touch.</span>
            </h1>
            <div className="divider-gold mx-auto" />
            <p className="mt-6 text-base font-light leading-relaxed text-ink-muted">
              Your enquiry is with our team. We&apos;ll respond within one business day to begin
              the conversation about your recovery space.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/" className="btn-primary" id="thankyou-home">
                Back to home
              </Link>
              <Link href="/projects" className="btn-ghost" id="thankyou-projects">
                View projects
                <ArrowRight size={16} />
              </Link>
            </div>

            <p className="mt-12 text-sm text-sand-faint">
              Urgent enquiry?{" "}
              <a href="tel:+611300000000" className="text-olive hover:underline">
                1300 000 000
              </a>
            </p>
          </Reveal>
        </div>
      </SnapSection>
    </PageScrollShell>
  );
}
