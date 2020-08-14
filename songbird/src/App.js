import React from 'react';
import Header from './header';
import BirdsList from './birdsList';
import birdsData from './assets/birdsData';
import './index.css';


class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="second-row">
          <BirdsList birdsData={birdsData[0]} />
        </div>
      </div>
    );
  }
}

export default App;
