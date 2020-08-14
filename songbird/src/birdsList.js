import React from 'react';
import BirdsItem from './birdsItem';

class BirdsList extends React.Component {
  render() {
    return (
      <div className="birds-list-wrapper">
        <ul className="birds-list">
          { this.props.birdsData.map((item, index) => {
            return <BirdsItem birdsItem={item} key={item.id} index={index} />
          }) }
        </ul>
      </div>
    );
  }
}

export default BirdsList;