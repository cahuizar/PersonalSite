import React, { Fragment } from 'react';
import Section from '../Section/Section';
import Item from './Item/Item';

const RightPanel = () => {
  return (
    <Fragment>
      <Section hideHeadingMobile={true} heading='Professional Summary'>
        <p>
            Front-End Engineer (tech lead, architect) with 6 years of proven leadership experience and meaningful
            contributions to teams of varying sizes working with Vue and React and integration with back-end APIs.
        </p>
      </Section>
      <Section heading='Work Experience'>
         <Item
          heading='Senior Software Engineer'
          company='Navient'
          location='Fishers, IN'
          workingTime='Full Time'
          date='Sept 3, 2020 - Current'
          />
        <Item
          heading='Software Engineer II'
          company='Navient'
          location='Fishers, IN'
          workingTime='Full Time'
          date='Mar 23, 2020 - Sept 3, 2020'
        />
        <Item
          heading='Software Engineer I'
          company='Navient'
          location='Fishers, IN'
          workingTime='Full Time'
          date='Dec 16, 2017 - Mar 22, 2020'
        />
        <Item
          heading='Software Engineer (Intern)'
          company='Navient'
          location='Fishers, IN'
          workingTime='Full Time'
          date='Jun 4, 2016 - Dec 15, 2017'
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
          heading='Minor in Mathematics'
          location='Indianapolis, IN'
          education='IUPUI'
          date='Dec 16, 2014 - Dec 17, 2017'
        />
      </Section>
    </Fragment>
  );
};

export default RightPanel;
