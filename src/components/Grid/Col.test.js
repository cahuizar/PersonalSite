import React from 'react';
import { shallow, mount } from 'enzyme';
import { matchers } from 'jest-emotion';
import Col from './Col';

expect.extend(matchers);

describe('<Col/>', () => {
  it('renders col component', () => {
    const props = {
      children: '<span/>'
    };
    const wrapper = shallow(<Col {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('given xsFull prop when window size is desktop view then col should take the full width', () => {
    const props = {
      children: '<span/>',
      xsFull: true
    };
    const wrapper = mount(<Col {...props} />);
    expect(wrapper.prop('xsFull')).toEqual(true);
    expect(wrapper).toHaveStyleRule('flex', '0 0 100%');
  });

  it('given smHalf prop when window size is desktop view then col should take half the width', () => {
    const props = {
      children: '<span/>',
      smHalf: true
    };
    const wrapper = mount(<Col {...props} />);
    expect(wrapper.prop('smHalf')).toEqual(true);
    expect(wrapper).toHaveStyleRule('flex', '0 0 50%', {
      media: 'min-width: 576px'
    });
  });

  it('given smHalf prop when window size is desktop view then col should take full width', () => {
    const props = {
      children: '<span/>',
      smHalf: true
    };
    const wrapper = mount(<Col {...props} />);
    expect(wrapper.prop('smHalf')).toEqual(true);
    expect(wrapper).toHaveStyleRule('width', '100%');
  });

  it('given smHalf and xsFull props when window size is desktop view then col should take full width', () => {
    const props = {
      children: '<span/>',
      smHalf: true,
      xsFull: true
    };
    const wrapper = mount(<Col {...props} />);
    expect(wrapper.prop('smHalf')).toEqual(true);
    expect(wrapper.prop('xsFull')).toEqual(true);
    expect(wrapper).toHaveStyleRule('flex', '0 0 100%');
  });

  it('given smHalf and xsFull props when window size is desktop view then col should take half width', () => {
    const props = {
      children: '<span/>',
      smHalf: true,
      xsFull: true
    };
    const wrapper = mount(<Col {...props} />);
    expect(wrapper.prop('smHalf')).toEqual(true);
    expect(wrapper.prop('xsFull')).toEqual(true);
    expect(wrapper).toHaveStyleRule('flex', '0 0 50%', {
      media: 'min-width: 576px'
    });
  });
});
