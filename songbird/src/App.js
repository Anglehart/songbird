import React from 'react';
import Header from './header';
import AnthemQuestion from './anthemQuestion';
import AnthemsList from './anthemsList';
import AnthemInfo from './anthemInfo';
import anthemsData from './assets/anthemsData';
import './index.css';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRound: 0,
      correctId: 0,
      userChoice: 0,
      isWon: false,
      roundScore: 5,
      totalScore: 0,
      clicked: [],
    };
    this.correctId = this.getRandomNumber(anthemsData[this.state.currentRound].length);
  }
  
  getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  
  handleClick = (id) => {
    this.setState({userChoice: id});
    
    if (!this.state.clicked.includes(id)) {
      this.state.clicked.push(id);
      
      if (id === this.correctId) {
        let totalScore = this.state.totalScore + this.state.roundScore;
        this.setState({totalScore});
        this.setState({isWon: true});
      } else {
        let roundScore = this.state.roundScore - 1;
        this.setState({roundScore});
      }
    }
  }
  
  nextRound() {
    let currentRound = this.state.currentRound + 1;
    this.setState({roundScore: 0});
    this.setState({currentRound});
    this.setState({clicked: []});
    this.setState({isWon: false});
    this.setState({userChoice: 0});
  }
  
  render() {
    console.log(this.correctId);
    const userChoice = this.state.userChoice;
    return (
      <div className="wrapper">
        <Header score={this.state.totalScore}/>
        <div className="first-row">
          <AnthemQuestion correctItem={anthemsData[this.state.currentRound][this.correctId - 1]} userChoice={userChoice} isWon={this.isWon} />
        </div>
        <div className="second-row">
          <AnthemsList anthemsData={anthemsData[this.state.currentRound]} onChoice={this.handleClick} correctId={this.correctId} isWon={this.isWon}/>
          <AnthemInfo anthemsData={anthemsData[this.state.currentRound]} userChoice={userChoice} />
        </div>
        <div>
          <button onClick={this.nextRound.bind(this)}>Следующий раунд</button>
        </div>
      </div>
    );
  }
}

export default App;
