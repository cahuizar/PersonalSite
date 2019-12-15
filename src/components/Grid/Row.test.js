import React from 'react';
import { shallow, mount } from 'enzyme';
import { matchers } from 'jest-emotion';

import Row from './Row';

expect.extend(matchers);

describe('<Row/>', () => {
  it('renders row component', () => {
    const props = {
      children: '<span/>'
    };
    const wrapper = shallow(<Row {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('given justify value prop of center then justify-content css property is center', () => {
    const props = {
      children: '<span/>',
      justify: 'center'
    };
    const wrapper = mount(<Row {...props} />);
    expect(wrapper.prop('justify')).toEqual('center');
    expect(wrapper).toHaveStyleRule('justify-content', 'center');
  });

  it('given justify value prop where the value is an invalid property then the row should not have the property of justify-content', () => {
    const props = {
      children: '<span/>',
      justify: 'invalidValueProvided'
    };
    const wrapper = mount(<Row {...props} />);
    expect(wrapper.prop('justify')).toEqual('invalidValueProvided');
    expect(wrapper).not.toHaveStyleRule('justify-content');
  });
});
