export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export const DURATION_REVEAL = 0.85;
export const DURATION_FAST = 0.45;
export const DURATION_SLOW = 1.1;

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.06,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION_REVEAL, ease: EASE_PREMIUM },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION_REVEAL, ease: EASE_PREMIUM },
  },
};

export const pageEnter = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -6 },
  transition: { duration: 0.5, ease: EASE_PREMIUM },
};
