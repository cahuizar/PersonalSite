/** @jsx jsx */
import { jsx } from '@emotion/core';
import subInfoStyles from './SubInfo.styles';
import { InfoItem } from './InfoItem';

import { faMapMarkerAlt, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faUserCircle } from '@fortawesome/free-regular-svg-icons';

export const SubInfo = () => {
  return (
    <div css={subInfoStyles}>
      <div>
        <InfoItem icon={faEnvelope}>
          <a href='mailto:hire@carloshuizar.com?subject=Hola'>
            hire@carloshuizar.com
          </a>
        </InfoItem>
        <InfoItem icon={faMapMarkerAlt}>Fishers, IN</InfoItem>
        <InfoItem icon={faBuilding}>Full Time</InfoItem>
        <InfoItem icon={faUserCircle}>Product Engineering</InfoItem>
      </div>
    </div>
  );
};
