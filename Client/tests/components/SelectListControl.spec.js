import React from 'react';
import { shallow } from 'enzyme';
import SelectListControl from '../../components/common/SelectListControl';
import { selectOptionRepair } from '../../helpers/selectOptions';


const wrapper = shallow(<SelectListControl options={selectOptionRepair} name="goodname" value="good" />);
describe('component: SelectListControl component', () => {
  it('should render the select list control component', () => {
    expect(wrapper.length).toBe(1);
  });
});
