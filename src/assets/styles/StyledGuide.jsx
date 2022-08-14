import BREAKPOINTS from '../../shared/constants/breakpoints';

// export const theme = {
//   h1: {
//     fontSizeLg: '64px',
//     fontSizeMd: '54px',
//     fontSizeSm: '44px',

//     fontWeight: '800',
//     fontLineHeight: '131%',
//     fontSpacing: '-0.03em',
//   },
//   h2: {
//     fontSizeLg: '58px',
//     fontSizeMd: '48px',
//     fontSizeSm: '38px',

//     fontWeight: '800',
//     fontLineHeight: '131%',
//     fontSpacing: '-0.03em',
//   },
//   h3: {
//     fontSizeLg: '48px',
//     fontSizeMd: '38px',
//     fontSizeSm: '28px',

//     fontWeight: '700',
//     fontLineHeight: '140%',
//     fontSpacing: '-0.03em',
//   },
//   h4: {
//     fontSizeLg: '40px',
//     fontSizeMd: '30px',
//     fontSizeSm: '20px',

//     fontWeight: '700',
//     fontLineHeight: '140%',
//     fontSpacing: '-0.03em',
//   },
//   h5: {
//     fontSizeLg: '32px',
//     fontSizeMd: '24px',
//     fontSizeSm: '16px',

//     fontWeight: '700',
//     fontLineHeight: '150%',
//     fontSpacing: '-0.03em',
//   },
//   h6: {
//     fontSizeLg: '20px',
//     fontSizeMd: '15px',
//     fontSizeSm: '10px',

//     fontWeight: '600',
//     fontLineHeight: '150%',
//     fontSpacing: '-0.03em',
//   },
//   caption: {
//     fontSizeLg: '16px',
//     fontSizeMd: '14px',
//     fontSizeSm: '12px',

//     fontWeight: '500',
//     fontLineHeight: '150%',
//     fontOpacity: '0.6',
//   },
//   body1: {
//     fontSizeLg: '20px',
//     fontSizeMd: '15px',
//     fontSizeSm: '10px',

//     fontWeight: '600',
//     fontLineHeight: '175%',
//     fontOpacity: '0.6',
//   },
//   body2: {
//     fontSizeLg: '16px',
//     fontSizeMd: '14px',
//     fontSizeSm: '12px',

//     fontWeight: '600',
//     fontLineHeight: '175%',
//     fontOpacity: '0.6',
//   },
//   title1: {
//     fontSizeLg: '32px',
//     fontSizeMd: '26px',
//     fontSizeSm: '20px',

//     fontWeight: '700',
//     fontLineHeight: '150%',
//     fontSpacing: '-0.03em',
//   },
//   title2: {
//     fontSizeLg: '24px',
//     fontSizeMd: '20px',
//     fontSizeSm: '16px',

//     fontWeight: '600',
//     fontLineHeight: '150%',
//     fontSpacing: '-0.03em',
//   },
//   color: {
//     darkBlack: '#000000',
//     black: '#1E1B1B',
//     orange: '#FF6433',
//     purple: '#661CE7',
//     green: '#00D289',
//     darkGrey: '#939191',
//     grey: '#E2E6E9',
//     lightGrey: '#F2F2F2',
//     white: '#ffffff',
//   },
//   test: `
//     font-size: 100px;
//     line-height: 500px;
//   `,
// };

export const theme = {
  h1: `
  font-size: 44px;
  font-weight: 800;
  line-height: 131%;
  letter-spacing: -0.03em;
  
  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 54px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: 64px;
  }`,

  h2: `
  font-size: 38px;
  font-weight: 800;
  line-height: 131%;
  letter-spacing: -0.03em;
  
  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 48px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: 58px;
  }`,

  h3: `
  font-size: 28px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.03em;
  
  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 38px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: 48px;
  }`,

  h4: `
  font-size: 20px;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: -0.03em;
  
  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 30px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: 40px;
  }`,

  h5: `
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.03em;
  
  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 24px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: 32px;
  }`,

  h6: `
  font-size: 10px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.03em;
  
  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 15px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: 20px;
  }`,

  caption: `
  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
  
  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: 16px;
  }`,

  body1: `
  font-size: 14px;
  font-weight: 600;
  line-height: 175%;
  
  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 16px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: 18px;
  }`,

  body2: `
  font-size: 12px;
  font-weight: 600;
  line-height: 175%;
  
  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: 16px;
  }`,

  title1: `
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.03em;
  
  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 26px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: 32px;
  }`,

  title2: `
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.03em;
  
  @media screen and (min-width: ${BREAKPOINTS.md}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${BREAKPOINTS.lg}) {
    font-size: 24px;
  }`,

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
    white: '#ffffff',
  },
};
