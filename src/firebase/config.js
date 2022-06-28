import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 
  authDomain: 
  projectId: 
  storageBucket: 
  messagingSenderId: 
  appId:
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectAuth = firebase.auth()

export { projectAuth }
