import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

describe('<Container/>', () => {
  it('renders container component', () => {
    const props = {
      children: '<span/>'
    };
    const wrapper = shallow(<Container {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
