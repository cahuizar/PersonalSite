import React, { Fragment } from 'react';
import { MainInfo } from './MainInfo/MainInfo';
import { SubInfo } from './SubInfo/SubInfo';
import { Button } from '../Button/Button';

import Pdf from './../../assets/images/Carlos-Huizar-Resume.pdf';
const onClick = () => window.open(Pdf);
const LeftPanel = () => {
  return (
    <Fragment>
      <MainInfo />
      <SubInfo />
      <Button onClick={onClick} value='Download Resume' />
    </Fragment>
  );
};

export default LeftPanel;
