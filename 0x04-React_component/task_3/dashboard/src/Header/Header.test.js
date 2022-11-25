import { shallow } from 'enzyme';
import Header from './Header';

describe("redering header component", () => {
    it("check if header componet render without crach", () => {
        const wrapper = shallow(<Header />)
        expect(wrapper.exists())
    })
    it('verify that Header component has a img tag', () => {
        const wrapper = shallow(<Header />)
        const imgTag = wrapper.find('img');
        expect(imgTag.exists()).toBe(true);
      });
      it('verify that header component has a h1 tag', () => {
        const wrapper = shallow(<Header />)
        const h1Tag = wrapper.find('h1');
        expect(h1Tag.exists()).toBe(true);
      });

})