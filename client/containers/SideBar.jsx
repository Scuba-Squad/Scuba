import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../components/style.css';
import * as actions from '../actions/actions';
// import stores from '../reducers/reducer.js';

const mapStateToProps = store => ({
  subcategories: store.subcategories,
  categories: store.categories
});

const mapDispatchToProps = dispatch => ({
  addQuestion: question => dispatch(actions.addQuestion(question)),
  addSubcategories: question => dispatch(actions.addSubcategories(question))
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
    const populateSubcategories = this.props.subcategories.map((subCatObj, index) => {
      return <div key={index}>{subCatObj}</div>;
    });
    const populateCategories = this.props.categories.map((catObj, index) => {
      return <div key={index}>{catObj}</div>;
    })
    return (
      <div id="sidebar-container">
        Hello from SideBAr
        <button onClick={this.addQuestion}>addquestion</button>
        {populateCategories}
        <button onClick={this.addSubcategories}>subcategories</button>
        {populateSubcategories}
      </div>
    );

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
