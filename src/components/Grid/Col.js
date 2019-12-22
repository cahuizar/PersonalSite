/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import ColStyles from './Col.styles';

const Col = ({ children, sm, className }) => {
  return (
    <ColStyles sm={sm} className={className}>
      {children}
    </ColStyles>
  );
};

Col.propTypes = {
  children: PropTypes.node.isRequired
};

export default Col;
