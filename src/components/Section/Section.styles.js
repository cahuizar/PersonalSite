import styled from '@emotion/styled'
import { css } from '@emotion/core';

const hideHeading = css`
  @media (max-width: 576px) {
    margin-top: 3em;
    margin-bottom: 6em;
    h2 {
      display: none;
      margin-top: 3em;
    }
  }
`;

const SectionSyles = styled.div`
  margin-bottom: 4rem;
  h2 {
    margin-top: 0rem;
    margin-bottom: 1.5rem;
  }
  ${props => props.hideHeadingMobile ? hideHeading : undefined}
`;



export default SectionSyles;
