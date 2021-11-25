import { easing } from "../animation/settings";
export const initialLeft = {
  x: -60,
  opacity: 0,
};
export const initialRight = {
  x: 60,
  opacity: 0,
};
export const final = {
  x: 0,
  opacity: 1,
};
export const initialDown = {
  y: 60,
  opacity: 0,
};
export const finalUp = {
  y: 0,
  opacity: 1,
};

export const fadeInUp = {
  hidden: {
    scale: 0,
    y: -60,
    opacity: 0,
  },
  show: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: easing,
    },
  },
};

export const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.7,
    },
  },
};
