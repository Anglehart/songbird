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
    this.ROUNDS = anthemsData.length - 1;
    this.state = {
      currentRound: 0,
      correctId: 0,
      userChoice: 0,
      isWon: false,
      roundScore: this.ROUNDS,
      totalScore: 0,
      endGame: 0,
    };
    this.correctId = this.getRandomNumber(anthemsData[this.state.currentRound].length);
  }
  
  getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }
  
  handleClick = (id) => {
    this.setState({userChoice: id});
    if(!this.state.isWon && anthemsData[this.state.currentRound][id - 1].correctClick === undefined) {  
      if (id === this.correctId) {
        anthemsData[this.state.currentRound][id - 1].correctClick = 0;
        this.setState({totalScore: this.state.totalScore + this.state.roundScore});
        this.setState({isWon: true});
        new Audio('https://soundslibmp3.ru/sounds/1594805207_idea-3.mp3').play();
      } else {
        anthemsData[this.state.currentRound][id - 1].correctClick = 1;
        this.setState({roundScore: this.state.roundScore - 1});
        new Audio('https://soundslibmp3.ru/sounds/1516816712_15.wav').play();
      }
    }
  }
  
  nextRound() {
    this.correctId = this.getRandomNumber(anthemsData[this.state.currentRound].length);
    this.setState({roundScore: this.ROUNDS});
    this.setState({isWon: false});
    this.setState({userChoice: 0});
    if (this.state.currentRound === this.ROUNDS) {
      this.setState({currentRound: 0});
      anthemsData.forEach((item) => {
        item.forEach((q) => q.correctClick = undefined);
      });
      this.setState({endGame: 1});
    } else {
      this.setState({currentRound: this.state.currentRound + 1});
    }
  }
  endGame() {
    this.setState({endGame: 0});
    this.setState({totalScore: 0});
  }
  
  render() {
    const userChoice = this.state.userChoice;
    return (
      <div className="wrapper">
        <Header score={this.state.totalScore} round={this.state.currentRound + 1}/>
        <div className={this.state.endGame ? "hide" : "first-row"}>
          <AnthemQuestion 
            correctItem={anthemsData[this.state.currentRound][this.correctId - 1]} 
            userChoice={userChoice} 
            isWon={this.state.isWon} 
          />
        </div>
        <div className={this.state.endGame ? "hide" : "second-row"}>
          <AnthemsList 
            anthemsData={anthemsData[this.state.currentRound]} 
            onChoice={this.handleClick} 
            correctId={this.state.correctId} 
            isWon={this.state.isWon}
          />
          <AnthemInfo 
            anthemsData={anthemsData[this.state.currentRound]} 
            userChoice={userChoice} 
          />
        </div>
        <div className={this.state.endGame ? "hide" : ""}>
          <button 
            className={this.state.isWon ? 'next-btn next-btn-active' : 'next-btn'} 
            disabled={!this.state.isWon} 
            onClick={this.nextRound.bind(this)}
          >Следующий раунд</button>
        </div>
        
        <div className={this.state.endGame ? "final-block" : "hide"}>
          <h1>Поздравляем!</h1>
          <p>Вы прошли викторину и набрали {this.state.totalScore} из 30 возможных баллов.</p>
          <div className={(this.state.totalScore === 30) ? "cake" : "hide"}>
            <p>Абсолютная победа! Специально для тех, кто умеет пользоваться консолью, я "приготовил" торт.</p>
            <img alt="Тортик" src="https://i1.theportalwiki.net/img/thumb/0/0a/Portal_Cake.png/200px-Portal_Cake.png" />
            <p className="lie">The Cake is a lie</p>
          </div>
          <button 
            className='next-btn final-btn'
            onClick={this.endGame.bind(this)}
          >Начать сначала</button>
        </div>
      </div>
    );
  }
}

export default App;
