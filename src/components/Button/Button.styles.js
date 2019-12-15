import { css } from '@emotion/core';

const buttonStyles = css`
  margin: auto;
  display: block;
  color: #ffffff;
  background-color: #367cff;
  border-radius: 10px;
  padding: 0.5em 1em;
  border: none;
  cursor: pointer;
  width: 10rem;
  &:hover,
  &:active,
  &:focus {
    background-color: #538fff;
  }

  @media (max-width: 576px) {
    width: 100%;
    margin-bottom: 3rem;
  }
`;

export default buttonStyles;
