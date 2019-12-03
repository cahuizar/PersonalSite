import { css } from '@emotion/core';

const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  /* @font-face {
    font-family: 'PublicaSans';
    font-style: normal;
    font-weight: 400;
    src: url('./assets/fonts/publicasans/PublicaSans-Medium.otf')
      format('opentype');
  } */

  body {
    font-family: 'PublicaSans' sans-serif;
    font-size: 1rem;
    color: #080f19;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }
`;

export default globalStyles;
