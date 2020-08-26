import React from 'react';

class AnthemsItem extends React.Component {
  constructor(props) {
    super(props);
    this.liClass = 'li-btn';
  }
  
  isCorrect() {
    if (this.props.isCorrect && !this.props.isWon) {
      this.liClass = 'li-btn-correct';
    }
    if (!this.props.isCorrect && !this.props.isWon) {
      this.liClass = 'li-btn-wrong';
    }
    
    this.props.onClick();
  }
  
  render() {
    return (
      <li 
        className="anthems-item" 
        onClick={() => this.isCorrect()}
      >
        <span className={this.liClass}></span>
        {this.props.anthemsItem.name}
      </li>
    )
  }
}

export default AnthemsItem;