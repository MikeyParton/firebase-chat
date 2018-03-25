import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBtbu2c4Pwxpknta-8MMeb1pCDn6osNEx0",
  authDomain: "toy-chat.firebaseapp.com",
  databaseURL: "https://toy-chat.firebaseio.com",
  projectId: "toy-chat",
  storageBucket: "toy-chat.appspot.com",
  messagingSenderId: "171073444580"
}

// initialize firebase instance
firebase.initializeApp(firebaseConfig)

export default firebase
export const database = firebase.database()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
