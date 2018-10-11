import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from '../../components/Navbar';

const props = {
  auth: {
    user: {
      payload: {
        isadmin: false,
      },
    },
    isAuthenticated: true,
  },
  loading: false,
  errors: {
    errors: {
      password: 'Invalid password',
    },
  },
};

const props2 = {
  auth: {
    user: {
      payload: {
        isadmin: true,
      },
    },
    isAuthenticated: true,
  },
};

const wrapper = shallow(<Navbar {...props} />);
const wrapper2 = shallow(<Navbar {...props2} />);
describe('component: Navbar component', () => {
  it('should render the Navbar control component', () => {
    expect(wrapper.length).toBe(1);
  });

  it('should set the Navbar to admin options', () => {
    expect(wrapper2.length).toBe(1);
  });

  it('should set the Navbar to guest options', () => {
    let newProps = {...props};
    newProps.auth.isAuthenticated = false;
    newProps.isAuthenticated = false;
    const wrapper3 = shallow(<Navbar {...newProps} />);
    expect(wrapper3.length).toBe(1);
  });
});
