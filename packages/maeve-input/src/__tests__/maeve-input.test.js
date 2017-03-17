import React from 'react';
import { shallow, mount } from 'enzyme';
import MaeveInput from '../maeve-input.jsx';
import MaeveDropdown from 'maeve-dropdown';

describe('<MaeveInput />', () => {

  it('should render component with just essential props', () => {
    const valueUpdated = jest.fn();
    const component = shallow(
      <MaeveInput
        id="testComponent"
        onValueUpdate={() => valueUpdated}
      />
    );
    expect(component.find('label').exists()).toBeFalsy();
    expect(component).toMatchSnapshot();

    it('should call onValueUpdate when value updated', () => {
      component.find('input').value("new value !");
      expect(valueUpdated).toBeCalled();
    });
  });

  it('should render component with placeholder and a label', () => {
    const callback = jest.fn();
    const component = mount(
      <MaeveInput
        id="testComponent"
        onValueUpdate={callback}
        placeholder="hello"
        label="name"
      />
    );
    expect(component).toMatchSnapshot();
    expect(component.find('label').exists()).toBeTruthy();
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
    expect(component).toMatchSnapshot();
    expect(component.find('MaeveDropdown').exists()).toBeTruthy();
  });

  it('should render component with autocomplete source as function', () => {
    const autocompleteFunction = jest.fn();
    const autoComplete = {
      source: autocompleteFunction,
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
    expect(autocompleteFunction).toBeCalled();
    expect(component).toMatchSnapshot();
    expect(component.find('MaeveDropdown').exists()).toBeTruthy();
  });

  it('should render error message when passed', () => {
    const updateValue = jest.fn();
    const component = shallow(
      <MaeveInput
        id="testComponent"
        onValueUpdate={updateValue}
        error={
          {
            message: 'The Input field should be like this'
          }
        }
      />
    );
    expect(component.find('.error').exists()).toBeTruthy();
    expect(component).toMatchSnapshot();
  })

});