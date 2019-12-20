import React, { Fragment } from 'react';
import Section from '../Section/Section';
import Item from './Item/Item';


const RightPanel = () => {
  return (
    <Fragment>
      <Section hideHeadingMobile={true} heading='Professional Summary'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra
          diam sit amet nisl suscipit adipiscing. Neque gravida in fermentum et
          sollicitudin. Etiam dignissim diam quis enim lobortis. Lorem ipsum
          dolor sit amet consectetur adipiscing elit ut aliquam. Dictum fusce ut
          placerat orci nulla pellentesque dignissim enim sit. Est velit egestas
          dui id ornare arcu. Eros donec ac odio tempor. Maecenas ultricies mi
          eget mauris pharetra et ultrices. Mattis rhoncus urna neque viverra.
        </p>
      </Section>
      <Section heading='Work Experience'>
        <Item heading="Software Engineer I" company="Navient" location="Fishers, IN" workingTime="Full Time" date="Dec 16, 2017 - Current"  />
        <Item heading="Intern - Software Engineer" company="Navient" location="Fishers, IN" workingTime="Full Time" date="Jun 4, 2015 - Dec 15, 2017"  />
      </Section>
      <Section heading='Education'>
        <Item heading="BS Computer Science" location="Indianapolis, IN" education="IUPUI" date="Dec 16, 2014 - Dec 17, 2017"  />
        <Item heading="Minor in Mathmatics" location="Indianapolis, IN" education="IUPUI"  date="Dec 16, 2014 - Dec 17, 2017"  />
      </Section>
    </Fragment>
  );
};

export default RightPanel;
