import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  subcategories: store.subcategories,
  categories: store.categories,
  selectedCategory: store.selectedCategory,
  challenges: store.challenges,
  selectedChallengeeh : store.selectedChallenge,
  selectedSubCategory: store.selectedSubCategory
});

const mapDispatchToProps = dispatch => ({
  getChallenges: challenges => dispatch(actions.getChallenges(challenges)),
  selectedChallenge: challenge => dispatch(actions.selectedChallenge(challenge))
});


class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.selectedChallenge = this.selectedChallenge.bind(this);
  }

  componentDidMount(){
    fetch('http://localhost:8080/challenges', {
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
      const challenges = data.map(challenge => {
        return {
          _id: challenge._id,
          name: challenge.name,
          subcategory_id: challenge.subcategory_id,
          problem: challenge.problem,
          solution: challenge.solution
        };
      });
    
      // Dispatch getChallenges action to reducer 
      // This will update state in reducers
      this.props.getChallenges(challenges);
    })
    .catch(err => {
      console.log('error', err);
    });
  }

  selectedChallenge(e){
    this.props.selectedChallenge(e.target.id);
  }


  render() {
    console.log('hey: ', this.props.selectedChallengeeh);
    const challenge = this.props.challenges.map(challengeObj => {
      // console.log('yay; ',challengeObj._id);
      // console.log('nay: ', this.props.selectedChallenge);
      if (Number(this.props.selectedChallengeeh) === challengeObj._id){
        console.log(challengeObj.problem);
        return(<p>{challengeObj.problem}</p>)
      }
    })

    const challenges = this.props.challenges.map(challengeObj => {
      if (Number(this.props.selectedSubCategory) === challengeObj.subcategory_id){
        return(<button id={challengeObj._id} onClick={this.selectedChallenge}>{challengeObj.name}</button>)
      }
    })

    


    return (
      <div align="center" id="main-container">
        Questions
        {challenges}

        {challenge}
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
