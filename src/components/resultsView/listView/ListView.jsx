import React, { PropTypes } from 'react';

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
            <img src={item.imageUrl} className="item-image" role="presentation" />
            <div className="hour-price">
              {`${item.hourPrice}€`}
              <span> / Hourly</span>
            </div>
          </div>
          <div className="name">
            {item.name}
          </div>
          <div className="location-name">
            {item.locationName}
          </div>
          <div className="rating">
            {item.rating}
          </div>
        </div>
      ))}
    </div>) : null
);

ListView.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
};

export default ListView;
