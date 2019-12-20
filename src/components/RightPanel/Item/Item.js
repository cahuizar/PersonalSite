/** @jsx jsx */
import { jsx } from '@emotion/core';
import itemStyles from './Item.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMapMarkerAlt, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faBuilding , faCalendarAlt} from '@fortawesome/free-regular-svg-icons';


const Item = ({ heading, workingTime, company, location, date, education }) => {
  const educationCol = education && <div className="education"><FontAwesomeIcon className='icon' icon={faGraduationCap} />{education}</div>;
  const companyCol = company && <div><FontAwesomeIcon className='icon' icon={faBuilding} />{company}</div>;
  const locationCol = location && <div><FontAwesomeIcon className='icon' icon={faMapMarkerAlt} />{location}</div>;
  const workingTimeCol = workingTime && (
    <div className='working-time'>{workingTime}</div>
  );
  return (
    <div css={itemStyles}>
      <div className='flex-row first-row'>
        <div className='section-heading'>{heading}</div>
        {workingTimeCol}
        {educationCol}
      </div>
      <div className='flex-row second-row'>
        <div className='flex-row place-block'>
          {companyCol}
          {locationCol}
        </div>
        <div className='date-block'><FontAwesomeIcon className='icon' icon={faCalendarAlt} />{date}</div>
      </div>
    </div>
  );
};

export default Item;
