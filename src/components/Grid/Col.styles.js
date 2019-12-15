import { css } from '@emotion/core';

export const xsFullStyles = css`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 100%;
  max-width: 100%;
`;

export const smHalfStyles = css`
  @media (min-width: 576px) {
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    flex: 0 0 50%;
    max-width: 50%;
  }
`;
