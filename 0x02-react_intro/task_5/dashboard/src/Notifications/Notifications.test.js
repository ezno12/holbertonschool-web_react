import { shallow } from 'enzyme';
import Notifications from './Notifications';


describe('render of notifications', () => {
    it("notifcation exists", () => {
        const wrapper = shallow(<Notifications />)
        expect(wrapper.exists())
    })

    it("expect to render 3 list item", () => {
        const wrapper = shallow(<Notifications />)
        wrapper.update();
        expect(wrapper.find('li')).toHaveLength(3);
    })
    
    it("", () => {
        const txt = "Here is the list of notifications"
        const wrapper = shallow(<Notifications />)
        wrapper.update();
        expect(wrapper.find(".Notifications p").text()).toEqual(txt)
    })
})