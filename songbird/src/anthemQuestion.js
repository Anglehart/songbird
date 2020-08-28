import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import defaultFlag from '../src/assets/flag_default.jpg';

class AnthemQuestion extends React.Component {
  render(props) {
    const userChoice = this.props.userChoice;
    const correctItem = this.props.correctItem;
    const isWon = this.props.isWon;
    console.log(`Правильный ответ: ${this.props.correctItem.name}`);
    
    return (
      <div className="anthems-question-wrapper">
        <div >
          <img className="anthem-image" alt="Флаг по-умолчанию" src={(userChoice === correctItem.id || isWon) ? correctItem.image : defaultFlag} />
        </div>
        <div className="question-image-audio">
          <h3>{(userChoice === correctItem.id || isWon) ? correctItem.name : '********'}</h3>
          <AudioPlayer 
            customAdditionalControls = {[]}
            autoPlayAfterSrcChange = {false}
            src={!isWon ? correctItem.audio : ''}
          />
        </div>
      </div>
    ) 
  }
}

export default AnthemQuestion;