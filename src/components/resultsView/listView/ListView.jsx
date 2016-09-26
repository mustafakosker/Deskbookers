import React, { PropTypes } from 'react';

const ListView = props => (
  (props.items && props.items.length > 0) ?
    (<div className="list-view-container">
      {props.items.map(item => (
        <div className="result-item">
          <div className="name">
            {item.name}
          </div>
          <div className="location-name">
            {item.locationName}
          </div>
          <div className="hour-price">
            {item.hourPrice}
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
