import React from 'react';
import SectionSyles from './Section.styles';

const Section = ({ heading, children, hideHeadingMobile }) => {
  return (
    <SectionSyles hideHeadingMobile={hideHeadingMobile}>
      <h2>{heading}</h2>
      {children}
    </SectionSyles>
  );
};

Section.defaultProps = {
  hideHeadingMobile: false
};

export default Section;
