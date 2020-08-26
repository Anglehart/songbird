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
          <li className="menu-item menu-item-active">Разминка</li>
          <li className="menu-item">Воробьиные</li>
          <li className="menu-item">Лесные птицы</li>
          <li className="menu-item">Певчие птицы</li>
          <li className="menu-item">Хищные птицы</li>
          <li className="menu-item">Морские птицы</li>
        </ul>
      </header>
    )
  }
}

export default Header;