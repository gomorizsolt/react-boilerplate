import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Examples from '../Examples/Examples';
import { BasicDiv } from './App.style';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders the text between the paragraphs', () => {
    expect(wrapper.find('p').text()).toEqual('RB');
  });

  it('renders Examples', () => {
    expect(wrapper.find(Examples)).toHaveLength(1);
  });

  it('renders BasicDiv', () => {
    expect(wrapper.find(BasicDiv)).toHaveLength(1);
  });
});
