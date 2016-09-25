import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import SearchBar from 'components/search/SearchBar.jsx';
import sinon from 'sinon';

describe('SearchBar component test', () => {
  const wrapper = shallow(<SearchBar search={() => {}} />);

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

  it('calls callback search function with query when search button is clicked', () => {
    const spySearch = sinon.spy();
    const mountedSearch = mount(<SearchBar search={spySearch} />);

    const testText = 'text1234';
    mountedSearch.find('.search-input-text').simulate('change', {
      target: {
        value: testText
      }
    });
    mountedSearch.find('.search-button').simulate('click');

    expect(spySearch.calledOnce).to.equal(true);
    expect(spySearch.calledWith(testText)).to.be.ok;
  });

  it('does not callback search function when text input empty and search button is clicked', () => {
    const spySearch = sinon.spy();
    const mountedSearch = mount(<SearchBar search={spySearch} />);

    mountedSearch.find('.search-button').simulate('click');

    expect(spySearch.called).to.equal(false);
  });
});
