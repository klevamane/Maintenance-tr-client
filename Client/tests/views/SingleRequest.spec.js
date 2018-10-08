import { shallow } from 'enzyme';
import React from 'react';
import { SingleRequestComponent } from '../../views/SingleRequestComponent';

const props = {
  getArequest: () => {},
  mtrequest: {
    isAuthenticated: false,
    isRegistered: false,
    loading: true,
    user: {},
    payload: [{
      id: 1,
      status: 'Inactive',
      description: 'description',
    }],
  },
  match: {
    params: {
      id: 8,
    },
  },
  errors: {
    errors: {
      fault: 'fault field is required',
    },
  },
};


const wrapper = shallow(<SingleRequestComponent {...props} />);

describe('component: SingleRequest Component', () => {
  it('should render the single request component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('div').length).toEqual(5);
  });
});
