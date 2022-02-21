/** @jsx jsx */
import { jsx } from '@emotion/core';
import Profile from '../../../assets/images/profile.jpg';
import mainInfoStyles from './MainInfo.styles';

export const MainInfo = () => {
  return (
    <div css={mainInfoStyles}>
      <div className='img-block'>
        <img src={Profile} alt='Carlos Huizar' />
      </div>
      <h1>Carlos Huizar</h1>
      <div className='title'>Sr. Software Engineer</div>
    </div>
  );
};
