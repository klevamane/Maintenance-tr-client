import React from 'react';
import { shallow } from 'enzyme';
import LoginFormComponent from '../../components/LoginFormComponent';


describe('Component: LoginFormComponent', () => {
  const errors = {
    email: 'Email is invalid',
    password: 'Invalid password',
  };
  const loading = true;

  const wrapper = shallow(<LoginFormComponent errors={errors} />);
  it('should render the LoginFormComponent', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should indicate loading while executing Login action', () => {
    const loadingWrapper = shallow(<LoginFormComponent errors={errors} loading={loading} />);
    expect(loadingWrapper.length).toBe(1);
  });

  it('should check for the number of Link items', () => {
    expect(wrapper.find('Link').length).toEqual(2);
  });
});
