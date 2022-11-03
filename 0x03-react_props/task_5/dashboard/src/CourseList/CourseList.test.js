
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

describe("Testing the courselist comp Component", () => {

	it("check courslist comp rendered without crashing", () => {
        const wrapper = shallow(<CourseList />);
		expect(wrapper).to.not.be.an('undefined');
	});

	it("check courslist comp renders three NotificationItem", () => {
        const wrapper = shallow(<CourseList />);
		expect(wrapper.find('CourseListRow')).to.have.lengthOf(5);
	});

});