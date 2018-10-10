import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../components/style.css';
import * as actions from '../actions/actions';
// import stores from '../reducers/reducer.js';

const mapStateToProps = store => {
  subcategories = store.banks.subcategories
};

const mapDispatchToProps = dispatch => ({
  addQuestion: question => dispatch(actions.addQuestion(question)),
  addSubcategories: question => dispatch(actions.addSubcategories(question)),
});

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.addQuestion = this.addQuestion.bind(this);
    this.addSubcategories = this.addSubcategories.bind(this);
  }

  addQuestion() {
    //testing purpose
    this.props.addQuestion('hello hello');
  }

  addSubcategories() {
    //testing purpose
    this.props.addSubcategories('subcategories');
  }

  render() {
    console.log(this.props.subcategories);
    const displaySubcat = [];
    // const populate = this.props.subcategories.map((subCatObj,i)=> {
    //   displaySubcat.push(<div key={i}>subCatObj</div>)
    // });
    return (
      <div id="sidebar-container">
        Hello from SideBAr

        <button onClick={this.addQuestion}>addquestion</button>
        <button onClick={this.addSubcategories}>subcategories</button>
        {/* {populate} */}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
