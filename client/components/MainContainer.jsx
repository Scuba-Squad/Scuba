import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  subcategories: store.subcategories,
  categories: store.categories,
  selectedCategory: store.selectedCategory
});

const mapDispatchToProps = dispatch => ({
  getSubCategories: subcategories =>
    dispatch(actions.getSubCategories(subcategories))
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
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
        const subCategories = data.map(subcategory => {
          return {
            _id: subcategory._id,
            name: subcategory.name,
            category_id: subcategory.category_id
          };
        });

        this.props.getSubCategories(subCategories);
      })
      .catch(err => {
        console.log('error', err);
      });
  }

  // const populateSubcategories = []
  // for (let data in this.props.subcategories) {
  //   populateSubcategories.push(
  //     <button className={this.props.subcategories[data].category_id}
  //       key={this.props.subcategories[data].subcategory_id}
  //       id={this.subcategory}
  //       onClick={this.clickedCategory}>{this.props.subcategories[data].name}</button>)
  // }

  render() {
    let buttonText = []
    const buttonCategory = this.props.categories[this.props.selectedCategory - 1]
    if (buttonCategory) {
      buttonText = buttonCategory.name
    }
    let populateSubcategory = [];
    for (let key in this.props.subcategories) {
      populateSubcategory.push(<p>{this.props.subcategories[key].name}</p>)
    }

    return (
      <div id="main-container">
        This is the Main Container
        <button>{buttonText}</button>
        <div>{populateSubcategory}</div>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
