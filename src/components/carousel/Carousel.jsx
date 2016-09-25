import React, { PropTypes, Component } from 'react';

export default class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageIndex: 0
    };
  }

  componentDidMount() {
    this.setCarouselInterval();
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  // TODO provide interval time from props
  setCarouselInterval = () => (
    this.intervalId = setInterval(() => {
      this.setState({
        imageIndex: this.increaseImageIndex(this.state.imageIndex, this.props.images.length)
      });
    }, 3000)
  );

  clearInterval = () => {
    if (this.intervalId) clearInterval(this.intervalId);
  };

  resetInterval = () => {
    this.clearInterval();
    this.setCarouselInterval();
  };

  increaseImageIndex = (index, length) => (index + 1) % length;

  decreaseImageIndex = (index, length) => ((index + length) - 1) % length;

  // TODO provide transition time from props
  render() {
    return (
      <div className="carousel-wrapper">
        <div className="image-list-wrapper">
          <div
            className="left-arrow-icon"
            onClick={() => {
              this.setState({
                imageIndex: this.decreaseImageIndex(this.state.imageIndex, this.props.images.length)
              });
              this.resetInterval();
            }}
          >
            Left Arrow
          </div>
          <div
            className="image-list" style={{
              left: this.state.imageIndex * -window.innerWidth,
              transition: '1s'
            }}
          >
            {this.props.images.map(image => (
              <div key={image.title} className="carousel-image-container">
                <img src={image.url} className="carousel-image" role="presentation" />
                <div className="carousel-title">{image.title}</div>
              </div>)
            )}
          </div>
          {this.props.children}
          <div
            className="right-arrow-icon"
            onClick={() => {
              this.setState({
                imageIndex: this.increaseImageIndex(this.state.imageIndex, this.props.images.length)
              });
              this.resetInterval();
            }}
          >
            Right Arrow
          </div>
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.node
};
