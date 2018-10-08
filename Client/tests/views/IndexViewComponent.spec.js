import React from 'react';
import { shallow } from 'enzyme';
import { IndexViewComponent } from '../../views/indexViewComponent';


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

describe('Component: IndexView Component', () => {
  const props = {
    login: () => {},
    user: {
      isAuthenticated: false,
      isRegistered: false,
      loading: true,
      user: {},
    },
    errors: {},
  };
  const wrapper = shallow(<IndexViewComponent user={props} />);
  const wrapper2 = shallow(<IndexViewComponent {...props} />);
  it('should render the IndexView Component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.instance().handleComponentState()).toBe(true);
    // e(handleComponentState).to.be.instanceof(IndexViewComponent);
  });

  it('Should handle input change', () => {
    wrapper.setState({
      email: 'nengi@gmail.com',
      password: 'password111',
      loading: false,
      errors: {},

    });

    wrapper.update();
    expect(wrapper.instance().onchange({ target: { value: 'name' } })).toBe(true);
  });

  it('Should handle handleComponentState', () => {
    const e = {
      preventDefault: () => {},
    };
    expect(wrapper.instance().handleComponentState(e)).toBe(true);
  });

  it('Should handle handleComponentState', () => {
    const e = {
      preventDefault: () => {},
    };
    wrapper.instance().handleComponentState();
    expect(wrapper.instance().handleComponentState(e)).toBe(true);
  });

  it('Should call the on didupdate function and set the state', () => {
    wrapper.instance().componentDidUpdate(prevProps);
    const actual = wrapper.state().loading;
    wrapper.instance().handleComponentState();
    expect(actual).toBe(false);
  });

  it('Should handle submit', () => {
    const e = {
      preventDefault: () => {},
    };
    expect(wrapper2.instance().submitForm(e)).toBe(true);
  });
});
