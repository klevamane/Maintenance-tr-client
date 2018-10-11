import React from 'react';
import { shallow } from 'enzyme';
import { PrivateRouteComponent } from '../../helpers/PrivateRouteComponent';

const props = {
  rest: {
    something: ['else'],
  },
  auth: {
    isAuthenticated: true,
  },
};


const wrapper = shallow(<PrivateRouteComponent {...props} />);
describe('Helper: PrivateRoute component', () => {
  it('should call the private route component', () => {
    expect(wrapper.length).toBe(1);
  });
});
