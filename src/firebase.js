import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCUGqthAx1Yn6WmOH_iM_mSe_rt-RqvthA',
	authDomain: 'hatchways-frontend.firebaseapp.com',
	projectId: 'hatchways-frontend',
	storageBucket: 'hatchways-frontend.appspot.com',
	messagingSenderId: '681752486278',
	appId: '1:681752486278:web:363b5070c6d8a409830c07',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
