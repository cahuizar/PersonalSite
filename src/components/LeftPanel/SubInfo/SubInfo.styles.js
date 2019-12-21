import { css } from '@emotion/core';

const subInfoStyles = css`
  display: flex;
  justify-content: center;
  margin: 2rem auto;
  .social {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 1rem;
    a {
      color: #b2b5bf;
      &:hover,
      &:active,
      &:focus {
        color: #538fff;
      }
    }
    .icon {
      font-size: 1.7rem;
      vertical-align: text-top;
    }
  }
`;

export default subInfoStyles;
