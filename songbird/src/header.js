import React from 'react';

class Header extends React.Component {
  render() {
    return(
      <header>
        <div className="logo-score">
          <div className="logo"></div>
          <h5>Очки: <span className="score">{this.props.score}</span></h5>
        </div>
        <ul className="menu">
          <li className={(this.props.round === 1) ? 'menu-item-active' : 'menu-item'}>СНГ</li>
          <li className={(this.props.round === 2) ? 'menu-item-active' : 'menu-item'}>Европа</li>
          <li className={(this.props.round === 3) ? 'menu-item-active' : 'menu-item'}>Азия</li>
          <li className={(this.props.round === 4) ? 'menu-item-active' : 'menu-item'}>Африка</li>
          <li className={(this.props.round === 5) ? 'menu-item-active' : 'menu-item'}>Америка</li>
          <li className={(this.props.round === 6) ? 'menu-item-active' : 'menu-item'}>Океания</li>
        </ul>
      </header>
    )
  }
}

export default Header;