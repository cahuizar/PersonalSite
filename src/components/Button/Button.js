/** @jsx jsx */
import { jsx } from '@emotion/core';
import buttonStyles from './Button.styles';

export const Button = ({ value, onClick }) => {
  return (
    <input type='button' css={buttonStyles} onClick={onClick} value={value} />
  );
};
