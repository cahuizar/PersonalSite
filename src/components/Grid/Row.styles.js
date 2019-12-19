import { css } from '@emotion/core';

const rowStyles = props => css`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  justify-content: ${props.justify ? props.justify : undefined};
`;

export default rowStyles;
