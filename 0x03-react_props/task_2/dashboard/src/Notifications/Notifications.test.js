import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import { expect } from 'chai';

describe('render of notifications', () => {
    it("notifcation exists", () => {
        const wrapper = shallow(<Notifications />)
        expect(wrapper.exists())
    })

    it("expect to render 3 list item", () => {
        const wrapper = shallow(<Notifications />)
        wrapper.update();
        expect(wrapper.find(NotificationItem)).to.have.lengthOf(3);;
    })
    
    it("", () => {
        const txt = "Here is the list of notifications"
        const wrapper = shallow(<Notifications />)
        wrapper.update();
        expect(wrapper.find(".Notifications p").text()).equal(txt)
    })
})