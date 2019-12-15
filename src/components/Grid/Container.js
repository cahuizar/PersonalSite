/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';

import containerStyles from './Container.styles';

const Container = ({ children }) => {
  return <div css={containerStyles}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;
