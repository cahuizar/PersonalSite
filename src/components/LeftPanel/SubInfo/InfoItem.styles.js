import { css } from '@emotion/core';

const infoItemStyles = css`
  margin-top: 1em;
  padding-bottom: 1em;
  padding-left: 10px;
  padding-right: 10px;
  &:not(:last-of-type) {
    border-bottom: 1px solid #ececff;
  }
  .icon {
    color: #b2b5bf;
    margin-right: 8px;
    vertical-align: text-bottom;
  }
`;

export default infoItemStyles;
