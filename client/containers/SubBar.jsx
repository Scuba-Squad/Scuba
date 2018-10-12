import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../components/style.css';
import * as actions from '../actions/actions';
// import stores from '../reducers/reducer.js';


// Where you read from store
const mapStateToProps = store => ({
  subcategories: store.subcategories,
  categories: store.categories,
  selectedCategory: store.selectedCategory,
  selectedSubCategory: store.selectedSubCategory
});

// Where you update store
const mapDispatchToProps = dispatch => ({
  getSubCategories: subcategories => dispatch(actions.getSubCategories(subcategories)),
  clickedSubCategory: subcategory => dispatch(actions.clickedSubCategory(subcategory)) 
});

class SubBar extends Component {
  constructor(props) {
    super(props);

    this.clickedSubCategory = this.clickedSubCategory.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8080/subCategories', {
      method: 'GET'
    })
      .then(response => {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        const subCategories = data.map(subcategory => {
          return {
            _id: subcategory._id,
            name: subcategory.name,
            category_id: subcategory.category_id
          };
        });
      
        // Dispatch getSubCategories action to reducer 
        // This will update state in reducers
        this.props.getSubCategories(subCategories);
      })
      .catch(err => {
        console.log('error', err);
      });
  }

  clickedSubCategory(event) {
    this.props.clickedSubCategory(event.target.id);
    console.log("testing!!!", event.target.id);
  }

  render() {
    const subCats = this.props.subcategories.map((subcategory, index) => {
      if(subcategory.category_id === Number(this.props.selectedCategory)){
        // <button key={index} id={catObj._id} onClick={this.clickedCategory}>
        return (<button key={index} id={subcategory._id} onClick={this.clickedSubCategory}>{subcategory.name}</button>)
      }
    })
    
    return (
      <div align="center" id="subbar-container">
        Sub-Categories
        <div>{subCats}</div>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubBar);
