import React, { PropTypes } from 'react';
import StarRatingComponent from 'react-star-rating-component';

const ListView = props => (
  (props.items && props.items.length > 0) ?
    (<div className="list-view-container">
      <div className="results-title">
        Search Results
        <div className="divider" />
      </div>
      {props.items.map(item => (
        <div className="result-item">
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
          <div className="location-name">
            {item.locationName}
          </div>
        </div>
      ))}
    </div>) : null
);

ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

export default ListView;
