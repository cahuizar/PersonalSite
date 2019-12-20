import { css } from '@emotion/core';

const itemStyles = css`
  border-radius: 10px;
  border: 1px solid #ececff;
  padding: 10px;

  &:not(:first-of-type) {
    margin-top: 2.5em;
    @media (min-width: 576px) {
      margin-top: 1.5em;
    }
  }

  .flex-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      color: #b2b5bf;
      margin-right: 8px;
      vertical-align: text-top;
    }
  }
  .first-row {
    margin-bottom: 1em;
    .section-heading {
      font-size: 1.2rem;
    }
    .working-time {
      padding: 5px 10px;
      background-color: #d7ffe0;
      border-radius: 10px;
      white-space: nowrap;
    }
    .education {
      color: #b2b5bf;
      font-size: 0.8rem;
      font-weight: bold;
    }
  }

  .second-row {
    margin-bottom: 1em;
    color: #b2b5bf;
    font-size: 0.8rem;
    font-weight: bold;
    .place-block {
      min-width: 50%;
      @media (max-width: 576px) {
        order: 2;
        margin-top: 1em;
      }
    }
    @media (max-width: 576px) {
      flex-direction: column;
      align-items: initial;
    }
  }

  @media (min-width: 576px) {
    padding: 0px;
    padding-bottom: 1.5em;
    border: 0px;
    border-radius: 0px;
    border-bottom: 1px solid #ececff;
  }
`;

export default itemStyles;
