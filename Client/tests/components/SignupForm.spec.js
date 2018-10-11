import React from 'react';
import { shallow } from 'enzyme';
import SignupForm from '../../components/SignupFormComponent';

const props = {
  register: () => {},
  updateControl: () => {},
  errors: {
    firstname: 'firstname error',
    lastname: 'lastname error',
    email: 'firstname error',
    mobile: 'mobile error',
    password: 'password error',
    password2: 'password2 error',
  },
  loading: false,
};
const wrapper = shallow(<SignupForm {...props} />);
describe('component: SignupForm component', () => {
  it('should render the signup form component', () => {
    expect(wrapper.length).toBe(1);
  });
});
