import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

class AnthemInfo extends React.Component {  
  Intro() {
    return (
      <div className="anthem-info-wrapper">
        <div className="anthem-info">
          <p>Послушайте плеер.<br />Выберите страну из списка.</p>
        </div>
      </div>
    );
  }
  
  render(props) {
    const userChoice = this.props.userChoice - 1;
    const data = this.props.anthemsData;
    if (userChoice < 0) return <this.Intro />
    
    return (
      <div className="anthem-info-wrapper">
        <div className="anthem-info">
          <img className="anthem-image" alt={data[userChoice].name} src={data[userChoice].image} />
          <div className="anthem-name">
            <h4>{data[userChoice].name}</h4>
            <p>{data[userChoice].species}</p>
            <AudioPlayer 
              customAdditionalControls = {[]}
              autoPlayAfterSrcChange = {false}
              src={data[userChoice].audio} 
            />
          </div>  
        </div>
        <div className="anthem-description">
          <p>{data[userChoice].description}</p>
        </div>
      </div>
    ) 
  }
}

export default AnthemInfo;