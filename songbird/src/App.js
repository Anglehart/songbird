import React from 'react';
import Header from './header';
import BirdsList from './birdsList';
import BirdInfo from './birdInfo';
import birdsData from './assets/birdsData';
import './index.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice: 0,
    };
    this.correctId = this.getRandomNumber(birdsData[0].length);
  }
  
  getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  
  handleClick(id) {
    this.setState({userChoice: id});
  }
  
  render() {
    const userChoice = this.state.userChoice;
    return (
      <div className="wrapper">
        <Header />
        <div className="second-row">
          <BirdsList birdsData={birdsData[0]} onChoice={this.handleClick.bind(this)} />
          <BirdInfo birdsData={birdsData[0]} userChoice={userChoice} />
        </div>
      </div>
    );
  }
}

export default App;
