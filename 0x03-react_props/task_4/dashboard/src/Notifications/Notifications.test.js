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
        const wrapper = shallow(<Notifications displayDrawer={true}/>)
        wrapper.update();
        expect(wrapper.find(NotificationItem)).to.have.lengthOf(3);;
    })
    
    it("chechk existing of para in notifications", () => {
        const txt = "Here is the list of notifications"
        const wrapper = shallow(<Notifications displayDrawer={true}/>)
        wrapper.update();
        expect(wrapper.find(".Notifications p").text()).equal(txt)
    })
    it("chech menu items displayed when dipslay drawer is false", () => {
        const wrapper = shallow(<Notifications/>)
        expect(wrapper.find('div.menuItem')).to.have.length(1)
    })
    it("chech notifcaitons not displayed when dipslay drawer is false", () => {
        const wrapper = shallow(<Notifications/>)
        expect(wrapper.find('div.Notifications')).to.have.length(0)
    })
    it("chech menu item displayed when dipslay drawer is false", () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
		expect(wrapper.find('div.menuItem')).to.have.length(1);
    })
    it("chech menu item displayed when dipslay drawer is false", () => {
        const wrapper = shallow(<Notifications displayDrawer={true}/>);
		expect(wrapper.find('div.Notifications')).to.have.length(1);
    })
})