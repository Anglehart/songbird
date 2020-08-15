import React from 'react';
import BirdsItem from './birdsItem';

class BirdsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userChoice: 0,
    };
  }
  
  handleClick(id) {
    if(id !== this.props.correctId) {
      console.log(false);
    }  
  }
  
  render() {
    return (
      <div className="birds-list-wrapper">
        <ul className="birds-list">
          { this.props.birdsData.map((item, index) => {
            return <BirdsItem birdsItem={item} key={item.id} index={index} onClick={() => this.handleClick(item.id)} />
          }) }
        </ul>
      </div>
    );
  }
}

export default BirdsList;