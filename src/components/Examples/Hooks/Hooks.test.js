import React from 'react';
import { mount } from 'enzyme';
import Hooks from './Hooks';

describe('<Hooks />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Hooks />);
  });

  it('renders the text first between the paragraphs', () => {
    expect(wrapper.find('p').first().text()).toEqual('Hooks');
  });

  describe('input change', () => {
    const name = 'Hooks Test';

    it('displays the greeting text properly', () => {
      wrapper.find('input').simulate('change', {
        target: {
          value: name,
        },
      });

      const expectedText = `Hello ${name}!`;

      expect(wrapper.find('p').at(1).text()).toEqual(expectedText);
    });
  });
});
