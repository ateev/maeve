import React from 'react';
import { shallow, mount } from 'enzyme';
import MaeveSelect from '../maeve-maeve-select.jsx';

describe('<MaeveSelect />', () => {
  it('should render component with just essential props', () => {
    const valueUpdated = jest.fn();
    const component = shallow(
      <MaeveSelect
        id="testComponent"
        options={['male', 'female']}
        onValueUpdate={() => valueUpdated}
      />
    );
    expect(component.find('label').exists()).toBeFalsy();
    expect(component).toMatchSnapshot();

    it('should call onValueUpdate when value updated', () => {
      component.find('select').value("new value !");
      expect(valueUpdated).toBeCalled();
    });
  });

  it('should render component with placeholder and a label', () => {
    const callback = jest.fn();
    const component = mount(
      <MaeveSelect
        id="testComponent"
        options={['male', 'female']}
        onValueUpdate={() => valueUpdated}
        label="name"
      />
    );
    expect(component).toMatchSnapshot();
    expect(component.find('label').exists()).toBeTruthy();
  });

  it('should render error message when passed', () => {
    const updateValue = jest.fn();
    const component = shallow(
      <MaeveSelect
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