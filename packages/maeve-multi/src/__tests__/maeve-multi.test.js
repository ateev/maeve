import React from 'react';
import { shallow } from 'enzyme';
import MaeveMulti from '../maeve-multi.jsx';

test('render maeve multi', () => {
  const component = shallow(
    <MaeveMulti>Hi</MaeveMulti>
  );
  expect(component).toMatchSnapshot();
});