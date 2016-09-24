import React from 'react';
import { shallow } from 'enzyme';
import Carousel from 'components/carousel/Carousel.jsx';
import { expect } from 'chai';

describe('Carousel component test', () => {
  global.window = {
    innerWidth: '600px'
  };
  const images = [
    {
      url: 'testurl:1234123',
      title: 'firsttestimage'
    },
    {
      url: 'testurl:343241312',
      title: 'secondtestimage'
    }
  ];
  const wrapper = shallow(<Carousel images={images} />);

  it('renders .carousel-wrapper', () => {
    expect(wrapper.find('.carousel-wrapper')).to.have.length(1);
  });

  it('renders .image-list-wrapper', () => {
    expect(wrapper.find('.image-list-wrapper')).to.have.length(1);
  });

  it('renders .left-arrow-icon', () => {
    expect(wrapper.find('.left-arrow-icon')).to.have.length(1);
  });

  it('renders .right-arrow-icon', () => {
    expect(wrapper.find('.right-arrow-icon')).to.have.length(1);
  });

  it('renders .image-list', () => {
    const imageListWrapper = wrapper.find('.image-list');

    expect(imageListWrapper).to.have.length(1);
    expect(imageListWrapper.props().style.transition).to.equal('1s');
  });

  it('renders carousel images', () => {
    const carouselImagesWrapper = wrapper.find('.carousel-image-container');

    expect(carouselImagesWrapper).to.have.length(images.length);
    expect(carouselImagesWrapper.at(0).find('.carousel-image').props().src).to.equal(images[0].url);
    expect(carouselImagesWrapper.at(1).find('.carousel-title').text()).to.equal(images[1].title);
  });
});
