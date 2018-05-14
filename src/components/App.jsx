import React, { Component} from 'react';
import { firebaseApp } from '../firebase';
import { connect } from 'react-redux';
import  AddGoal from './AddGoal';
import  GoalList from './GoalList';
import CompletedGoalList from './CompletedGoalList';

class App extends Component {
  signOut() {
firebaseApp.auth().signOut();
  }
  render() {
    return (
      <div style = {{margin: '5px'}}>
      <h3>Goal Coach</h3>
      <AddGoal/>
      <hr/>
      <h4>Goals</h4>
      <GoalList/>
      <hr/>
      <h4>Completed Goals</h4>
      <CompletedGoalList/>
      <hr/>
      <button className = "btn btn-danger" onClick ={()=> this.signOut()}>Sign out</button>

            </div>
    )
  }
}

function mapStateToProps(state) {
  //console.log(state);
  return {}
}

export default  connect(mapStateToProps, null)(App);
