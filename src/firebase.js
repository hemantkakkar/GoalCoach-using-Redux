import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD1cgEzNGR4sgLs1Y-dqaCtmWmHoGC2I64",
    authDomain: "goalcoach-f2b30.firebaseapp.com",
    databaseURL: "https://goalcoach-f2b30.firebaseio.com",
    projectId: "goalcoach-f2b30",
    storageBucket: "",
    messagingSenderId: "96876629239"
  };


export const firebaseApp =firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals')
