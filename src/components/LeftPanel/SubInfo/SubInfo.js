/** @jsx jsx */
import { jsx } from '@emotion/core';
import subInfoStyles from './SubInfo.styles';
import { InfoItem } from './InfoItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMapMarkerAlt, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
        <div className='social'>
          <div>
            <a
              href='https://github.com/cahuizar'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon className='icon' icon={faGithub} />
            </a>
          </div>
          <div>
            <a
              href='https://www.linkedin.com/in/carlos-huizar-271264117'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon className='icon' icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
