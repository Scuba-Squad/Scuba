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
  addSubcategories: question => dispatch(actions.addSubcategories(question)),
  clickedCategory: category => dispatch(actions.clickedCategory(category))
});

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.addQuestion = this.addQuestion.bind(this);
    this.addSubcategories = this.addSubcategories.bind(this);
    this.clickedCategory = this.clickedCategory.bind(this)
  }

  addQuestion(e) {
    //testing purpose
    this.props.addQuestion('hello hello');
  }

  addSubcategories(e) {
    //testing purpose
    this.props.addSubcategories('subcategories');
  }

  clickedCategory(e) {
    this.props.clickedCategory(e.target.id)
  }

  render() {
    // const populateSubcategories = this.props.subcategories.map((subCatObj, index) => {
    //   //console.log('1', this.props.subcategories[index])
    //   return <div key={index}><button>{subCatObj[index]}</button></div>;
    // });

    // const populateSubcategories = []
    // for (let data in this.props.subcategories) {
    //   populateSubcategories.push(
    //     <button className={this.props.subcategories[data].category_id}
    //       key={this.props.subcategories[data].subcategory_id}
    //       id={this.subcategory}
    //       onClick={this.clickedCategory}>{this.props.subcategories[data].name}</button>)
    // }
    const populateCategories = this.props.categories.map((catObj, index) => {
      console.log(catObj)
      // return <div key={index} id={catObj._id} onClick={this.clickedCategory}><button>{catObj.name}</button></div>;
      return <button key={index} id={catObj._id} onClick={this.clickedCategory}>{catObj.name}</button>;
    })
    return (
      <div id="sidebar-container">
        Hello from SideBar
        <button onClick={this.clickedCategory}>Categories</button>
        {populateCategories}
        { /* <button onClick={this.addSubcategories}>SubCategories</button>
        {populateSubcategories} */}
      </div>
    );

  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
