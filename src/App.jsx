import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import NavigationBar from './components/navigation/NavigationBar.jsx';
import Carousel from './components/carousel/Carousel.jsx';
import SearchBarContainer from './components/search/SearchBarContainer.jsx';
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
  <div className="carousel-container">
    <NavigationBar title="Deskbookers" />
    <Carousel images={carouselImages}>
      <SearchBarContainer />
    </Carousel>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
