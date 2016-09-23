import React, { PropTypes } from 'react';

const Carousel = props => (
  <div className="carousel-wrapper">
    <div className="left-arrow-icon" />
    <div className="image-list-wrapper">
      {props.images.map(image =>
        <div className="carousel-image-container">
          <img src={image.url} className="carousel-image" role="presentation" />
          <div className="carousel-title">{image.title}</div>
        </div>
      )}
    </div>
    <div className="right-arrow-icon" />
  </div>
);

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object)
};

export default Carousel;
