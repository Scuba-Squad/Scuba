import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../components/style.css';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({});

const mapDispatchToProps = dispatch => ({
  addQuestion: question => dispatch(actions.addQuestion(question))
});

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.addQuestion = this.addQuestion.bind(this);
  }

  addQuestion() {
    //testing purpose
    this.props.addQuestion('hello hello');
  }

  render() {
    return (
      <div id="sidebar-container">
        Hello from SideBAr
        <button onClick={this.addQuestion}>Click Me</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
