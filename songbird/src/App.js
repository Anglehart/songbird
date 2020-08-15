import React from 'react';
import Header from './header';
import BirdsList from './birdsList';
import birdsData from './assets/birdsData';
import './index.css';


class App extends React.Component {
  
  getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  render() {
    const correctId = this.getRandomNumber(birdsData[0].length);
    return (
      <div className="wrapper">
        <Header />
        <div className="second-row">
          <BirdsList birdsData={birdsData[0]} onChoice={() => this.handleClick()} correctId={correctId} />
        </div>
      </div>
    );
  }
}

export default App;
