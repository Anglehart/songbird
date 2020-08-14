import React from 'react';

class BirdsItem extends React.Component {
  render() {
    return (
      <li>{this.props.birdsItem.name}</li>
    )
  }
}

export default BirdsItem;