import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Header/Navigation';
import Jumbo from './components/Header/Jumbo';
import Bread from './components/Header/Bread';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Navigation /> */}
        <Bread />
        <Jumbo />
      </div>
    );
  }
}

export default App;
