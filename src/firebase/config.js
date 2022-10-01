import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCHnUIxh5roXNBD7DvgGnpgMievKM7CXlk',
  authDomain: 'conor-cookery-e6b8e.firebaseapp.com',
  projectId: 'conor-cookery-e6b8e',
  storageBucket: 'conor-cookery-e6b8e.appspot.com',
  messagingSenderId: '232945400709',
  appId: '1:232945400709:web:d6950c2f31bda7de36e2ec'
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }
