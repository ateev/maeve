import React from 'react';
import { shallow } from 'enzyme';
import MaeveToggle from '../../index.js';

test('render ', () => {
  const component = shallow(
    <MaeveToggle />
  );
  expect(component).toMatchSnapshot();
});