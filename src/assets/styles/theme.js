export const breakpoints = {
  huge: '1700',
  bigDesktop: '1440',
  desktop: '1150',
  bigTablet: '1020',
  tablet: '767',
  bigPhone: '400',
  phone: '320',
};

export const colors = {
  white: 'hsl(0, 0%, 100%)',
  black: 'hsl(0, 0%, 0%)',
  primary: 'hsl(0, 24%, 74%)',
  opacity: 'hsl(0, 24%, 74%, 75%)',
  borders: 'hsl(0, 100%, 95%)',
};

export const font = {
  size: {
    header: '4.8rem',
    maslow: '3rem',
    maslowSml: '1.4rem',
    paragraph: '1.8rem',
  },
  weight: {
    regular: 400,
    bold: 700,
  },
};

export const mqx = Object.keys(breakpoints).reduce((acc, breakpoint) => {
  acc[breakpoint] = `@media (max-width: ${breakpoints[breakpoint]}px)`;
  return acc;
}, {});

export const mqn = Object.keys(breakpoints).reduce((acc, breakpoint) => {
  acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;
  return acc;
}, {});

export const theme = {
  ...colors,
  mqx,
  mqn,
  font,
  layout: {
    searchBarHeight: '80px',
    mobileSidesPadding: '30px',
  },
  zIndex: {
    level1: '1000',
    level2: '2000',
    level3: '3000',
    level4: '4000',
    level5: '5000',
    level6: '6000',
    level7: '7000',
    level8: '8000',
    level9: '9000',
    level10: '10000',
  },
};
