/** @jsx jsx */
import { jsx } from '@emotion/core';
import infoItemStyles from './InfoItem.styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const InfoItem = ({ children, icon }) => {
  return (
    <div css={infoItemStyles}>
      <FontAwesomeIcon className='icon' icon={icon} />
      {children}
    </div>
  );
};
