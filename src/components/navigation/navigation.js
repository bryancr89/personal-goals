import React from 'react';
import {Link} from 'react-router';

const Navigation = () => {
  return (
    <div>
      <header className="mdl-layout__header mdl-layout__header--waterfall">
        <div className="mdl-layout__header-row">
          <span className="mdl-layout-title">Personal Goals!</span>
          <div className="mdl-layout-spacer"></div>
          <nav className="mdl-navigation">
            <Link to="/login" className="mdl-navigation__link">login</Link>
            <Link to="/register" className="mdl-navigation__link">Register</Link>
          </nav>
        </div>

        <div className="mdl-layout__header-row">
          <div className="mdl-layout-spacer"></div>

          
        </div>
      </header>
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Title</span>
        <nav className="mdl-navigation">
          <Link to="/login" className="mdl-navigation__link">login1</Link>
          <Link to="/fuel-savings" className="mdl-navigation__link">Demo App</Link>
          <Link to="/movies" className="mdl-navigation__link">Movies</Link>
          <Link to="/about" className="mdl-navigation__link">About</Link>
        </nav>
      </div>
    </div>
  );
};

export default Navigation;