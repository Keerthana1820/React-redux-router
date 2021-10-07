import Addtask from '../components/Addtask';
import React from 'react';
import { shallow } from 'enzyme';
import Input from '../components/common/Input';
import Enzyme  from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
describe('Addtask', () => {
  it('should have the `TodoInput` "addtask"', () => {
    const wrapper = shallow(
      <Addtask />
    );
    expect(
      wrapper.containsMatchingElement(<Input/>)
    ).toBe(true);
  });
});