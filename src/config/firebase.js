import firebase from 'firebase';

var firebaseConfig = {
	apiKey: 'AIzaSyA5M-l4atm7qKzVucjTfECUzB4-JCf1dTc',
	authDomain: 'abasys-b222b.firebaseapp.com',
	databaseURL: 'https://abasys-b222b.firebaseio.com',
	projectId: 'abasys-b222b',
	storageBucket: 'abasys-b222b.appspot.com',
	messagingSenderId: '649381024453',
	appId: '1:649381024453:web:48c541cc3f602c6f0fd6ac',
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
