import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    expect(wrapper.find('div').text()).toEqual('Basic RB project!');
  });
});
