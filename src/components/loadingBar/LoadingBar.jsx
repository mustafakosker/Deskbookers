import React, { PropTypes } from 'react';
import Loading from 'react-loading';
import { connect } from 'react-redux';
import { classNames } from 'util/componentUtil';

const LoadingBar = props => (
    (<div className={classNames('loading-bar', props.isOpen, 'show')}>
      <Loading type="bars" color="#FF8C00" />
    </div>)
);

LoadingBar.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isOpen: state.isLoading
});

const LoadingBarContainer = connect(mapStateToProps)(LoadingBar);

export default LoadingBarContainer;
