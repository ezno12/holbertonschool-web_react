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
        expect(wrapper.find(NotificationItem)).to.have.lengthOf(0);;
    })
    
    it("chechk existing of para in notifications", () => {
        const listNotifications = [
			{id: 1, type: "default", value: "New course available"},
			{id: 2, type: "urgent", value: "New resume available"},
			{id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
		]
        const txt = "Here is the list of notifications"
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>)
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
        const listNotifications = [
			{id: 1, type: "default", value: "New course available"},
			{id: 2, type: "urgent", value: "New resume available"},
			{id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
		]
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
		expect(wrapper.find('div.menuItem')).to.have.length(1);
    })
    it("chech menu item displayed when dipslay drawer is false", () => {
        const listNotifications = [
			{id: 1, type: "default", value: "New course available"},
			{id: 2, type: "urgent", value: "New resume available"},
			{id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
		]
        const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
		expect(wrapper.find('div.Notifications')).to.have.length(1);
    })
    it("<Notifications /> the div.Notifications is not being displayed when displayDrawer is false", () => {
		const listNotifications = [
			{id: 1, type: "default", value: "New course available"},
			{id: 2, type: "urgent", value: "New resume available"},
			{id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
		]
		wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
		expect(wrapper.find('div.Notifications')).to.have.length(1);
	});

	it("Notifications renders correctly if you pass an empty array or if you don’t pass the listNotifications property", () => {
		wrapper = shallow(<Notifications/>);
		expect(wrapper).to.not.be.an('undefined');
	});

	it("the component renders it correctly and with the right number of NotificationItem", () => {
		const listNotifications = [
			{id: 1, type: "default", value: "New course available"},
			{id: 2, type: "urgent", value: "New resume available"},
			{id: 3, type: "urgent", __html: {__html: getLatestNotification()}},
		]
		wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
		expect(wrapper.find('NotificationItem')).to.have.length(3);
	});

	it("listNotifications is empty the message Here is the list of notifications is not displayed, but No new notification for now is", () => {
		wrapper = shallow(<Notifications displayDrawer={true}/>);
		expect(wrapper.contains(<p>No new notification for now</p>)).to.equal(true);
	});

})