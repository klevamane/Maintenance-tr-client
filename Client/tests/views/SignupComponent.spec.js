import React from 'react';
import { shallow } from 'enzyme';
import { expect as exp } from 'chai';
import { SignupComponent } from '../../views/SignupComponent';

const signupState = {
  firstname: '',
  lastname: '',
  mobile: '',
  email: '',
  password: '',
  password2: '',
  errors: {},
  loading: false,
};

const prevProps = {
  email: '',
  password: '',
  loading: false,
  errors: {
    errors: {
      password: 'Invalid password',
    },
  },
};

const props = {
  signup: () => {},
  user: {
    isAuthenticated: false,
    isRegistered: false,
    loading: true,
    user: {},
  },
  errors: {
    errors: {
      password: 'Invalid password too',
    },
  },
};

describe('Component: IndexView Component', () => {
  const wrapper = shallow(<SignupComponent user={props} />);
  const wrapper2 = shallow(<SignupComponent {...props} />);

  it('should render the Signup Component', () => {
    expect(wrapper.length).toBe(1);
    const handleComponentState = wrapper.instance();
    exp(handleComponentState).to.be.instanceOf(SignupComponent);
    expect(wrapper.instance().handleComponentState()).toBe(undefined);
  });

  it('Should call the on ComponentDidUpdate function and set the state', () => {
    wrapper.instance().componentDidUpdate(prevProps);
  });

  // it('Should unmount component and update body css to empty', () => {
  //   wrapper.instance().componentWillUnmount();
  //   wrapper.update();
  // });

  it('Should handle input change', () => {
    wrapper.setState({
      firstname: 'firstname',
      lastname: 'kirian',
      email: 'nengi@gmail.com',
      password: 'password111',
      password2: 'password111',
      loading: false,
      errors: {},

    });
    wrapper.update();
    expect(wrapper.instance().onchange({ target: { value: 'name' } })).toBe(undefined);
  });

  it('Should handle handleComponentState', () => {
    const e = {
      preventDefault: () => {},
    };
    expect(wrapper2.instance().handleComponentState(e)).toBe(undefined);
  });

  it('Should handle submit', () => {
    const e = {
      preventDefault: () => {},
    };
    expect(wrapper2.instance().submitForm(e)).toBe.call();
  });
});
