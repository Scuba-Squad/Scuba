import React, { Component } from 'react';
import SideBar from './../containers/SideBar.jsx';
import MainContainer from './MainContainer.jsx';
import SubBar from './../containers/SubBar.jsx';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div id="app-container">
        <SideBar />
        <SubBar />
        <MainContainer />
      </div>
    );
  }
}
export default App;
