import React from 'react';
import { shallow } from 'enzyme';
import MaeveInput from '../maeve-input.jsx';

describe('render maeve input', () => {

  it('should render component with just essential props', () => {
    const component = shallow(
      <MaeveInput
        id="testComponent"
        onValueUpdate={() => console.log('hey!')}
      />
    );
    expect(component.find('label')).toHaveLength(0);
    expect(component).toMatchSnapshot();
  });

  it('should render component with placeholder and a label', () => {
    const component = shallow(
      <MaeveInput
        id="testComponent"
        onValueUpdate={() => console.log('hiee')}
        placeholder="hello"
        label="name"
      />
    );
    expect(component.find('label')).toHaveLength(1);
  })

});