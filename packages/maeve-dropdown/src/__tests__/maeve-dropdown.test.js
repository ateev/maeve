import React from 'react';
import { shallow } from 'enzyme';
import MaeveDropdown from '../maeve-dropdown.jsx';

test('render maeve input', () => {
  const component = shallow(
    <MaeveDropdown />
  );
  expect(component).toMatchSnapshot();
});