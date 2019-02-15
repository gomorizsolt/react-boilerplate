import React from 'react';
import { shallow } from 'enzyme';
import Examples from './Examples';
import Hooks from './Hooks/Hooks';
import Fetch from './Fetch/Fetch';

describe('<Examples />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Examples />);
  });

  it('renders the text between the paragraphs', () => {
    expect(wrapper.find('p').text()).toEqual('Examples');
  });

  it('renders Hooks', () => {
    expect(wrapper.find(Hooks)).toHaveLength(1);
  });

  it('renders Fetch', () => {
    expect(wrapper.find(Fetch)).toHaveLength(1);
  });
});
