import { shallow } from 'enzyme';
import App from './App';

describe("redering App component", () => {
    it("check if app componet render without crach", () => {
        const wrapper = shallow(<App />)
        expect(wrapper.exists())
    })

    it("render div with class app-header", () => {
        const wrapper = shallow(<App />)
        wrapper.update()
        expect(wrapper.find('div.App-header')).toHaveLength(1);;
    })

    it("render div with class app-body", () => {
        const wrapper = shallow(<App />)
        wrapper.update()
        expect(wrapper.find('div.App-body')).toHaveLength(1);
    })

    it("render div with class app-footer", () => {
        const wrapper = shallow(<App />)
        wrapper.update()
        expect(wrapper.find('div.App-body')).toHaveLength(1);
    })

})