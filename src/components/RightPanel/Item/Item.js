/** @jsx jsx */
import { jsx } from '@emotion/core';
import itemStyles from './Item.styles';

const Item = ({
  heading,
  workingTime,
  company,
  location,
  date,
  education
}) => {
  const educationCol = education && <div>{education}</div>;
  const companyCol = company && <div>{company}</div>;
  const locationCol = location && <div>{location}</div>;
  const workingTimeCol = workingTime && (
    <div className='working-time'>{workingTime}</div>
  );
  return (
    <div css={itemStyles}>
      <div>
        <div className='section-heading'>{heading}</div>
        <div className='bottom-row'>
          {companyCol}
          {educationCol}
          {locationCol}
        </div>
      </div>
      <div>
        {workingTimeCol}
        <div>{date}</div>
      </div>
    </div>
  );
};

export default Item;