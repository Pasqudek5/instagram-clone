import { css } from 'styled-components';
import styles from './base';
import Light from './light';
import Dark from './dark';

export { Dark, Light };

const mq = Object.keys(styles.breakpoint).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${styles.breakpoint[label]}) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default {
  mq,
  ...styles,
  colors: { ...Dark },
};
