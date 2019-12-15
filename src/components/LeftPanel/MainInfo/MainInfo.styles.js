import { css } from '@emotion/core';

const mainInfoStyles = css`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  .img-block {
    max-width: 140px;
    max-height: 140px;
    margin-bottom: 1.5em;
    @media (max-width: 576px) {
      margin-top: 1.5rem;
      order: 2;
    }
  }
  img {
    border-radius: 50%;
    width: 100%;
    height: auto;
  }
  h1 {
    margin: 0rem auto 0.7rem auto;
    @media (max-width: 576px) {
      order: 3;
    }
  }
  .title {
    font-size: 1.2rem;
    @media (max-width: 576px) {
      font-weight: bold;
      font-size: 2rem;
      order: 1;
    }
  }
`;

export default mainInfoStyles;
