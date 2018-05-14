import React from 'react';
import ReactDOM from 'react-dom';
import { firebaseApp } from './firebase';
import { Router, Route, browserHistory }  from 'react-router';
import { logUser } from './actions';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
    //console.log('user has signed in or up', user);
    const { email } = user;
    store.dispatch(logUser(email));
    browserHistory.push('/app');
  }
  else {
    //console.log('user has signed out or still needs to sign in.');
    browserHistory.replace('/signin');
  }
})

ReactDOM.render(<Provider store = {store}><Router path ="/" history = {browserHistory}>
          <Route path = "/app" component ={App} />
          <Route path ="/signin" component ={SignIn} />
          <Route path = "/signup" component = {SignUp}/>
          </Router></Provider>, document.getElementById('root'));
