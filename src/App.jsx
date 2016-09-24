import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/navigation/NavigationBar.jsx';
import Carousel from './components/carousel/Carousel.jsx';

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

const App = () => (
  <div className="carousel-container">
    <NavigationBar title="Deskbookers" />
    <Carousel images={carouselImages} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
