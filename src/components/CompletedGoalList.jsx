import React, { Component } from 'react';
import { completeGoalRef } from '../firebase';
import { connect } from 'react-redux';
import { setCompleted } from '../actions';



class CompletedGoalList extends Component {

  componentDidMount() {
    completeGoalRef.on('value', snap => {
      let completeGoals = []
      snap.forEach(completeGoal => {
        const { email, title } = completeGoal.val();
        completeGoals.push({ email, title });

      })

      this.props.setCompleted(completeGoals)
    })
  }

clearcompleteGoal () {
  completeGoalRef.set([]);
}

render() {
  console.log(this.props.completeGoals);
    return(
      <div style = {{ margin : '5px'}}>
      {
        this.props.completeGoals.map((completeGoal,index) => {
          const { email, title } = completeGoal;
        return (
        <div key = {index}>
        <strong>{title}</strong>
        <span style = {{ margin : '5px'}}> Submitted by <em>{email}</em></span>
        </div>
      )
    })
  }
  <button className = "btn btn-sm btn-primary" onClick = {() => this.clearcompleteGoal()}>Clear all</button>
      </div>

    )
  }
}


function mapStateToProps(state) {
  const { completeGoals } = state;
  return {
    completeGoals
  }
}

export default  connect(mapStateToProps, { setCompleted })(CompletedGoalList);
