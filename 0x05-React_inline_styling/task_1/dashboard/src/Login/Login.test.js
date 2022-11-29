import { shallow } from 'enzyme';
import { expect } from 'chai';
import Login from './Login';

describe("redering login component", () => {
    it("check if login componet render without crach", () => {
        const wrapper = shallow(<Login />)
        expect(wrapper.exists())
    })
    it('Login component has 2 label elements', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find('label')).to.have.lengthOf(2);
      
    });
    it('Login component has 2 input elements', () => {
      const wrapper = shallow(<Login />);
      expect(wrapper.find('input')).to.have.lengthOf(2);
    });

})