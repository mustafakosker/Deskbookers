import React, { PropTypes, Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

export default class ListView extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.items !== prevProps.items) this.node.scrollIntoView();
  }

  render() {
    return (
      (this.props.items && this.props.items.length > 0) ?
        (<div className="list-view-container" ref={(node) => { this.node = node; }}>
          <div className="results-title">
            Search Results
            <div className="divider" />
          </div>
          {this.props.items.map(item => (
            <div className="result-item" key={item.name}>
              <div className="result-image-container">
                <div className="result-image-wrapper">
                  <img src={item.imageUrl} className="item-image" role="presentation" />
                  <div className="hour-price">
                    {`${item.hourPrice}€`}
                    <span> / Hourly</span>
                  </div>
                </div>
                <StarRatingComponent name="item-rating" value={item.rating} editing={false} />
              </div>
              <div className="name">
                {item.name}
              </div>
              <div className="location-name-container">
                <div className="location-icon-image" />
                <div className="location-name">
                  {item.locationName}
                </div>
              </div>
            </div>
          ))}
        </div>) : null
    );
  }
}

ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};
