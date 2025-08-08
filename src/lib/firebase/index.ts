// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAyfGid75yfUP3SSkhwF4wyTZ774bfFxAM',
	authDomain: 'devconnect-19a29.firebaseapp.com',
	projectId: 'devconnect-19a29',
	storageBucket: 'devconnect-19a29.firebasestorage.app',
	messagingSenderId: '543057797918',
	appId: '1:543057797918:web:df049a699d0a506e4a5f0f',
	measurementId: 'G-4259CW36CP',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
