import React from 'react';
import BirdsItem from './birdsItem';

class BirdsList extends React.Component {
  render() {
    return (
      <ul>
        { this.props.birdsData.map((item, index) => {
          return <BirdsItem birdsItem={item} key={item.id} index={index} />
        }) }
      </ul>
    );
  }
}

export default BirdsList;