import React, { PropTypes } from 'react';
import Loading from 'react-loading';
import { classNames } from 'util/componentUtil';

const LoadingBar = props => (
    (<div className={classNames('loading-bar', props.isLoading, 'show')}>
      <Loading type="bars" color="#FF8C00" />
    </div>)
);

LoadingBar.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default LoadingBar;
