/** @jsx jsx */
import { jsx } from '@emotion/core';
import leftPanelStyles from './LeftPanel.styles';
import { MainInfo } from './MainInfo/MainInfo';
import { SubInfo } from './SubInfo/SubInfo';
import { Button } from '../Button/Button';

import Pdf from './../../assets/images/Carlos-Huizar-Resume.pdf';
const onClick = () => window.open(Pdf);
const LeftPanel = () => {
  return (
    <div css={leftPanelStyles}>
      <MainInfo />
      <SubInfo />
      <Button onClick={onClick} value='Download Resume' />
    </div>
  );
};

export default LeftPanel;
