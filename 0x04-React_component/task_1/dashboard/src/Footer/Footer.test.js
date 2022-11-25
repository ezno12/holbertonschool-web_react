import { shallow } from 'enzyme';
import { expect } from 'chai';
import Footer from './Footer';

describe("redering footer component", () => {
    it("check if footer componet render without crach", () => {
        const wrapper = shallow(<Footer />)
        expect(wrapper.exists())
    })
    it("check footer has text Copyright", () => {
        const wrapper = shallow(<Footer />);
		expect(wrapper.children('p').html()).to.include('Copyright');
	});
})