import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../components/style.css';
import * as actions from '../actions/actions';
// import stores from '../reducers/reducer.js';



const mapStateToProps = store => ({
  subcategories: store.subcategories,
  categories: store.categories,
  selectedCategory: store.selectedCategory
});

const mapDispatchToProps = dispatch => ({
  getSubCategories: subcategories =>
    dispatch(actions.getSubCategories(subcategories))
});



class SubBar extends Component {
  constructor(props) {
    super(props);

    this.clickedCategory = this.clickedCategory.bind(this);
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

  clickedCategory(e) {
    this.props.clickedCategory(e.target.id);
  }

  render() {
    let buttonText = []
    const buttonCategory = this.props.categories[this.props.selectedCategory - 1]
    if (buttonCategory) {
      buttonText = buttonCategory.name
    }
    let populateSubcategory = [];
    for (let key in this.props.subcategories) {
      populateSubcategory.push(<button key={key}>{this.props.subcategories[key].name}</button>)
    }
    return (
      <div id="subbar-container">
        This is the SuBBar Container
      <button>{buttonText}</button>
        <div>{populateSubcategory}</div>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubBar);
