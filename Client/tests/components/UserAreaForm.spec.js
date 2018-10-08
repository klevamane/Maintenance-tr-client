import React from 'react';
import {shallow} from 'enzyme';
import UserAreaForm from '../../components/UserAreaFormComponent';

const props = {
  createRequest: () => {},
  user: {
    isAuthenticated: false,
    isRegistered: false,
    loading: true,
    user: {},
  },
  errors: {
    errors: {
      fault: 'fault field is required',
    },
  },
};

const wrapper = shallow(<UserAreaForm {...props} />);
describe('component: UserAreaForm Component', () => {
  it('should render the UserAreaForm component', () => {
    expect(wrapper.length).toBe(1);
  });
});
