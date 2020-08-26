import React from 'react';
import AnthemsItem from './anthemsItem';

class AnthemsList extends React.Component { 
  render() {
    return (
      <div className="anthems-list-wrapper">
        <ul className="anthems-list">
          { this.props.anthemsData.map((item, index) => {
            return <AnthemsItem 
              anthemsItem={item} 
              key={item.id} 
              index={index} 
              onClick={() => this.props.onChoice(item.id)}
              isCorrect={(this.props.correctId === item.id) ? true : false}
              isWon={this.props.isWon}
            />
          }) }
        </ul>
      </div>
    );
  }
}

export default AnthemsList;