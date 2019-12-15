/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import rowStyles from './Row.styles';

const justifyValues = [
  'baseline',
  'center',
  'end',
  'flex-emd',
  'flex-start',
  'inherit',
  'initial',
  'left',
  'normal',
  'right',
  'safe',
  'space-around',
  'space-between',
  'space-evenly',
  'start',
  'stretch',
  'unsafe',
  'unset'
];

const Row = ({ children, justify }) => {
  justify = justify && justifyValues.find(val => val === justify);
  return (
    <div css={rowStyles} justify={justify}>
      {children}
    </div>
  );
};

Row.propTypes = {
  children: PropTypes.node.isRequired,
  justify: PropTypes.oneOf(justifyValues)
};

export default Row;
