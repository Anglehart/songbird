import React from 'react';

function BirdsItem(props) {
  return (
    <li 
      className="birds-item" 
      onClick={props.onClick}
    >
      <span className="li-btn"></span>
      {props.birdsItem.name}
    </li>
  )
}

export default BirdsItem;