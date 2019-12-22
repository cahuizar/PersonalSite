import { css } from '@emotion/core';
import styled from '@emotion/styled';

const col4 = css`
  @media (min-width: 576px) {
    flex: 0 0 33.3333333%;
    max-width: 33.3333333%;
  }
`;

const col6 = css`
  @media (min-width: 576px) {
    flex: 0 0 58.333333%;
    max-width: 58.333333%;
  }
`;

const ColStyles = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0 0 100%;
  max-width: 100%;
  ${props => {
    if (props.sm === '4') {
      return col4;
    } else if (props.sm === '6') {
      return col6;
    }
    return undefined;
  }}
`;

export default ColStyles;
