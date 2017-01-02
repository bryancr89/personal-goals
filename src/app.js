import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

import Navigation from './components/navigation/navigation';

class App extends React.Component {
  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
        <Navigation/>

        <main className="mdl-layout__content">
          <div className="page-content">
            {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;