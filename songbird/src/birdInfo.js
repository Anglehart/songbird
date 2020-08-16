import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

class BirdInfo extends React.Component {  
  Intro(props) {
    return (
      <div className="bird-info-wrapper">
        <div className="bird-info">
          <p>Послушайте плеер.</p>
          <p>Выберите птицу из списка</p>
        </div>
      </div>
    );
  }
  
  render(props) {
    const userChoice = this.props.userChoice - 1;
    const data = this.props.birdsData;
    if (userChoice < 0) {
      return <this.Intro />
    } 
    return (
      <div className="bird-info-wrapper">
        <div className="bird-info">
          <img className="bird-image" alt={data[userChoice].name} src={data[userChoice].image} />
          <div className="bird-name">
            <h4>{data[userChoice].name}</h4>
            <p>{data[userChoice].species}</p>
            <AudioPlayer 
              customAdditionalControls = {[]}
              autoPlayAfterSrcChange = {false}
              src={data[userChoice].audio} 
            />
          </div>  
        </div>
        <div className="bird-description">
          <p>{data[userChoice].description}</p>
        </div>
      </div>
    ) 
  }
}

export default BirdInfo;