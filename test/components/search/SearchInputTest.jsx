import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import SearchBar from 'components/search/SearchBar.jsx';

describe('SearchBar component test', () => {
  const wrapper = shallow(<SearchBar />);

  it('renders .search-input-container', () => {
    expect(wrapper.find('.search-input-container')).to.have.length(1);
  });

  it('renders .search-input-text', () => {
    expect(wrapper.find('.search-input-text')).to.have.length(1);
  });

  it('renders .search-button', () => {
    expect(wrapper.find('.search-button')).to.have.length(1);
    expect(wrapper.find('.search-button').text()).to.equal('Search');
  });
});
