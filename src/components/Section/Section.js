/** @jsx jsx */
import { jsx } from '@emotion/core';
import sectionSyles from './Section.styles';

const Section = ({ heading, children, hideHeadingMobile }) => {
  return (
    <div css={sectionSyles}>
      <h2>{heading}</h2>
      {children}
    </div>
  );
};

export default Section;
