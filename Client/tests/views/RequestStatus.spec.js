import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { RequestStatus } from '../../views/RequestStatus';

const props = {
  getAnyUserRequestById: () => {},
  resolveApproveOrDisapprove: () => {},
  brand: '',
  fault: '',
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
      },
    ],
  },
  match: {
    params: {
      id: 1,
    },
  },
  errors: {
    error: 'This is the error here',
  },
};


const wrapper = shallow(<RequestStatus {...props} />);

describe('component: Request status Component', () => {
  it('should render the RequestStatus Component', () => {
    expect(wrapper.length).toBe(1);
    // expect(wrapper.instance().onchange()).toBe(true);
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

  it('Should perform button click event of changing request status', () => {
    const resolveApproveOrDisapprove = sinon.spy();
    const wrapper = shallow(<RequestStatus {...props} onClick={resolveApproveOrDisapprove} />);
    expect(wrapper).toBeDefined();
    expect(wrapper.length).toBe(1);
    expect(resolveApproveOrDisapprove).toHaveProperty('callCount', 0);
  });
});
