import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './components/navigation/NavigationBar.jsx';

const App = () => (
  <div>
    <div className="carousel-container">
      <NavigationBar title="Deskbookers" />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
