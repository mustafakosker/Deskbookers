import React from 'react';
import NavigationBar from 'components/navigation/NavigationBar.jsx';
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('NavigationBar component unit test', () => {
  const testTitle = 'test123123413';
  const wrapper = shallow(<NavigationBar title={testTitle} />);

  it('renders .navigation-bar-container', () => {
    expect(wrapper.find('.navigation-bar-container')).to.have.length(1);
  });

  it('renders .navigation-bar-icon', () => {
    expect(wrapper.find('.navigation-bar-icon')).to.have.length(1);
  });

  it('renders .navigation-bar-title', () => {
    expect(wrapper.find('.navigation-bar-title')).to.have.length(1);
    expect(wrapper.find('.navigation-bar-title').text()).to.equal(testTitle);
  });
});
