import React, { PropTypes } from 'react';

const NavigationBar = props => (
  <div className="navigation-bar-container">
    <div className="navigation-bar-icon" />
    <div className="navigation-bar-title">
      {props.title}
    </div>
  </div>
);

NavigationBar.propTypes = {
  title: PropTypes.string.isRequired
};

export default NavigationBar;
