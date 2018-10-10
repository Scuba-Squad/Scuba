import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';



const mapStateToProps = store => ({
  subcategories: store.subcategories,
  categories: store.categories,
  selectedCategory: store.selectedCategory
});


class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("ness", this.props.categories[this.props.selectedCategory])
    return <div id="main-container">this is the main container</div>;
  }
}
export default connect(mapStateToProps)(MainContainer);