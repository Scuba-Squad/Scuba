import React, { Component } from 'react';
import SideBar from './../containers/SideBar.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        Scuba-squad
        <SideBar />
      </div>
    )
  }
}
export default App;