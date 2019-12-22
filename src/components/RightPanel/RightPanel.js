import React, { Fragment } from 'react';
import Section from '../Section/Section';
import Item from './Item/Item';

const RightPanel = () => {
  return (
    <Fragment>
      <Section hideHeadingMobile={true} heading='Professional Summary'>
        <p>
          Software Development is my passion. I am always looking for new
          challenges, as well as looking to learn something new. Thinking
          outside of the box is what I do best when it comes to working on
          projects. I tend go beyond the expectations and attempt to improve it.
          I'm always looking out for any opportunities and am not afraid of
          taking risks for making things better. I have a high regards for team
          building and I work exceptionally well across all key functional
          areas. Some of which are web development and customer service.
        </p>
      </Section>
      <Section heading='Work Experience'>
        <Item
          heading='Software Engineer'
          company='Navient'
          location='Fishers, IN'
          workingTime='Full Time'
          date='Dec 16, 2017 - Current'
        />
        <Item
          heading='Intern - Software Engineer'
          company='Navient'
          location='Fishers, IN'
          workingTime='Full Time'
          date='Jun 4, 2015 - Dec 15, 2017'
        />
      </Section>
      <Section heading='Education'>
        <Item
          heading='BS Computer Science'
          location='Indianapolis, IN'
          education='IUPUI'
          date='Dec 16, 2014 - Dec 17, 2017'
        />
        <Item
          heading='Minor in Mathmatics'
          location='Indianapolis, IN'
          education='IUPUI'
          date='Dec 16, 2014 - Dec 17, 2017'
        />
      </Section>
    </Fragment>
  );
};

export default RightPanel;
