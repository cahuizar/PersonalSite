import { css } from '@emotion/core';

const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-size: 1rem;
    color: #334680;
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
  }

  #root {
    padding-top: 4rem;
    background-color: #f5f6f9;
    @media (min-width: 576px) {
      background-color: white;
    }
  }

  .primary {
    color: #334680;
  }
  .secondary {
    color: #c5c9d7;
  }

  a {
    color: #334680;
    text-decoration: none;
    &:hover,
    &:active,
    &:focus {
      color: #538fff;
    }
  }
`;

export default globalStyles;
