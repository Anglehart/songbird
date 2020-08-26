import React from 'react';

class AnthemsItem extends React.Component {
  render() {
    let classes = 'li-btn';
    if (this.props.anthemsItem.correctClick === 0) {
      classes = 'li-btn li-btn-correct';
    } else if(this.props.anthemsItem.correctClick === 1) {
      classes = 'li-btn li-btn-wrong';
    }
      
    return (
      <li 
        className="anthems-item" 
        onClick={this.props.onClick}
      >
        <span className={classes}></span>
        {this.props.anthemsItem.name}
      </li>
    )
  }
}

export default AnthemsItem;