import React from 'react';
import { shallow } from 'enzyme';
import { EditRequestComponent } from '../../views/EditRequestComponent';

const prevProps = {
  brand: '',
  fault: '',
  modelnumber: '',
  other: '',
  description: '',
  mtrequest: {
    payload: {
      allRequests: ['somerequests'],
    },
  },
};
const props = {
  getArequest: () => {},
  editRequest: () => {},
  mtrequest: {
    loading: true,
    payload: [
      {
        brand: 'thebrand',
        fault: 'fault',
        modelnumber: 'rt42',
        other: 'fall out checker',
        description: 'the description',
      },
    ],
  },
  filter: '',
  user: {
    isAuthenticated: false,
    isRegistered: false,
    loading: true,
    user: {},
  },
  match: {
    params: {
      id: 1,
    },
  },
  errors: {
    error: 'This is the error here',
    errors: 'yes i do wrong',
  },
};

const props2 = {
  getArequest: () => {},
  editRequest: () => {},
  mtrequest: {
    loading: true,
    payload: [
      {
        brand: 'thebrand',
        fault: 'fault',
        modelnumber: 'rt42',
        other: 'fall out checker',
        description: 'the description',
      },
    ],
  },
  filter: '',
  user: {
    isAuthenticated: false,
    isRegistered: false,
    loading: true,
    user: {},
  },
  match: {
    params: {
      id: 1,
    },
  },
  errors: {},
};


const wrapper = shallow(<EditRequestComponent {...props} />);
const wrapper2 = shallow(<EditRequestComponent {...props2} />);

describe('component: EditRequest Component', () => {
  it('should render the EditRequest Component', () => {
    expect(wrapper.length).toBe(1);
    // expect(wrapper.instance().handleComponentState()).toBe(true);
    // e(handleComponentState).to.be.instanceof(IndexViewComponent);
  });

  it('Should call the on didupdate function and set the state', () => {
    wrapper.instance().componentDidUpdate(prevProps);
    const actual = wrapper.state().loading;
    expect(actual).toBe.call();
  });

  it('Should handle input change', () => {
    wrapper.setState({
      brand: 'brandi',
      fault: 'broken screen',
      errors: {},

    });

    wrapper.update();
    expect(wrapper.instance().onchange({ target: { value: 'fault' } })).toBe.call();
  });

  it('Should handle submit', () => {
    const e = {
      preventDefault: () => {},
    };
    expect(wrapper.instance().submitForm(e)).toBe.call();
  });

  it('Should display loader', () => {
    expect(wrapper2.length).toBe(1);
  });
});
