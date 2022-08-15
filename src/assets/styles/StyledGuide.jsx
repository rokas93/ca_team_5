import BREAKPOINTS from '../../shared/constants/breakpoints';
import { css } from 'styled-components';

export const theme = {
  h1: css`
    font-size: 44px;
    font-weight: 800;
    line-height: 131%;
    letter-spacing: -0.03em;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      font-size: 54px;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      font-size: 64px;
    }
  `,

  h2: css`
    font-size: 38px;
    font-weight: 800;
    line-height: 131%;
    letter-spacing: -0.03em;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      font-size: 48px;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      font-size: 58px;
    }
  `,

  h3: css`
    font-size: 28px;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.03em;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      font-size: 38px;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      font-size: 48px;
    }
  `,

  h4: css`
    font-size: 20px;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: -0.03em;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      font-size: 30px;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      font-size: 40px;
    }
  `,

  h5: css`
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.03em;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      font-size: 24px;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      font-size: 32px;
    }
  `,

  h6: css`
    font-size: 10px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.03em;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      font-size: 15px;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      font-size: 20px;
    }
  `,

  caption: css`
    font-size: 12px;
    font-weight: 500;
    line-height: 150%;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      font-size: 14px;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      font-size: 16px;
    }
  `,

  body1: css`
    font-size: 14px;
    font-weight: 600;
    line-height: 175%;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      font-size: 16px;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      font-size: 18px;
    }
  `,

  body2: css`
    font-size: 12px;
    font-weight: 600;
    line-height: 175%;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      font-size: 14px;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      font-size: 16px;
    }
  `,

  title1: css`
    font-size: 20px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.03em;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      font-size: 26px;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      font-size: 32px;
    }
  `,

  title2: css`
    font-size: 16px;
    font-weight: 600;
    line-height: 150%;
    letter-spacing: -0.03em;

    @media screen and (min-width: ${BREAKPOINTS.md}) {
      font-size: 20px;
    }

    @media screen and (min-width: ${BREAKPOINTS.lg}) {
      font-size: 24px;
    }
  `,

  color: {
    darkBlack: '#000000',
    black: '#1E1B1B',
    darkBlue: '#232536',
    lightOrange: '#ffdace',
    orange: '#FF6433',
    purple: '#661CE7',
    yellow: '#ffb648',
    green: '#00D289',
    darkGreen: '#61C4A1',
    darkGrey: '#939191',
    grey: '#E2E6E9',
    lighterGrey: '#ebebeb',
    lightGrey: '#F2F2F2',
    lightGrey2: '#F5F5F5',
    white: '#ffffff',
  },
};
