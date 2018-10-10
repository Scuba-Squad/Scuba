import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../components/style.css';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  categories: store.categories
});

const mapDispatchToProps = dispatch => ({
  addQuestion: question => dispatch(actions.addQuestion(question)),
  getCategories: categories => dispatch(actions.getCategories(categories))
});

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.addQuestion = this.addQuestion.bind(this);
    this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8080/categories', {
      method: 'GET'
    })
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error('Bad response from server');
        }
        return response.json();
      })
      .then(function(data) {
        // this.getCategories(data);
        console.log(data);
        const categories = data.map(category => {
          return { name: category.name, _id: category._id };
        });
        console.log(categories);

        this.getCategories(data);
      })
      .catch(err => {
        console.log('error', err);
      });
  }

  getCategories(data) {
    const categories = data.map(category => {
      return { name: data.name, _id: data._id };
    });
    console.log('categories: ', categories);
    // this.props.getCategories(data);
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
