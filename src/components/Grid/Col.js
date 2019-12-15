/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import { xsFullStyles, smHalfStyles } from './Col.styles';

const Col = ({ children, xsFull, smHalf, className }) => {
  return (
    <div
      css={[xsFull && xsFullStyles, smHalf && smHalfStyles]}
      className={className}
    >
      {children}
    </div>
  );
};

Col.propTypes = {
  children: PropTypes.node.isRequired
};

export default Col;
