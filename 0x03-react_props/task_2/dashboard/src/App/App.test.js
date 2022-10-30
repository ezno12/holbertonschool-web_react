import { shallow } from 'enzyme';
import App from './App.js';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import { expect } from 'chai';

describe("redering App component", () => {
    it("check if app componet render without crach", () => {
        const wrapper = shallow(<App />)
        expect(wrapper.exists())
    })
    it("check app has notification component", () => {
        const wrapper = shallow(<App />)
		expect(wrapper.contains(<Notifications />)).to.equal(true);
	});

	it("check app has header Component", () => {
        const wrapper = shallow(<App />)
		expect(wrapper.contains(<Header />)).to.equal(true);
	});

	it("check app has login Component", () => {
        const wrapper = shallow(<App />)
		expect(wrapper.contains(<Login />)).to.equal(true);
	});

	it("app has footer Component", () => {
        const wrapper = shallow(<App />)
		expect(wrapper.contains(<Footer />)).to.equal(true);
	});

})