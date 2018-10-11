import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../components/style.css';
import * as actions from '../actions/actions';
// import stores from '../reducers/reducer.js';

const mapStateToProps = store => ({
  categories: store.categories
});

const mapDispatchToProps = dispatch => ({
  clickedCategory: category => dispatch(actions.clickedCategory(category)),
  getCategories: categories => dispatch(actions.getCategories(categories))
});

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.clickedCategory = this.clickedCategory.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8080/categories', {
      method: 'GET'
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(data => {
        const categories = data.map(category => {
          return { name: category.name, _id: category._id };
        });

        this.props.getCategories(data);
      })
      .catch(err => {
        console.log('error', err);
      });
  }

  clickedCategory(e) {
    console.log("e", e.target)
    this.props.clickedCategory(e.target.id);
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
      console.log("catObj", catObj);
      // return <div key={index} id={catObj._id} onClick={this.clickedCategory}><button>{catObj.name}</button></div>;
      return (
        <button key={index} id={catObj._id} onClick={this.clickedCategory}>
          {catObj.name}
        </button>
      );
    });
    return (
      <div id="sidebar-container">
        Category
        <button onClick={this.clickedCategory}>Categories</button>
        {populateCategories}
        {/* <button onClick={this.addSubcategories}>SubCategories</button>
        {populateSubcategories} */}
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
