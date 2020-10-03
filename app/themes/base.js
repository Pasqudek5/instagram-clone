const border = {
  radius: {
    large: '0.6rem',
    medium: '0.4rem',
    small: '0.2rem',
    rounded: '9000px',
    none: '0',
  },
  width: {
    default: '1px',
    inputOverlayUnfocused: '1px',
    marked: '3px',
    spinner: '2px',
    tag: ' 2px',
  },
};

const breakpoint = {
  lg: '1200px',
  md: '1024px',
  sm: '768px',
  xl: '1440px',
  xs: '480px',
  xxl: '1600px',
};

const font = {
  base: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  display: '"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;',
  mono: 'monospace',
  size: {
    base: '1.3rem',
    1: '5.4rem',
    2: '3.6rem',
    3: '2.4rem',
    4: '1.8rem',
    5: '1.4rem',
    6: '1.3rem',
    7: '1.2rem',
    8: '1.2rem',
  },
  weight: {
    bold: 700,
    hdr: 400,
    normal: 400,
    semibold: 600,
  },
  line: {
    height: {
      body: 1.5,
      heading: 1.2,
    },
  },
};

const space = {
  0: '0',
  '05': '0.5rem',
  1: '1rem',
  2: '2rem',
  3: '3rem',
  4: '4rem',
  5: '5rem',
  6: '6rem',
  7: '7rem',
  8: '8rem',
  9: '9rem',
  10: '10rem',
  auto: 'auto',
};

const grid = {
  columns: 12,
  gutter: {
    width: {
      default: '1.5rem',
      lg: '2rem',
      sm: '1rem',
      xs: '0.5rem',
    },
  },
};

const zIndex = {
  above: 10,
  balloon: 2000,
  below: -1,
  default: 1,
  modal: 5000,
  notification: 4000,
  overlay: 3000,
  sticky: 1000,
};

const timing = {
  long: '300ms',
  medium: '250ms',
  short: '100ms',
};

const opacity = {
  1: 0.05,
  10: 0.7,
  11: 0.75,
  12: 0.8,
  13: 0.85,
  14: 0.9,
  15: 0.95,
  2: 0.1,
  3: 0.15,
  4: 0.2,
  5: 0.25,
  6: 0.3,
  7: 0.4,
  8: 0.5,
  9: 0.6,
};

export const component = {
  size: {
    default: '3rem',
    large: '3.6rem',
    small: '2.4rem',
  },
  text: {
    default: '1.3rem',
    large: '1.4rem',
    small: '1.2rem',
  },
};

export default {
  opacity,
  timing,
  zIndex,
  grid,
  space,
  font,
  border,
  breakpoint,
  component,
};
