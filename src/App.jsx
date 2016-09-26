import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import NavigationBar from './components/navigation/NavigationBar.jsx';
import Carousel from './components/carousel/Carousel.jsx';
import SearchBarContainer from './components/search/SearchBarContainer.jsx';
import ListViewContainer from './components/resultsView/listView/ListViewContainer';
import LoadingBar from './components/loadingBar/LoadingBar.jsx';
import search from './reducers/search/SearchReducer';

const carouselImages = [
  {
    url: 'https://officesnapshots.com/wp-content/uploads/2016/01/cbre-office-design-9.jpg',
    title: 'London'
  },
  {
    url: 'http://tech.eu/wp-content/uploads/2015/05/SAM_3618.jpg',
    title: 'Amsterdam'
  },
  {
    url: 'http://soundcloud-wpengine.netdna-ssl.com/wp-content/uploads/2014/06/SoundCloud-new-Berlin-Office-3.jpg',
    title: 'Berlin'
  }
];

const store = createStore(search, applyMiddleware(ReduxThunk));

const App = () => (
  <div className="page-container">
    <LoadingBar />
    <NavigationBar title="Deskbookers" />
    <Carousel images={carouselImages}>
      <SearchBarContainer />
    </Carousel>
    <ListViewContainer />
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
