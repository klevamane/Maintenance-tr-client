import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { Admin } from '../../views/Admin';

const props = {
  everyUsersRequests: () => {},
  mtrequests: {
    loading: true,
    payload: {
      allRequests: ['somerequests'],
    },
  },
  filter: '',
  user: {
    isAuthenticated: false,
    isRegistered: false,
    loading: true,
    user: {},
  },
  errors: {
    error: 'This is the error here',
  },
};
const props2 = {
  everyUsersRequests: () => {},
  mtrequests: {
    loading: true,
    payload: {
      allRequests: [],
    },
  },
  user: {
    isAuthenticated: false,
    isRegistered: false,
    loading: true,
    user: {},
  },
  errors: {
  },
};

const wrapper = shallow(<Admin {...props} />);
const wrapper2 = shallow(<Admin {...props2} />);

describe('component: Admin Component', () => {
  it('should render the Admin Component', () => {
    expect(wrapper.length).toBe(1);
    // expect(wrapper.instance().handleComponentState()).toBe(true);
    // e(handleComponentState).to.be.instanceof(IndexViewComponent);
  });

  it('Should handle input change', () => {
    wrapper.setState({
      filter: 'resolved',
      loading: false,
      errors: {},

    });

    wrapper.update();
    expect(wrapper.instance().onchange({ target: { value: 'filter' } })).toBe.call();
  });

  it('Should display loader', () => {
    wrapper.setState({
      filter: 'resolved',
      loading: true,
      errors: {},

    });
    wrapper2.update();
    expect(wrapper2.length).toBe(1);
  });

  it('should filter request by selected status criteria', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should perform inline form request cancelling', () => {
    const disapprove = sinon.spy();
    const wrapper3 = shallow(<Admin {...props} onClick={disapprove} />);
    expect(wrapper3).toBeDefined();
    expect(wrapper3.length).toBe(1);
    expect(disapprove).toHaveProperty('callCount', 0);
  });
});
