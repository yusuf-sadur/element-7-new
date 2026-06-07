"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowDown, Phone } from "lucide-react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

import PageScrollShell from "@/components/scroll/PageScrollShell";
import Reveal from "@/components/ui/Reveal";
import heroSaunaImg from "@/assets/hero-sauna.jpg";
import { BRAND } from "@/lib/brand";
import { EASE_PREMIUM } from "@/lib/motion";

const headlineLines = ["Thank", "you."] as const;

const nextSteps = [
  {
    num: "01",
    title: "Brief review",
    text: "Your enquiry is read by our studio team for scope and feasibility.",
  },
  {
    num: "02",
    title: "Discovery call",
    text: "We reach out within one business day to understand your property and vision.",
  },
  {
    num: "03",
    title: "Tailored direction",
    text: "Design intent, programme, and next steps — without pressure.",
  },
] as const;

const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: EASE_PREMIUM },
  },
};

const cardContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.55 },
  },
};

const cardItem = {
  hidden: { opacity: 0, x: 28, filter: "blur(6px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: EASE_PREMIUM },
  },
};

function TimelineSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const reduceMotion = useReducedMotion();

  return (
    <section ref={ref} className="thank-you-timeline" aria-labelledby="thank-you-next-heading">
      <div className="thank-you-timeline__ambient" aria-hidden />
      <div className="container-e7 relative section-padding !pb-24 md:!pb-32">
        <Reveal variant="blur" className="thank-you-timeline__header mx-auto max-w-2xl text-center">
          <p className="section-label justify-center">What happens next</p>
          <h2 id="thank-you-next-heading" className="display-lg text-balance">
            Your project begins with a{" "}
            <span className="text-bronze">conversation.</span>
          </h2>
          <div className="divider-gold mx-auto" />
        </Reveal>

        <div className="thank-you-timeline__track relative mt-14 md:mt-20">
          <motion.div
            className="thank-you-timeline__line"
            aria-hidden
            initial={reduceMotion ? false : { scaleX: 0 }}
            animate={reduceMotion || inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.4, ease: EASE_PREMIUM, delay: 0.15 }}
          />

          <ol className="thank-you-timeline__steps">
            {nextSteps.map((step, idx) => (
              <Reveal
                key={step.num}
                as="li"
                variant="up"
                delay={0.12 + idx * 0.1}
                className="thank-you-timeline__step"
              >
                <div className="thank-you-timeline__node" aria-hidden>
                  <motion.span
                    className="thank-you-timeline__node-dot"
                    initial={reduceMotion ? false : { scale: 0 }}
                    animate={reduceMotion || inView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: EASE_PREMIUM,
                      delay: 0.35 + idx * 0.18,
                    }}
                  />
                </div>
                <span className="thank-you-timeline__num">{step.num}</span>
                <h3 className="thank-you-timeline__title">{step.title}</h3>
                <p className="thank-you-timeline__text">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal variant="fade" delay={0.2} className="thank-you-timeline__footer">
          <p className="thank-you-timeline__urgent">
            Need to speak sooner?{" "}
            <a href={`tel:${BRAND.phoneTel}`} className="thank-you-timeline__phone">
              <Phone size={14} strokeWidth={1.5} aria-hidden />
              {BRAND.phone}
            </a>
          </p>
          <div className="thank-you-timeline__links">
            <Link href="/services" className="thank-you-timeline__link">
              Explore spaces
              <ArrowRight size={15} aria-hidden />
            </Link>
            <Link href="/our-approach" className="thank-you-timeline__link">
              Our approach
              <ArrowRight size={15} aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function ThankYouExperience() {
  const [ready, setReady] = useState(false);
  const reduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <PageScrollShell className="bg-cream" snap={false} smoothScroll={false}>
      <section
        ref={heroRef}
        className="thank-you-hero hero-home hero-home--editorial relative flex min-h-[100svh] flex-col overflow-hidden bg-ink"
        aria-label="Thank you — Element Seven"
      >
        <div className="hero-home__media absolute inset-0 z-0 overflow-hidden" aria-hidden>
          <motion.div
            className="absolute inset-0"
            style={reduceMotion ? undefined : { y: imageY }}
          >
            <motion.div
              className="absolute inset-0"
              initial={reduceMotion ? false : { scale: 1.1 }}
              animate={reduceMotion ? undefined : ready ? { scale: 1 } : { scale: 1.1 }}
              transition={{ duration: 2.4, ease: EASE_PREMIUM }}
            >
              <Image
                src={heroSaunaImg}
                alt=""
                fill
                priority
                className="object-cover object-[center_42%] md:object-[52%_center]"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
          <div className="hero-video-scrim hero-home-scrim absolute inset-0" />
          <div className="hero-home-readability hero-home-readability--editorial absolute inset-0" />
          <div className="hero-home-vignette absolute inset-0" />
        </div>

        <motion.div
          className="hero-content-stage hero-content-stage--left hero-content-stage--flush container-e7 relative z-10 grid w-full min-h-0 flex-1 grid-cols-1 items-end pb-8 pt-[4.75rem] max-md:px-3 md:items-center md:pb-14 md:pt-[5.25rem] lg:grid-cols-12 lg:gap-10"
          style={reduceMotion ? undefined : { opacity: contentOpacity }}
        >
          <motion.div
            className="hero-editorial hero-editorial--mobile-panel w-full lg:col-span-6 lg:max-w-[38rem]"
            variants={reduceMotion ? undefined : heroContainer}
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? undefined : ready ? "show" : "hidden"}
          >
            <div className="hero-editorial__glass" aria-hidden />
            <div className="hero-editorial__content">
              <motion.div variants={reduceMotion ? undefined : heroItem} className="thank-you-hero__badge">
                <motion.span
                  className="thank-you-hero__badge-line"
                  initial={reduceMotion ? false : { scaleX: 0 }}
                  animate={reduceMotion ? undefined : ready ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.9, ease: EASE_PREMIUM, delay: 0.35 }}
                  aria-hidden
                />
                <span>Enquiry confirmed</span>
              </motion.div>

              <motion.p variants={reduceMotion ? undefined : heroItem} className="hero-brand-mark">
                ELEMENT <span className="hero-brand-mark__accent">7</span>
              </motion.p>

              <motion.h1
                variants={reduceMotion ? undefined : heroContainer}
                className="hero-editorial__title hero-editorial__title--service mt-3"
              >
                {headlineLines.map((line) => (
                  <motion.span
                    key={line}
                    variants={reduceMotion ? undefined : heroItem}
                    className="hero-editorial__line"
                  >
                    {line}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p variants={reduceMotion ? undefined : heroItem} className="hero-editorial__lead mt-5">
                We&apos;ll be in touch within one business day to begin the conversation about your
                recovery space.
              </motion.p>

              <motion.div
                variants={reduceMotion ? undefined : heroItem}
                className="hero-editorial__actions"
              >
                <Link href="/" className="btn-accent hero-editorial__cta" id="thankyou-home">
                  Back to home
                </Link>
                <Link href="/projects" className="btn-ghost-light hero-editorial__link" id="thankyou-projects">
                  View projects
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.aside
            className="thank-you-hero__status mt-8 w-full lg:col-span-5 lg:col-start-8 lg:mt-0 lg:max-w-md lg:justify-self-end xl:col-span-5 xl:col-start-8"
            variants={reduceMotion ? undefined : cardContainer}
            initial={reduceMotion ? false : "hidden"}
            animate={reduceMotion ? undefined : ready ? "show" : "hidden"}
            aria-label="Enquiry status"
          >
            <motion.div variants={reduceMotion ? undefined : cardItem} className="thank-you-hero__status-card">
              <div className="thank-you-hero__status-top">
                <span className="thank-you-hero__status-indicator" aria-hidden>
                  <motion.span
                    className="thank-you-hero__status-ping"
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            scale: [1, 1.8],
                            opacity: [0.55, 0],
                          }
                    }
                    transition={{
                      duration: 2,
                      ease: "easeOut",
                      repeat: Infinity,
                      repeatDelay: 0.8,
                    }}
                  />
                </span>
                <p className="thank-you-hero__status-label">Enquiry received</p>
              </div>

              <motion.div variants={reduceMotion ? undefined : cardItem} className="thank-you-hero__status-row">
                <span className="thank-you-hero__status-key">Response window</span>
                <span className="thank-you-hero__status-value">Within 24 hours</span>
              </motion.div>

              <motion.div variants={reduceMotion ? undefined : cardItem} className="thank-you-hero__status-row">
                <span className="thank-you-hero__status-key">Studio</span>
                <span className="thank-you-hero__status-value">{BRAND.studio}</span>
              </motion.div>

              <motion.div variants={reduceMotion ? undefined : cardItem} className="thank-you-hero__status-row">
                <span className="thank-you-hero__status-key">Coverage</span>
                <span className="thank-you-hero__status-value">{BRAND.coverage}</span>
              </motion.div>

              <motion.p variants={reduceMotion ? undefined : cardItem} className="thank-you-hero__status-note">
                A confirmation has been sent to your inbox. Check spam if you don&apos;t see it shortly.
              </motion.p>
            </motion.div>
          </motion.aside>
        </motion.div>

        <motion.div
          className="thank-you-hero__scroll-hint"
          initial={reduceMotion ? false : { opacity: 0, y: -8 }}
          animate={reduceMotion ? undefined : ready ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
          transition={{ delay: 1.2, duration: 0.8, ease: EASE_PREMIUM }}
          aria-hidden
        >
          <span>What happens next</span>
          <ArrowDown size={14} strokeWidth={1.5} className="thank-you-hero__scroll-icon" />
        </motion.div>
      </section>

      <TimelineSection />
    </PageScrollShell>
  );
}
