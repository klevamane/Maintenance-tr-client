import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Requests } from '../../views/Requests';

const props = {
  userRequests: () => {},
  brand: '',
  fault: '',
  filter: 'approve',
  modelnumber: '',
  other: '',
  description: '',
  mtrequests: {
    payload: [
      {
        brand: 'thebrand',
        fault: 'fault',
        modelnumber: 'rt42',
        status: 'approved',
        other: 'fall out checker',
        description: 'the description',
        createdon: 'date',
        allUserRequests: [],
      },
    ],
  },
  errors: {
    error: 'This is the error here',
  },
};

const props2 = {
  userRequests: () => {},
  filter: 'approve',
  mtrequests: {
    payload: {
      brand: 'thebrand',
      fault: 'fault',
      modelnumber: 'rt42',
      status: 'approved',
      other: 'fall out checker',
      description: 'the description',
      createdon: 'date',
      allUserRequests: [],
    },
    loading: true,
  },
  errors: {},
};

const wrapper = shallow(<Requests {...props} />);
const wrapper2 = shallow(<Requests {...props2} />);
describe('component: Requests Component', () => {
  it('should render the Request Component', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should handle input change', () => {
    wrapper.setState({
      filter: 'resolved',
    });
    wrapper.update();
    expect(wrapper.instance().onchange({ target: { value: 'filter' } })).toBe.call();
  });

  it('Should display loader', () => {
    wrapper2.setState({
      filter: 'resolved',
      loading: true,
      errors: null,

    });
    wrapper2.update();
    expect(wrapper2.length).toBe(1);
  });
});
