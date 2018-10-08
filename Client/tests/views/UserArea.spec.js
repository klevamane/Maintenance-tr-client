import React from 'react';
import { shallow } from 'enzyme';
import { UserArea } from '../../views/UserArea';

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
describe('Component: IndexView Component', () => {
  const wrapper = shallow(<UserArea />);
  const wrapper2 = shallow(<UserArea {...props} />);

  it('should render the UserArea / Create request Component', () => {
    expect(wrapper.length).toBe(1);
  });

  it('Should handle submit', () => {
    const e = {
      preventDefault: () => {},
    };
    expect(wrapper2.instance().submitForm(e)).toBe.call();
  });

  it('Should handle input change', () => {
    wrapper.setState({
      brand: 'new brand',
      modelnumber: 'model345',
      description: 'request description',
      errors: {},

    });

    wrapper.update();
    expect(wrapper.instance().onchange({ target: { value: 'name' } })).toBe.call();
  });
});
