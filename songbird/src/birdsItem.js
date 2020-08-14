import React from 'react';

class BirdsItem extends React.Component {
  render() {
    return (
      <li className="birds-item">
        <span className="li-btn"></span>
        {this.props.birdsItem.name}
      </li>
    )
  }
}

export default BirdsItem;