import React, { Component } from 'react';
import SideBar from './../containers/SideBar.jsx';
import MainContainer from './MainContainer.jsx';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='app-container'>
        Scuba-squad
        <SideBar />
        <MainContainer />
      </div>
    )
  }
}
export default App;