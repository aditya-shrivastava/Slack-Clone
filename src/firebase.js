import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyAaGxZP_FGxV7BuUToycK1gB4odRjZYRMg',
	authDomain: 'slack-clone-2231f.firebaseapp.com',
	projectId: 'slack-clone-2231f',
	storageBucket: 'slack-clone-2231f.appspot.com',
	messagingSenderId: '438687730264',
	appId: '1:438687730264:web:ab421499f95879d652582d',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
