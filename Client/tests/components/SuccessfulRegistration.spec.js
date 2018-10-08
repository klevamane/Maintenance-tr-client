import React from 'react';
import { shallow } from 'enzyme';
import SuccessfulRegistrationComponent from '../../views/SuccessfulRegistrationComponent';

describe('component: SuccessfulRegistration', () => {
  const wrapper = shallow(<SuccessfulRegistrationComponent />);
  it('should render the successful registration component', () => {
    expect(wrapper.length).toBe(1);
  });
});
