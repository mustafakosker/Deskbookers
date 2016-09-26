import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect, Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import NavigationBar from './components/navigation/NavigationBar.jsx';
import Carousel from './components/carousel/Carousel.jsx';
import SearchBar from './components/search/SearchBar.jsx';
import ListView from './components/resultsView/listView/ListView.jsx';
import LoadingBar from './components/loadingBar/LoadingBar.jsx';
import searchByCity from './actionCreators/search/SearchActionCreators';
import search from './reducers/search/SearchReducer';
import { classNames } from './util/componentUtil';

const App = props => (
  <div className="page-container">
    <LoadingBar isLoading={props.isLoading} />
    <div className={classNames('page-wrapper', props.isLoading, 'loading')}>
      <Carousel images={props.carouselImages}>
        <NavigationBar />
        <SearchBar search={props.search} />
      </Carousel>
      <ListView items={props.items} />
    </div>
  </div>
);

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  carouselImages: PropTypes.arrayOf(PropTypes.object),
  search: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  items: state.results,
  carouselImages: state.carouselImages
});

const mapDispatchToProps = dispatch => ({
  search: city => dispatch(searchByCity(city))
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
const store = createStore(search, applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'));
