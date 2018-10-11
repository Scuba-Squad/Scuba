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
        console.log(data);
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

  render() {
    console.log('ness', this.props.categories[this.props.selectedCategory]);
    return (
      <div id="main-container">
        this is the main container
        <button>Testing</button>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
