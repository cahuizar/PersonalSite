import { css } from '@emotion/core';

const sectionStyles = css`
  border-radius: 10px;
  border: 1px solid #ececff;
  padding: 10px;
  display: flex;
  justify-content: space-between;

  .section-heading {
    font-size: 1.04rem;
  }
  .bottom-row {
    color: #b2b5bf;
  }

  .working-time {
    padding: 5px 10px;
    background-color: #d7ffe0;
    border-radius: 10px;
  }

  @media (min-width: 576px) {
    padding: 0px;
    border-radius: 0px;
    border-bottom: 1px solid #ececff;
  }
`;

export default sectionStyles;
