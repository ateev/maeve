import React from 'react';
import { shallow } from 'enzyme';
import MaeveMultiInput from '../index.js';

test('render ', () => {
  const component = shallow(
    <MaeveMultiInput />
  );
  expect(component).toMatchSnapshot();
});