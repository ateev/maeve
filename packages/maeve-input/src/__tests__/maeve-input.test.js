import React from 'react';
import { shallow, mount } from 'enzyme';
import MaeveInput from '../maeve-input.jsx';

describe('render maeve input', () => {

  it('should render component with just essential props', () => {
    const valueUpdated = jest.fn();
    const component = shallow(
      <MaeveInput
        id="testComponent"
        onValueUpdate={() => valueUpdated}
      />
    );
    expect(component.find('label')).toHaveLength(0);
    expect(component).toMatchSnapshot();

    it('should call onValueUpdate when value updated', () => {
      component.find('input').value("new value !");
      expect(valueUpdated).toBeCalled();
    });

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
  });

  it('should render component with autocomplete and source as an array', () => {
    const autoComplete = {
      source: ["apple", "banana", "cat", "appollo", "caterpillar"],
    };
    const component = mount(
      <MaeveInput
        id="testComponent"
        onValueUpdate={() => console.log('hiee')}
        placeholder="hello"
        label="name"
        autocomplete={autoComplete}
      />
    );
    expect(component).toMatchSnapshot();
    component.find('input').simulate('focus');
    expect(component.find('.maeve-dropdown')).toHaveLength(1);
  });

  it('should render component with autocomplete source as an array', () => {
    expect(false).toBe(true);
  });
});