import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDBWYbhE5TYVVg5iTPyFt4ShA4-UYcwMLc",
  authDomain: "cardgame-6ef2a.firebaseapp.com",
  projectId: "cardgame-6ef2a",
  storageBucket: "cardgame-6ef2a.appspot.com",
  messagingSenderId: "647331028301",
  appId: "1:647331028301:web:f839702eae7968f9b22b04"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectAuth = firebase.auth()

export { projectAuth }