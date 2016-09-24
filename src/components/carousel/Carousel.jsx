import React, { PropTypes, Component } from 'react';

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageIndex: 0
    };
  }

  render() {
    return (
      <div className="carousel-wrapper">
        <div className="left-arrow-icon" />
        <div className="image-list-wrapper">
          {this.props.images.map(image =>
            <div className="carousel-image-container">
              <img src={image.url} className="carousel-image" role="presentation" />
              <div className="carousel-title">{image.title}</div>
            </div>
          )}
        </div>
        <div className="right-arrow-icon" />
      </div>
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object)
};
